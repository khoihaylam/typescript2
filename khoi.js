// bài 2:in bảng cửu chương typescipt
for (var i = 1; i < 11; i++) {
    for (var j = 1; j < 11; j++) {
        {
            var a = i * j;
            console.log("".concat(i, "*").concat(j, "=").concat(a));
        }
    }
}
// bai 1
function fibonassi(n) {
    if (n == 0 || n == 1) {
        return n;
    }
    else {
        return fibonassi(n - 1) + fibonassi(n - 2);
    }
}
for (var i = 0; i < 10000; i++) {
    console.log(fibonassi(i));
}
// bai 3 viet from tinh tong
var so1 = document.getElementById('so1');
var so2 = document.getElementById('so2');
var ketqua = document.getElementById("ketqua");
function tinhtong() {
    var number1 = Number(so1.value);
    var number2 = Number(so2.value);
    ketqua.innerHTML = number1 + number2;
}