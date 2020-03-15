const sound_bells = new Audio("./sounds/din_dong.mp3");
const sound_bells_don_long = new Audio("./sounds/din_dong-long.mp3");
const sound_quick = new Audio("./sounds/quick.mp3");
const sound_long = new Audio("./sounds/long.mp3");
const sound_quick_two = new Audio("./sounds/quick_two.mp3");
const sound_bam = new Audio("./sounds/bam.mp3");
const dindon = document.querySelector(".button-sound--one");
const donlong = document.querySelector(".button-sound--two");
const quick = document.querySelector(".button-sound--three");
const long = document.querySelector(".button-sound--four");
const quick_two = document.querySelector(".button-sound--fife");
const bam = document.querySelector(".button-sound--six");

//click sounds

const init_sound_button_click = (btn, audio_source) => {
	if (btn) {
		btn.addEventListener("click", function() {
			btn.currentTime = 0;
			audio_source.play();
		});
	} else {
		throw new Error("button doesn't exist");
	}
};
dindon === init_sound_button_click(dindon, sound_bells);
donlong === init_sound_button_click(donlong, sound_bells_don_long);
quick === init_sound_button_click(quick, sound_quick);
long === init_sound_button_click(long, sound_long);
quick_two === init_sound_button_click(quick_two, sound_quick_two);
bam === init_sound_button_click(bam, sound_bam);

//keyboard click
function keyboard_sound() {
	document.addEventListener("keypress", function(event) {
		if (event.keyCode == 97) {
			dindon.style.background = "#A52A2A";
			sound_bells.play();
		}

		if (event.keyCode == 98) {
			donlong.style.background = "#8B4513";
			sound_bells_don_long.play();
		}
		if (event.keyCode == 99) {
			quick.style.background = "#B8860B";
			sound_quick.play();
		}
		if (event.keyCode == 100) {
			long.style.background = "#CD853F";
			sound_long.play();
		}
		if (event.keyCode == 101) {
			quick_two.style.background = "#D2691E";
			sound_quick_two.play();
		}
		if (event.keyCode == 102) {
			bam.style.background = "#D2B48C";
			sound_bam.play();
		}
	});
}
keyboard_sound();
