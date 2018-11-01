function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  let newArr = [];

  for(let obj in arr){
    let orbital = Math.round(2 * Math.PI * Math.sqrt(Math.pow(earthRadius + arr[obj].avgAlt, 3) / GM));
    delete arr[obj].avgAlt;
    arr[obj].orbitalPeriod = orbital;
  }; 
  return arr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
