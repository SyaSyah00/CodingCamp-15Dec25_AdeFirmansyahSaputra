welcomeMessage();

function welcomeMessage() {
    const userInput = prompt('Please enter your name:');
    const welcomDOM = document.getElementById('welcome-speech');
    if (userInput === null || userInput.trim() === '') {
        welcomDOM.innerHTML = 'Welcome, Guest!';
    } else {
        welcomDOM.innerHTML = 'Welcome, ' + userInput + '!';
    }
}

function validateForm() { }



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


