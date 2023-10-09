// let b = 7.8;
// let c = 5.10222255;

// let f = b <= c;
// // console.log(f);

// let q = Math.floor(b)
// let w = Math.ceil(c)
// let e = Math.round(c)
// let r = Math.trunc(c)
// let t = Math.abs(c)
// c = c.toFixed
// let y = Math.trunc(Math.random() * 10);
// console.log(y);
let A = prompt('A ni kiriting; ');
let B = prompt('B ni kiriting; ');
let res = A;

if (A > B) {
  A = B;
  B = res;
}
document.write("A:", A );
document.write("B:", B );
