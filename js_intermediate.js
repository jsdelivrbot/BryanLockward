function starString(x)
{
  var star="*"
  for(i=1;i<x;i++)
  {
    star+="*";
  }
  return star
}
function drawStar(x)
{
  for(i=0;i<x.length;i++)
  {
    if(x[i].constructor==String)
    {
      var stringArr=x[i][0].toLowerCase();
      for(index=1;index<x[i].length;index++)
      {
        stringArr+=x[i][0].toLowerCase();
      }
      console.log(stringArr);
    }
    else
    {
      var starArr="*";
      for(index=1;index<x[i];index++)
      {
        starArr+="*";
      }
      console.log(starArr);
    }
  }
}

drawStar([2,3,"Hello",4]);
