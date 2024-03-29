const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioContext = new AudioContext();

// Function to create a piano-like sound
function createPianoSound(freq, time) {
  // Create an oscillator
  const duration = 2.5; // Define the duration in seconds

  const oscillator = audioContext.createOscillator();
  oscillator.type = 'sine'; // You can experiment with other types like 'triangle' or 'square'
  oscillator.frequency.setValueAtTime(freq, audioContext.currentTime);

  // Create a gain node for volume control
  const gainNode = audioContext.createGain();
  gainNode.gain.setValueAtTime(0, audioContext.currentTime);
  gainNode.gain.linearRampToValueAtTime(1, audioContext.currentTime + 0.01); // Attack
  gainNode.gain.linearRampToValueAtTime(0, audioContext.currentTime + .5); // Decay

  // Connect the nodes
  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);

  // Start the oscillator
  oscillator.start();

  // Stop the oscillator after the duration
  setTimeout(() => {
    oscillator.stop();
  }, duration * time);
}

let c = document.getElementById("c");
c.onclick = () => { createPianoSound(523.2511, 200); };
let cs = document.getElementById("cs");
cs.onclick = () => { createPianoSound(554.3653, 200); };
let d = document.getElementById("d");
d.onclick = () => { createPianoSound(587.3295, 200); };
let ds = document.getElementById("ds");
ds.onclick = () => { createPianoSound(622.2540, 200); };
let e = document.getElementById("e");
e.onclick = () => { createPianoSound(659.2551, 200); };
let f = document.getElementById("f");
f.onclick = () => { createPianoSound(698.4565, 200); };
let fs = document.getElementById("fs");
fs.onclick = () => { createPianoSound(739.9888, 200); };
let g = document.getElementById("g");
g.onclick = () => { createPianoSound(783.9909, 200); };
let gs = document.getElementById("gs");
gs.onclick = () => { createPianoSound(830.6094, 200); };
let a = document.getElementById("a");
a.onclick = () => { createPianoSound(880.0000, 200); };
let as = document.getElementById("as");
as.onclick = () => { createPianoSound(932.3275, 200); };
let b = document.getElementById("b");
b.onclick = () => { createPianoSound(987.7666, 200); };




addEventListener("keypress", (event) => {
  switch (event.key) {
    case "z":
      createPianoSound(523.2511, 200);
      c.style.boxShadow = "0px 0px 100px black inset";
      break;
    case "s":
      createPianoSound(554.3653, 200);
      cs.style.boxShadow = "-5px 0px 10px 0px black,.1px .1px 0px 0px whitesmoke inset";
      break;
    case "x":
      createPianoSound(587.3295, 200);
      d.style.boxShadow = "0px 0px 100px black inset";
      break;
    case "d":
      createPianoSound(622.2540, 200);
      ds.style.boxShadow = "-5px 0px 10px 0px black,.1px .1px 0px 0px whitesmoke inset";
      break;
    case "c":
      createPianoSound(659.2551, 200);
      e.style.boxShadow = "0px 0px 100px black inset";
      break;
    case "v":
      createPianoSound(698.4565, 200);
      f.style.boxShadow = "0px 0px 100px black inset";
      break;
    case "g":
      createPianoSound(739.9888, 200);
      fs.style.boxShadow = "-5px 0px 10px 0px black,.1px .1px 0px 0px whitesmoke inset";
      break;
    case "b":
      createPianoSound(783.9909, 200);
      g.style.boxShadow = "0px 0px 100px black inset";
      break;
    case "h":
      createPianoSound(830.6094, 200);
      gs.style.boxShadow = "-5px 0px 10px 0px black,.1px .1px 0px 0px whitesmoke inset";
      break;
    case "n":
      createPianoSound(880.0000, 200);
      a.style.boxShadow = "0px 0px 100px black inset";
      break;
    case "j":
      createPianoSound(932.3275, 200);
      as.style.boxShadow = "-5px 0px 10px 0px black,.1px .1px 0px 0px whitesmoke inset";
      break;
    case "m":
      createPianoSound(987.7666, 200);
      b.style.boxShadow = "0px 0px 100px black inset";
  }
});


addEventListener("keyup", (event) => {
  switch (event.key) {
    case "z":
      c.style.boxShadow="0px 0px 10px black inset";
      break;
    case "s":
      cs.style.boxShadow = "-5px 0px 10px 5px black,0px 0px 0px 0px whitesmoke inset";
      break;
    case "x":
      d.style.boxShadow="0px 0px 10px black inset";
      break;
    case "d":
      ds.style.boxShadow = "-5px 0px 10px 5px black,0px 0px 0px 0px whitesmoke inset";
      break;
    case "c":
      e.style.boxShadow="0px 0px 10px black inset";
      break;
    case "v":
      f.style.boxShadow="0px 0px 10px black inset";
      break;
    case "g":
      fs.style.boxShadow = "-5px 0px 10px 5px black,0px 0px 0px 0px whitesmoke inset";
      break;
    case "b":
      g.style.boxShadow="0px 0px 10px black inset";
      break;
      case "h":
      gs.style.boxShadow = "-5px 0px 10px 5px black,0px 0px 0px 0px whitesmoke inset";
      break;
    case "n":
      a.style.boxShadow="0px 0px 10px black inset";
      break;
    case "j":
      as.style.boxShadow = "-5px 0px 10px 5px black,0px 0px 0px 0px whitesmoke inset";
      break;
    case "m":
      b.style.boxShadow="0px 0px 10px black inset";
  }
});

let flag = false; 

let button = document.getElementById("button");

button.addEventListener("click", () => {
    flag = !flag;

    let keys = document.getElementsByClassName("keys");
    for (let i = 0; i < keys.length; i++) {
        if (flag) {
            keys[i].setAttribute("data-original-text", keys[i].innerText);
            keys[i].innerText = ""; 
        } else {
            keys[i].innerText = keys[i].getAttribute("data-original-text");
            keys[i].removeAttribute("data-original-text");
        }
    }
    button.innerHTML = flag ? "Show reference keys" : "Hide reference keys";
});

