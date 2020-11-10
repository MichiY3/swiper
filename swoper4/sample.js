// var mySwiper = new Swiper ('.swiper-container', {
//   loop: true,
//   slidesPerView: 2,
//   spaceBetween: 10,
//   centeredSlides : true,
//   pagination: '.swiper-pagination',
//   nextButton: '.swiper-button-next',
//   prevButton: '.swiper-button-prev'
// });


// var mySwiper = new Swiper ('.swiper-container', {
//   effect: "flip",
//   loop: true,
//   pagination: '.swiper-pagination',
//   nextButton: '.swiper-button-next',
//   prevButton: '.swiper-button-prev',
// })	

const avoSwiper = new Swiper('.js-swiper-slider', {
  loop: true, //スライドの繰り返し
  autoplay: { //自動再生
    delay: 5000, //5000ミリ秒毎
    disableOnInteraction: false, //ユーザーがスワイプしても自動再生を続ける
  },
  pagination: { // ページネイション
    el: '.js-swiper-top-pagenation', //セレクタ指定
    clickable: true, //ページネイションのクリック操作有効
  },
  navigation: { 
    nextEl: '.swiper-button-next', //次へボタンのセレクタ指定
    prevEl: '.swiper-button-prev', //前へボタンのセレクタ指定
  },
});

