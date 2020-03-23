function array (str) {
    var newStr = ``;
    for (var i=0; i<str.length;i++){
      newStr += str[i].toUpperCase() + str[i].repeat(i).toUpperCase().toLowerCase() +
      `-`;
    }
  return newStr.slice(0, newStr.length-1);
  }
console.log(array('abbccccbbbbb'));
 console.log(array('abcdefegd'));
console.log(array('aabbcc'));

