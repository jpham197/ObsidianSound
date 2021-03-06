document.addEventListener('keydown', function () {
	/*var ctx = new AudioContext();
	var audio;
	var audioSrc = ctx.createMediaElementSource(audio);
	var analyser = ctx.createAnalyser();
			analyser.fftSize = 256;

	audioSrc.connect(analyser);
	audioSrc.connect(ctx.destination);
	var frequencyData = new Uint8Array(analyser.frequencyBinCount);
	/////////////
	var audio;
	var fft;
	var canvas = document.getElementById('canvass');

	function setup(){
		colorMode(HSB);
		fft = new p5.FFT(.9,128);
		w = 55.56%/64;
	}

	function draw(){
		background(0);
		var spect = fft.analyze();
		stroke(255);
		for(var i = 0; i < spect.length; i++){
			var amp = spectrum[i];
			var y = map(amp,0, 256, height, 0);
			rect( i * w, y , w - 2 , 500 - y );
		}
	}*/

	//1 2 3 4 5 6 BUTTONS HERE
	if (event.keyCode == 49) { // this is 1
			document.getElementById("sound1").play();
			document.getElementById('oneButton').style.background = 'white';
			document.getElementById('oneButton').style.borderColor = 'skyblue';
			document.getElementById('oneButton').style.color = 'red';
	}
	if (event.keyCode == 50) { // this is 2
			document.getElementById("sound2").play();
			document.getElementById('twoButton').style.background = 'white';
			document.getElementById('twoButton').style.borderColor = 'skyblue';
			document.getElementById('twoButton').style.color = 'red';
	}
	if (event.keyCode == 51) { // this is 3
			document.getElementById("sound3").play();
			document.getElementById('threeButton').style.background = 'white';
			document.getElementById('threeButton').style.borderColor = 'skyblue';
			document.getElementById('threeButton').style.color = 'red';
	}
	if (event.keyCode == 52) { // this is 4
			document.getElementById("sound4").play();
			document.getElementById('fourButton').style.background = 'white';
			document.getElementById('fourButton').style.borderColor = 'skyblue';
			document.getElementById('fourButton').style.color = 'red';
	}
	if (event.keyCode == 53) { // this is 5
			document.getElementById("sound5").play();
			document.getElementById('fiveButton').style.background = 'white';
			document.getElementById('fiveButton').style.borderColor = 'skyblue';
			document.getElementById('fiveButton').style.color = 'red';
	}
	if (event.keyCode == 54) { // this is 6
			document.getElementById("sound6").play();
			document.getElementById('sixButton').style.background = 'white';
			document.getElementById('sixButton').style.borderColor = 'skyblue';
			document.getElementById('sixButton').style.color = 'red';
	}
	// Q W E R T Y BUTTONS HERE
	if (event.keyCode == 81 || event.keyCode == 113) { // this is Q
			document.getElementById("sound7").play();
			document.getElementById('qButton').style.background = 'white';
			document.getElementById('qButton').style.borderColor = 'skyblue';
			document.getElementById('qButton').style.color = 'red';
	}
	if (event.keyCode == 87 || event.keyCode == 119) { // this is W
			document.getElementById("sound8").play();
			document.getElementById('wButton').style.background = 'white';
			document.getElementById('wButton').style.borderColor = 'skyblue';
			document.getElementById('wButton').style.color = 'red';
	}
	if (event.keyCode == 69 || event.keyCode == 101) { // this is E
			document.getElementById("sound9").play();
			document.getElementById('eButton').style.background = 'white';
			document.getElementById('eButton').style.borderColor = 'skyblue';
			document.getElementById('eButton').style.color = 'red';
	}
	if (event.keyCode == 82 || event.keyCode == 114) { // this is R
			document.getElementById("sound10").play();
			document.getElementById('rButton').style.background = 'white';
			document.getElementById('rButton').style.borderColor = 'skyblue';
			document.getElementById('rButton').style.color = 'red';
	}
	if (event.keyCode == 84 || event.keyCode == 116) { // this is T
			document.getElementById("sound11").play();
			document.getElementById('tButton').style.background = 'white';
			document.getElementById('tButton').style.borderColor = 'skyblue';
			document.getElementById('tButton').style.color = 'red';
	}
	if (event.keyCode == 121 || event.keyCode == 89) { // this is Y
			document.getElementById("sound12").play();
			document.getElementById('yButton').style.background = 'white';
			document.getElementById('yButton').style.borderColor = 'skyblue';
			document.getElementById('yButton').style.color = 'red';
	}


	// A S D F G H BUTTONS HERE
	if (event.keyCode == 97 || event.keyCode == 65) { // this is a
			document.getElementById("sound13").play();
			document.getElementById('aButton').style.background = 'white';
			document.getElementById('aButton').style.borderColor = 'skyblue';
			document.getElementById('aButton').style.color = 'red';
	}
	if (event.keyCode == 115 || event.keyCode == 83) { // this is s
			document.getElementById("sound14").play();
			document.getElementById('sButton').style.background = 'white';
			document.getElementById('sButton').style.borderColor = 'skyblue';
			document.getElementById('sButton').style.color = 'red';
	}
	if (event.keyCode == 100 || event.keyCode == 68) { // this is d
			document.getElementById("sound15").play();
			document.getElementById('dButton').style.background = 'white';
			document.getElementById('dButton').style.borderColor = 'skyblue';
			document.getElementById('dButton').style.color = 'red';
	}
	if (event.keyCode == 102 || event.keyCode == 70) { // this is f
			document.getElementById("sound16").play();
			document.getElementById('fButton').style.background = 'white';
			document.getElementById('fButton').style.borderColor = 'skyblue';
			document.getElementById('fButton').style.color = 'red';
	}
	if (event.keyCode == 103 || event.keyCode == 71) { // this is g
			document.getElementById("sound22").play();
			document.getElementById('gButton').style.background = 'white';
			document.getElementById('gButton').style.borderColor = 'skyblue';
			document.getElementById('gButton').style.color = 'red';
	}
	if (event.keyCode == 104 || event.keyCode == 72) { // this is h
			document.getElementById("sound23").play();
			document.getElementById('hButton').style.background = 'white';
			document.getElementById('hButton').style.borderColor = 'skyblue';
			document.getElementById('hButton').style.color = 'red';
	}

	// Z X C V B N BUTTONS HERE
	if (event.keyCode == 122 || event.keyCode == 90) { // this is z
			document.getElementById("sound24").play();
			document.getElementById('zButton').style.background = 'white';
			document.getElementById('zButton').style.borderColor = 'skyblue';
			document.getElementById('zButton').style.color = 'red';
	}
	if (event.keyCode == 120 || event.keyCode == 88) { // this is x
			document.getElementById("sound18").play();
			document.getElementById('xButton').style.background = 'white';
			document.getElementById('xButton').style.borderColor = 'skyblue';
			document.getElementById('xButton').style.color = 'red';
	}
	if (event.keyCode == 99 || event.keyCode == 67) { // this is c
			document.getElementById("sound19").play();
			document.getElementById('cButton').style.background = 'white';
			document.getElementById('cButton').style.borderColor = 'skyblue';
			document.getElementById('cButton').style.color = 'red';
	}
	if (event.keyCode == 118 || event.keyCode == 86) { // this is v
			document.getElementById("sound20").play();
			document.getElementById('vButton').style.background = 'white';
			document.getElementById('vButton').style.borderColor = 'skyblue';
			document.getElementById('vButton').style.color = 'red';
	}
	if (event.keyCode == 98 || event.keyCode == 66) { // this is b
			document.getElementById("sound21").play();
			document.getElementById('bButton').style.background = 'white';
			document.getElementById('bButton').style.borderColor = 'skyblue';
			document.getElementById('bButton').style.color = 'red';
	}
	if (event.keyCode == 110 || event.keyCode == 78) { // this is n
			document.getElementById("sound25").play();
			document.getElementById('nButton').style.background = 'white';
			document.getElementById('nButton').style.borderColor = 'skyblue';
			document.getElementById('nButton').style.color = 'red';
	}


	if (event.keyCode == 190) {
		for (a = 1; a <= 24; a++) {
			if (document.getElementById(''+a).style.color === 'rgba(56, 0, 129, 0)') {
				let b = document.getElementById(''+a).style.color = 'rgba(56, 0, 129, 1)';
				console.log(b);
			} else {
				let b = document.getElementById(''+a).style.color = 'rgba(56, 0, 129, 0)';
				console.log(b);
			}
		}
	}
});

document.addEventListener('keyup', function () {
	// 1 2 3 4 5 6 BUTTONS
	if (event.keyCode == 49) { // this is 1
			document.getElementById("sound1").load();
			document.getElementById("sound1").play();
			document.getElementById('oneButton').style.background = 'radial-gradient(circle,white, gray)';
			document.getElementById('oneButton').style.borderColor = 'red';
			document.getElementById('oneButton').style.color = 'blue';

	}
	if (event.keyCode == 50) { // this is 2
		// document.getElementById("sound6").load();
		document.getElementById("sound2").play();
		document.getElementById("sound2").play();
		document.getElementById('twoButton').style.background = 'radial-gradient(circle,white, gray)';
		document.getElementById('twoButton').style.borderColor = 'red';
		document.getElementById('twoButton').style.color = 'blue';
	}
	if (event.keyCode == 51) { // this is 3
		document.getElementById("sound3").load();
		document.getElementById("sound3").play();
		document.getElementById('threeButton').style.background = 'radial-gradient(circle,white, gray)';
		document.getElementById('threeButton').style.borderColor = 'red';
		document.getElementById('threeButton').style.color = 'blue';
	}
	if (event.keyCode == 52) { // this is 4
		document.getElementById("sound4").load();
		document.getElementById("sound4").play();
		document.getElementById('fourButton').style.background = 'radial-gradient(circle,white, gray)';
		document.getElementById('fourButton').style.borderColor = 'red';
		document.getElementById('fourButton').style.color = 'blue';
	}
	if (event.keyCode == 53) { // this is 5
		document.getElementById("sound5").load();
		document.getElementById("sound5").play();
		document.getElementById('fiveButton').style.background = 'radial-gradient(circle,white, gray)';
		document.getElementById('fiveButton').style.borderColor = 'red';
		document.getElementById('fiveButton').style.color = 'blue';
	}
	if (event.keyCode == 54) { // this is 6
		document.getElementById("sound6").load();
		document.getElementById("sound6").play();
		document.getElementById('sixButton').style.background = 'radial-gradient(circle,white, gray)';
		document.getElementById('sixButton').style.borderColor = 'red';
		document.getElementById('sixButton').style.color = 'blue';
	}

	// Q W E R T Y BUTTONS
	if (event.keyCode == 81 || event.keyCode == 113) { // this is Q
			document.getElementById("sound7").load();
			document.getElementById("sound7").play();
			document.getElementById('qButton').style.background = 'radial-gradient(circle,white, gray)';
			document.getElementById('qButton').style.borderColor = 'red';
			document.getElementById('qButton').style.color = 'blue';
	}
	if (event.keyCode == 87 || event.keyCode == 119) { // this is W
			document.getElementById("sound8").load();
			document.getElementById("sound8").play();
			document.getElementById('wButton').style.background = 'radial-gradient(circle,white, gray)';
			document.getElementById('wButton').style.borderColor = 'red';
			document.getElementById('wButton').style.color = 'blue';
	}
	if (event.keyCode == 69 || event.keyCode == 101) { // this is E
			document.getElementById("sound9").load();
			document.getElementById("sound9").play();
			document.getElementById('eButton').style.background = 'radial-gradient(circle,white, gray)';
			document.getElementById('eButton').style.borderColor = 'red';
			document.getElementById('eButton').style.color = 'blue';
	}
	if (event.keyCode == 82 || event.keyCode == 114) { // this is R
			document.getElementById("sound10").load();
			document.getElementById("sound10").play();
			document.getElementById('rButton').style.background = 'radial-gradient(circle,white, gray)';
			document.getElementById('rButton').style.borderColor = 'red';
			document.getElementById('rButton').style.color = 'blue';
	}
	if (event.keyCode == 84 || event.keyCode == 116) { // this is T
			document.getElementById("sound11").load();
			document.getElementById("sound11").play();
			document.getElementById('tButton').style.background = 'radial-gradient(circle,white, gray)';
			document.getElementById('tButton').style.borderColor = 'red';
			document.getElementById('tButton').style.color = 'blue';
	}
	if (event.keyCode == 121 || event.keyCode == 89) { // this is Y
			document.getElementById("sound12").load();
			document.getElementById("sound12").play();
			document.getElementById('yButton').style.background = 'radial-gradient(circle,white, gray)';
			document.getElementById('yButton').style.borderColor = 'red';
			document.getElementById('yButton').style.color = 'blue';
	}
	//A S D F G H BUTTONS
	if (event.keyCode == 97 || event.keyCode == 65) { // this is a
			document.getElementById("sound13").load();
			document.getElementById("sound13").play();
			document.getElementById('aButton').style.background = 'radial-gradient(circle,white, gray)';
			document.getElementById('aButton').style.borderColor = 'red';
			document.getElementById('aButton').style.color = 'blue';
	}
	if (event.keyCode == 115 || event.keyCode == 83) { // this is s
			document.getElementById("sound14").load();
			document.getElementById("sound14").play();
			document.getElementById('sButton').style.background = 'radial-gradient(circle,white, gray)';
			document.getElementById('sButton').style.borderColor = 'red';
			document.getElementById('sButton').style.color = 'blue';
	}
	if (event.keyCode == 100 || event.keyCode == 68) { // this is d
			document.getElementById("sound15").load();
			document.getElementById("sound15").play();
			document.getElementById('dButton').style.background = 'radial-gradient(circle,white, gray)';
			document.getElementById('dButton').style.borderColor = 'red';
			document.getElementById('dButton').style.color = 'blue';
	}
	if (event.keyCode == 102 || event.keyCode == 70) { // this is f
			document.getElementById("sound16").load();
			document.getElementById("sound16").play();
			document.getElementById('fButton').style.background = 'radial-gradient(circle,white, gray)';
			document.getElementById('fButton').style.borderColor = 'red';
			document.getElementById('fButton').style.color = 'blue';
	}
	if (event.keyCode == 103 || event.keyCode == 71) { // this is g
			document.getElementById("sound22").load();
			document.getElementById("sound22").play();
			document.getElementById('gButton').style.background = 'radial-gradient(circle,white, gray)';
			document.getElementById('gButton').style.borderColor = 'red';
			document.getElementById('gButton').style.color = 'blue';
	}
	if (event.keyCode == 104 || event.keyCode == 72) { // this is h
			document.getElementById("sound23").load();
			document.getElementById("sound23").play();
			document.getElementById('hButton').style.background = 'radial-gradient(circle,white, gray)';
			document.getElementById('hButton').style.borderColor = 'red';
			document.getElementById('hButton').style.color = 'blue';
	}

	// Z X C V B N BUTTONS HERE
	if (event.keyCode == 122 || event.keyCode == 90) { // this is z
			document.getElementById("sound24").load();
			document.getElementById("sound24").play();
			document.getElementById('zButton').style.background = 'radial-gradient(circle,white, gray)';
			document.getElementById('zButton').style.borderColor = 'red';
			document.getElementById('zButton').style.color = 'blue';
	}
	if (event.keyCode == 120 || event.keyCode == 88) { // this is x
			document.getElementById("sound18").load();
			document.getElementById("sound18").play();
			document.getElementById('xButton').style.background = 'radial-gradient(circle,white, gray)';
			document.getElementById('xButton').style.borderColor = 'red';
			document.getElementById('xButton').style.color = 'blue';
	}
	if (event.keyCode == 99 || event.keyCode == 67) { // this is c
			document.getElementById("sound19").load();
			document.getElementById("sound19").play();
			document.getElementById('cButton').style.background = 'radial-gradient(circle,white, gray)';
			document.getElementById('cButton').style.borderColor = 'red';
			document.getElementById('cButton').style.color = 'blue';
	}
	if (event.keyCode == 118 || event.keyCode == 86) { // this is v
			document.getElementById("sound20").load();
			document.getElementById("sound20").play();
			document.getElementById('vButton').style.background = 'radial-gradient(circle,white, gray)';
			document.getElementById('vButton').style.borderColor = 'red';
			document.getElementById('vButton').style.color = 'blue';
	}
	if (event.keyCode == 98 || event.keyCode == 66) { // this is b
			document.getElementById("sound21").load();
			document.getElementById("sound21").play();
			document.getElementById('bButton').style.background = 'radial-gradient(circle,white, gray)';
			document.getElementById('bButton').style.borderColor = 'red';
			document.getElementById('bButton').style.color = 'blue';
	}
	if (event.keyCode == 110 || event.keyCode == 78) { // this is n

			document.getElementById("sound25").load();
			document.getElementById("sound25").play();
			document.getElementById('nButton').style.background = 'radial-gradient(circle,white, gray)';
			document.getElementById('nButton').style.borderColor = 'red';
			document.getElementById('nButton').style.color = 'blue';


	}
});

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function () {
		output.innerHTML = this.value;
}

document.getElementById("myRange").oninput = function() {myFunction()};

function myFunction() {
	document.getElementById("sound1").volume=(document.getElementById("myRange").value)/100;
	document.getElementById("sound2").volume=(document.getElementById("myRange").value)/100;
	document.getElementById("sound3").volume=(document.getElementById("myRange").value)/100;
	document.getElementById("sound4").volume=(document.getElementById("myRange").value)/100;
	document.getElementById("sound5").volume=(document.getElementById("myRange").value)/100;
	document.getElementById("sound6").volume=(document.getElementById("myRange").value)/100;
	document.getElementById("sound7").volume=(document.getElementById("myRange").value)/100;
	document.getElementById("sound8").volume=(document.getElementById("myRange").value)/100;
	document.getElementById("sound9").volume=(document.getElementById("myRange").value)/100;
	document.getElementById("sound10").volume=(document.getElementById("myRange").value)/100;
	document.getElementById("sound11").volume=(document.getElementById("myRange").value)/100;
	document.getElementById("sound12").volume=(document.getElementById("myRange").value)/100;
	document.getElementById("sound13").volume=(document.getElementById("myRange").value)/100;
	document.getElementById("sound14").volume=(document.getElementById("myRange").value)/100;
	document.getElementById("sound15").volume=(document.getElementById("myRange").value)/100;
	document.getElementById("sound16").volume=(document.getElementById("myRange").value)/100;
	document.getElementById("sound17").volume=(document.getElementById("myRange").value)/100;
	document.getElementById("sound18").volume=(document.getElementById("myRange").value)/100;
	document.getElementById("sound19").volume=(document.getElementById("myRange").value)/100;
	document.getElementById("sound20").volume=(document.getElementById("myRange").value)/100;
	document.getElementById("sound21").volume=(document.getElementById("myRange").value)/100;
	document.getElementById("sound22").volume=(document.getElementById("myRange").value)/100;
	document.getElementById("sound23").volume=(document.getElementById("myRange").value)/100;
	document.getElementById("sound24").volume=(document.getElementById("myRange").value)/100;
  document.getElementById("sound25").volume=(document.getElementById("myRange").value)/100;
}

/*If i make a audio = new Audio(); in each if statement and then do audio.src = document.getElementById("name")*/

var canvas, ctx, source, context, analyser, audio, fbc_array, bars, bar_x,bar_witdh, bar_height;
function setup(audio){
	canvas = document.getElementById('canvass');
	ctx = canvas.getContext("2d");

	//audio.src = '' we need to specify the audio being used

	context = new AudioContext(); // think of this as the flowchart that contains all the nodes
	analyser = context.createAnalyser(); // this makes an analyser node

	source = context.createMediaElementSource(audio);
	source.connect(analyser);
	analyser.connect(context.destination);

	framelooper();
}

function framelooper(){

	window.webkitRequestAnimationFrame(framelooper);
	fbc_array = new Uint8Array(analyser.frequencyBinCount);
	analyser.getByteFrequencyData(fbf_array);
	ctx.clearRect(0,0, canvas.width, canvas.height);

	ctx.fillstyle = '#dddddd';
	bars = 256;
	for(var i = 0; i <bars; i++){
		bar_x = i * 3;
		bar_width = 2.5;
		bar_height= -(fbc_array[i]/2);

		ctx.fillRect(bar_x, canvas.height, bar_width, bar_height);
	}

}
