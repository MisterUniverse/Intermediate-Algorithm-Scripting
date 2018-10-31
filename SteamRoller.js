function steamrollArray(arr) {
  // I'm a steamroller, baby
  const newArr = [];
  const look = (arr) => {
    arr.forEach((item) => {
      if(!Array.isArray(item)) {
        newArr.push(item);
      } else {
        look(item);
      }
    })
  }
  look(arr);
  return newArr;
}

steamrollArray([1, [2], [3, [[4]]]]);
