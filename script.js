let theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

if( theme == 'dark' ){
    document.documentElement.classList.add('dark')
}

document.getElementById('dark-mode-toggle').addEventListener('click', function(){
   document.documentElement.classList.toggle('dark')
});



document.getElementById('song-saved').addEventListener('click', function(){
	document.getElementById('song-saved').classList.toggle('saved');
});


Amplitude.init({
    "bindings": {
        37: 'prev',
        39: 'next',
        32: 'play_pause'
    },
    "callbacks": {
        timeupdate: function(){
            let percentage = Amplitude.getSongPlayedPercentage();

            if( isNaN( percentage ) ){
                percentage = 0;
            }

            /**
             * Massive Help from: https://nikitahl.com/style-range-input-css
             */
            let slider = document.getElementById('song-percentage-played');
            slider.style.backgroundSize = percentage + '% 100%';
        }
    },
    "songs": [
		{
			"name": "Ad Astra",
			"artist": "Atom Loves You",
			"album": "Ad Astra per Astra",
			"url": "https://assets.codepen.io/6566924/Bright%2C+Tense+Lead.wav",
			"cover_art_url": "https://assets.codepen.io/6566924/Ad+Astra+per+Aspera+Cover+01.png"
		},
		{
			"name": "Tweeters, Woofers, Heavy Metal",
			"artist": "Atom Loves You",
			"album": "Ad Astra per Astra",
			"url": "https://assets.codepen.io/6566924/Tweeters-Woofers-Heavy-Metal.mp3",
			"cover_art_url": "https://assets.codepen.io/6566924/Ad+Astra+per+Aspera+Cover+Tweeters%2C+Woofers%2C+Heavy+Metal.png"
		},
		{
			"name": "143 Nao",
			"artist": "Atom Loves You",
			"album": "Ad Astra per Astra",
			"url": "https://assets.codepen.io/6566924/143+Nao+.mp3",
			"cover_art_url": "https://assets.codepen.io/6566924/Ad+Astra+per+Aspera+Cover+01.png"
		},
		{
			"name": "Summer of George",
			"artist": "Atom Loves You",
			"album": "Ad Astra per Astra",
			"url": "https://assets.codepen.io/6566924/Summer-of-George-2023.mp3",
			"cover_art_url": "https://assets.codepen.io/6566924/Ad+Astra+per+Aspera+Cover+Summer+of+George.png"
		},
		{
			"name": "02",
			"artist": "Atom Loves You",
			"album": "Ad Astra per Astra",
			"url": "https://521dimensions.com/song/Anthem-Emancipator.mp3",
			"cover_art_url": "https://assets.codepen.io/6566924/Ad+Astra+per+Aspera+Cover+01.png"
		}
    ]
});

window.onkeydown = function(e) {
    return !(e.keyCode == 32);
};