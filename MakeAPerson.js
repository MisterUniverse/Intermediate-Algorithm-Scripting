var Person = function(firstAndLast) {
  // Complete the method below and implement the others similarly
  const arr = firstAndLast.split(' ');
  this.getFullName = function() {
    return `${arr[0]} ${arr[1]}`;
  };
  this.getFirstName = () => {
    return arr[0];
  }

  this.getLastName = () => {
    return arr[1];
  }

  this.setFirstName = (first) => {
    arr[0] = first;
  }

  this.setLastName = (last) => {
    arr[1] = last;
  }

  this.setFullName = (firstAndLast) => {
    let split = firstAndLast.split(' ');
    this.setFirstName(split[0]);
    this.setLastName(split[1]);
  }
  return firstAndLast;
};

var bob = new Person('Bob Ross');
bob.getFullName();
