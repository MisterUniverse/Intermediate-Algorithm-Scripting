function addTogether() {
  let param = [].slice.call(arguments);

  if(!param.every((ele) => {
    return typeof ele === 'number';
  })){
    return undefined;
  }

  if (param.length === 2) {
    return param[0] + param[1];
  } else {
    let first = param[0];
    let add = (second) => {
      return addTogether(first, second);
    }
    return add;
  }
}
