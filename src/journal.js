export function entryCount(body) {
  var words =  body.trim().split(" ");
  return words.length;
}

export function vowelCount(body) {
  var counter = 0;
  var vovel = "eyuioa";
  for (var i = 0; i < body.length; i++)
  {
    if(vovel.includes(body.charAt(i).toLowerCase()))
    {
      counter++;
    }
  }
  return counter;
}
