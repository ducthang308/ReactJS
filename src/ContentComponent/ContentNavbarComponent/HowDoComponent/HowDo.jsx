import React from "react";
import View from "../../ViewMoreComponent/View";
import Search from "./SearchComponent/Search";
import Question from "./QuestionComponent/Question";
import Different from "./DifferentComponent/Different";
import "./index.css";

const HowDo = () => {
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

        <Question isActive={false} />
        <Question isActive={false} />
        <Question isActive={false} />
        <Question isActive={false} />
        <Question isActive={false} />
        <Question isActive={false} />
        <Question isActive={false} />
      </div>

      <View></View>
    </div>
  );
};

export default HowDo;
