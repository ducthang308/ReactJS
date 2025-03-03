import React, { useState } from "react";
import "./index.css";

const Different = ({ text }) => {
  const [isActive, setActive] = useState(false);

  const toggleQuestion = () => {
    setIsActive((prev) => !prev);
  };
  return (
    <div class="how-do-question-different-text">
      <p>A:</p>
      <p>
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiut
        aliquip ex ea commodo consequat. Duis uis nostrud exercitation
      </p>
    </div>
  );
};

export default Different;
