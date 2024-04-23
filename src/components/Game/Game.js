import React, { useState, useEffect } from "react";
import { FlexBox } from "./style";

const items = [
  {
    name: "다람쥐",
    src: require("../img/1.jpg")
  },
  {
    name: "판다",
    src: require("../img/2.jpg")
  },
  {
    name: "미어켓",
    src: require("../img/3.jpg")
  },
  {
    name: "호랑이",
    src: require("../img/4.jpg")
  },
  {
    name: "독수리",
    src: require("../img/5.jpg")
  },
  {
    name: "고슴도치",  
    src: require("../img/6.jpg")
  },
  {
    name: "푸들",
    src: require("../img/7.webp")
  },
  {
    name: "아메리칸 숏헤어",
    src: require("../img/8.jpg")
  }
];

const Game = () => {
  const [animals, setAnimals] = useState([]);
  const [displays, setDisplays] = useState([]);
  const [winners, setWinners] = useState([]);
  const [round, setRound] = useState("8강"); // 초기값은 8강

  useEffect(() => {
    items.sort(() => Math.random() - 0.5);
    setAnimals(items);
    setDisplays([items[0], items[1]]);
  }, []);

  const clickHandler = (animal) => () => {
    if (animals.length <= 2) {
      if (winners.length === 0) {
        setDisplays([animal]);
      } else {
        let updatedAnimal = [...winners, animal];
        setAnimals(updatedAnimal);
        setDisplays([updatedAnimal[0], updatedAnimal[1]]);
        setWinners([]);
        setRound((prevRound) => (prevRound === "4강" ? "결승전" : "4강")); // 라운드 변경
      }
    } else if (animals.length > 2) {
      setWinners([...winners, animal]);
      setDisplays([animals[2], animals[3]]);
      setAnimals(animals.slice(2));
    }
  };

  return (
    <FlexBox>
      <h1 className="title"> 동물 이상형 월드컵 - {round} </h1>
      {displays.map((d) => {
        return (
          <div className="flex-1" key={d.name} onClick={clickHandler(d)}>
            <img className="animal-img" src={d.src} alt={d.name} />
            <div className="name">{d.name}</div>

          </div> 
        );
      })}
    </FlexBox>
  );
  
};

export default Game;
