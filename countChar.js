function duplicateCount (str) {
  var final = '';
  // var strLength = str?.length;
  // if (strLength) {
  //   console.log(str.length)  ;
  // }
  for (let i = 0; i < str.length; i++) {
    var count = 1;

    while (i + 1 < str.length && str[i] == str[i + 1]) {
      i++;
      count++;
    }
    count == 1 ? final += str[i] : final += str[i] + count ;
  }
  console.log(final);
}

duplicateCount("aee");
