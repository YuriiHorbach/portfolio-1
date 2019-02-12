$(document).on('click', '.ourWork__button', function() {
  var $video = $('#video'),
    src = $video.attr('src');
 
  $video.attr('src', src + '&autoplay=1');
});


//almost working variant

// var tag = document.createElement('script');
// tag.src = "//www.youtube.com/iframe_api";
// var firstScriptTag = document.getElementsByTagName('script')[0];
// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// var player;

// // this function gets called when API is ready to use
// function onYouTubePlayerAPIReady() {
//   // create the global player from the specific iframe (#video)
//   player = new YT.Player('video', {
//      events: {
//             'onStateChange': onPlayerStateChange
//         }
//   });
// }

// onPlayerStateChange = function (event) {
//     if (event.data == YT.PlayerState.ENDED) {
//         $('.ourWork__button').fadeIn('normal');
//     }
// }

// $(document).on('click', '.ourWork__button', function () {
//     $(this).fadeOut('normal');
//     player.playVideo();
// });