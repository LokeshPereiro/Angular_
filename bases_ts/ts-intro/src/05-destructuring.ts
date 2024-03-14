interface AudioPlayer {
  audioVoulume: number;
  songDuration: number;
  song: string;
  details: Details;
}

interface Details {
  author: string;
  year: number;
}

const audioPlayer: AudioPlayer = {
  audioVoulume: 90,
  songDuration: 36,
  song: "Mess",
  details: {
    author: "Ed Sheeran",
    year: 2015,
  },
};

const {
  song,
  songDuration: duration,
  details: { author, year },
} = audioPlayer;

// console.log(song);
// console.log(duration);
// console.log(author);

console.log(
  `La canción se llama: ${song}, dura: ${duration}. El autor es: ${author} en el año ${year}`
);

const dragonball: string[] = ["Goku", "Vegeta", "Trunks"];

const trunk = dragonball[3] || "No existe ese personaje en el arreglo!";

const [, , trollTrunk = "Not Found"]: string[] = ["Goku", "Vegeta"];

console.log("Personaje 3:", trunk);
console.log("TrollTrunk:", trollTrunk);
export {};
