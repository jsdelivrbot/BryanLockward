var mongoose = require('mongoose');
    User = mongoose.model('User');

module.exports = {
    main: function(req, res){
        res.render('index', { errors: false });
    },

    login: function(req, res){
        User.findOne({
            email: req.body.email
        }, function (err, user) {

            let error_context = {
                errors: {
                    login: {
                        message: "User name or password is invalid",
                    }
                }
            }

            if (err) {
                return res.render('index', error_context);
            }

            if (!user) {
                return res.render('index', error_context);
            }
            if (!bcrypt.compareSync(req.body.password, user.password)) {
                return res.render('index', error_context);
            }

            return res.json(user);

        })
    },

    register: function(req, res){
        if (req.body.password != req.body.password_confirm){
            var pass_err = {
                errors: {
                    password: {
                        message: "Passwords must match"
                    }
                }
            }
        return res.render('index', pass_err);
        }
        console.log(req.body)
        var user = new User(req.body);

        user.save(function(err, user){
            if (err){
                if(err.errors){
                    return res.render('index',err);
                }
            return res.render('index', {errors : err});
            }
        return res.json(user);
        })
    }

}
