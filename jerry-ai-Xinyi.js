/**
   * Code writen by Xinyi(Alice)
   */
class RangeList {
  constructor() {
    this.rangelist = new Array();
  }

  //Error Check: Exit running if the input range is not correct.
  errorcheck(range) {
    if (range[0] > range[1]) {
      document.write('ERROR: the beginning of the range should be smaller than the end of the range.');
      System.exit(1);
    }
  }

  //Adds a range to the list
  add(range) {
    this.errorcheck(range); //Exit running if the input range is not correct
    for (var i = range[0]; i < range[1]; i++) {
      if (this.rangelist.indexOf(i) == -1) {//If the element does not exist in the current array 
        this.rangelist.push(i); //Add the number to the array
      }
    }
    this.rangelist.sort(function (a, b) {return a - b;}); //Rearrange the array in ascending order
    return `${this.rangelist}`;
  }

  //Removes a range from the list
  remove(range) {
    this.errorcheck(range); //Exit running if the input range is not correct
    for (var i = range[0]; i < range[1]; i++) {
      if (this.rangelist.indexOf(i) > -1) {//If the element exists in the current array
        this.rangelist.splice(this.rangelist.indexOf(i), 1); //Remove the number
      }
    }
    return `${this.rangelist}`;
  }

  //Prints out the list of ranges in the range list
  print() {
    var m = [];
    for (var i = 0; i < this.rangelist.length; i++) {
      if (this.rangelist[i] == this.rangelist[i + 1] - 1) {//Find the start and end positions
        //of the continuous integers
        m.push(i);
      } else
      {
        m.push(i);
        document.write('[' + this.rangelist[m[0]] + ', ' + (this.rangelist[m.pop()] + 1) + ') ');
        m = [];
      }
    }
    document.write('<br>');
  }}

/**
        * End of Xinyi(Alice)'s code
        */

// Example run
const rl = new RangeList();

rl.add([1, 5]);
rl.print();
// Should display: [1, 5)

rl.add([10, 20]);
rl.print();
// Should display: [1, 5) [10, 20)

rl.add([20, 20]);
rl.print();
// Should display: [1, 5) [10, 20)

rl.add([20, 21]);
rl.print();
// Should display: [1, 5) [10, 21)

rl.add([2, 4]);
rl.print();
// Should display: [1, 5) [10, 21)

rl.add([3, 8]);
rl.print();
// Should display: [1, 8) [10, 21)

rl.remove([10, 10]);
rl.print();
// Should display: [1, 8) [10, 21)

rl.remove([10, 11]);
rl.print();
// Should display: [1, 8) [11, 21)

rl.remove([15, 17]);
rl.print();
// Should display: [1, 8) [11, 15) [17, 21)


rl.remove([3, 19]);
rl.print();
// Should display: [1, 3) [19, 21)