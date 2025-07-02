function generateQR() {
  const text = document.getElementById('text').value;
  const qrBox = document.getElementById('qr-box');
  const downloadBtn = document.getElementById('downloadBtn');

  qrBox.innerHTML = "";
  if (text.trim() === "") {
    alert("Please enter text or URL.");
    return;
  }

  QRCode.toCanvas(text, { width: 200 }, function (err, canvas) {
    if (err) return console.error(err);
    qrBox.appendChild(canvas);
    downloadBtn.style.display = 'inline-block';
  });
}

function downloadQR() {
  const canvas = document.querySelector('canvas');
  const link = document.createElement('a');
  link.download = 'qrcode.png';
  link.href = canvas.toDataURL();
  link.click();
}
