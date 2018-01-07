import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import App from '../imports/ui/App.js';
import Navbar from '../imports/ui/navbar.js';

Meteor.startup(() => {
  // render(<Navbar />, document.getElementById('render-navbar'));
  //render(<App />, document.getElementById('render-target'));

  //startGame();

  $("#play").click( function()
           {
             startGame();
           }
      );



});

function startGame() {
  $("#TutContainer").html("<h4 class=\"scoree text-center\">Score <span id=\"minutes\">0</span><span class=\"pull-right\"><button class=\"button btn  btn-lg\" type=\"button\"  id=\"mute\"> <span class=\"glyphicon glyphicon-volume-up\"></span> </button></span></h4>");
//  setInterval(setTime, 1000);
$("#mute").click( function()
         {
           if (  $('#bgsound').prop("paused") == false) {
              $('#bgsound').trigger("pause");
                document.getElementById('exp').src = 'exp.mp3';

          } else {
                $('#bgsound').trigger("play");
                  document.getElementById('exp').src = '';

          }


         }
    );
  $.getScript('/script0.js');
}
