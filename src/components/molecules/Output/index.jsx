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
      <Panel css={cssInputTest} html={htmlTest} />
      <Panel css={outCssTest} html={outHtmlTest} />
    </>
  );
}
