const audio = require('bindings')('audio');

/*

- This should be running in a Worker. 
- Worker's job is to fill the buffer up to whatever index it is at.

TODO:
`audio` should really be a kind of active object, with
- .samplerate
- .outbuffer (and .inbuffer)
- .outchannels (and .inchannels)
- .index (for IO frames)

audio.start() should take a config {} to select devices, channels, etc.
audio.devices() should return a list of input & output devices

*/

// start audio processing with default settings
audio.start()
//console.log(audio.outbuffer)
//console.log(audio.outbuffer.length)
let audioBufferIdx = 0;
let time = 0; // in seconds
let phase = 0;

function nextSample(time) {
	// compute next output:
	phase += 289/48000;
	return 0.1 * Math.sin(Math.PI * 2 * phase);
}

function update() {
	// this is the time in the ringbuffer that has most recently been played (and is now zeroed)
	// so we are safe to fill the buffer up to this point:
	let at = audio.t
	//console.log(at, time)
	// continue filling ringbuffer until we catch up to that point:
	while (audioBufferIdx != at) {
		// compute next output:
		let out = nextSample(time)
		// write to output:
		audio.outbuffer[audioBufferIdx] = out;
		// time passes:
		time += 1/48000; 
		audioBufferIdx = (audioBufferIdx + 1) % audio.outbuffer.length;
	}
	if (time > 10) {
		audio.end()
	} else {
		setTimeout(update, 100);
	}
}

update();