$(function(){
  $(".toggle").on("click",function(){
    $(this).toggleClass("on");
    $('.drawer-list').toggleClass("on");
  });
  $(".drawer-list a").on("click",function(){
    $('.toggle').removeClass("on");
    $('.drawer-list').removeClass("on");
  });
});

$(function () {
  $('dt').on('click',function() {
      $(this).toggleClass('is-show');
  });
});

$(function () {
  $('.news__more-link-btn').on('click',function() {
      $('.reputation-list').toggleClass('is-show');
      
  });
});

$(function(){
  $('.slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });
});

$(function(){
  $('a[href^="#"]').click(function(){
    var adjust = -125;
    var speed = 400;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.get(0).offsetTop + adjust;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
});

$(function(){
  // SP時
/* ここには、表示するリストの数を指定します。 */
  var moreNum = 3;
  /* 表示するリストの数以降のリストを隠しておきます。 */
  $('.news__item:nth-of-type(n + ' + (moreNum + 1) + ')').addClass('is-hidden');
  /* 全てのリストを表示したら「もっとみる」ボタンをフェードアウトします。 */
  $('.news__more-link-btn').on('click', function() {
    $('.news__item.is-hidden').slice(0, moreNum).removeClass('is-hidden');
    if ($('.news__item.is-hidden').length == 0) {
      $('.news__more-link-btn').fadeOut();
    } 
  });

  /* リストの数が、表示するリストの数以下だった場合、「もっとみる」ボタンを非表示にします。 */
  $(function() {
    var list = $(".news__list a").length;  
      if (list < moreNum) {
        $('.news__more-link').addClass('is-btn-hidden');
    }
  });
});



// $(function(){
//   var timeoutId ;
//   var header = $('header');
//   window.addEventListener( "scroll", function () {
    
//     header.addClass('fadeOut');
  
//     clearTimeout( timeoutId ) ;
  
//     timeoutId = setTimeout( function () {
//       header.removeClass('fadeOut');
//     }, 1750 ) ;
//   } ) ;
// });


$(function() {
  var windowWidth = $(window).width();
  var windowSm = 575;
  var timeoutId ;
  var header = $('header');
  if (windowWidth >= windowSm) { //スマホのとき
    window.addEventListener( "scroll", function () {
      header.addClass('fadeOut');
      clearTimeout( timeoutId ) ;
      timeoutId = setTimeout( function () {
        header.removeClass('fadeOut');
      }, 1000 ) ;
    } ) ;
  }else{　//それ以外のとき
  }
});

$(function() {
  var params = {
    // アニメーションを表示したい要素(今回はlottieというidを付けて取得しています。)
    container: document.getElementById('lottie'),
    // アニメーションをsvg形式で出力
    renderer: 'svg',
    // アニメーションをループする
    loop: false,
    // アニメーションを読み込んだら自動で再生する
    autoplay: true,
    // アニメーションファイル(.json)のパス
    path: "json/loading.json"
  };

  // アニメーションをロード
  lottie.loadAnimation(params);
});

// ローディングでfadeOut
// $(function() {
//   $(window).on('load',function(){
//     $("#loading").addClass("completed");
//  });
// });

$(function() {
  setTimeout(function() {
    $('#loading').fadeOut(600);
  }, 5000);
});

