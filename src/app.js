class Point {

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return '(' + this.x + ', ' + this.y + ')';
  }

}

let a = new Point(3,8);
console.log(a.toString());



// 1000ms 后success
var p1 = new Promise((resolve, reject) => {
  window.setTimeout(() => {resolve(123);}, 1000);
});
p1.then((data) => {
  console.log('p1 success', data);
});
// 2000ms 后success
var p2 = new Promise((resolve, reject) => {
  window.setTimeout(() => {resolve(456);}, 2000);
}); 
p2.then((data) => {
  console.log('p2 success', data);
});
var pa = Promise.all([p1, p2]);
var pr = Promise.race([p1, p2]);
pa.then((data) => {
  console.log('pa success', data);
});
pr.then((data) => {
  console.log('pr success', data);
});



var [x,y]=getVal(),//函数返回值的解构
    [name,,age]=['wayou','male','secrect'];//数组解构

function getVal() {
    return [ 1, 2 ];
}


var someArray = [ "a", "b", "c" ];
 
for (v of someArray) {
    console.log(v);//输出 a,b,c
}