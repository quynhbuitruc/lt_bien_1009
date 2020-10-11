function tong() {
    let sothu1 = Number(document.getElementById("so1").value)
    let sothu2 = Number(document.getElementById("so2").value)
    let tong = sothu1 + sothu2;
    hienthi = document.getElementById("so1").value + " + " + document.getElementById("so2").value + "  = "
    document.getElementById("hienthi").innerText = hienthi
    phatngon = tong
    document.getElementById("phatngon").innerText = phatngon
}
function hieu() {
    let sothu1 = Number(document.getElementById("so1").value)
    let sothu2 = Number(document.getElementById("so2").value)
    let hieu = sothu1 - sothu2;
    hienthi = document.getElementById("so1").value + " - " + document.getElementById("so2").value + "  = "
    document.getElementById("hienthi").innerText = hienthi
    phatngon = hieu
    document.getElementById("phatngon").innerText = phatngon
}
function tich() {
    let sothu1 = Number(document.getElementById("so1").value)
    let sothu2 = Number(document.getElementById("so2").value)
    let tich = sothu1 * sothu2;
    hienthi = document.getElementById("so1").value + " * " + document.getElementById("so2").value + "  = "
    document.getElementById("hienthi").innerText = hienthi
    phatngon = tich
    document.getElementById("phatngon").innerText = phatngon
}
function thuong() {
    let sothu1 = Number(document.getElementById("so1").value)
    let sothu2 = Number(document.getElementById("so2").value)
    let thuong = sothu1 / sothu2;
    hienthi = document.getElementById("so1").value + " : " + document.getElementById("so2").value + "  = "
    document.getElementById("hienthi").innerText = hienthi
    phatngon = thuong
    document.getElementById("phatngon").innerText = phatngon
    
}

function euqal() {
    document.getElementById("so1").value = phatngon
    document.getElementById("so2").focus();
    document.getElementById("so2").value = ""
}