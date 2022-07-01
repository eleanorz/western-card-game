import React, { useState, useCallback } from "react";

/**
 * https://bost.ocks.org/mike/shuffle
 * */
function shuffle(array) {
  let m = array.length,
    t,
    i;

  while (m) {
    i = Math.floor(Math.random() * m--);
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}

class westernCard {
  constructor(
    ...{
      gunType,
      hitPoints,
      displayName,
      actionType,
      isDisplayed,
      isInHand,
      playerId,
      isInDeck,
      isInDiscard
    }
  ) {
    this.gunType = gunType;
    this.hitPoints = hitPoints;
    this.displayName = displayName;
    this.actionType = actionType;
  }

  getCardType() {
    return this.actionType;
  }
}

class Polygon {
  constructor(...sides) {
    this.sides = sides;
  }
  // Method
  *getSides() {
    for (const side of this.sides) {
      yield side;
    }
  }
}

const pentagon = new Polygon(1, 2, 3, 4, 5);

console.log([...pentagon.getSides()]); // [1,2,3,4,5]

const westernConversionChart = [
  new westernCard("default", 1, "howitzer", "shoot"),
  new westernCard("default", 1, "howitzer", "shoot"),
  new westernCard("default", 1, "howitzer", "shoot"),
  new westernCard("default", 1, "howitzer", "shoot")
];

const allCards = [
  {
    svg: (
      <svg
        width={240}
        height={336}
        viewBox="-120 -168 240 336"
        preserveAspectRatio="none"
      >
        <symbol
          id="clubs__b"
          viewBox="-500 -500 1000 1000"
          preserveAspectRatio="xMinYMid"
        >
          <path
            d="M-270 460h160m-90-10L0-460l200 910m-90 10h160m-390-330h240"
            stroke="#000"
            strokeWidth={80}
            strokeLinecap="square"
            strokeMiterlimit={1.5}
            fill="none"
          />
        </symbol>
        <symbol
          id="clubs__a"
          viewBox="-600 -600 1200 1200"
          preserveAspectRatio="xMinYMid"
        >
          <path d="M30 150c5 235 55 250 100 350h-260c45-100 95-115 100-350a10 10 0 00-20 0 210 210 0 11-74-201 10 10 0 0014-14 230 230 0 11220 0 10 10 0 0014 14 210 210 0 11-74 201 10 10 0 00-20 0z" />
        </symbol>
        <rect
          width={239}
          height={335}
          x={-119.5}
          y={-167.5}
          rx={12}
          ry={12}
          fill="#fff"
          stroke="#000"
        />
        <use xlinkHref="#clubs__a" height={70} width={70} x={-35} y={-35} />
        <use xlinkHref="#clubs__b" height={32} width={32} x={-114.4} y={-156} />
        <use
          xlinkHref="#clubs__a"
          height={26.769}
          width={26.769}
          x={-111.784}
          y={-119}
        />
        <g transform="rotate(180)">
          <use
            xlinkHref="#clubs__b"
            height={32}
            width={32}
            x={-114.4}
            y={-156}
          />
          <use
            xlinkHref="#clubs__a"
            height={26.769}
            width={26.769}
            x={-111.784}
            y={-119}
          />
        </g>
      </svg>
    ),
    name: "Ace of clubs",
    value: 52
  },
  {
    svg: (
      <svg
        width={240}
        height={336}
        viewBox="-120 -168 240 336"
        preserveAspectRatio="none"
      >
        <symbol
          id="ten-clubs__b"
          viewBox="-600 -600 1200 1200"
          preserveAspectRatio="xMinYMid"
        >
          <path d="M30 150c5 235 55 250 100 350h-260c45-100 95-115 100-350a10 10 0 00-20 0 210 210 0 11-74-201 10 10 0 0014-14 230 230 0 11220 0 10 10 0 0014 14 210 210 0 11-74 201 10 10 0 00-20 0z" />
        </symbol>
        <symbol
          id="ten-clubs__a"
          viewBox="-500 -500 1000 1000"
          preserveAspectRatio="xMinYMid"
        >
          <path
            d="M-260 430v-860M-50 0v-310a150 150 0 01300 0v620a150 150 0 01-300 0z"
            stroke="#000"
            strokeWidth={80}
            strokeLinecap="square"
            strokeMiterlimit={1.5}
            fill="none"
          />
        </symbol>
        <rect
          width={239}
          height={335}
          x={-119.5}
          y={-167.5}
          rx={12}
          ry={12}
          fill="#fff"
          stroke="#000"
        />
        <use
          xlinkHref="#ten-clubs__a"
          height={32}
          width={32}
          x={-114.4}
          y={-156}
        />
        <use
          xlinkHref="#ten-clubs__b"
          height={26.769}
          width={26.769}
          x={-111.784}
          y={-119}
        />
        <use
          xlinkHref="#ten-clubs__b"
          height={70}
          width={70}
          x={-87.501}
          y={-135.588}
        />
        <use
          xlinkHref="#ten-clubs__b"
          height={70}
          width={70}
          x={17.501}
          y={-135.588}
        />
        <use
          xlinkHref="#ten-clubs__b"
          height={70}
          width={70}
          x={-87.501}
          y={-68.529}
        />
        <use
          xlinkHref="#ten-clubs__b"
          height={70}
          width={70}
          x={17.501}
          y={-68.529}
        />
        <use
          xlinkHref="#ten-clubs__b"
          height={70}
          width={70}
          x={-35}
          y={-102.058}
        />
        <g transform="rotate(180)">
          <use
            xlinkHref="#ten-clubs__a"
            height={32}
            width={32}
            x={-114.4}
            y={-156}
          />
          <use
            xlinkHref="#ten-clubs__b"
            height={26.769}
            width={26.769}
            x={-111.784}
            y={-119}
          />
          <use
            xlinkHref="#ten-clubs__b"
            height={70}
            width={70}
            x={-87.501}
            y={-135.588}
          />
          <use
            xlinkHref="#ten-clubs__b"
            height={70}
            width={70}
            x={17.501}
            y={-135.588}
          />
          <use
            xlinkHref="#ten-clubs__b"
            height={70}
            width={70}
            x={-87.501}
            y={-68.529}
          />
          <use
            xlinkHref="#ten-clubs__b"
            height={70}
            width={70}
            x={17.501}
            y={-68.529}
          />
          <use
            xlinkHref="#ten-clubs__b"
            height={70}
            width={70}
            x={-35}
            y={-102.058}
          />
        </g>
      </svg>
    ),
    name: "Ten of clubs",
    value: 50
  },
  {
    svg: (
      <svg width={607} height={807} viewBox="68.547 122.681 607 807">
        <rect
          x={72.047}
          y={126.18}
          width={600}
          height={800}
          rx={17.143}
          ry={17.143}
          color="#000"
          display="block"
          fill="#fff"
          stroke="#000"
          strokeWidth={5}
        />
        <path
          d="M261.03 464.19c-131.54 134.38-3.605 232.26 100.39 168.1.567 33.098-25.384 63.998-41.346 93.544h112.29c-16.434-28.717-43.883-60.354-44.886-93.544 106.18 60.994 219.1-45.375 101.28-168.1-61.432-67.399-99.835-119.84-114.3-137.67-13.201 17.381-48.368 68.49-113.42 137.67z"
          fillRule="evenodd"
          stroke="#000"
          strokeWidth={1.229}
        />
        <text
          x={82.752}
          y={206.359}
          fontFamily="Bitstream Vera Serif"
          fontSize={95.593}
          strokeWidth="1pt"
        >
          <tspan x={82.752} y={206.359}>
            {"A"}
          </tspan>
        </text>
        <text
          transform="scale(-1)"
          x={-664.062}
          y={-846.09}
          fontFamily="Bitstream Vera Serif"
          fontSize={95.593}
          strokeWidth="1pt"
        >
          <tspan x={-664.062} y={-846.09}>
            {"A"}
          </tspan>
        </text>
        <path
          d="M97.688 236.9c-22.207 22.687-.609 39.211 16.949 28.38.096 5.588-4.285 10.804-6.98 15.793h18.957c-2.775-4.848-7.409-10.189-7.578-15.793 18.046 10.719 36.989-7.66 17.098-28.38-10.371-11.379-16.855-20.232-19.298-23.242-2.229 2.934-8.166 11.563-19.148 23.242zM650.17 815.68c22.207-22.687.609-39.211-16.949-28.38-.096-5.588 4.285-10.804 6.98-15.793h-18.957c2.775 4.848 7.409 10.189 7.578 15.793-18.046-10.719-36.989 7.66-17.098 28.38 10.371 11.379 16.855 20.232 19.298 23.242 2.229-2.934 8.166-11.563 19.148-23.242z"
          fillRule="evenodd"
          stroke="#000"
          strokeWidth={0.208}
        />
      </svg>
    ),
    name: "Ace of spades",
    value: 41
  },
  {
    svg: (
      <svg
        width={240}
        height={336}
        viewBox="-120 -168 240 336"
        preserveAspectRatio="none"
      >
        <symbol
          id="ten-spades__b"
          viewBox="-600 -600 1200 1200"
          preserveAspectRatio="xMinYMid"
        >
          <path d="M0-500c100 250 355 400 355 685a150 150 0 01-300 0 10 10 0 00-20 0c0 200 50 215 95 315h-260c45-100 95-115 95-315a10 10 0 00-20 0 150 150 0 01-300 0c0-285 255-435 355-685z" />
        </symbol>
        <symbol
          id="ten-spades__a"
          viewBox="-500 -500 1000 1000"
          preserveAspectRatio="xMinYMid"
        >
          <path
            d="M-260 430v-860M-50 0v-310a150 150 0 01300 0v620a150 150 0 01-300 0z"
            stroke="#000"
            strokeWidth={80}
            strokeLinecap="square"
            strokeMiterlimit={1.5}
            fill="none"
          />
        </symbol>
        <rect
          width={239}
          height={335}
          x={-119.5}
          y={-167.5}
          rx={12}
          ry={12}
          fill="#fff"
          stroke="#000"
        />
        <use
          xlinkHref="#ten-spades__a"
          height={32}
          width={32}
          x={-114.4}
          y={-156}
        />
        <use
          xlinkHref="#ten-spades__b"
          height={26.769}
          width={26.769}
          x={-111.784}
          y={-119}
        />
        <use
          xlinkHref="#ten-spades__b"
          height={70}
          width={70}
          x={-87.501}
          y={-135.501}
        />
        <use
          xlinkHref="#ten-spades__b"
          height={70}
          width={70}
          x={17.501}
          y={-135.501}
        />
        <use
          xlinkHref="#ten-spades__b"
          height={70}
          width={70}
          x={-87.501}
          y={-68.5}
        />
        <use
          xlinkHref="#ten-spades__b"
          height={70}
          width={70}
          x={17.501}
          y={-68.5}
        />
        <use
          xlinkHref="#ten-spades__b"
          height={70}
          width={70}
          x={-35}
          y={-102}
        />
        <g transform="rotate(180)">
          <use
            xlinkHref="#ten-spades__a"
            height={32}
            width={32}
            x={-114.4}
            y={-156}
          />
          <use
            xlinkHref="#ten-spades__b"
            height={26.769}
            width={26.769}
            x={-111.784}
            y={-119}
          />
          <use
            xlinkHref="#ten-spades__b"
            height={70}
            width={70}
            x={-87.501}
            y={-135.501}
          />
          <use
            xlinkHref="#ten-spades__b"
            height={70}
            width={70}
            x={17.501}
            y={-135.501}
          />
          <use
            xlinkHref="#ten-spades__b"
            height={70}
            width={70}
            x={-87.501}
            y={-68.5}
          />
          <use
            xlinkHref="#ten-spades__b"
            height={70}
            width={70}
            x={17.501}
            y={-68.5}
          />
          <use
            xlinkHref="#ten-spades__b"
            height={70}
            width={70}
            x={-35}
            y={-102}
          />
        </g>
      </svg>
    ),
    name: "Ten of spades",
    value: 39
  },
  {
    svg: (
      <svg
        width={240}
        height={336}
        viewBox="-120 -168 240 336"
        preserveAspectRatio="none"
      >
        <symbol
          id="heart__b"
          viewBox="-500 -500 1000 1000"
          preserveAspectRatio="xMinYMid"
        >
          <path
            d="M-270 460h160m-90-10L0-460l200 910m-90 10h160m-390-330h240"
            stroke="red"
            strokeWidth={80}
            strokeLinecap="square"
            strokeMiterlimit={1.5}
            fill="none"
          />
        </symbol>
        <symbol
          id="heart__a"
          viewBox="-600 -600 1200 1200"
          preserveAspectRatio="xMinYMid"
        >
          <path
            d="M0-300c0-100 100-200 200-200s200 100 200 250C400 0 0 400 0 500 0 400-400 0-400-250c0-150 100-250 200-250S0-400 0-300z"
            fill="red"
          />
        </symbol>
        <rect
          width={239}
          height={335}
          x={-119.5}
          y={-167.5}
          rx={12}
          ry={12}
          fill="#fff"
          stroke="#000"
        />
        <use xlinkHref="#heart__a" height={70} width={70} x={-35} y={-35} />
        <use xlinkHref="#heart__b" height={32} width={32} x={-114.4} y={-156} />
        <use
          xlinkHref="#heart__a"
          height={26.769}
          width={26.769}
          x={-111.784}
          y={-119}
        />
        <g transform="rotate(180)">
          <use
            xlinkHref="#heart__b"
            height={32}
            width={32}
            x={-114.4}
            y={-156}
          />
          <use
            xlinkHref="#heart__a"
            height={26.769}
            width={26.769}
            x={-111.784}
            y={-119}
          />
        </g>
      </svg>
    ),
    name: "Ace of heart",
    value: 30
  },
  {
    svg: (
      <svg
        width={240}
        height={336}
        viewBox="-120 -168 240 336"
        preserveAspectRatio="none"
      >
        <symbol
          id="ten-hearts__b"
          viewBox="-600 -600 1200 1200"
          preserveAspectRatio="xMinYMid"
        >
          <path
            d="M0-300c0-100 100-200 200-200s200 100 200 250C400 0 0 400 0 500 0 400-400 0-400-250c0-150 100-250 200-250S0-400 0-300z"
            fill="red"
          />
        </symbol>
        <symbol
          id="ten-hearts__a"
          viewBox="-500 -500 1000 1000"
          preserveAspectRatio="xMinYMid"
        >
          <path
            d="M-260 430v-860M-50 0v-310a150 150 0 01300 0v620a150 150 0 01-300 0z"
            stroke="red"
            strokeWidth={80}
            strokeLinecap="square"
            strokeMiterlimit={1.5}
            fill="none"
          />
        </symbol>
        <rect
          width={239}
          height={335}
          x={-119.5}
          y={-167.5}
          rx={12}
          ry={12}
          fill="#fff"
          stroke="#000"
        />
        <use
          xlinkHref="#ten-hearts__a"
          height={32}
          width={32}
          x={-114.4}
          y={-156}
        />
        <use
          xlinkHref="#ten-hearts__b"
          height={26.769}
          width={26.769}
          x={-111.784}
          y={-119}
        />
        <use
          xlinkHref="#ten-hearts__b"
          height={70}
          width={70}
          x={-87.501}
          y={-135.501}
        />
        <use
          xlinkHref="#ten-hearts__b"
          height={70}
          width={70}
          x={17.501}
          y={-135.501}
        />
        <use
          xlinkHref="#ten-hearts__b"
          height={70}
          width={70}
          x={-87.501}
          y={-68.5}
        />
        <use
          xlinkHref="#ten-hearts__b"
          height={70}
          width={70}
          x={17.501}
          y={-68.5}
        />
        <use
          xlinkHref="#ten-hearts__b"
          height={70}
          width={70}
          x={-35}
          y={-102}
        />
        <g transform="rotate(180)">
          <use
            xlinkHref="#ten-hearts__a"
            height={32}
            width={32}
            x={-114.4}
            y={-156}
          />
          <use
            xlinkHref="#ten-hearts__b"
            height={26.769}
            width={26.769}
            x={-111.784}
            y={-119}
          />
          <use
            xlinkHref="#ten-hearts__b"
            height={70}
            width={70}
            x={-87.501}
            y={-135.501}
          />
          <use
            xlinkHref="#ten-hearts__b"
            height={70}
            width={70}
            x={17.501}
            y={-135.501}
          />
          <use
            xlinkHref="#ten-hearts__b"
            height={70}
            width={70}
            x={-87.501}
            y={-68.5}
          />
          <use
            xlinkHref="#ten-hearts__b"
            height={70}
            width={70}
            x={17.501}
            y={-68.5}
          />
          <use
            xlinkHref="#ten-hearts__b"
            height={70}
            width={70}
            x={-35}
            y={-102}
          />
        </g>
      </svg>
    ),
    name: "Ten of hearts",
    value: 28
  },
  {
    svg: (
      <svg
        width={240}
        height={336}
        viewBox="-120 -168 240 336"
        preserveAspectRatio="none"
      >
        <symbol
          id="diamonds__b"
          viewBox="-500 -500 1000 1000"
          preserveAspectRatio="xMinYMid"
        >
          <path
            d="M-270 460h160m-90-10L0-460l200 910m-90 10h160m-390-330h240"
            stroke="red"
            strokeWidth={80}
            strokeLinecap="square"
            strokeMiterlimit={1.5}
            fill="none"
          />
        </symbol>
        <symbol
          id="diamonds__a"
          viewBox="-600 -600 1200 1200"
          preserveAspectRatio="xMinYMid"
        >
          <path
            d="M-400 0C-350 0 0-450 0-500 0-450 350 0 400 0 350 0 0 450 0 500 0 450-350 0-400 0z"
            fill="red"
          />
        </symbol>
        <rect
          width={239}
          height={335}
          x={-119.5}
          y={-167.5}
          rx={12}
          ry={12}
          fill="#fff"
          stroke="#000"
        />
        <use xlinkHref="#diamonds__a" height={70} width={70} x={-35} y={-35} />
        <use
          xlinkHref="#diamonds__b"
          height={32}
          width={32}
          x={-114.4}
          y={-156}
        />
        <use
          xlinkHref="#diamonds__a"
          height={26.769}
          width={26.769}
          x={-111.784}
          y={-119}
        />
        <g transform="rotate(180)">
          <use
            xlinkHref="#diamonds__b"
            height={32}
            width={32}
            x={-114.4}
            y={-156}
          />
          <use
            xlinkHref="#diamonds__a"
            height={26.769}
            width={26.769}
            x={-111.784}
            y={-119}
          />
        </g>
      </svg>
    ),
    name: "Ace of diamonds",
    value: 19
  },
  {
    svg: (
      <svg
        width={240}
        height={336}
        viewBox="-120 -168 240 336"
        preserveAspectRatio="none"
      >
        <symbol
          id="ten-diamonds__b"
          viewBox="-600 -600 1200 1200"
          preserveAspectRatio="xMinYMid"
        >
          <path
            d="M-400 0C-350 0 0-450 0-500 0-450 350 0 400 0 350 0 0 450 0 500 0 450-350 0-400 0z"
            fill="red"
          />
        </symbol>
        <symbol
          id="ten-diamonds__a"
          viewBox="-500 -500 1000 1000"
          preserveAspectRatio="xMinYMid"
        >
          <path
            d="M-260 430v-860M-50 0v-310a150 150 0 01300 0v620a150 150 0 01-300 0z"
            stroke="red"
            strokeWidth={80}
            strokeLinecap="square"
            strokeMiterlimit={1.5}
            fill="none"
          />
        </symbol>
        <rect
          width={239}
          height={335}
          x={-119.5}
          y={-167.5}
          rx={12}
          ry={12}
          fill="#fff"
          stroke="#000"
        />
        <use
          xlinkHref="#ten-diamonds__a"
          height={32}
          width={32}
          x={-114.4}
          y={-156}
        />
        <use
          xlinkHref="#ten-diamonds__b"
          height={26.769}
          width={26.769}
          x={-111.784}
          y={-119}
        />
        <use
          xlinkHref="#ten-diamonds__b"
          height={70}
          width={70}
          x={-87.501}
          y={-135.501}
        />
        <use
          xlinkHref="#ten-diamonds__b"
          height={70}
          width={70}
          x={17.501}
          y={-135.501}
        />
        <use
          xlinkHref="#ten-diamonds__b"
          height={70}
          width={70}
          x={-87.501}
          y={-68.5}
        />
        <use
          xlinkHref="#ten-diamonds__b"
          height={70}
          width={70}
          x={17.501}
          y={-68.5}
        />
        <use
          xlinkHref="#ten-diamonds__b"
          height={70}
          width={70}
          x={-35}
          y={-102}
        />
        <g transform="rotate(180)">
          <use
            xlinkHref="#ten-diamonds__a"
            height={32}
            width={32}
            x={-114.4}
            y={-156}
          />
          <use
            xlinkHref="#ten-diamonds__b"
            height={26.769}
            width={26.769}
            x={-111.784}
            y={-119}
          />
          <use
            xlinkHref="#ten-diamonds__b"
            height={70}
            width={70}
            x={-87.501}
            y={-135.501}
          />
          <use
            xlinkHref="#ten-diamonds__b"
            height={70}
            width={70}
            x={17.501}
            y={-135.501}
          />
          <use
            xlinkHref="#ten-diamonds__b"
            height={70}
            width={70}
            x={-87.501}
            y={-68.5}
          />
          <use
            xlinkHref="#ten-diamonds__b"
            height={70}
            width={70}
            x={17.501}
            y={-68.5}
          />
          <use
            xlinkHref="#ten-diamonds__b"
            height={70}
            width={70}
            x={-35}
            y={-102}
          />
        </g>
      </svg>
    ),
    name: "Ten of diamonds",
    value: 17
  }
];

export function App() {
  const [cards, setCards] = useState([...allCards]);
  const [countTakenCards, setCountTakenCards] = useState("");

  const handleShuffle = () => setCards([...shuffle(allCards)]);

  let generateBlankWesternDeckChart = [];

  for (let tempCounter = 0; tempCounter < 13; tempCounter++) {
    generateBlankWesternDeckChart.concat(westernConversionChart);
  }

  console.log(generateBlankWesternDeckChart);

  const handleSubmitTakenCards = useCallback(
    (event) => {
      event.preventDefault();

      setCards([...shuffle(cards.slice(+countTakenCards))]);
    },
    [cards, countTakenCards]
  );

  const handleReset = () => setCards([...allCards]);

  const handleSorted = () =>
    setCards([...allCards.sort((a, b) => b.value - a.value)]);

  return (
    <div>
      <div className="flex flex-col flex-wrap justify-center items-center py-4">
        <button className="button rounded" onClick={handleShuffle}>
          Shuffle
        </button>

        <form
          className="flex items-center"
          onSubmit={countTakenCards === "" ? () => {} : handleSubmitTakenCards}
        >
          <input
            value={countTakenCards}
            onChange={({ target: { value } }) => setCountTakenCards(value)}
            type="number"
            min="1"
            max="8"
            placeholder="(1-8)"
            className="w-8 mx-2 py-1 rounded"
          />

          <button
            className={`button rounded ${
              countTakenCards === "" ? "pointer-events-none opacity-50" : ""
            }`}
          >
            Draw {countTakenCards} card{countTakenCards > 1 ? "s" : ""} from the
            deck
          </button>
        </form>

        <button className="button rounded" onClick={handleSorted}>
          Sort descending
        </button>

        <button className="button rounded" onClick={handleReset}>
          Full deck
        </button>
      </div>

      <div className="flex flex-wrap justify-center">
        {cards?.map(({ svg, value }, i) => (
          <div key={i} className="mx-2">
            {svg}
            <p className="text-center">Value: {value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
