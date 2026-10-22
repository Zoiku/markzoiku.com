// Live local time in Accra (GMT, no daylight saving).
(function () {
  var el = document.getElementById("clock");
  if (!el || typeof Intl === "undefined") return;

  var fmt = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Africa/Accra",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false
  });

  function tick() {
    var now = new Date();
    el.textContent = fmt.format(now) + " GMT";
    el.setAttribute("datetime", now.toISOString());
  }

  tick();
  setInterval(tick, 1000);
})();
