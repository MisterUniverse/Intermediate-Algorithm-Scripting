function binaryAgent(str) {
  let div = str.split(' ');
  const newArr = [];
  const final = [];
  for(let i = 0; i < div.length; i++) {
    newArr.push(parseInt(div[i], 2));
    final.push(String.fromCharCode(newArr[i]))
  }
  return final.join('');
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
