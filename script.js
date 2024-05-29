'use strict'
// 1行目に記載している 'use strict' は削除しないでください

let gameconut = 0;
let victorycount = 0;
let losecount = 0;
let differenceOct = 0;
let borrowCount = 0;
let debtSum = 0;
let changeOdds = "";
let comment = "";
let result = "";
let recordComment = "";
let oct = 1000;
let index = Math.floor(Math.random() * 8);    //パスワード設定

const startButton = document.getElementById("start-button");
const dialog = document.getElementById("dialog-open");
const resultComment = document.getElementById("old-result");
const resultRecord = document.getElementById("result-record");
const resultOpen = document.getElementById("result-open");
const dialogClose = document.getElementById("dialog-close");
const resultClose = document.getElementById("result-close");
const face = document.getElementById("face");
const passwordShow = document.getElementById("password-show");
const passwordOpen = document.getElementById("password");
const passwordShowClose = document.getElementById("password-show-close");
const passwordInput = document.getElementById("password-input");
const passwordSend = document.getElementById("password-send");
const secret = document.getElementById("secret");
const penguinOdds = document.getElementById("penguin-odds");
const raccoonsOdds = document.getElementById("raccoons-odds");
const pandaOdds = document.getElementById("panda-odds");
const pigOdds = document.getElementById("pig-odds");
const dogOdds = document.getElementById("dog-odds");

const animalData = [
  {
    Name: "ペンギン",
    Number: 1,
    weight: 5
  },
  {
    Name: "たぬき",
    Number: 2,
    weight: 5
  },
  {
    Name: "パンダ",
    Number: 3,
    weight: 15
  },
  {
    Name: "ぶた",
    Number: 4,
    weight: 25
  },
  {
    Name: "いぬ",
    Number: 5,
    weight: 45
  }
];

// パスワード一覧
const passwordCandidates = [
  "earyuskmadoayu",
  "hirnenicuy",
  "tiojukyamnaa",
  "oakaikairdi",
  "inoeki",
  "auktohieyomra",
  "yuakakaytia",
  "akayubotau"
];

const password = passwordCandidates[index];

startButton.addEventListener("click", () => {
  const selectNumber = document.getElementById("select-number").value;
  const establish = Math.floor(Math.random() * 100);
  let rate = 0;
  for (const object of animalData) {
    rate += object.weight;
    if (establish <= rate) {
      result = object.Number;
      break;
    }
  }
  dialog.showModal();
  gameconut += 1;
  if (result === Number(selectNumber)) {
    comment = "🎉おめでとうございます🎉";
    victorycount += 1;
    recordComment = `${gameconut}回目 結果：${result}  予想:${selectNumber}  ${comment}`;
    face.src = "happy.gif";
  } else {
    comment = "残念😭";
    losecount += 1;
    recordComment = `${gameconut}回目 結果：${result}  予想:${selectNumber}  ${comment}`;
    face.src = "cry.gif";
  }
})

resultOpen.addEventListener("click", () => {
  dialog.close();
  const oneResultComment = document.getElementById("oneresult-comment");
  oneResultComment.innerText = `${comment} \n 優勝は${animalData[result - 1].Name}でした。`;
  dialogClose.showModal();
  resultComment.innerText = `  《これまでの結果》        ${victorycount}勝${losecount}敗`;
  const creatPalagraph = document.createElement("p");
  creatPalagraph.innerText = recordComment;
  resultRecord.prepend(creatPalagraph);
})

resultClose.addEventListener("click", () => {
  dialogClose.close();
  if (gameconut === 3 || gameconut % 10 === 0) {
    passwordShow.showModal();
    passwordOpen.innerText = password;
  }
})

passwordShowClose.addEventListener("click", () => { passwordShow.close() });
secret.addEventListener("click", () => { passwordInput.showModal() });
passwordSend.addEventListener("click", () => {
  const passwordWrite = document.getElementById("password-write").value;
  if (password === passwordWrite) {
    location.replace("indexura.html");
  }
  passwordInput.close();
})
