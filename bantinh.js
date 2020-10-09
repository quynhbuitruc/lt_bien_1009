function tong() {
    let sothu1 = Number(document.getElementById("so1").value)
    let sothu2 = Number(document.getElementById("so2").value)
    let tong = sothu1 + sothu2;
    let hieu = sothu1 - sothu2;
    let tich = sothu1 * sothu2;
    let thuong = sothu1 / sothu2;
    phatngon = "Tổng 2 số là" + tổng
    document.getElementById("phatngon").innerText = tong
}
function hieu() {
    phatngon = "Hiệu 2 số là:" + hieu
    document.getElementById("phatngon").innerText = hieu
}
function tich() {
    phatngon = "Tích 2 số là:" + tich
    document.getElementById("phatngon").innerText = tich
}
function thuong() {
    phatngon = "Thương 2 số là:" + thuong
    document.getElementById("phatngon").innerText = thuong
}