//랜덤번호 지정
//유저가 번호를 입력한다. 버튼을 누른다
//유저가 랜덤번호를 맞추면 맞췄습니다!
// 랜덤번호 < 유저번호  Down
// 랜덤번호 > 유저번호 Up
// 5번의 기회를 다 쓰면 게임이 끝난다 (더이상 추측 불가, 버튼이 disable)
// 유저가 1~100의 범위 밖의 숫자를 입력하면 알려준다. 기회를 깎지 않는다.
// 유저가 이미 입력한 숫자를 또 입력하면, 알려준다, 기회를 깎지않는다. 


let comNum = 0;
let playBtn = document.getElementById("play-btn");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById('result-area');
let resetBtn = document.getElementById('reset-btn')
let chance = 5
let gameOver = false
let chanceArea = document.getElementById('chance-area')
let history = []

playBtn.addEventListener("click", play)
resetBtn.addEventListener("click", reset)
userInput.addEventListener("focus",function(){userInput.value = ""})

function pickRandomNum(){
    comNum = Math.floor(Math.random()*100)+1  //소숫점 버리는 함수(랜덤 숫자를 뽑아주는 함수 근데 소숫점 길어서 *100) 근데 1은 안나와서 + 1을 넣어서 100을 만든다.
    console.log(comNum)
}

function play(){
  
  let userValue = userInput.value

  if(userValue < 1 || userValue >100) {
    resultArea.textContent = "1과 100 사이에 숫자를 입력해 주세요"
    return;
  }
  if(history.includes(userValue) ) {
    resultArea.textContent = "이미 입력한 값입니다."
    return;
  }
  chance-- ;
  // chanceArea.textContent = "남은기회 : "+chance+"번"
  chanceArea.textContent = `남은기회 : ${chance}번`
  if(userValue < comNum) {
    resultArea.textContent = "Up"
  } else if (userValue > comNum) {
    resultArea.textContent = "Down"
  } else {
    resultArea.textContent = "맞추셨습니다."
    playBtn.disabled = true;
    
  }

  history.push(userValue)

  if(chance == 0) {
    playBtn.disabled = true;
    chanceArea.textContent = "기회가 끝나셨습니다."
  } 
  if(gameOver == true) {
    playBtn.disabled = true;
  }
  console.log('history', history)
}
function reset(){
  userInput.value = ""
  chance = 5
  history = [];
  pickRandomNum()
  playBtn.disabled = false;

  chanceArea.textContent = `남은기회 : ${chance}번`
  resultArea.textContent = "결과값이 여기 나옵니다."
  console.log(chance)
}
pickRandomNum()