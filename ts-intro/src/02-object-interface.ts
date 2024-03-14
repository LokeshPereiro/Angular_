const skills: string[] = ["bash", "healing"];

// skills.push("Otra Cosa");

console.log(skills);

interface Character {
  name: string;
  hp: number;
  skills: string[];
  hometown?: string; //optional
}

const strider: Character = {
  name: "Strider",
  hp: 100,
  skills: ["bash", "counter"],
  //   hometown: "NY",
};
strider.hometown = "NY";
console.log(strider);

export {};
