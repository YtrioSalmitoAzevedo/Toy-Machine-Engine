var song = (function(d,w) {
	
		var rSong, pSong,
			audio  = d.createElement("AUDIO"),
			audio2 = d.createElement("AUDIO"),
			audio3 = d.createElement("AUDIO"),
			source = d.createElement("SOURCE"),
			source2= d.createElement("SOURCE"),
			source3= d.createElement("SOURCE");

			function Song(list,l, m) {
					source.src   = list.src;
					source.type  = list.type;
					
					source2.src  = l.src;
					source2.type = l.type;

					source3.src  = m.src;
					source3.type = m.type;

					audio.appendChild(source);
					audio2.appendChild(source2);
					audio3.appendChild(source3);

					d.body.appendChild(audio);
					d.body.appendChild(audio2);
					d.body.appendChild(audio3);
			};

			rSong = new Song({src : "../Songs/shoot.wav", type : "audio/wav"},
				{src : "../Songs/wizard_House.mp3", type : "audio/mp3"},
				{src : "../Songs/invaderkilled.wav", type : "audio/wav"});
			
			pSong = Song.prototype;

			pSong.playAudio=(function() {
				audio.play(); 
			});

			pSong.destroySong=(function() {
				audio3.play();
			});

			w.addEventListener("load",function() {
				audio2.loop=true;
				audio2.volume=0.5;
				audio2.play();
			});

			pSong.stopAudio=(function() {});

		return {
			instance : rSong
		};	

}(document,window));