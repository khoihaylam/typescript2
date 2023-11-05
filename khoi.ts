// bài 2:in bảng cửu chương typescipt
for(let i=1;i<11;i++){
    for(let j=1;j<11;j++){{
        let a=i*j
        console.log(`${i}*${j}=${a}`)
    }}
}
// bai 1
function fibonassi(n){
    if(n==0||n==1){
        return n
    }
    else{
        return fibonassi(n-1)+fibonassi(n-2)
    }
}
for(let i=0;i<10;i++){
    console.log(fibonassi(i))

let so1 = document.getElementById('so1')
let so2 = document.getElementById('so2')
let ketqua = document.getElementById("ketqua")
function tinhtong(){
    let number1 = Number(so1.value)
    let number2 = Number(so2.value)
    ketqua.innerHTML = number1 + number2
}