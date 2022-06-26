(function () {
  "use strict";

  var hasTouchEvents =
    "ontouchstart" in window ||
    (window.DocumentTouch && document instanceof DocumentTouch);

  $("#simple-menu").sidr();

  $("#left-menu").sidr({
    name: "sidr-left",
    side: "left", // By default
  });

  $("#right-menu").sidr({
    name: "sidr-right",
    side: "right",
  });

  $("#existing-content-menu").sidr({
    name: "sidr-existing-content",
    source: ".documentation-header, .entry-subtitle",
  });

  if (window.location.host !== "localhost:4000") {
    $("#remote-content-menu").sidr({
      name: "sidr-remote-content",
      source:
        window.location.protocol +
        "//" +
        window.location.host +
        "/remote-menu.html",
    });
  }

  $("#callback-menu").sidr({
    name: "sidr-callback",
    source: function (name) {
      return (
        "<h1>" + name + " menu</h1><p>Yes! You can use a callback too ;)</p>"
      );
    },
  });

  $("#responsive-menu-button").sidr({
    name: "sidr-main",
    source: "#header .menu",
  });

  if (hasTouchEvents) {
    $("body").swipe({
      //Single swipe handler for left swipes
      swipeLeft: function () {
        $.sidr("close", "sidr-main");
      },
      swipeRight: function () {
        $.sidr("open", "sidr-main");
      },
      //Default is 75px, set to 0 for demo so any distance triggers swipe
      threshold: 45,
    });
  }

  /* Analytics */
  $("#download").click(function () {
    if (ga) {
      ga("send", "event", "Sidr", "Download");
    }
  });

  $(".demo.button").click(function () {
    if (ga) {
      ga("send", "event", "Sidr", "Demo", $(this).attr("href"));
    }
  });
})();
