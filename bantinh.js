function tong() {
    let sothu1 = Number(document.getElementById("so1").value)
    let sothu2 = Number(document.getElementById("so2").value)
    let tong = sothu1 + sothu2;
    let hieu = sothu1 - sothu2;
    let tich = sothu1 * sothu2;
    let thuong = sothu1 / sothu2;
    phatngon = "Tổng 2 số là" + tổng
    document.getElementById("phatngon").innerHTML = tong
    phatngon = "Hiệu 2 số là:" + hieu
    document.getElementById("phatngon").innerHTML = hieu
    phatngon = "Tích 2 số là:" + tich
    document.getElementById("phatngon").innerHTML = tich
    phatngon = "Thương 2 số là:" + thuong
    document.getElementById("phatngon").innerHTML = thuong
}