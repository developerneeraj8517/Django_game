score = 0;
cross = true;

document.onkeydown = function (e) {
  console.log("Key is: ", e.keyCode);
  if (e.keyCode == 38) {
    hero = document.querySelector(".hero");
    hero.classList.add("animateHero");
    setTimeout(() => {
      hero.classList.remove("animateHero");
    }, 700);
  }
  if (e.keyCode == 39) {
    hero = document.querySelector(".hero");
    herox = parseInt(
      window.getComputedStyle(hero, null).getPropertyValue("left")
    );
    hero.style.left = herox + 190 + "px";
  }
  if (e.keyCode == 37) {
    hero = document.querySelector(".hero");
    herox = parseInt(
      window.getComputedStyle(hero, null).getPropertyValue("left")
    );
    hero.style.left = herox - 110 + "px";
  }
};

setInterval(() => {
  hero = document.querySelector(".hero");
  gameover = document.querySelector(".gameover");
  obstacle = document.querySelector(".obstacle");

  dx = parseInt(window.getComputedStyle(hero, null).getPropertyValue("left"));
  dy = parseInt(window.getComputedStyle(hero, null).getPropertyValue("top"));

  ox = parseInt(
    window.getComputedStyle(obstacle, null).getPropertyValue("left")
  );
  oy = parseInt(
    window.getComputedStyle(obstacle, null).getPropertyValue("top")
  );

  offsetX = Math.abs(dx - ox);
  offsetY = Math.abs(dy - oy);
  if (offsetX < 80 && offsetY < 55) {
    gameover.style.visibility = "visible";
    obstacle.classList.remove("animateobs");
  } else if (offsetX < 100 && cross) {
    score += 1;
    updatescore(score);
    cross = false;
    setTimeout(() => {
      cross = true;
    }, 1000);
  }
}, 10);

function updatescore(score) {
  score.innerHTML = "Your Score: " + score;
}
