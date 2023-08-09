import "./Main.css";

let playerChoice = "";
let computerChoice = "";

const template = () => {
  return `
    <h2>Let's play</h2>
    <section>
    <button id="rock-btn" alt="foto de mano en modo piedra">
        <img src="/images/rock.png" alt="foto de mano en modo piedra"/>
    </buton>
    <button id="paper-btn" alt="foto de mano en modo papel">
        <img src="/images/paper.png" alt="foto de mano en modo papel"/>
    </buton>
    <button id="scissors-btn" alt="foto de mano en modo tijera">
        <img src="/images/scissors.png" alt="foto de mano en modo tijera"/>
    </buton>
    </section>
    <h3 id="result">Choose an option...</h3>
 `;
};

const btnListeners = () => {
  document.querySelector("#rock-btn").addEventListener("click", () => {
    playerChoice = "rock";
    play();
  });
  document.querySelector("#paper-btn").addEventListener("click", () => {
    playerChoice = "paper";
    play();
  });
  document.querySelector("#scissors-btn").addEventListener("click", () => {
    playerChoice = "scissors";
    play();
  });
};

const play = () => {
  const result = document.querySelector("#result");
  const options = ["rock", "paper", "scissors"];
  const randomChoice = Math.floor(Math.random() * options.length);
  computerChoice = options[randomChoice];
  if (playerChoice === "rock" && computerChoice === "scissors") {
    result.innerHTML = `${playerChoice} vs ${computerChoice}:"You win!!"`;
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    result.innerHTML = `${playerChoice}
vs ${computerChoice}:"You win!!"`;
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    result.innerHTML = `${playerChoice} vs ${computerChoice}:"You win"`;
  } else if (playerChoice === computerChoice) {
    result.innerHTML = `${playerChoice}vs${computerChoice}:"Draw"`;
  } else {
    result.innerHTML = `${playerChoice}vs${computerChoice}:"You lose"`;
  }
};

const Main = () => {
  document.querySelector("main").innerHTML = template();
  btnListeners();
};

export default Main;
