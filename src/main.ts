import Timer from "./Timer";

// 初期のメンバーリスト
let members = [
  "Katsuya Suzuki",
  "Ishibashi Ryo",
  "mei",
  "Kaihotsu Kotaro",
  "ryogo_niwa",
  "nanaka",
];

const setNamesInput = () => {
  // フォームの要素を取得
  const formElement = document.getElementById("members-form");
  if (!formElement) return;
  formElement.innerHTML = "";
  // メンバーの数だけ以下の処理
  members.forEach((member, i) => {
    const inputGroup = document.createElement("div");
    inputGroup.id = i.toString();
    formElement.appendChild(inputGroup);
    // メンバー名入力フォーム
    const inputElement = document.createElement("input");
    inputElement.value = member;
    // idを付与して後で編集しやすくする
    inputElement.id = "input-" + i;
    inputElement.addEventListener("change", onChangeHandler);
    inputGroup.appendChild(inputElement);

    // メンバーの削除ボタン
    const deleteButtonElement = document.createElement("button");
    deleteButtonElement.innerText = "削除";
    deleteButtonElement.id = "button-" + i;
    deleteButtonElement.type = "button";
    deleteButtonElement.addEventListener("click", deleteButtonHandler);
    inputGroup.appendChild(deleteButtonElement);
  });
};

// 入力されたときに呼ばれる関数
const onChangeHandler = (event: Event) => {
  const { target } = event;
  if (!(target instanceof HTMLInputElement)) return;
  const member = target.value;
  // eventが呼ばれたinputタグのidを検索して要素を上書きする
  const elemId = target.id;
  const idx = Number(elemId.replace("input-", ""));
  members[idx] = member;
};

// 削除ボタンが押されたときに呼ばれる関数
const deleteButtonHandler = (event: Event) => {
  const { target } = event;
  if (!(event.target instanceof HTMLButtonElement)) return;
  const elemId = event.target.id;
  // elemId番目の要素を1つ削除する
  const idx = elemId.replace("button-", "");
  const inputElm = document?.getElementById(`input-${idx}`) as HTMLInputElement;
  const value = inputElm.value;
  members = members.filter((m) => m != value);
  document?.getElementById(idx)?.remove();
};

// 結果を見るボタンが押されたときに呼ばれる関数
const resultHandler = () => {
  const resultBox = document.getElementById("result") as HTMLElement;
  // 結果を空にする
  refreshResultBox(resultBox);
  // メンバーをランダムに入れ替える
  const shuffledMember = shuffle(members);
  // 結果に代入する
  setResult(resultBox, shuffledMember);
};

const setResult = (
  resultBoxElement: HTMLElement,
  shuffledMembers: string[]
) => {
  // メンバーの名前をli要素に入れる
  shuffledMembers.forEach((member) => {
    const listElement = document.createElement("li");
    listElement.innerText = member;
    resultBoxElement.appendChild(listElement);
  });
};

// メンバーをランダムに入れ替える
const shuffle = <T>(elements: T[]): T[] => {
  // メンバーをコピーする
  const copiedElements: T[] = [];
  elements.forEach((elem) => {
    copiedElements.push(elem);
  });
  const shuffledElements: T[] = [];
  // ランダムに取り出して代入していく
  while (copiedElements.length > 0) {
    var num = copiedElements.length;
    var k = Math.floor(Math.random() * num);
    shuffledElements.push(copiedElements[k]);
    copiedElements.splice(k, 1);
  }
  return shuffledElements;
};

// 結果を空にする
const refreshResultBox = (resultBoxElement: HTMLElement) => {
  resultBoxElement.innerHTML = "";
};

const addMember = () => {
  const inputElm = document.getElementById("new-member") as HTMLInputElement;
  const newMember = inputElm.value;
  inputElm.value = "";
  members.push(newMember);
  setNamesInput();
  resultHandler();
};

let timer: Timer | undefined;

const doAfterTimeout = ([isTimeOut = true]: boolean[]) => {
  if (isTimeOut) {
    // 待たないとrewriteより先にalertが実行されてしまう。
    confirm("時間だよ〜");
  }
  const sButton = document.getElementById("start-button") as HTMLButtonElement;
  sButton.disabled = false;
  const rButton = document.getElementById("reset-button") as HTMLButtonElement;
  rButton.disabled = true;
};

const doBeforeTimerStart = () => {
  const sButton = document.getElementById("start-button") as HTMLButtonElement;
  sButton.disabled = true;
  const rButton = document.getElementById("reset-button") as HTMLButtonElement;
  rButton.disabled = false;
};

const timerStart = async () => {
  const minuteInput = document.getElementById("min") as HTMLInputElement;
  const secondInput = document.getElementById("sec") as HTMLInputElement;

  timer = new Timer(
    minuteInput,
    secondInput,
    doBeforeTimerStart,
    doAfterTimeout
  );

  timer.startTimer(1000);
};

const timerReset = () => {
  if (!timer) return;
  timer.stopTimer(false);
  window.alert("タイマーを止めたよ");
  timer = undefined;
};

window.onload = () => {
  setNamesInput();
};

declare global {
  // HTMLからonClickで呼び出すためにwindowオブジェクトのプロパティにする必要がある
  // Windowオブジェクトにもともと下記プロパティはないので型を拡張する
  interface Window {
    addMember: () => any;
    resultHandler: () => any;
    timerStart: () => any;
    timerReset: () => any;
  }
}
// 定義したプロパティに関数をセット
window.addMember = addMember;
window.resultHandler = resultHandler;
window.timerStart = timerStart;
window.timerReset = timerReset;
