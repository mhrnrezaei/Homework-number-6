let ifo = true;
const colors = ['#F7CB15', '#6CD4FF', '#7D5BA6', '#118AB2', '#70877F', '#FEB95F', '#3423A6'];

function chc() {
    var content = document.getElementById('h1-content').innerHTML = "Your only limit <br> is your mind";
}
function chav() {
    var atri = document.getElementById('pic-at');
    atri.src = "image/second-pic.jpg";
}

function chs() {
    var rand = Math.floor(Math.random() * 10);
    var txt = document.getElementById('h1-content')
    txt.style.color = colors[rand]
}
function she() {
    var pic = document.getElementById('pic-at')
    if (ifo == true) {
        ifo = false;
        pic.style.display = "none";
    } else {
        ifo = true;
        pic.style.display = "block";
    }

}