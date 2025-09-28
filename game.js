let mybody=document.querySelector("body")
let button=document.querySelector("#background")
let message=document.querySelector(".msg");

button.onclick=()=>{
    const quick=()=>{
        color=["aqua","green","blue","skyblue","yellow","red","pink","orange","palegreen","hotpink"];
        random=Math.floor(Math.random()*10)
      return  color[random]
    }
    colour=quick();
    console.log(colour)

    mybody.style.backgroundColor=colour
};



let button1=document.querySelector("#game")
button1.onclick=()=>{
    const junrate=()=>{
        names=["maya","rima","sima","payal","kajal","suraj","mohan","rohan"];
        random=Math.floor(Math.random()*8)
        return names[random]
    }
        number=junrate()
        console.log(number)
        message.innerText=number

      

}




  let playerHP = 100;
    let enemyHP = 100;

    function updateBars() {
      const pHP = Math.max(playerHP, 0);
      const eHP = Math.max(enemyHP, 0);

      document.getElementById("playerHealth").style.width = pHP + "%";
      document.getElementById("enemyHealth").style.width = eHP + "%";

      document.getElementById("playerHPText").textContent = `${pHP} / 100`;
      document.getElementById("enemyHPText").textContent = `${eHP} / 100`;

      document.getElementById("playerBar").className = "bar" + (pHP <= 30 ? " low" : "");
      document.getElementById("enemyBar").className = "bar" + (eHP <= 30 ? " low" : "");
    }

    function log(message) {
      const logDiv = document.getElementById("log");
      logDiv.innerHTML = `<p>${message}</p>` + logDiv.innerHTML;
    }

    function getEnemyMove() {
      const moves = ["attack", "defend", "heal"];
      return moves[Math.floor(Math.random() * moves.length)];
    }

    function choose(playerMove) {
      if (playerHP <= 0 || enemyHP <= 0) return;

      const enemyMove = getEnemyMove();
      log(`🧑‍🚀 You used <b>${playerMove.toUpperCase()}</b>. 🤖 Enemy used <b>${enemyMove.toUpperCase()}</b>.`);

      if (playerMove === "attack") {
        if (enemyMove === "attack") {
          playerHP -= 20;
          enemyHP -= 20;
          log("💥 You both attacked! Massive clash!");
        } else if (enemyMove === "defend") {
          enemyHP -= 5;
          log("🗡️ You hit through the defense!");
        } else if (enemyMove === "heal") {
          enemyHP -= 25;
          log("💥 You interrupted the enemy's healing!");
        }
      } else if (playerMove === "defend") {
        if (enemyMove === "attack") {
          playerHP -= 5;
          log("🛡️ You blocked most of the attack.");
        } else if (enemyMove === "heal") {
          enemyHP += 10;
          log("🤖 Enemy healed safely.");
        }
      } else if (playerMove === "heal") {
        playerHP += 10;
        if (enemyMove === "attack") {
          playerHP -= 25;
          log("💔 You tried to heal but got hit hard!");
        } else if (enemyMove === "heal") {
          enemyHP += 10;
          log("❤️ Both healed!");
        }
      }

      playerHP = Math.min(Math.max(playerHP, 0), 100);
      enemyHP = Math.min(Math.max(enemyHP, 0), 100);
      updateBars();

      if (playerHP <= 0 && enemyHP <= 0) {
        log("🤝 It's a draw! Both have fallen.");
      } else if (playerHP <= 0) {
        log("❌ You lost! The computer wins.");
      } else if (enemyHP <= 0) {
        log("✅ Victory! You defeated the computer.");
      }
    }

    updateBars();
  

    


