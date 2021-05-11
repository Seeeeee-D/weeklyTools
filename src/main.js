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
  formElement.innerHTML = "";
  // メンバーの数だけ以下の処理
  members.forEach((member, i) => {
    const inputGroup = document.createElement("div");
    inputGroup.id = i;
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
const onChangeHandler = (event) => {
  const member = event.target.value;
  // eventが呼ばれたinputタグのidを検索して要素を上書きする
  const elemId = event.target.id;
  const idx = elemId.replace("input-", "");
  members[idx] = member;
};

// 削除ボタンが押されたときに呼ばれる関数
const deleteButtonHandler = (event) => {
  const elemId = event.target.id;
  // elemId番目の要素を1つ削除する
  const idx = elemId.replace("button-", "");
  const value = document.getElementById(`input-${idx}`).value;
  members = members.filter((m) => m != value);
  document.getElementById(idx).remove();
};

// 結果を見るボタンが押されたときに呼ばれる関数
const resultHandler = () => {
  const resultBox = document.getElementById("result");
  // 結果を空にする
  refreshResultBox(resultBox);
  // メンバーをランダムに入れ替える
  const shuffledMember = shuffle(members);
  // 結果に代入する
  setResult(resultBox, shuffledMember);
};

const setResult = (resultBoxElement, shuffledMembers) => {
  // メンバーの名前をli要素に入れる
  shuffledMembers.forEach((member) => {
    const listElement = document.createElement("li");
    listElement.innerText = member;
    resultBoxElement.appendChild(listElement);
  });
};

// メンバーをランダムに入れ替える
const shuffle = (elements) => {
  // メンバーをコピーする
  const copiedElements = [];
  elements.forEach((elem) => {
    copiedElements.push(elem);
  });
  const shuffledElements = [];
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
const refreshResultBox = (resultBoxElement) => {
  resultBoxElement.innerHTML = "";
};

const addMember = () => {
  const newMember = document.getElementById("new-member").value;
  document.getElementById("new-member").value = "";
  members.push(newMember);
  setNamesInput();
  resultHandler();
};

let timer;

const doAfterTimeout = ([isTimeOut = true]) => {
  if (isTimeOut) {
    // 待たないとrewriteより先にalertが実行されてしまう。
    confirm("時間だよ〜");
  }
  document.getElementById("start-button").disabled = false;
  document.getElementById("reset-button").disabled = true;
};

const doBeforeTimerStart = () => {
  document.getElementById("start-button").disabled = true;
  document.getElementById("reset-button").disabled = false;
};

const timerStart = async () => {
  const minuteInput = document.getElementById("min");
  const secondInput = document.getElementById("sec");

  timer = new Timer(
    minuteInput,
    secondInput,
    doBeforeTimerStart,
    doAfterTimeout
  );

  if (timer.isTimerValid()) {
    timer.startTimer(1000);
  } else {
    window.alert("時間にミスあるよ");
  }
};

const timerReset = () => {
  timer.stopTimer(false);
  window.alert("タイマーを止めたよ");
  timer = undefined;
};

window.onload = () => {
  setNamesInput();
};
window.addMember = addMember;
window.resultHandler = resultHandler;
window.timerStart = timerStart;
window.timerReset = timerReset;
