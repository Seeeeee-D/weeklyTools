export default class Timer {
  defaultMinute: number;
  defaultSecond: number;
  remainSecond: number;
  static intervalObj: NodeJS.Timeout;

  constructor(
    private minuteInput: HTMLInputElement,
    private secondInput: HTMLInputElement,
    private doBeforeTimerStart: (p: any[]) => void,
    private doAfterTimeout: (p: any[]) => void
  ) {
    this.defaultMinute = parseInt(minuteInput.value);
    this.defaultSecond = parseInt(secondInput.value);
    this.remainSecond = this.defaultMinute * 60 + this.defaultSecond;
  }

  isTimerValid(): boolean {
    return this.remainSecond > 0;
  }

  startTimer(interval = 1000, ...callbackVals: any[]) {
    this.doBeforeTimerStart(callbackVals);
    Timer.intervalObj = setInterval(() => {
      this.handlerTimer();
    }, interval);
  }

  stopTimer(...callbackVals: any[]) {
    clearInterval(Timer.intervalObj);
    this.minuteInput.value = "0";
    this.secondInput.value = "0";
    setTimeout(() => {
      this.doAfterTimeout(callbackVals);
      this.restoreDefaultTime();
    }, 100);
  }

  rewriteTimerElements() {
    this.minuteInput.value = Math.floor(this.remainSecond / 60).toString();
    this.secondInput.value = (this.remainSecond % 60).toString();
  }

  restoreDefaultTime() {
    this.minuteInput.value = this.defaultMinute.toString();
    this.secondInput.value = this.defaultSecond.toString();
  }

  handlerTimer() {
    this.remainSecond -= 1;
    this.rewriteTimerElements();
    if (this.remainSecond <= 0) {
      this.stopTimer();
    }
  }
}
