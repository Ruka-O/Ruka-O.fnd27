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

const myOCT = document.getElementById("oct");
const startButton = document.getElementById("start-button");
const dialog = document.getElementById("dialog-open");
const resultComment = document.getElementById("old-result");
const resultRecord = document.getElementById("result-record");
const resultOpen = document.getElementById("result-open");
const resultClose = document.getElementById("result-close");
const dialogClose = document.getElementById("dialog-close");
const bankHelp = document.getElementById("bank-help");
const bankOpen = document.getElementById("bank-open");
const bankBorrow = document.getElementById("bank-borrow");
const borrow = document.getElementById("borrow");
const gamefinish = document.getElementById("finish");
const nowOCT = document.getElementById("now-oct");
const debt = document.getElementById("debt");
const face = document.getElementById("face");
const penguinOdds = document.getElementById("penguin-odds");
const raccoonsOdds = document.getElementById("raccoons-odds");
const pandaOdds = document.getElementById("panda-odds");
const pigOdds = document.getElementById("pig-odds");
const dogOdds = document.getElementById("dog-odds");

const animalData = [
  {
    Name: "ペンギン",
    Number: 1,
    Odds: penguinOdds,
    minOdds: 7.1,
    maxOdds: 10,
    weight: 5
  },
  {
    Name: "たぬき",
    Number: 2,
    Odds: raccoonsOdds,
    minOdds: 5.1,
    maxOdds: 7,
    weight: 5
  },
  {
    Name: "パンダ",
    Number: 3,
    Odds: pandaOdds,
    minOdds: 2.6,
    maxOdds: 5,
    weight: 15
  },
  {
    Name: "ぶた",
    Number: 4,
    Odds: pigOdds,
    minOdds: 1.6,
    maxOdds: 2.5,
    weight: 25
  },
  {
    Name: "いぬ",
    Number: 5,
    Odds: dogOdds,
    minOdds: 1,
    maxOdds: 1.5,
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

// ODDの計算
function calculate() {
  for (let i = 0; i < animalData.length; i++) {
    let calculatedOdds = 0;
    calculatedOdds = randomOfOdds(animalData[i].minOdds, animalData[i].maxOdds);
    animalData[i].Odds.innerText = calculatedOdds;
  }
}
// oddの計算
function randomOfOdds(minNum, maxNum) {
  let odds = 0;
  odds = Math.random() * (maxNum - minNum) + minNum;
  return parseFloat(odds.toFixed(1));
}

calculate();

startButton.addEventListener("click", () => {
  const selectNumber = document.getElementById("select-number").value;
  const betOCT = document.getElementById("bet-oct").value;
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
    differenceOct = Number(betOCT) * (animalData[result - 1].Odds.innerText - 1);
    oct += differenceOct;
    myOCT.innerText = `💰 ${oct.toLocaleString()} OCT (+${differenceOct.toLocaleString()})`;
    recordComment = `${gameconut}回目 結果：${result}  予想:${selectNumber}  ${comment}`;
    changeOdds = `${differenceOct.toLocaleString()} OCTプラス`;
    face.src = "happy.gif";
  } else {
    comment = "残念😭";
    losecount += 1;
    differenceOct = Number(betOCT);
    oct -= differenceOct;
    myOCT.innerText = `💰 ${oct.toLocaleString()} OCT (▲${differenceOct.toLocaleString()})`;
    recordComment = `${gameconut}回目 結果：${result}  予想:${selectNumber}  ${comment}`;
    changeOdds = `${differenceOct.toLocaleString()} OCTマイナス`;
    face.src = "cry.gif";
  }
})

resultOpen.addEventListener("click", () => {
  dialog.close();
  const oneResultComment = document.getElementById("oneresult-comment");
  oneResultComment.innerText = `${comment} \n 優勝は${animalData[result - 1].Name}でした。\n ${changeOdds}されました。`;
  dialogClose.showModal();
  resultComment.innerText = `  《これまでの結果》        ${victorycount}勝${losecount}敗`;
  const creatPalagraph = document.createElement("p");
  creatPalagraph.innerText = recordComment;
  resultRecord.prepend(creatPalagraph);
  calculate();
  if (oct <= 0) {
    dialogClose.close();
    bankHelp.showModal();
    nowOCT.innerText = `${oct} OCT`;
  }
})

resultClose.addEventListener("click", () => {
  dialogClose.close();
})
bankOpen.addEventListener("click", () => {
  bankHelp.close();
  bankBorrow.showModal()
})

borrow.addEventListener("click", () => {
  const borrowOCT = document.getElementById("borrow-oct").value;
  oct += Number(borrowOCT);
  debtSum += Number(borrowOCT);
  myOCT.innerText = `💰 ${oct.toLocaleString()} OCT (▲${differenceOct.toLocaleString()})`;
  debt.innerText = `借金:${debtSum.toLocaleString()} OCT`;
  bankBorrow.close();
})

gamefinish.addEventListener("click", function () { location.reload() });
