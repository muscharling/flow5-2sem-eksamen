

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



AOS.init();

// Kontakt formular

$(function()
{
    function after_form_submitted(data)
    {
        if(data.result == 'success')
        {
            $('form#reused_form').hide();
            $('#success_message').show();
            $('#error_message').hide();
        }
        else
        {
            $('#error_message').append('<ul></ul>');

            jQuery.each(data.errors,function(key,val)
            {
                $('#error_message ul').append('<li>'+key+':'+val+'</li>');
            });
            $('#success_message').hide();
            $('#error_message').show();

            //reverse the response on the button
            $('button[type="button"]', $form).each(function()
            {
                $btn = $(this);
                label = $btn.prop('orig_label');
                if(label)
                {
                    $btn.prop('type','submit' );
                    $btn.text(label);
                    $btn.prop('orig_label','');
                }
            });

        }//else
    }

	$('#reused_form').submit(function(e)
      {
        e.preventDefault();

        $form = $(this);
        //show some response on the button
        $('button[type="submit"]', $form).each(function()
        {
            $btn = $(this);
            $btn.prop('type','button' );
            $btn.prop('orig_label',$btn.text());
            $btn.text('Sending ...');
        });


                    $.ajax({
                type: "POST",
                url: 'handler.php',
                data: $form.serialize(),
                success: after_form_submitted,
                dataType: 'json'
            });

      });
});

// Script til Signup form inkl. formvalidering
// Disable form submissions if there are invalid fields
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Get the forms we want to add validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();




// Filtrering af knapper på Tutorial siden //


function showAll(){
  document.getElementById("daisy1_tutorials").style.display = "block";
  document.getElementById("freya1_tutorials").style.display = "block";
  document.getElementById("evie1_tutorials").style.display = "block";
  document.getElementById("evie2_tutorials").style.display = "block";
  document.getElementById("mia1_tutorials").style.display = "block";
  document.getElementById("gilly_tutorials").style.display = "block";

  document.getElementById("showall").style.backgroundColor = "#cdb2da";
  document.getElementById("oreringe").style.backgroundColor = "#fbeeadf5";
  document.getElementById("armband").style.backgroundColor = "#fbeeadf5";

}

//Denne tager fat i knappen "øreringe" og viser øreringer dvs. daisy oreringe (display block). De andre for display none og bliver derfor ikke vist på siden
function oreringe(){
  document.getElementById("daisy1_tutorials").style.display = "block";
  document.getElementById("freya1_tutorials").style.display = "none";
  document.getElementById("evie1_tutorials").style.display = "block";
  document.getElementById("evie2_tutorials").style.display = "block";
  document.getElementById("mia1_tutorials").style.display = "none";
  document.getElementById("gilly_tutorials").style.display = "none";

  document.getElementById("showall").style.backgroundColor = "#fbeeadf5";
  document.getElementById("oreringe").style.backgroundColor = "#cdb2da";
  document.getElementById("armband").style.backgroundColor = "#fbeeadf5";
}

function armband(){
  document.getElementById("daisy1_tutorials").style.display = "none";
  document.getElementById("freya1_tutorials").style.display = "block";
  document.getElementById("evie1_tutorials").style.display = "none";
  document.getElementById("evie2_tutorials").style.display = "none";
  document.getElementById("mia1_tutorials").style.display = "block";
  document.getElementById("gilly_tutorials").style.display = "block";

  document.getElementById("showall").style.backgroundColor = "#fbeeadf5";
  document.getElementById("oreringe").style.backgroundColor = "#fbeeadf5";
  document.getElementById("armband").style.backgroundColor = "#cdb2da";

}

// slut af filtrerings knapper //
