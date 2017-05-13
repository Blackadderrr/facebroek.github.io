//ugly ass non-DRY code, not so much doge

$(document).ready(function() {

  $(".centerpage").html("<iframe id='youtube' src='' frameborder='0' allowfullscreen></iframe>");

  const emptyCenterPage = function() {
    $(".centerpage").css("pointer-events", "visible");
    if (document.getElementById("youtube") === null) {
      $(".centerpage").html("<iframe id='youtube' src='' frameborder='0' allowfullscreen></iframe>");
    }
  };

  $("#quitfacebook").on("click", function() {
    emptyCenterPage();
    const source = "https://www.youtube.com/embed/3E7hkPZ-HTk?start=11&autoplay=1&rel=0&amp;showinfo=0";
    if ($("#youtube").attr("src") != source) {
      $("#youtube").attr("src", source);
    }
  });

  $("#delete").on("mouseover", function() {
    emptyCenterPage();
    const source = "https://www.youtube.com/embed/4wvpdBnfiZo?start=2&autoplay=1&rel=0&amp;showinfo=0";
    if ($("#youtube").attr("src") != source) {
      $("#youtube").attr("src", source);
    }
  });

  $("#deactivate").on("mouseover", function() {
    emptyCenterPage();
    const source = "https://www.youtube.com/embed/y9XTLC8KHwk?autoplay=1&rel=0&amp;showinfo=0";
    if ($("#youtube").attr("src") != source) {
      $("#youtube").attr("src", source);
    }
  });

  $("#questionmark").on("click", function() {
    emptyCenterPage();
    const source = "https://www.youtube.com/embed/3HH9IiHMD2M?start=17&autoplay=1&rel=0&amp;showinfo=0";
    if ($("#youtube").attr("src") != source) {
      $("#youtube").attr("src", source);
    }
  });

  $("#musicalnote").on("click", function() {
    emptyCenterPage();
    const source = "https://www.youtube.com/embed/oXUj4okEAZg?start=0&autoplay=1&rel=0&amp;showinfo=0";
    if ($("#youtube").attr("src") != source) {
      $("#youtube").attr("src", source);
    }
  });

  $("#bitcoin").on("click", function() {
    $(".centerpage").css("pointer-events", "visible");
    $(".centerpage").html("<div class='bitcoin'><img id='qrcode' src='./img/bitcoinqr.png' width='0' height='0' alt='bitcoin qr code'><p id='bcaddress'>1AKLdrqC4mngw5m5<br>5HTtZEY3mtTuxySgb</p></div>");
  });

  var isMobile = {
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

  if (!isMobile.any()) {
    let drawBackgroundPattern = function() {
      const width = 21;
      const height = 21;
      const fsize = 1.5;
      const margin = 0;
      const viewportWidth = $(window).width();
      const viewportHeight = $(window).height();
      const bgObjectHTML = "<div style='margin:" + margin + "px; height:" + (height - (2 * margin)) + "px; width:" + (width - (2 * margin)) + "px' class='bgfillobject'><p style='font-size: " + fsize + "em'>♥</p></div>";
      let outputHTML = "";
      for (let i = 0; i < Math.floor(viewportWidth / width); i++) {
        for (let j = 0; j < Math.floor(viewportHeight / height); j++) {
          outputHTML += bgObjectHTML;
        }
      }
      $(".backgroundfill").html(outputHTML);
    }

    drawBackgroundPattern();

    $(window).resize(function() {
      drawBackgroundPattern();
    });


    $(".backgroundfill").mouseover(function(e) {
      const target = e.target;
      let prettyColorIsABadVariableName = "rgb(255, 185, 179)";
      // target.style.color = "red";
      if (target.style.color != prettyColorIsABadVariableName) {
        target.style.color = prettyColorIsABadVariableName;
      } else {
        target.style.color = "rgb(228, 228, 228)";
      }
    });
  }
});
