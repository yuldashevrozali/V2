let son1 = prompt('birinchi sonni kirit; ');
let son2 = prompt('ikkinchi sonni kirit; ');
let son3 = prompt('uchinchi sonni kirit; ');
let kichik = son1;

if (son2 < kichik) {
    kichik = son2;
}

if (son3 < kichik) {
    kichik = son3;
}

let katta = son1;

if (son2 > katta) {
    katta = son2;
}

if (son3 > katta) {
    katta = son3;
}

document.write("Kichik son: " + kichik);
document.write(" Katta son: " + katta);
