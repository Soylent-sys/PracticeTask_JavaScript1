// 各時間の単位毎の要素を取得
const elmTimer10ms = document.getElementsByClassName('mSecond')[0];
const elmTimerS = document.getElementsByClassName('Second')[0];
const elmTimerM = document.getElementsByClassName('Minute')[0];
const elmTimerH = document.getElementsByClassName('Hour')[0];

// 各ボタンの要素を取得
const startButton = document.getElementById('CountStart');
const stopButton = document.getElementById('CountStop');
const resetButton = document.getElementById('CountReset');

// 各単位毎のカウント取得変数
let ms10Count = 0;
let sCount = 0;
let mCount = 0;
let hCount = 0;

// setIntervalID格納変数
let timerStart;

// スタートボタン押下時の動作
function countStart() {
    timerStart = setInterval(countUpMs, 100);
    startButton.disabled = true;
    stopButton.disabled = false;
    if ( resetButton.disabled === false ) {
        resetButton.disabled = true;
    }
}

// ストップボタン押下時の動作
function countStop() {
    clearInterval(timerStart);
    startButton.disabled = false;
    stopButton.disabled = true;
    resetButton.disabled = false;
}

// リセットボタン押下時の動作
function countReset() {
    ms10Count = 0;
    elmTimer10ms.textContent = 0;
    sCount = 0;
    elmTimerS.textContent = 0;
    mCount = 0;
    elmTimerM.textContent = 0;
    hCount = 0;
    elmTimerH.textContent = 0;
    resetButton.disabled = true;
    if (startButton.disabled === true) {
        startButton.disabled = false;
    }
}

// 各時間単位毎の動作
function countUpMs() {
    ms10Count++;
    elmTimer10ms.textContent = ms10Count;
    if (ms10Count > 9) {
        ms10Count = 0;
        elmTimer10ms.textContent = 0;
        countUpSec();
    }
}

function countUpSec() {
    sCount++;
    elmTimerS.textContent = sCount;
    if (sCount > 59) {
        sCount = 0;
        elmTimerS.textContent = 0;
        countUpMin();
    }
}

function countUpMin() {
    mCount++;
    elmTimerM.textContent = mCount;
    if (mCount > 59) {
        mCount = 0;
        elmTimerM.textContent = 0;
        countUpHour()
    }
}

function countUpHour() {
    hCount++;
    elmTimerH.textContent = hCount;
    if (hCount > 99) {  //１００時間に到達した場合はカウンターストップ。リセットボタンのみ活性化
        clearInterval(timerStart);
        stopButton.disabled = true;
        resetButton.disabled = false;
    }
}
