document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".swiper", {
    slidesPerView: 3.5,
    spaceBetween: 30,
    loop: true,
    centeredSlides: false,

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    slidesPerView: "auto", // CSS의 너비를 사용하게 함
    spaceBetween: 30, // 슬라이드 간 간격 설정 (픽셀 단위)
    centeredSlides: true, // 가운데 정렬 (선택 사항)
  });

  // 비디오 클릭 시 재생/일시정지
  const playlistVideo = document.querySelector(".ply-video");
  const playBtn = document.querySelector(".play-btn");
  const playIcon = document.querySelector(".play-icon");
  const pauseIcon = document.querySelector(".pause-icon");

  if (playlistVideo && playBtn) {
    // 버튼 클릭
    playBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      toggleVideo();
    });

    // 비디오 클릭
    playlistVideo.addEventListener("click", function () {
      toggleVideo();
    });

    function toggleVideo() {
      if (playlistVideo.paused) {
        playlistVideo.play();
        playIcon.style.display = "none";
        pauseIcon.style.display = "block";
      } else {
        playlistVideo.pause();
        playIcon.style.display = "block";
        pauseIcon.style.display = "none";
      }
    }
  }

  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  ScrollSmoother.create({
    wrapper: "#smooth-wrapper", // 이거 필수!
    content: "#smooth-content", // 이것도 필수!
    smooth: 0.5,
    effects: true,
  });
});
