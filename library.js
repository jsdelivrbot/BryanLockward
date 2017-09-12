var _ =
{
  map: function(array, callback)
  {
    for (var i = 0; i < array.length; i++)
    {
      array[i] = callback(array[i]);
    }
  },
  reduce: function(array, callback, memo)
  {
    var count = 0;
    if (!memo)
    {
      memo = array[0];
      count++;
    }
    for (var i = count; i < array.length; i++)
    {
      memo = callback(array[i], memo);
    }
    return memo;

  },
  find: function(array, callback)
  {
    for (var i = 0; i < array.length; i++)
    {
      if (callback(array[i]))
      {
        return "It's in there!";
      }
    }
  },
  filter: function(array, callback)
  {
    var holder =[];
    for (var i = 0; i < array.length; i++)
    {
      if (callback(array[i]))
      {
        holder.push(array[i]);
      }
    }
    return holder;
  },
  reject: function(array, callback)
  {
    var holder =[];
    for (var i = 0; i < array.length; i++)
    {
      if (!callback(array[i]))
      {
        holder.push(array[i]);
      }
    }
    return holder;
  },
}

var array = [1,2,3,4,5]
_.map(array, function callback(x){return x * 3;});
console.log(array);
console.log(_.reduce(array, function callback2(x, memo){return x + memo;}));
console.log(array);
console.log(_.find(array, function callback3(x){return x == 12;}));
console.log(_.filter(array, function callback4(x){return x < 13;}))
console.log(_.reject(array, function callback5(x){return x==9}))
