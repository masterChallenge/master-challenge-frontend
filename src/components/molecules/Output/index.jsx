import React from "react";

import Panel from "../Panel";

export default function Output({
  cssInputTest,
  htmlTest,
  outCssTest,
  outHtmlTest,
}) {
  return (
    <>
      <Panel css={cssInputTest} html={htmlTest} panelInfo="Your progress"/>
      <Panel css={outCssTest} html={outHtmlTest} panelInfo="Expected result"/>
    </>
  );
}
