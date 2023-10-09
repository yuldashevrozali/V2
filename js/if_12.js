let b = prompt("Birinchi sonni kiriting; ");
let s = prompt("Ikkinchi sonni kiriting; ");
let d = prompt("Uchinchi sonni kiriting; ");

s = s*1;
b = b*1;
d = d*1

if ( b < s){
    if (b < d){
        document.write("eng kichigi ",b)
    } else{
        document.write("eng kichigi ",d)
    }
} else{
    if (s < d){
        document.write("eng kichigi ",s)
    } else {
        document.write("eng kichigi ",d)
    }
};