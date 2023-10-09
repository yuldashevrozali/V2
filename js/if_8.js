let b = prompt("Birinchi sonni kiriting; ");
let s = prompt("Ikkinchi sonni kiriting; ");

s = s*1;
b = b*1;

if (b < s){
    document.write("kottasi ", s , " kichigi ", b)
} else{
    document.write("kottasi" , b , " kichigi ", s)
};