
function generateQRCode() {
    let text = document.getElementById("input");

    if (text.value === "") {
        alert("enter text");
        return;
    }

    let qrCodeHtml = document.getElementById("qrcode");

    qrCodeHtml.innerHTML = "";

    let qrcode = new QRCode(qrCodeHtml, {
        text: text,
        width: 128,
        height: 128,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    })

    text.value = "";

}