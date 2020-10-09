function tong() {
    let sothu1 = Number(document.getElementById("so1").value)
    let sothu2 = Number(document.getElementById("so2").value)
    let tong = sothu1 + sothu2;
    phatngon = "Tổng 2 số là" + tong
    document.getElementById("phatngon").innerText = phatngon
}
function hieu() {
    let hieu = sothu1 - sothu2;
    phatngon = "Hiệu 2 số là:" + hieu
    document.getElementById("phatngon").innerText = phatngon
}
function tich() {
    let tich = sothu1 * sothu2;
    phatngon = "Tích 2 số là:" + tich
    document.getElementById("phatngon").innerText = phatngon
}
function thuong() {
    let thuong = sothu1 / sothu2;
    phatngon = "Thương 2 số là:" + thuong
    document.getElementById("phatngon").innerText = phatngon
}