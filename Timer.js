export default class Timer {
  //private変数
  #minuteInput;
  #secondInput;
  #defaultMinute;
  #defaultSecond;
  #remainSecond;

  constructor(minuteInput, secondInput) {
    this.#minuteInput = minuteInput;
    this.#secondInput = secondInput;
    this.#defaultMinute = parseInt(minuteInput.value);
    this.#defaultSecond = parseInt(secondInput.value);
    this.#remainSecond = this.#defaultMinute * 60 + this.#defaultSecond;
  }

  isTimerValid(){
    return this.#remainSecond > 0;
  }

  startTimer(interval = 1000) {
    // this.intervalID = setInterval(this.handlerTimer, interval); //これだとhandlerTimer側でthisがwindowを参照するようになる
    this.intervalID = setInterval(() => {
      this.#handlerTimer();
    }, interval);
  }

  #rewriteTimerElements() {
    this.#minuteInput.value = Math.floor(parseFloat(this.#remainSecond / 60));
    this.#secondInput.value = this.#remainSecond % 60;
  }

  #handlerTimer() {
    this.#remainSecond -= 1;
    console.log(this.#remainSecond)
    this.#rewriteTimerElements();
    if (this.#remainSecond <= 0) {
      clearInterval(this.intervalID);
      // 待たないとrewriteより先にalertが実行されてしまう。
      setTimeout(() => {
        alert("時間だよ〜");
      }, 10);
      this.#minuteInput.value = this.#defaultMinute;
      this.#secondInput.value = this.#defaultSecond;
    }
  }
}
