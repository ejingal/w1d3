function charPositioning (stringPhrase){
var charPosition = {}
  var splitString = stringPhrase.replace(/\s+/g, "").split('');
  var positions = [];

  for (var i = 0; i < splitString.length; i++){
    if(splitString[i] in charPosition){ //if the current position is a key in the charPosition
      charPosition[splitString[i]].push(i)
    }else{
      charPosition[splitString[i]] = [i];
    }
  }

  return charPosition
}

console.log(charPositioning('lighthouse in the house'));

//key - would be character
//value - would be array of positions char would appear in string

