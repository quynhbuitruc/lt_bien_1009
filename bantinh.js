function tong() {
    let sothu1 = Number(document.getElementById("so1").value)
    let sothu2 = Number(document.getElementById("so2").value)
    let tong = sothu1 + sothu2;
    let hieu = sothu1 - sothu2;
    let tich = sothu1 * sothu2;
    let thuong = sothu1 / sothu2;
    document.getElementById("phatngon").innerHTML = tong
    document.getElementById("phatngon").innerHTML = hieu
    document.getElementById("phatngon").innerHTML = tich
    document.getElementById("phatngon").innerHTML = thuong
}