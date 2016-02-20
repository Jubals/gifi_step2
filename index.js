
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
	player = new YT.Player('player', {
		height: '390',
		width: '640',
		videoId: 'S5aTVfVVZjU',
		events: {
			'onReady': onPlayerReady
		}
	});

	document.getElementById("resume").onclick = function() {
		player.playVideo()
	};
	document.getElementById("pause").onclick = function() {
		player.pauseVideo()
	}

	function onPlayerReady(var) {
    var.target.playVideo()
}
}

$(document).ready(function() {
    var list = ['<option value="none" disabled selected>Select a friend</option>'];
    $.getJSON("http://learn.gifi.co.il/api/users/", function(d) {
        
        $.each(d.users, function(a, b) {
            list.push("<option value='" + b.video + "'>" + b.fullname + "</option>")
        });
        $("#users").html(list.join("")).change(function() {
            var a = $(this).val().split("v=")[1],
                b = a.indexOf("&"); - 1 != b && (a = a.substring(0, b));
            console.log(a);
            player.loadVideoById(a)
        })
    })
});