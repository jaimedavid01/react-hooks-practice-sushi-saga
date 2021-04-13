import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ sushis, onEatSushi }) {
  const [startIndex, setStartIndex] = useState(0);

  function handleMoreClick() {
    setStartIndex((startIndex) => {
      return (startIndex + 4) % 100;
    });
  }

  // assembly line
  // [{},{},{},{},{}] => [{},{},{},{}]
  // [{},{},{},{}] => [<SushiComponent />, <SushiComponent />, <SushiComponent />, <SushiComponent />]
  const sushiItems = sushis.slice(startIndex, startIndex + 4).map((sushi) => {
    return <Sushi key={sushi.id} sushi={sushi} onEatSushi={onEatSushi} />;
  });

  return (
    <div className="belt">
      {sushiItems}
      <MoreButton onMoreClick={handleMoreClick} />
    </div>
  );
}

export default SushiContainer;