export default class Timer {
  private defaultMinute: number;
  private defaultSecond: number;
  private remainSecond: number;
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

  private isTimerValid(): boolean {
    return this.remainSecond > 0;
  }

  startTimer(interval = 1000, ...callbackVals: any[]) {
    if (!this.isTimerValid()) {
      window.alert("時間にミスあるよ");
      return;
    }
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

  private rewriteTimerElements() {
    this.minuteInput.value = Math.floor(this.remainSecond / 60).toString();
    this.secondInput.value = (this.remainSecond % 60).toString();
  }

  private restoreDefaultTime() {
    this.minuteInput.value = this.defaultMinute.toString();
    this.secondInput.value = this.defaultSecond.toString();
  }

  private handlerTimer() {
    this.remainSecond -= 1;
    this.rewriteTimerElements();
    if (this.remainSecond <= 0) {
      this.stopTimer();
    }
  }
}
