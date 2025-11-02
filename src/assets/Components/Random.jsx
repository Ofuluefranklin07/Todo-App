import { useEffect, useState } from "react";

export default function Random() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");
  function randomUtility(length) {
    return Math.floor(Math.random() * length);
  }
  function handleHexColor() {
    const hex = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) hexColor += hex[randomUtility(hex.length)];
    setColor(hexColor);
  }

  function handleRandomRgbColor() {
    const r = randomUtility(256);
    const g = randomUtility(256);
    const b = randomUtility(256);
    setColor(`rgb(${r}, ${g}, ${b})`);
  }
  useEffect(() => {if (typeOfColor === "rgb") handleRandomRgbColor;
    else handleHexColor ();
  }, [typeOfColor]);
  return (
    <>
      <div className="container " style={{ background: color }}>
        <button
          className="rounded-2xl text-white bg-gray-700"
          onClick={
            typeOfColor === "hex" ? handleHexColor : handleRandomRgbColor
          }>
          generate random colour
        </button>
        <div
          className="flex 
        justify-center items-center
         text-white mt-[50px] font-[60px]"><br />
          <h3>{typeOfColor === "rgb" ? "RGB Color" : "HEX Color"} </h3>
          <h1>{color}</h1>
        </div>
        <button
          onClick={() => setTypeOfColor("hex")}
          className="rounded-xl text-white bg-gray-700">
          Generate hex colors
        </button>
        <button
          className=" rounded-2xl text-white bg-gray-700"
          onClick={() => setTypeOfColor("rgb")}>
          Generate RGB color
        </button>
      </div>
    </>
  );
}
