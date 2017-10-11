var mongoose = require('mongoose');
    bcrypt = require('bcrypt');
    SALT_WORK_FACTOR = 10;

var UserSchema = new mongoose.Schema({
    first_name: ({type: String, required: true}),
    last_name: ({type: String, required: true}),
    email: ({type: String, unique: true, required: true}),
    password: ({type: String, required: true}),
    birthday: ({type: Date, required: true})
}, {timestamps:
    {createdAt: 'created_at',
     updatedAt: 'updated_at'
    }
});

UserSchema.pre('save', function(next) {
    var user = this;

    if (!user.isModified('password'))
      return next();

    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err)
          return next(err);

        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err)
              return next(err);

            user.password = hash;
            next();
        });
    });
});

UserSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};


mongoose.model('User', UserSchema);
