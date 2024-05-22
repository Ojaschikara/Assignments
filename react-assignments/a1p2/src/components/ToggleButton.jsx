// src/components/ToggleButton.jsx

import React, { useState } from "react";

function ToggleButton() {
  const [isOn, setIsOn] = useState("ON");

  const handleClick = () => {
    setIsOn("OFF");
  };

  return (
    <div>
      <p>{isOn}</p>
      <button onClick={handleClick}>Toggle</button>
    </div>
  );
}

export default ToggleButton;
