/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed on", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  function randomExcuse() {
    let pickWho = who[Math.floor(Math.random() * who.length)];
    let pickAction = action[Math.floor(Math.random() * action.length)];
    let pickWhat = what[Math.floor(Math.random() * what.length)];
    let pickWhen = when[Math.floor(Math.random() * when.length)];

    let finalExcuse = `${pickWho} ${pickAction} ${pickWhat} ${pickWhen}`;

    return finalExcuse;
  }
  document.getElementById("excuse").innerHTML = randomExcuse();
};
