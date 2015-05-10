soundManager.setup({
  url: 'swf/',
  onready: function(){

$("#countBlocks").on("click", function(){
  var mySound = soundManager.createSound({
  url: 'audio_files/block.mp3'
  });
  mySound.play();

});
 $("#one").on("click", function(){
  var mySound = soundManager.createSound({
  url: 'audio_files/one.mp3'
  });
  mySound.play();
});

  $("#two").on("click", function(){
  var mySound = soundManager.createSound({
  url: 'audio_files/two.mp3'
  });
  mySound.play();

})

 $("#three").on("click", function(){
  var mySound = soundManager.createSound({
  url: 'audio_files/three.mp3'
  });
  mySound.play();

})

  $("#four").on("click", function(){
  var mySound = soundManager.createSound({
  url: 'audio_files/four.mp3'
  });
  mySound.play();

})

   $("#five").on("click", function(){
  var mySound = soundManager.createSound({
  url: 'audio_files/five.mp3'
  });
  mySound.play();

})

    $("#six").on("click", function(){
  var mySound = soundManager.createSound({
  url: 'audio_files/six.mp3'
  });
  mySound.play();

})

   $("#seven").on("click", function(){
  var mySound = soundManager.createSound({
  url: 'audio_files/seven.mp3'
  });
  mySound.play();

})

   $("#eight").on("click", function(){
  var mySound = soundManager.createSound({
  url: 'audio_files/eight.mp3'
  });
  mySound.play();
})

   $("#nine").on("click", function(){
  var mySound = soundManager.createSound({
  url: 'audio_files/nine.mp3'
  });
  mySound.play();

})

   $("#ten").on("click", function(){
  var mySound = soundManager.createSound({
  url: 'audio_files/ten.mp3'
  });
  mySound.play();

})

  },
  ontimeout: function(){
  }
});


// $('#countBlocks').on("click", function(){
//   console.log("click");
// //   var output =  + $(this).attr('id');
// //   $('p').text(output);
// });

