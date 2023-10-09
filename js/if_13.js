var son1 = prompt('birinchi sonni kiriting; ');
var son2 = prompt('ikkinchi sonni kiriting; ');
var son3 = prompt('uchinchi sonni kiriting; ');

var ortacha;

if (son1 <= son2 && son1 <= son3) {
    if (son2 <= son3) {
        ortacha = son2;
    } else {
        ortacha = son3;
    }
} else if (son2 <= son1 && son2 <= son3) {
    if (son1 <= son3) {
        ortacha = son1;
    } else {
        ortacha = son3;
    }
} else {
    if (son1 <= son2) {
        ortacha = son1;
    } else {
        ortacha = son2;
    }
}

document.write("Ortacha qiymat: " + ortacha);


