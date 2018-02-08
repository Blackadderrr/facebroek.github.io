//A little bit more DRY-code, still too much fuckery happening though.
document.addEventListener('DOMContentLoaded', function() {

  const randNumber = function(min, max) {
    return Math.floor((Math.random() * max) + min);
  }

  const randColor = function(minr,maxr,ming,maxg,minb,maxb){
    return "rgb(" + randNumber(minr, maxr) + "," + randNumber(ming, maxg) + "," + randNumber(minb, maxb) + ")";
  }

  const drawIntroText = () => {
    document.getElementsByClassName("centerpage")[0].innerHTML = "<p id='landingtext'>Social media cause <span>unhappiness</span>, <span>ignorance</span>, and <span>reduce concentration</span> in a surging amount of people. Companies such as Facebook hire engineers to make their platform as <span class='salivate'>addictive</span> as possible. If Pavlov's dog rings a bell, you are the dog. Unfortunately, the harmful effects outweigh the benefits. So if your brain lets you, quit.</p>";
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
      action: "mouseover"
    },
    {
      id: "deactivate",
      source: "https://www.youtube.com/embed/y9XTLC8KHwk?autoplay=0&rel=0&amp;showinfo=0",
      action: "mouseover"
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
        }
      });
    }
  }
  const showSources = document.getElementById("scale");
  if (showSources) {
    showSources.addEventListener("click", () => {
      document.getElementsByClassName("centerpage")[0].innerHTML = "<iframe class='iframe' src='./sources.html' frameborder='0' allowfullscreen></iframe>";
      drawBlackBgYt();
      // width='666' height='333'
    })
  }

  const triggersaliva = document.getElementById("triggersaliva");
  if (triggersaliva) {
    triggersaliva.addEventListener("click", () => {
      drawIntroText();
    });
  }

  const notification = document.getElementById("triggersaliva");
  if (notification) {
    notification.addEventListener("click", () => {
      document.getElementsByClassName("salivate")[0].style.backgroundColor = randColor(60,80,60,150,60,150);
      setTimeout(function () {
        document.getElementsByClassName("salivate")[0].style.backgroundColor = randColor(60,100,60,120,60,150);
      }, 50);
      setTimeout(function () {
        document.getElementsByClassName("salivate")[0].style.backgroundColor = randColor(60,120,60,150,60,150);
      }, 100);
      setTimeout(function () {
        document.getElementsByClassName("salivate")[0].style.backgroundColor = randColor(60,140,60,150,60,150);
      }, 150);
      setTimeout(function () {
        document.getElementsByClassName("salivate")[0].style.backgroundColor = randColor(60,160,60,150,60,150);
      }, 200);
      setTimeout(function () {
        document.getElementsByClassName("salivate")[0].style.backgroundColor = randColor(60,180,60,150,60,150);
      }, 250);
    });

    // notification.addEventListener("mouseout", () => {
    //   document.getElementsByClassName("salivate")[0].style.backgroundColor = "rgba(215, 90, 90, 0)";
    // });
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

    drawBackgroundPattern();

    window.onresize = () => {
      drawBackgroundPattern();
    }

    document.getElementsByClassName("backgroundfill")[0].addEventListener("mouseover", function(e) {
      const target = e.target;
      if (target.getAttribute("src") === "./img/sad.gif") {
        target.src = "./img/happy.gif";

      } else if (target.getAttribute("src") === "./img/happy.gif") {
        target.src = "./img/sad.gif";
      }
    });
  }
});
