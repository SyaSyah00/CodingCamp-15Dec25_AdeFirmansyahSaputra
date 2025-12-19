function updateTime() {
    document.getElementById("time").innerText = new Date().toString();
}
setInterval(updateTime, 1000);
updateTime();

document.getElementById("messageForm").addEventListener("submit", function(e) {
    e.preventDefault();

    document.getElementById("outNama").innerText =
        document.getElementById("nama").value;

    document.getElementById("outTgl").innerText =
        document.getElementById("tglLahir").value;

    document.getElementById("outJk").innerText =
        document.querySelector('input[name="jk"]:checked').value;

    document.getElementById("outPesan").innerText =
        document.getElementById("pesan").value;
});
