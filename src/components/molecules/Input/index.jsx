import React, { useRef, useEffect } from "react";
import Editor from "@monaco-editor/react";
import Output from "../Output";
import { css_beautify } from "js-beautify";

export default function Input({ challenge, state }) {
  const editorRef = useRef(null);
  const { userInput: cssInputTest, setUserInput: setCssInputTest } = state;
  // Adding challenge dependency
  useEffect(() => {
    setCssInputTest(css_beautify(challenge.editor_data[1].value.trim()));
  }, [challenge, setCssInputTest]);

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }

  return (
    <div className="flex w-full min-h-full bg-gray-700">
      <div className="bg-red-100 w-1/2">
        <Editor
          options={{
            fontSize: "25",
          }}
          height="100%"
          width="100%"
          theme="vs-dark"
          defaultValue={cssInputTest}
          defaultLanguage="css"
          onMount={handleEditorDidMount}
          onChange={(value) => {
            setCssInputTest(value);
          }}
        />
      </div>
      <Output
        className="bg-red-100 w-1/2"
        cssInputTest={cssInputTest}
        htmlTest={challenge.editor_data[0].value}
        outCssTest={challenge.output[1].value}
        outHtmlTest={challenge.output[0].value}
      />
    </div>
  );
}
