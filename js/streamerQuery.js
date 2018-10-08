var streamerList = [ "seesharpist", "thurdi_", "jeepguy_gaming", "techgeddon", "beardsyndicate", "elstar" ];
var iframebegin = '<iframe width="500" height="281" src="https://player.twitch.tv/?channel=' ;
var iframeend = '" frameborder="0" allowfullscreen="true" scrolling="no"></iframe>';
var logobegin = '<img src="';
var logoend = '">';


function CheckOnlineStatus(channelName, counter)
{
  $.ajax({
	url: "https://api.twitch.tv/kraken/streams/" + channelName,
	dataType: 'json',
	headers: {
	  'Client-ID': '53dfawrdk6tro92c2d7uiqqopujhoi'
	},
	success: function(channel){
		   if (channel["stream"] == null)
		{
			$.ajax({
				url: "https://api.twitch.tv/kraken/channels/" + channelName,
				dataType: 'json',
				headers: {
				  'Client-ID': '53dfawrdk6tro92c2d7uiqqopujhoi'
				},
				success: function(channel){
					appendText = logobegin + channel.logo + logoend;
					var tmp = "#" + String(counter);
					var streamer = $(tmp);
					streamer.append(appendText);
				}
			});
		} else {
			appendText = iframebegin + channelName + iframeend;
			var tmp = "#" + String(counter);
			var streamer = $(tmp);
			streamer.append(appendText);
		}
	}

  });
}

$(document).ready(function(){
	var counter = 1;
	for(i=1; i<streamerList.length+1; i++){
			var ul = $(".carousel")
			if(i==1){
				ul.append('<li class="items main-pos" id="'+i+'"></li>');
			}
			else if(i==2){
				ul.append('<li class="items right-pos" id="'+i+'"></li>');
			}
			else if(i==streamerList.length){
				ul.append('<li class="items left-pos" id="'+i+'"></li>');
			}
			else{
				ul.append('<li class="items back-pos" id="'+i+'"></li>');
			}
	}
	streamerList.forEach(function(element){
		CheckOnlineStatus(element, counter);

		
		
		
	counter++;
	});	
});
/*

*/