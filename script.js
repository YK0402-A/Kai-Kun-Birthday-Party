// script.js

document.addEventListener("DOMContentLoaded", function() {
  const photoContainers = document.querySelectorAll(".photo-container");
  let lastScrollY = window.scrollY;

  // 交互にクラスを割り当てる
  photoContainers.forEach((container, index) => {
    if (index % 2 === 0) {
      container.classList.add("slide-in-left");
    } else {
      container.classList.add("slide-in-right");
    }
  });

  function checkSlide() {
    const currentScrollY = window.scrollY;

    photoContainers.forEach(container => {
      const photoHeight = container.clientHeight;
      const slideInAt = currentScrollY + window.innerHeight - photoHeight / 2;
      const hideAt = currentScrollY + window.innerHeight - photoHeight / 3;
      const containerTop = container.offsetTop;

      if (slideInAt > containerTop) {
        // 下にスクロールして表示領域に入ったらスライドイン
        container.classList.add("visible");
      }
      
      if (hideAt < containerTop || containerTop + photoHeight < currentScrollY + photoHeight / 3) {
        // 上にスクロールして3分の1が見えなくなったら非表示に
        container.classList.remove("visible");
      }
    });

    lastScrollY = currentScrollY; // スクロール位置を更新
  }

  window.addEventListener("scroll", checkSlide);
});