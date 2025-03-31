/* script.js */
setTimeout(() => {
    document.getElementById('loading').innerText = "Still Loading...";
}, 3000);
setTimeout(() => {
    document.getElementById('loading').innerText = "Almost there...";
}, 6000);
setTimeout(() => {
    document.getElementById('loading').innerText = "Just a little longer...";
}, 9000);
setTimeout(() => {
    document.getElementById('loading').innerText = "Oops! Refresh required.";
}, 12000);

setTimeout(() => {
    document.getElementById('popup').style.display = 'block';
}, 5000);

function closePopup() {
    let popup = document.getElementById('popup');
    popup.style.top = Math.random() * 80 + '%';
    popup.style.left = Math.random() * 80 + '%';
}

document.getElementById('prankBtn').addEventListener('mouseover', function() {
    this.style.top = Math.random() * 80 + '%';
    this.style.left = Math.random() * 80 + '%';
});
window.alert("are you okay?");

setInterval(function() {
    loaction.relod();
}, 5000);
