export default class Timer {
  constructor(minuteInput, secondInput, doBeforeTimerStart, doAfterTimeout) {
    this.minuteInput = minuteInput;
    this.secondInput = secondInput;
    this.defaultMinute = parseInt(minuteInput.value);
    this.defaultSecond = parseInt(secondInput.value);
    this.remainSecond = this.defaultMinute * 60 + this.defaultSecond;
    this.doBeforeTimerStart = doBeforeTimerStart;
    this.doAfterTimeout = doAfterTimeout;
  }

  isTimerValid() {
    return this.remainSecond > 0;
  }

  startTimer(interval = 1000, ...callbackVals) {
    this.doBeforeTimerStart(callbackVals);
    // this.intervalID = setInterval(this.handlerTimer, interval); //これだとhandlerTimer側でthisがwindowを参照するようになる
    this.intervalID = setInterval(() => {
      this.handlerTimer();
    }, interval);
  }

  stopTimer(...callbackVals) {
    clearInterval(this.intervalID);
    this.minuteInput.value = 0;
    this.secondInput.value = 0;
    setTimeout(()=>{
      this.doAfterTimeout(callbackVals);
      this.restoreDefaultTime();
    }, 100)
  }

  rewriteTimerElements() {
    this.minuteInput.value = Math.floor(parseFloat(this.remainSecond / 60));
    this.secondInput.value = this.remainSecond % 60;
  }

  restoreDefaultTime() {
    this.minuteInput.value = this.defaultMinute;
    this.secondInput.value = this.defaultSecond;
  }

  handlerTimer() {
    this.remainSecond -= 1;
    this.rewriteTimerElements();
    if (this.remainSecond <= 0) {
      this.stopTimer();
    }
  }
}
