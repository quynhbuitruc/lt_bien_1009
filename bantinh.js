function tong() {
    let sothu1 = Number(document.getElementById("so1").value)
    let sothu2 = Number(document.getElementById("so2").value)
    let tong = sothu1 + sothu2;
    hienthi1 = document.getElementById("so1").value + " + " + document.getElementById("so2").value + "  = "
    document.getElementById("hienthi1").innerText = hienthi1
    phatngon1 = tong
    document.getElementById("phatngon1").innerText = phatngon1
}
function hieu() {
    let sothu1 = Number(document.getElementById("so1").value)
    let sothu2 = Number(document.getElementById("so2").value)
    let hieu = sothu1 - sothu2;
    hienthi1 = document.getElementById("so1").value + " - " + document.getElementById("so2").value + "  = "
    document.getElementById("hienthi1").innerText = hienthi1
    phatngon1 = hieu
    document.getElementById("phatngon1").innerText = phatngon1
}
function tich() {
    let sothu1 = Number(document.getElementById("so1").value)
    let sothu2 = Number(document.getElementById("so2").value)
    let tich = sothu1 * sothu2;
    hienthi1 = document.getElementById("so1").value + " * " + document.getElementById("so2").value + "  = "
    document.getElementById("hienthi1").innerText = hienthi1
    phatngon1 = tich
    document.getElementById("phatngon1").innerText = phatngon1
}
function thuong() {
    let sothu1 = Number(document.getElementById("so1").value)
    let sothu2 = Number(document.getElementById("so2").value)
    let thuong = sothu1 / sothu2;
    hienthi1 = document.getElementById("so1").value + " : " + document.getElementById("so2").value + "  = "
    document.getElementById("hienthi1").innerText = hienthi1
    phatngon1 = thuong
    document.getElementById("phatngon1").innerText = phatngon1

}

function equal() {
    document.getElementById("hienthi2").innerText = hienthi1
    document.getElementById("phatngon2").innerText = phatngon1
    document.getElementById("so1").value = phatngon1
    document.getElementById("so2").focus();
    document.getElementById("so2").value = ""
}