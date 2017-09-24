function fib()
{
  var count=0;
  var num=1;
  function nacci()
  {
    console.log(num);
    var holder=num;
    num=num+count;
    count=holder;


  }
  return nacci;
}
var counter=fib();
counter();
counter();
counter();
counter();
