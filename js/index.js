function openInfo(evt, textInfo) {
    var i, x, tablinks;
    x = document.getElementsByClassName("info");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" kp-red", "");
    }
    document.getElementById(textInfo).style.display = "block";
    evt.currentTarget.className += " kp-red";
  }