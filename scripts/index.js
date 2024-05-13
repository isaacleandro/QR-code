
function generateQRCode() {
    var text = document.getElementById("input").value;

    if (text === "") {
        alert("enter text");
        return;
}

    let qrcode = new QRCode(document.getElementById("qrcode"), {
        text: text,
        width: 128,
        height: 128,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    })

}