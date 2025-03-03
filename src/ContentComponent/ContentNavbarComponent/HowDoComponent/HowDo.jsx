import React, { useState } from "react";
import View from "../../ViewMoreComponent/View";
import Search from "./SearchComponent/Search";
import Question from "./QuestionComponent/Question";
import Different from "./DifferentComponent/Different";
import "./index.css";

const HowDo = (isActive = false) => {
  const INIT = 7;
  const [visibleItems, setVisibleItems] = useState(INIT);
  const [questions, setQuestions] = useState(Array(9).fill(false));

  const view = () => {
    setVisibleItems((prev) => (prev < questions.length ? prev + INIT : INIT));
  };

  const toggleActive = () => {
    if (isActive === false) {
      setQuestions(() => {
        return `
          <div class="how-do-question-different">
            <Question isActive=${true} />
            <Different></Different>
          </div>
        `;
      });
    } else {
      setQuestions(() => {
        return `
          <Question isActive=${false} />
        `;
      });
    }
  };

  return (
    <div class="content-navbar-how-do">
      <h1 class="content-heading">How Do I</h1>

      <div class="content-how-do-i">
        <Search></Search>

        <Question isActive={false} />
        <Question isActive={false} />

        <div class="how-do-question-different">
          <Question isActive={true} />
          <Different></Different>
        </div>

        {questions.slice(0, visibleItems).map((isActive, index) => (
          <Question key={index} isActive={isActive} />
        ))}
      </div>

      <View
        onClick={view}
        text={visibleItems < questions.length ? "View More" : "View Less"}
      />
    </div>
  );
};

export default HowDo;
