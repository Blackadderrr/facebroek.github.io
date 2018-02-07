//A little bit more DRY-code, still too much fuckery happening though.
document.addEventListener('DOMContentLoaded', function() {

  //show ladder png that links to sources page
  const showladder = function() {
    const yt = document.getElementById("youtube");
    if (yt && yt.src === link_Arr[0].source) {
      document.getElementById("ladder").style.visibility = "visible";
    } else {
      document.getElementById("ladder").style.visibility = "hidden";
    }
  }
  const drawIntroText = () => {
    document.getElementsByClassName("centerpage")[0].innerHTML = "<p id='landingtext'>Social media cause <span>unhappiness</span>, <span>stupidity</span>, and <span>reduce concentration</span> in a surging amount of people. Companies such as Facebook hire engineers to make their platform as <span class='salivate'>addictive</span> as possible. If Pavlov's dog rings a bell, you are the dog. Unfortunately, the detrimental effects outweigh the benefits. Quit harmful social media. Most of the content is rubbish anyway.</p>";
    showladder();
  }

  drawIntroText();

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
      id: "questionmark",
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
      source: "https://www.youtube.com/embed/iLR190ZidBY?start=144&autoplay=0&rel=0&amp;showinfo=0",
      action: "click"
    },
    {
      id: "deactivate",
      source: "https://www.youtube.com/embed/y9XTLC8KHwk?autoplay=0&rel=0&amp;showinfo=0",
      action: "click"
    },
    {
      id: "musicalnote",
      source: "https://www.youtube.com/embed/uzgBD2wysuI?start=0&autoplay=1&rel=0&amp;showinfo=0",
      action: "click"
    }
  ];
  const emptyCenterPage = () => {
    document.getElementsByClassName("centerpage")[0].innerHTML = "<iframe id='youtube' src='' frameborder='0' allowfullscreen></iframe>";
  };

  const visiblePointerEvents = () => { //enables clicking on videos
    document.getElementsByClassName("centerpage")[0].style.pointerEvents = "visible"; //[0] because it returns elementS, plural
  }

  const drawBlackBgYt = () => {
    //in chrome browsers youtube flickers when changing its source. This prevents you seeing the white background, and thus the flickering.
    if (document.getElementById("youtube")) {
      document.getElementsByClassName("centerpage")[0].style.backgroundColor = "black";
    } else {
      document.getElementsByClassName("centerpage")[0].style.backgroundColor = "";
    }
  }

  //iterates through the links that change yt video source
  for (let i = 0; i < link_Arr.length; i++) {
    if (document.getElementById(link_Arr[i].id)) {
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
  }
  const triggersaliva = document.getElementById("triggersaliva");
  if (triggersaliva) {
    triggersaliva.addEventListener("mouseover", () => {
      drawIntroText();
    });
  }

  const notification = document.getElementById("triggersaliva");
  if (notification) {
    notification.addEventListener("mouseover", () => {
      document.getElementsByClassName("salivate")[0].style.backgroundColor = "rgba(255, 45, 45, 0.64)";
    });

    notification.addEventListener("mouseout", () => {
      document.getElementsByClassName("salivate")[0].style.backgroundColor = "rgba(215, 90, 90, 0)";
    });
  }

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
