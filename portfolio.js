function nameColorChange() {
  let colorChangeArr = document.getElementsByClassName("name");
  for (let i = 0; i <= colorChangeArr.length; i++) {
    colorChange = colorChangeArr[i];
    colorChange.style.fontSize = "6rem";
    colorChange.style.color = "#0072B5";
  }
}

function boxColorChange() {
  let boxColorChangeArr = document.getElementsByClassName("client-comment-box");
  console.log(boxColorChangeArr);
  for (let i = 0; i < boxColorChangeArr.length; i++) {
    let clientBoxColorChange = boxColorChangeArr[i];

    clientBoxColorChange.style.backgroundColor = "red";
  }
}

function resumeButtonClick() {
  let resumeClick = document.getElementById("resume");
  resumeClick.style.color = "Red";
  document.getElementById("navbarResume").style.color = "red";
}

function mouseleave() {
  let colorChangeArr = document.getElementsByClassName("name");
  for (let i = 0; i <= colorChangeArr.length; i++) {
    colorChange = colorChangeArr[i];
    colorChange.style.fontSize = "5rem";
    colorChange.style.color = "white";
  }
  // let resumeClick = document.getElementById("resume");
  // resumeClick.style.color = "white";
  // document.getElementById("navbarResume").style.color = "black";
}

function mouseleaves() {
  let resumeClick = document.getElementById("resume");
  resumeClick.style.color = "white";
  document.getElementById("navbarResume").style.color = "black";
}
