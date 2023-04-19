/*main*/
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {
  new YT.Player('player', {
    videoId: 'XFTQq7oTwpE', // 최초 재생할 유튜브 영상 ID
    playerVars: {
      autoplay: true, // 자동 재생 유무
      loop: true, // 반복 재생 유무
      playlist: 'XFTQq7oTwpE', // 반복 재생할 유튜브 영상 ID 목록
    },
    events : {
      onReady: function(event){
        event.target.mute() // 음소거
      }
    }
  });
}

/* album */
new Swiper('.albem-content .swiper', {
  freeMode: true,
  loop: true,
    autoplay: {
    delay: 4000
  },
  spaceBetween: 30, // 슬라이드 사이 여백
  slidesPerView: 3, // 한번에 보여줄 슬라이드
  centeredSlides: true, // 1번 슬라이드가 중앙
    pagination: {
    el: '.swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어
  },
});

// video
var swiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 3,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});

// https://nukw0n-dev.tistory.com/34