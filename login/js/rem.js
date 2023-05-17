function resetWidth() {
    var baseWidth = document.documentElement.clientWidth;
    // || document.body.clientWidth
    // 默认的设置是375px(ip6)的根元素设为100px, 其他的手机都相对这个进行调整
    var fize = 100
    if (baseWidth > 768) {
      fize = 100
    } else {
      fize = document.documentElement.clientWidth / 750 * 100
    }
    document.documentElement.style.fontSize = fize + 'px'
  }
  resetWidth();
  window.addEventListener('resize', function () {
    resetWidth();
  })
  
  
  var w = window.innerWidth
  let threshold = 1080;
  if (w >= 2500) {
    threshold = 1080
  } else if (w >= 1900 && w < 2500) {
    threshold = 1080
  } else if (w >= 1600 && w < 1900) {
    threshold = 960
  } else if (w >= 1200 && w < 1600) {
    threshold = 960
  }
  if (w <= threshold) {
    $("#aside_box").hide()
  } else {
    $('#aside_box').show()
  }
  const debounce = (fn, delay) => {
    let timer;
    return function () {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        fn();
      }, delay);
    }
  };
  let timer
  const domhide = (dom) => {
    timer = setTimeout(() => {
      dom.hide()
    }, 1000);
  
  }
  const cancalDebounce = debounce(watchWindowSize, 5);
  
  function watchWindowSize() {
    var w = window.innerWidth
    if (w <= threshold) {
      !$('.aside_hide').length && $("#aside_box").addClass('aside_hide') && domhide($("#aside_box"))
    } else {
      $('.aside_hide').length && $('#aside_box').show() && $('#aside_box').removeClass('aside_hide') && window.clearTimeout(timer)
    }
  }
  window.addEventListener("resize", cancalDebounce);