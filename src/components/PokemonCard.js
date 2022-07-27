import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ name, hp, spriteFront, spriteBack }) {

  // CLICK AND SHOW THE BACK
  const [showFront, setShowFront] = useState(true);
  const sprite = showFront ? spriteFront : spriteBack // <---- this is for the image "src"
  function toggleSprites() {
    setShowFront(showFront => !showFront)
  }

  return (
    <Card onClick={toggleSprites}>
      <div>
        <div className="image">
          <img src={sprite} alt={name} />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
