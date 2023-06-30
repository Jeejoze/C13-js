let textCount = document.querySelector("#textCount");
let textshow = document.querySelector("#textRan");
let btn1 = document.querySelector("#btn1");
let btnhigh = document.querySelector("#btnhigh");
let btnlow = document.querySelector("#btnlow");
let btncorrect = document.querySelector("#btnc");
let countnum = 0;
let ranmax = 100;
ranmin = 0;
let correct = false;
btnhigh.disabled = true;
btncorrect.disabled = true;
btnlow.disabled = true;
let ran
textCount.textContent = `Count : ${countnum}`;
function IsStart(a) {
    if (!btn1.disabled) {
        btn1.textContent = "You are playing";
        btn1.disabled = true;
        textCount.textContent = `Count : ${countnum}`;
        ran = ranmax / 2;
        textshow.textContent = `RandomNumber is : ${ran}`;
        btnhigh.disabled = false;
        btncorrect.disabled = false;
        btnlow.disabled = false;
    }
    else {
        switch (a) {
            case 1:
                countnum += 1;
                ranmax = ran;
                ran = Math.floor((ranmax + ranmin) / 2);
                textCount.textContent = `Count : ${countnum}`;
                textshow.textContent = `RandomNumber is : ${ran}`;
                break;
            case 2:
                btn1.disabled = false;
                btn1.textContent = "Start";
                btnhigh.disabled = true;
                btncorrect.disabled = true;
                btnlow.disabled = true;
                break;
            case 3:
                ranmin = ran;
                ran = Math.floor((ranmax + ranmin) / 2);
                countnum += 1;
                textCount.textContent = `Count : ${countnum}`;
                textshow.textContent = `RandomNumber is : ${ran}`;
                break;
        }
    }
}
function IsPlaying() {

}
btn1.addEventListener("click", () => IsStart(0));
btnhigh.addEventListener("click", () => IsStart(1));
btncorrect.addEventListener("click", () => IsStart(2));
btnlow.addEventListener("click", () => IsStart(3));