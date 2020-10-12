import React, { useState, useEffect } from "react";
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { FetchColors } from "../utils/FetchColors";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);

  useEffect(() => {
    FetchColors(setColorList);
  }, []);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
