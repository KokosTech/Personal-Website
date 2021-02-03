function Stopwatch(elem) {
    var time = 0;
    var interval;
    var offset;
    this.status = 0;

    function update() {
        if (this.status === 1) {
            time += delta();
        }
        elem.textContent = format(time);
    }
    function delta() {
        var now = Date.now();
        var passed = now - offset;
        offset = now;
        return passed;
    }
    function format(timeInMilliSeconds) {
        var time = new Date(timeInMilliSeconds);
        var hours = time.getUTCHours().toString();
        var minutes = time.getMinutes().toString();
        var seconds = time.getSeconds().toString();
        var milliseconds = time.getMilliseconds().toString();

        if (hours.length < 2) {
            hours = "0" + hours;
        }
        if (minutes.length < 2) {
            minutes = "0" + minutes;
        }
        if (seconds.length < 2) {
            seconds = "0" + seconds;
        }
        while (milliseconds.length < 3) {
            milliseconds = "0" + milliseconds;
        }
        return hours + ":" + minutes + ":" + seconds;
    }

    this.s = function () {
        interval = setInterval(update.bind(this), 10);
        offset = Date.now();
        this.status = 1;
    };
    this.st = function () {
        clearInterval();
        interval = null;
        this.status = 2;
    };
    this.r = function () {
        time = 0;
        update();
        this.status = 0;
    };
}
