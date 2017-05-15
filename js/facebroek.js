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
      source: "https://www.youtube.com/embed/3HH9IiHMD2M?start=17&autoplay=1&rel=0&amp;showinfo=0",
      action: "click"
    },
    {
      id: "musicalnote",
      source: "https://www.youtube.com/embed/oXUj4okEAZg?start=0&autoplay=1&rel=0&amp;showinfo=0",
      action: "click"
    }
  ];
  const emptyCenterPage = () => {
    document.getElementsByClassName("centerpage")[0].innerHTML = "<iframe id='youtube' src='' frameborder='0' allowfullscreen></iframe>";
  };
  const visiblePointerEvents = () => {
    document.getElementsByClassName("centerpage")[0].style.pointerEvents = "visible"; //[0] because it returns elementS, plural
  }
  emptyCenterPage();

  //show ladder png that links to sources page
  document.onclick = function() {
    const yt = document.getElementById("youtube");
    if (yt && yt.src === link_Arr[0].source) {
      document.getElementById("ladder").style.visibility = "visible";
    } else {
      //document.getElementById("ladder").style.visibility = "hidden";
    }
  }
  //iterates through the links that change yt video source
  for (let i = 0; i < link_Arr.length; i++) {
    document.getElementById(link_Arr[i].id).addEventListener(link_Arr[i].action, function() {
      if (!document.getElementById("youtube")) {
        emptyCenterPage();
      }
      const yt = document.getElementById("youtube");
      visiblePointerEvents();
      if (yt.src != link_Arr[i].source) {
        yt.src = link_Arr[i].source;
      }
    });
  }

  document.getElementById("bitcoin").addEventListener("click", () => {
    visiblePointerEvents();
    document.getElementsByClassName("centerpage")[0].innerHTML = "<div class='bitcoin'><img id='qrcode' src='./img/bitcoinqr.png' width='0' height='0' alt='bitcoin qr code'><p id='bcaddress'>1AKLdrqC4mngw5m5<br>5HTtZEY3mtTuxySgb</p></div>";
  });

  if (!isMobile.any()) {
    let drawBackgroundPattern = () => {
      const viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
      const viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
      const width = 21;
      const height = 21;
      const fsize = 1.5;
      const margin = 0;
      const bgObjectHTML = "<div style='margin:" + margin + "px; height:" + (height - (2 * margin)) + "px; width:" + (width - (2 * margin)) + "px' class='bgfillobject'><p style='font-size: " + fsize + "em'>♥</p></div>";
      let outputHTML = "";
      for (let i = 0; i < Math.floor(viewportWidth / width); i++) {
        for (let j = 0; j < Math.floor(viewportHeight / height); j++) {
          outputHTML += bgObjectHTML;
        }
      }
      document.getElementsByClassName("backgroundfill")[0].innerHTML = outputHTML;
    }

    drawBackgroundPattern();

    window.onresize = () => {
      drawBackgroundPattern();
    }

    document.getElementsByClassName("backgroundfill")[0].addEventListener("mouseover", function(e) {
      const target = e.target;
      const prettyColorIsABadVariableName = "rgb(255, 185, 179)";
      const rareColor = "rgb(255, 0, 0)";
      if (Math.floor(Math.random() * 1000000) === 42 && target.style.color != rareColor && target.style.color != prettyColorIsABadVariableName) {
        target.style.color = rareColor;
        alert("You found the one in a million heart.\nOne of the best songs in the world is yours.");
        visiblePointerEvents();
        const yt = document.getElementById("youtube");
        yt.src = "https://www.youtube.com/embed/cW2bqBhP4AA?start=0&autoplay=1&rel=0&amp;showinfo=0";
      } else if (target.style.color != prettyColorIsABadVariableName && target.style.color != rareColor) {
        target.style.color = prettyColorIsABadVariableName;
      } else if (target.style.color != rareColor) {
        target.style.color = "rgb(228, 228, 228)";
      }
    })
  }
});
