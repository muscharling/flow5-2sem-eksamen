

//Go-to-top knap - javascript
  //Henter knappen med unikt id"myBtn" - kanppen styles i css.
  var mybutton = document.getElementById("myBtn");

  // Når bruger scroller 20px ned i dokumentet, vises knappen
  window.onscroll = function() {
    scrollFunction()
  };

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  // Når brugeren trykker på knappen, scroller siden tilbage til toppen.
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
