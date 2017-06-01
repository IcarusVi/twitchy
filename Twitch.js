$(document).ready(function(){
  var strm = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp",
   "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
  var sword = "https://wind-bow.gomix.me/twitch-api";
  var test = sword + "/" +strm[0];
   // Trying to obtain information on a specific streamer through //
  $.getJSON(test,function(data)){

  }
  function strm_list(){
    for(i=0; i<strm.length;i++){
      $('#list').append("<p>"+strm[i]+"</p>");
    }
  }
  strm_list();
})
