//Messy code, bad practice for large projects (or any project actually)
document.addEventListener('DOMContentLoaded', function() {
  let isFirefox = 0;
  if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
    isFirefox = 1;
  }

  const randNumber = function(min, max) {
    return Math.floor((Math.random() * max) + min);
  };

  const randColor = function(minr, maxr, ming, maxg, minb, maxb) {
    return "rgb(" + randNumber(minr, maxr) + "," + randNumber(ming, maxg) + "," + randNumber(minb, maxb) + ")";
  };
  //mucking about, no idea what I'm doing with the numbers, yet

  const cycleThreeColors = function(number, max, opacity) {
    const clrNr = number * 39;
    const maxNr = max;
    if (clrNr) {
      // console.log(clrNr);
      // console.log(Math.floor(Math.abs(Math.sin(clrNr/maxNr)*maxNr)));

      const returnColor = "rgba(" +
        Math.floor(Math.abs(Math.sin(1 / 3 * clrNr / maxNr + 1) * maxNr)) + "," +
        Math.floor(Math.abs(Math.sin(1 / 3 * clrNr / maxNr + 3) * maxNr)) + "," + Math.floor(Math.abs(Math.sin(1 / 3 * clrNr / maxNr - 1) * maxNr)) + "," +
        opacity + ")";

      // console.log(returnColor);
      return returnColor;
    }
  };

  // const cycleThreeColors = function(number, max, opacity) {
  //   const clrNr = number * 10;
  //   const maxNr = max;
  //   if (clrNr) {
  //     // console.log(Math.sin(number));
  //     return "rgba(" + Math.floor(Math.sin(clrNr / maxNr + 10) * 201) + "," + Math.floor(Math.sin(clrNr / maxNr + 1) * 255) + "," + Math.floor(Math.sin(clrNr / maxNr + 2) * 255) + "," + opacity + ")";
  //   }
  // }

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
    // {
    //   id: "foto",
    //   source: "https://www.youtube.com/embed/buqtdpuZxvk?start=1&autoplay=1&rel=0&amp;showinfo=0",
    //   action: "click"
    // },
    {
      id: "delete",
      source: "https://www.youtube.com/embed/iLR190ZidBY?start=144&autoplay=1&rel=0&amp;showinfo=0",
      action: "click"
    },
    {
      id: "deactivate",
      source: "https://www.youtube.com/embed/y9XTLC8KHwk?autoplay=0&rel=1&amp;showinfo=0",
      action: "click"
    },
    {
      id: "notyourfault",
      source: "https://www.youtube.com/embed/GtkST5-ZFHw?start=24&autoplay=1&rel=1&amp;showinfo=0",
      action: "click"
    },
    {
      id: "musicalnote",
      source: "https://www.youtube.com/embed/uzgBD2wysuI?start=0&autoplay=1&rel=0&amp;showinfo=0",
      action: "click"
    }
  ];

  const iterateLinks = () => {
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
  }

  const notification = document.getElementById("triggersaliva");

  const showSources = () => {
    const showsourcesbutton = document.getElementById("scale");
    showsourcesbutton.addEventListener("click", () => {
      document.getElementsByClassName("centerpage")[0].innerHTML = "<iframe class='iframe' src='./sources.html' frameborder='0' allowfullscreen></iframe>";
      drawBlackBgYt();
    });
  }

  const showProfile = () => {
    const showprofilebutton = document.getElementById("foto");
    showprofilebutton.addEventListener("click", () => {
      document.getElementsByClassName("centerpage")[0].innerHTML = "<iframe class='iframe' src='./about.html' frameborder='0' allowfullscreen></iframe>";
      drawBlackBgYt();
    });
  }

  const drawIntroText = () => {
    document.getElementsByClassName("centerpage")[0].style.backgroundColor = "rgba(0,0,0,0)"; //bg color was wrong due to transparency of introtext and black yt bg still being visible
    const factIntroMessage = "<p id='landingtext'>Social media cause <span>unhappiness</span>, <span>ignorance</span>, and <span>reduce concentration</span> in a surging amount of people. Companies such as Facebook employ engineers to make their platform as addictive as possible; you are Pavlov's dog. Unfortunately the harmful effects outweigh the benefits. If you think this is exaggerated,<span class='notifhighlight'> read the sources.</span></p>";
    const pathosIntroMessage = "<span>Unhappy</span>, <span>angry</span>, or <span>misled</span> by social media? <span class='notifhighlight'>Compelled to click</span> the notifications or scroll the newsfeed? <span id='notyourfault'> It's not your fault!</span> Attention engineers are making their platform as addictive as possible.<span class='notifhighlight'> Please, read the sources.</span>";
    document.getElementsByClassName("centerpage")[0].innerHTML = "<p id='landingtext'>" + pathosIntroMessage + "</p>";
    iterateLinks(); //just for the easter egg.
    showSources(); //so the showsources button works again after reloading the text
    showProfile();
  };


  if (notification) {
    notification.addEventListener("click", () => {
      drawIntroText();

    });
  }
  if (document.getElementsByClassName("centerpage")[0]) {
    drawIntroText();
  }

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

  const emptyCenterPage = () => {
    document.getElementsByClassName("centerpage")[0].innerHTML = "<iframe id='youtube' src='' frameborder='0' allowfullscreen></iframe>";
  };

  const visiblePointerEvents = () => { //enables clicking on videos
    document.getElementsByClassName("centerpage")[0].style.pointerEvents = "visible"; //[0] because it returns elementS, plural
  };

  const drawBlackBgYt = () => {
    //in chrome browsers youtube flickers when changing its source. This prevents you seeing the white background, and thus the flickering.
    if (document.getElementById("youtube")) {
      document.getElementsByClassName("centerpage")[0].style.backgroundColor = "black";
    } else {
      document.getElementsByClassName("centerpage")[0].style.backgroundColor = "";
    }
  };

  //iterates through the links that change yt video source
  iterateLinks();

  if (notification) {
    notification.addEventListener("click", () => {
      for (let i = 0; i < document.getElementsByClassName("notifhighlight").length; i++) {
        document.getElementsByClassName("notifhighlight")[i].style.backgroundColor = randColor(1, 255, 1, 255, 1, 255, 1);
        document.getElementsByClassName("notifhighlight")[i].style.color = "white";

        setTimeout(function() {
          document.getElementsByClassName("notifhighlight")[i].style.backgroundColor = "rgba(250, 62, 62, 1)";
        }, 50);
      }
    });

    notification.addEventListener("mouseout", () => {
      if (document.getElementsByClassName("notifhighlight")) {
        for (let i = 0; i < document.getElementsByClassName("notifhighlight").length; i++) {
          document.getElementsByClassName("notifhighlight")[i].style.backgroundColor = "rgba(0, 0, 0, 0)";
          document.getElementsByClassName("notifhighlight")[i].style.color = "black";

        }
      }
    });
  }

  if (!isMobile.any()) {
    // Copied the core functionality from: https://stackoverflow.com/questions/7790725/javascript-track-mouse-position; http://output.jsbin.com/gejuz/1
    // The color part is mine, that's why it's shitty code.
    if (document.getElementById("derpytest")) {
      document.onmousemove = handleMouseMove;
      let colorCount = 255;
      let decrementor = -1;
      let dotsize = 30;
      let multiplier = 1.1;
      let maxDots = 21;
      let minDotSize = 12;
      let maxDotSize = minDotSize * minDotSize;

      function handleMouseMove(event) {
        let dot, eventDoc, doc, body, pageX, pageY;
        const viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        const viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        event = event || window.event; // IE-ism

        // If pageX/Y aren't available and clientX/Y
        // are, calculate pageX/Y - logic taken from jQuery
        // Calculate pageX/Y if missing and clientX/Y available
        if (event.pageX == null && event.clientX != null) {
          eventDoc = (event.target && event.target.ownerDocument) || document;
          doc = eventDoc.documentElement;
          body = eventDoc.body;

          event.pageX = event.clientX +
            (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
            (doc && doc.clientLeft || body && body.clientLeft || 0);
          event.pageY = event.clientY +
            (doc && doc.scrollTop || body && body.scrollTop || 0) -
            (doc && doc.clientTop || body && body.clientTop || 0);

        }
        //start: not from original source
        if (colorCount == 255) {
          decrementor = -1;
        } else if (colorCount == 0) {
          decrementor = 1;
        }
        colorCount += decrementor;
        //end
        // Add a dot to follow the cursor

        if (dotsize > maxDotSize) {
          multiplier = 0.97;
        } else if (dotsize < minDotSize) {
          multiplier = 1.04;
        }
        dotsize *= multiplier;
        // console.log(dotsize);
        dot = document.createElement('div');
        dot.className = "dot";
        dot.style.left = event.pageX - Math.floor(dotsize / 2) + "px";
        dot.style.top = event.pageY - Math.floor(dotsize / 2) + "px";
        dot.style.width = dotsize + "px";
        dot.style.height = dotsize + "px";
        dot.style.backgroundColor = cycleThreeColors(colorCount, 255, 0.09); //not from original source
        document.body.appendChild(dot);
        let drawnDots = document.getElementsByClassName("dot");
        if (drawnDots.length > maxDots) {
          drawnDots[0].parentNode.removeChild(drawnDots[0]);
        }
      } //end handle mouse
    }

    if (!document.getElementById("about") && false) {
      //Smiley background
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
      };

      drawBackgroundPattern();

      window.onresize = () => {
        drawBackgroundPattern();
      };

      document.getElementsByClassName("backgroundfill")[0].addEventListener("mouseover", function(e) {
        const target = e.target;
        if (target.getAttribute("src") === "./img/sad.gif") {
          target.src = "./img/happy.gif";

        } else if (target.getAttribute("src") === "./img/happy.gif") {
          target.src = "./img/sad.gif";
        }
      }); //end smiley background
    }
  }
});
