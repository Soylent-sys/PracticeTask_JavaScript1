// 各時間の単位毎の要素を取得
const timer10ms = document.getElementsByClassName('mSecond')[0];
const timerS = document.getElementsByClassName('Second')[0];
const timerM = document.getElementsByClassName('Minute')[0];
const timerH = document.getElementsByClassName('Hour')[0];

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
    timer10ms.textContent = 0;
    sCount = 0;
    timerS.textContent = 0;
    mCount = 0;
    timerM.textContent = 0;
    hCount = 0;
    timerH.textContent = 0;
    resetButton.disabled = true;
}

// 各時間単位毎の動作
function countUpMs() {
    ms10Count++;
    timer10ms.textContent = ms10Count;
    if (ms10Count > 9) {
        ms10Count = 0;
        timer10ms.textContent = 0;
        countUpSec();
    }
}

function countUpSec() {
    sCount++;
    timerS.textContent = sCount;
    if (sCount > 59) {
        sCount = 0;
        timerS.textContent = 0;
        countUpMin();
    }
}

function countUpMin() {
    mCount++;
    timerM.textContent = mCount;
    if (mCount > 59) {
        mCount = 0;
        timerM.textContent = 0;
        countUpHour()
    }
}

function countUpHour() {
    hCount++;
    timerH.textContent = mCount;
    if (hCount > 99) {
        //１００時間に到達した場合はカウンターストップ。リセットボタンのみ活性化
        clearInterval(timerStart);
        stopButton.disabled = true;
        resetButton.disabled = false;
    }
}
