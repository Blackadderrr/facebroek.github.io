//A little bit more DRY-code, still too much fuckery happening though.
document.addEventListener('DOMContentLoaded', function() {
  const isMobile = {
    Android: function() {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
      return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
  };
  const link_Arr = [{
      id: "quitfacebook",
      source: "https://www.youtube.com/embed/3E7hkPZ-HTk?start=11&autoplay=1&rel=0&amp;showinfo=0",
      action: "click"
    },
    {
      id: "landingtext",
      source: "https://www.youtube.com/embed/3E7hkPZ-HTk?start=11&autoplay=1&rel=0&amp;showinfo=0",
      action: "click"
    },
    {
      id: "foto",
      source: "https://www.youtube.com/embed/buqtdpuZxvk?start=1&autoplay=1&rel=0&amp;showinfo=0",
      action: "click"
    },
    {
      id: "delete",
      source: "https://www.youtube.com/embed/iLR190ZidBY?start=144&autoplay=1&rel=0&amp;showinfo=0",
      action: "mouseover"
    },
    {
      id: "deactivate",
      source: "https://www.youtube.com/embed/y9XTLC8KHwk?autoplay=1&rel=0&amp;showinfo=0",
      action: "mouseover"
    },
    {
      id: "questionmark",
      source: "https://www.youtube.com/embed/ITKQbv_4bKE?start=0&autoplay=1&rel=0&amp;showinfo=0",
      action: "click"
    },
    {
      id: "musicalnote",
      source: "https://www.youtube.com/embed/uzgBD2wysuI?start=0&autoplay=1&rel=0&amp;showinfo=0",
      action: "click"
    },
    {
      id: "myname",
      source: "https://www.youtube.com/embed/cW2bqBhP4AA?start=0&autoplay=1&rel=0&amp;showinfo=0",
      action: "click"
    }
  ];
  const emptyCenterPage = () => {
    document.getElementsByClassName("centerpage")[0].innerHTML = "<iframe id='youtube' src='' frameborder='0' allowfullscreen></iframe>";
  };

  const visiblePointerEvents = () => { //enables clicking on videos
    document.getElementsByClassName("centerpage")[0].style.pointerEvents = "visible"; //[0] because it returns elementS, plural
  }

  //show ladder png that links to sources page
  const showladder = function() {
    const yt = document.getElementById("youtube");
    if (yt && yt.src === link_Arr[0].source) {
      document.getElementById("ladder").style.visibility = "visible";
    } else {
      document.getElementById("ladder").style.visibility = "hidden";
    }
  }

  const drawBlackBgYt = () => {
    //in chrome browsers youtube flickers when changing its source. This prevents you seeing the white background, and thus the flickering.
    if (document.getElementById("youtube")) {
      document.getElementsByClassName("centerpage")[0].style.backgroundColor = "black";
    } else {
      document.getElementsByClassName("centerpage")[0].style.backgroundColor = "";
    }
  }

  //draw ticker
  //TEST---------------------------
  // const ticker = function(cchandle,ccperiod) {
  //   let cc = cchandle;
  //   let period = ccperiod;
  //   baseUrl = "https://widgets.cryptocompare.com/";
  //   var scripts = document.getElementsByTagName("script");
  //   var embedder = scripts[scripts.length - 1];
  //   var cccTheme = {
  //     "General": {
  //       "background": "transparent"
  //     },
  //     "Header": {
  //       "background": "transparent"
  //     }
  //   };
  //   (function() {
  //     var appName = encodeURIComponent(window.location.hostname);
  //     if (appName == "") {
  //       appName = "local";
  //     }
  //     var s = document.createElement("script");
  //     s.type = "text/javascript";
  //     s.async = true;
  //     var theUrl = baseUrl + 'serve/v2/coin/chart?fsym=' + cc +'&tsym=EUR&period=' + period + '';
  //     s.src = theUrl + (theUrl.indexOf("?") >= 0 ? "&" : "?") + "app=" + appName;
  //     embedder.parentNode.appendChild(s);
  //   })();
  // }
  // document.getElementsByClassName("centerpage")[0].innerHTML = "";
  // document.getElementsByClassName("centerpage")[0].innerHTML = "<div id='tickertest'><script src='./js/facebroek.js' type='text/javascript'>ticker('ETH','1D')</script></div>";
  // document.getElementsByClassName("centerpage")[0] = ticker("ETH","1W");
  // ticker("ETH","1W");
  // ticker("BTC","1W");
  //TEST---------------------------

  //iterates through the links that change yt video source
  for (let i = 0; i < link_Arr.length; i++) {
    document.getElementById(link_Arr[i].id).addEventListener(link_Arr[i].action, function() {
      if (!document.getElementById("youtube")) {
        emptyCenterPage();
      }
      const yt = document.getElementById("youtube");
      visiblePointerEvents();
      drawBlackBgYt();
      if (yt.src != link_Arr[i].source) {
        yt.src = link_Arr[i].source;
        showladder();
      }
    });
  }

  document.getElementById("cryptocurrency").addEventListener("click", () => {
    document.getElementsByClassName("centerpage")[0].innerHTML = "<div class='cryptopay'><img id='qrcode' src='./img/bitcoin-segwit-qr.png' alt='qr code'><p id='ccaddress'>3Myn2pJdmqsDAuqvkGXNtAcmNLzKCkxeqg</p></div>";
    visiblePointerEvents();
    drawBlackBgYt();
    showladder(); //hides ladder because YT element is gone through changing innerhtml above
  });

/*
  document.getElementById("cryptocurrency").addEventListener("click", () => {
    document.getElementsByClassName("centerpage")[0].innerHTML = "<div class='cryptopay'><a href='https://www.coinbase.com/join/5908b561825c821463959076'><img id='qrcode' src='./img/bitcoin-segwit-qr.png' alt='qr code'></a><p id='ccaddress'>3Myn2pJdmqsDAuqvkGXNtAcmNLzKCkxeqg</p></div>";
    visiblePointerEvents();
    drawBlackBgYt();
    showladder(); //hides ladder because YT element is gone through changing innerhtml above
  });
*/

  if (!isMobile.any()) {
    let smileynumber = 0;
    let happynumber = 0;
    let sadnumber = 0;
    let drawBackgroundPattern = () => {
      const viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
      const viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
      const dimension = 32;
      const bgObjectHTML = '<img class="bgfillobjects" src="./img/sad.gif" alt="sad face">';

      let outputHTML = "";
      for (let i = 0; i < Math.floor(viewportWidth / dimension); i++) {
        for (let j = 0; j < Math.floor(viewportHeight / dimension); j++) {
          outputHTML += bgObjectHTML;
          smileynumber += 1;
        }
      }
      document.getElementsByClassName("backgroundfill")[0].innerHTML = outputHTML;
    }

    let smileygame = function(int) {
      if (happynumber > 100) {} else if (int > 0) {
        happynumber += int;
      } else if (int < 0) {
        happynumber += int;
      }
    }

    drawBackgroundPattern();

    window.onresize = () => {
      drawBackgroundPattern();
    }

    document.getElementsByClassName("backgroundfill")[0].addEventListener("mouseover", function(e) {
      const target = e.target;
      if (target.getAttribute("src") === "./img/sad.gif") {
        target.src = "./img/happy.gif";
        // smileygame(1);
        // console.log("happy");
      } else if (target.getAttribute("src") === "./img/happy.gif") {
        target.src = "./img/sad.gif";
        // smileygame(-1);
        // console.log("sads");
      }
    });
  }
});
