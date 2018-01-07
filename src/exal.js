
/*
  Copyright (c) 2012 - present Exal Incorporated. All rights reserved.

  Permission is hereby granted, free of charge, to any person obtaining a
  copy of this software and associated documentation files (the "Software"),
  to deal in the Software without restriction, including without limitation
  the rights to use, copy, modify, merge, publish, distribute, sublicense,
  and/or sell copies of the Software, and to permit persons to whom the
  Software is furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
  DEALINGS IN THE SOFTWARE.
*/

define(function (require, exports, module) {
    "use-strict";

    // Load CodeMirror add-ons--these attach themselves to the CodeMirror module
    require("thirdparty/CodeMirror/addon/edit/closebrackets");
    require("thirdparty/CodeMirror/addon/edit/closetag");
    require("thirdparty/CodeMirror/addon/edit/matchbrackets");
    require("thirdparty/CodeMirror/addon/edit/matchtags");
    require("thirdparty/CodeMirror/addon/fold/xml-fold");
    require("thirdparty/CodeMirror/addon/mode/multiplex");
    require("thirdparty/CodeMirror/addon/mode/overlay");
    require("thirdparty/CodeMirror/addon/mode/simple");
    require("thirdparty/CodeMirror/addon/scroll/scrollpastend");
    require("thirdparty/CodeMirror/addon/search/match-highlighter");
    require("thirdparty/CodeMirror/addon/search/searchcursor");
    require("thirdparty/CodeMirror/addon/selection/active-line");
    require("thirdparty/CodeMirror/addon/selection/mark-selection");
    require("thirdparty/CodeMirror/keymap/sublime");

    var CodeMirror = require("thirdparty/CodeMirror/lib/codemirror");
    var Mustache = require("thirdparty/mustache/mustache");

    let div = document.createElement("div");
    div.id = "code-container";
    let text = document.createElement("textarea");
    text.id = "code";
    div.appendChild(text);
    document.body.appendChild(div);

    require(["thirdparty/CodeMirror/lib/codemirror", "thirdparty/CodeMirror/mode/htmlmixed/htmlmixed"], function(CodeMirror) {
        CodeMirror.fromTextArea(document.getElementById("code"), {
            lineNumbers: true,
            mode: "javascript",
            styleActiveLine: true,
            theme: "tomorrow-night-eighties"
        });
    });
});
