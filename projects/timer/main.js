var elem = document.getElementById('stopwatch');
var watch = new Stopwatch(elem);
var tgl = document.getElementById('toggle');
tgl.addEventListener('click', function() {
    console.log("Why" + watch.status);
    if(watch.status === 0){
        tgl.style.backgroundColor = "red";
        tgl.style.fontSize = "4.5vw";
        tgl.textContent = 'Stop';
        watch.s();
    } else if(watch.status === 1) {
        tgl.textContent = 'Reset';
        tgl.style.backgroundColor = "red";
        tgl.style.fontSize = "4.5vw";   
        watch.st();
    } else {
        tgl.textContent = 'Start';
        tgl.style.backgroundColor = "green";
        tgl.style.fontSize = "4.5vw";
        watch.r();
    }
});