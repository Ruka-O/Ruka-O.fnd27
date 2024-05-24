'use strict'
// 1行目に記載している 'use strict' は削除しないでください

// function test(actual, expected) {
//     if (JSON.stringify(actual) === JSON.stringify(expected)) {
//         console.log("OK! Test PASSED.");
//     } else {
//         console.error("Test FAILED. Try again!");
//         console.log("    actual: ", actual);
//         console.log("  expected: ", expected);
//         console.trace();
//     }
// }

// 正解かどうか
function random() {
  const dialog = document.querySelector = ("dialog");
  const resultComment = document.getElementById("old-result");
  const resultRecord = document.getElementById("result-record");
  const betOCT = document.getElementById("bet-oct").value;
  const myOCT = document.getElementById("oct");
  const establish = Math.floor(Math.random() * 100);
  let rate = 0;
  console.log(betOCT);
  for (const famous in data) {
    rate += data[famous];
    if (establish <= rate) {
      result = famous;
      break;
    }
  }
  const selectNumber = document.getElementById("select-number").value;
  if (result === selectNumber) {
    comment = "🎉おめでとうございます🎉";
    victorycount += 1;
    // out -= betOCT * odds;  //oddsはhtml上に表示しているものを持ってくる
  } else {
    comment = "残念😭";
    losecount += 1;
    oct -= Number(betOCT);

  }
  gameconut += 1;
  // dialog.show();
  resultComment.innerText = `  《これまでの結果》        ${victorycount}勝${losecount}敗`;
  const creatPalagraph = document.createElement("p");
  creatPalagraph.innerText = `${gameconut}回目 結果：${result}  予想:${selectNumber}  ${comment}`;
  resultRecord.prepend(creatPalagraph);
  myOCT.innerText = `💰 ${oct.toLocaleString()} OCT`;
}


function randomOfOdds(minNum, maxNum) {
  let odds = 0;
  odds = Math.random() * (maxNum - minNum) + minNum;
  return parseFloat(odds.toFixed(1));
}

// オッズの計算
const odds = [
  {min: 7.1, max: 10},
  {min: 5.1, max: 7},
  {min: 2.6, max: 4},
  {min: 1.6, max: 2.5},
  {min: 1, max: 1.5}
];

// 重みづけの配列
const data = {
  1: 5,          //ペンギンが出る確率は5%
  2: 10,         //たぬきが出る確率は25%
  3: 15,         //パンダが出る確率は70%
  4: 25,         //ぶたが出る確率は70%
  5: 45,         //いぬが出る確率は70%
}

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



let gameconut = 0;
let victorycount = 0;
let losecount = 0;
let comment = "";
let result = "";
let oct = 1000;
let index = Math.floor(Math.random() * 8);    //パスワード設定
const password = passwordCandidates[index];

const startButton = document.getElementById("start-button");


const recordOpen = document.getElementById("result-open");
startButton.addEventListener("click", random);
// startButton.addEventListener("click", resultOpen, false);
if (index === gameconut) {
  // パスワードを告知
  // クリック箇所も提示
}
