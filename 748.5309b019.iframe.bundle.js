(self["webpackChunk"] = self["webpackChunk"] || []).push([[748],{

/***/ "./node_modules/@storybook/components/dist/esm/syntaxhighlighter/syntaxhighlighter.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "SyntaxHighlighter": () => (/* binding */ syntaxhighlighter_SyntaxHighlighter),
  "createCopyToClipboardFunction": () => (/* binding */ createCopyToClipboardFunction),
  "default": () => (/* binding */ syntaxhighlighter)
});

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__("./node_modules/regenerator-runtime/runtime.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.entries.js
var es_object_entries = __webpack_require__("./node_modules/core-js/modules/es.object.entries.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.assign.js
var es_object_assign = __webpack_require__("./node_modules/core-js/modules/es.object.assign.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.trim.js
var es_string_trim = __webpack_require__("./node_modules/core-js/modules/es.string.trim.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("./node_modules/core-js/modules/es.object.to-string.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__("./node_modules/core-js/modules/es.regexp.to-string.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__("./node_modules/core-js/modules/es.symbol.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__("./node_modules/core-js/modules/es.symbol.description.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.iterator.js
var es_symbol_iterator = __webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__("./node_modules/core-js/modules/es.string.iterator.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__("./node_modules/core-js/modules/es.array.iterator.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__("./node_modules/core-js/modules/es.array.slice.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__("./node_modules/core-js/modules/es.function.name.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.from.js
var es_array_from = __webpack_require__("./node_modules/core-js/modules/es.array.from.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__("./node_modules/core-js/modules/es.promise.js");
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__("./node_modules/core-js/modules/es.object.keys.js");
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
// EXTERNAL MODULE: ./node_modules/@storybook/client-logger/dist/esm/index.js
var esm = __webpack_require__("./node_modules/@storybook/client-logger/dist/esm/index.js");
// EXTERNAL MODULE: ./node_modules/@storybook/theming/dist/esm/index.js + 2 modules
var dist_esm = __webpack_require__("./node_modules/@storybook/theming/dist/esm/index.js");
// EXTERNAL MODULE: ./node_modules/global/window.js
var global_window = __webpack_require__("./node_modules/global/window.js");
var window_default = /*#__PURE__*/__webpack_require__.n(global_window);
// EXTERNAL MODULE: ./node_modules/memoizerific/memoizerific.js
var memoizerific = __webpack_require__("./node_modules/memoizerific/memoizerific.js");
var memoizerific_default = /*#__PURE__*/__webpack_require__.n(memoizerific);
// EXTERNAL MODULE: ./node_modules/refractor/lang/jsx.js
var jsx = __webpack_require__("./node_modules/refractor/lang/jsx.js");
var jsx_default = /*#__PURE__*/__webpack_require__.n(jsx);
;// CONCATENATED MODULE: ./node_modules/@storybook/components/node_modules/react-syntax-highlighter/dist/esm/languages/prism/jsx.js

;
/* harmony default export */ const prism_jsx = ((jsx_default()));
// EXTERNAL MODULE: ./node_modules/refractor/lang/bash.js
var bash = __webpack_require__("./node_modules/refractor/lang/bash.js");
var bash_default = /*#__PURE__*/__webpack_require__.n(bash);
;// CONCATENATED MODULE: ./node_modules/@storybook/components/node_modules/react-syntax-highlighter/dist/esm/languages/prism/bash.js

;
/* harmony default export */ const prism_bash = ((bash_default()));
// EXTERNAL MODULE: ./node_modules/refractor/lang/css.js
var css = __webpack_require__("./node_modules/refractor/lang/css.js");
var css_default = /*#__PURE__*/__webpack_require__.n(css);
;// CONCATENATED MODULE: ./node_modules/@storybook/components/node_modules/react-syntax-highlighter/dist/esm/languages/prism/css.js

;
/* harmony default export */ const prism_css = ((css_default()));
// EXTERNAL MODULE: ./node_modules/refractor/lang/js-extras.js
var js_extras = __webpack_require__("./node_modules/refractor/lang/js-extras.js");
var js_extras_default = /*#__PURE__*/__webpack_require__.n(js_extras);
;// CONCATENATED MODULE: ./node_modules/@storybook/components/node_modules/react-syntax-highlighter/dist/esm/languages/prism/js-extras.js

;
/* harmony default export */ const prism_js_extras = ((js_extras_default()));
// EXTERNAL MODULE: ./node_modules/refractor/lang/json.js
var json = __webpack_require__("./node_modules/refractor/lang/json.js");
var json_default = /*#__PURE__*/__webpack_require__.n(json);
;// CONCATENATED MODULE: ./node_modules/@storybook/components/node_modules/react-syntax-highlighter/dist/esm/languages/prism/json.js

;
/* harmony default export */ const prism_json = ((json_default()));
// EXTERNAL MODULE: ./node_modules/refractor/lang/graphql.js
var graphql = __webpack_require__("./node_modules/refractor/lang/graphql.js");
var graphql_default = /*#__PURE__*/__webpack_require__.n(graphql);
;// CONCATENATED MODULE: ./node_modules/@storybook/components/node_modules/react-syntax-highlighter/dist/esm/languages/prism/graphql.js

;
/* harmony default export */ const prism_graphql = ((graphql_default()));
// EXTERNAL MODULE: ./node_modules/refractor/lang/markup.js
var markup = __webpack_require__("./node_modules/refractor/lang/markup.js");
var markup_default = /*#__PURE__*/__webpack_require__.n(markup);
;// CONCATENATED MODULE: ./node_modules/@storybook/components/node_modules/react-syntax-highlighter/dist/esm/languages/prism/markup.js

;
/* harmony default export */ const prism_markup = ((markup_default()));
// EXTERNAL MODULE: ./node_modules/refractor/lang/markdown.js
var markdown = __webpack_require__("./node_modules/refractor/lang/markdown.js");
var markdown_default = /*#__PURE__*/__webpack_require__.n(markdown);
;// CONCATENATED MODULE: ./node_modules/@storybook/components/node_modules/react-syntax-highlighter/dist/esm/languages/prism/markdown.js

;
/* harmony default export */ const prism_markdown = ((markdown_default()));
// EXTERNAL MODULE: ./node_modules/refractor/lang/yaml.js
var yaml = __webpack_require__("./node_modules/refractor/lang/yaml.js");
var yaml_default = /*#__PURE__*/__webpack_require__.n(yaml);
;// CONCATENATED MODULE: ./node_modules/@storybook/components/node_modules/react-syntax-highlighter/dist/esm/languages/prism/yaml.js

;
/* harmony default export */ const prism_yaml = ((yaml_default()));
// EXTERNAL MODULE: ./node_modules/refractor/lang/tsx.js
var tsx = __webpack_require__("./node_modules/refractor/lang/tsx.js");
var tsx_default = /*#__PURE__*/__webpack_require__.n(tsx);
;// CONCATENATED MODULE: ./node_modules/@storybook/components/node_modules/react-syntax-highlighter/dist/esm/languages/prism/tsx.js

;
/* harmony default export */ const prism_tsx = ((tsx_default()));
// EXTERNAL MODULE: ./node_modules/refractor/lang/typescript.js
var typescript = __webpack_require__("./node_modules/refractor/lang/typescript.js");
var typescript_default = /*#__PURE__*/__webpack_require__.n(typescript);
;// CONCATENATED MODULE: ./node_modules/@storybook/components/node_modules/react-syntax-highlighter/dist/esm/languages/prism/typescript.js

;
/* harmony default export */ const prism_typescript = ((typescript_default()));
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread.js

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? Object(arguments[i]) : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      (0,defineProperty/* default */.Z)(target, key, source[key]);
    });
  }

  return target;
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js");
;// CONCATENATED MODULE: ./node_modules/@storybook/components/node_modules/react-syntax-highlighter/dist/esm/create-element.js



function createStyleObject(classNames) {
  var elementStyle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var stylesheet = arguments.length > 2 ? arguments[2] : undefined;
  return classNames.reduce(function (styleObject, className) {
    return _objectSpread({}, styleObject, stylesheet[className]);
  }, elementStyle);
}
function createClassNameString(classNames) {
  return classNames.join(' ');
}
function createChildren(stylesheet, useInlineStyles) {
  var childrenCount = 0;
  return function (children) {
    childrenCount += 1;
    return children.map(function (child, i) {
      return createElement({
        node: child,
        stylesheet: stylesheet,
        useInlineStyles: useInlineStyles,
        key: "code-segment-".concat(childrenCount, "-").concat(i)
      });
    });
  };
}
function createElement(_ref) {
  var node = _ref.node,
      stylesheet = _ref.stylesheet,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style,
      useInlineStyles = _ref.useInlineStyles,
      key = _ref.key;
  var properties = node.properties,
      type = node.type,
      TagName = node.tagName,
      value = node.value;

  if (type === 'text') {
    return value;
  } else if (TagName) {
    var childrenCreator = createChildren(stylesheet, useInlineStyles);
    var nonStylesheetClassNames = useInlineStyles && properties.className && properties.className.filter(function (className) {
      return !stylesheet[className];
    });
    var className = nonStylesheetClassNames && nonStylesheetClassNames.length ? nonStylesheetClassNames : undefined;
    var props = useInlineStyles ? _objectSpread({}, properties, {
      className: className && createClassNameString(className)
    }, {
      style: createStyleObject(properties.className, Object.assign({}, properties.style, style), stylesheet)
    }) : _objectSpread({}, properties, {
      className: createClassNameString(properties.className)
    });
    var children = childrenCreator(node.children);
    return react.createElement(TagName, (0,esm_extends/* default */.Z)({
      key: key
    }, props), children);
  }
}
;// CONCATENATED MODULE: ./node_modules/@storybook/components/node_modules/react-syntax-highlighter/dist/esm/checkForListedLanguage.js
/* harmony default export */ const checkForListedLanguage = (function (astGenerator, language) {
  var langs = astGenerator.listLanguages();
  return langs.indexOf(language) !== -1;
});
;// CONCATENATED MODULE: ./node_modules/@storybook/components/node_modules/react-syntax-highlighter/dist/esm/highlight.js





var newLineRegex = /\n/g;

function getNewLines(str) {
  return str.match(newLineRegex);
}

function getAllLineNumbers(_ref) {
  var lines = _ref.lines,
      startingLineNumber = _ref.startingLineNumber,
      style = _ref.style;
  return lines.map(function (_, i) {
    var number = i + startingLineNumber;
    return react.createElement("span", {
      key: "line-".concat(i),
      className: "react-syntax-highlighter-line-number",
      style: typeof style === 'function' ? style(number) : style
    }, "".concat(number, "\n"));
  });
}

function AllLineNumbers(_ref2) {
  var codeString = _ref2.codeString,
      codeStyle = _ref2.codeStyle,
      _ref2$containerStyle = _ref2.containerStyle,
      containerStyle = _ref2$containerStyle === void 0 ? {
    float: 'left',
    paddingRight: '10px'
  } : _ref2$containerStyle,
      _ref2$numberStyle = _ref2.numberStyle,
      numberStyle = _ref2$numberStyle === void 0 ? {} : _ref2$numberStyle,
      startingLineNumber = _ref2.startingLineNumber;
  return react.createElement("code", {
    style: Object.assign({}, codeStyle, containerStyle)
  }, getAllLineNumbers({
    lines: codeString.replace(/\n$/, '').split('\n'),
    style: numberStyle,
    startingLineNumber: startingLineNumber
  }));
}

function getEmWidthOfNumber(num) {
  var len = num.toString().length;
  return "".concat(len, "em");
}

function getInlineLineNumber(lineNumber, inlineLineNumberStyle) {
  return {
    type: 'element',
    tagName: 'span',
    properties: {
      key: "line-number--".concat(lineNumber),
      className: ['comment', 'linenumber', 'react-syntax-highlighter-line-number'],
      style: inlineLineNumberStyle
    },
    children: [{
      type: 'text',
      value: lineNumber
    }]
  };
}

function assembleLineNumberStyles(lineNumberStyle, lineNumber, largestLineNumber) {
  // minimally necessary styling for line numbers
  var defaultLineNumberStyle = {
    display: 'inline-block',
    minWidth: getEmWidthOfNumber(largestLineNumber),
    paddingRight: '1em',
    textAlign: 'right',
    userSelect: 'none'
  }; // prep custom styling

  var customLineNumberStyle = typeof lineNumberStyle === 'function' ? lineNumberStyle(lineNumber) : lineNumberStyle; // combine

  var assembledStyle = _objectSpread({}, defaultLineNumberStyle, customLineNumberStyle);

  return assembledStyle;
}

function createLineElement(_ref3) {
  var children = _ref3.children,
      lineNumber = _ref3.lineNumber,
      lineNumberStyle = _ref3.lineNumberStyle,
      largestLineNumber = _ref3.largestLineNumber,
      showInlineLineNumbers = _ref3.showInlineLineNumbers,
      _ref3$lineProps = _ref3.lineProps,
      lineProps = _ref3$lineProps === void 0 ? {} : _ref3$lineProps,
      _ref3$className = _ref3.className,
      className = _ref3$className === void 0 ? [] : _ref3$className;
  var properties = typeof lineProps === 'function' ? lineProps(lineNumber) : lineProps;
  properties['className'] = className;

  if (lineNumber && showInlineLineNumbers) {
    var inlineLineNumberStyle = assembleLineNumberStyles(lineNumberStyle, lineNumber, largestLineNumber);
    children.unshift(getInlineLineNumber(lineNumber, inlineLineNumberStyle));
  }

  return {
    type: 'element',
    tagName: 'span',
    properties: properties,
    children: children
  };
}

function flattenCodeTree(tree) {
  var className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var newTree = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  for (var i = 0; i < tree.length; i++) {
    var node = tree[i];

    if (node.type === 'text') {
      newTree.push(createLineElement({
        children: [node],
        className: className
      }));
    } else if (node.children) {
      var classNames = className.concat(node.properties.className);
      newTree = newTree.concat(flattenCodeTree(node.children, classNames));
    }
  }

  return newTree;
}

function processLines(codeTree, wrapLines, lineProps, showLineNumbers, showInlineLineNumbers, startingLineNumber, largestLineNumber, lineNumberStyle) {
  var _ref4;

  var tree = flattenCodeTree(codeTree.value);
  var newTree = [];
  var lastLineBreakIndex = -1;
  var index = 0;

  function createWrappedLine(children, lineNumber) {
    var className = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    return createLineElement({
      children: children,
      lineNumber: lineNumber,
      lineNumberStyle: lineNumberStyle,
      largestLineNumber: largestLineNumber,
      showInlineLineNumbers: showInlineLineNumbers,
      lineProps: lineProps,
      className: className
    });
  }

  function createUnwrappedLine(children, lineNumber) {
    if (lineNumber && showInlineLineNumbers) {
      var inlineLineNumberStyle = assembleLineNumberStyles(lineNumberStyle, lineNumber, largestLineNumber);
      children.unshift(getInlineLineNumber(lineNumber, inlineLineNumberStyle));
    }

    return children;
  }

  function createLine(children, lineNumber) {
    var className = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    return wrapLines || className.length > 0 ? createWrappedLine(children, lineNumber, className) : createUnwrappedLine(children, lineNumber);
  }

  var _loop = function _loop() {
    var node = tree[index];
    var value = node.children[0].value;
    var newLines = getNewLines(value);

    if (newLines) {
      var splitValue = value.split('\n');
      splitValue.forEach(function (text, i) {
        var lineNumber = showLineNumbers && newTree.length + startingLineNumber;
        var newChild = {
          type: 'text',
          value: "".concat(text, "\n")
        }; // if it's the first line

        if (i === 0) {
          var _children = tree.slice(lastLineBreakIndex + 1, index).concat(createLineElement({
            children: [newChild],
            className: node.properties.className
          }));

          var _line = createLine(_children, lineNumber);

          newTree.push(_line); // if it's the last line
        } else if (i === splitValue.length - 1) {
          var stringChild = tree[index + 1] && tree[index + 1].children && tree[index + 1].children[0];

          if (stringChild) {
            var lastLineInPreviousSpan = {
              type: 'text',
              value: "".concat(text)
            };
            var newElem = createLineElement({
              children: [lastLineInPreviousSpan],
              className: node.properties.className
            });
            tree.splice(index + 1, 0, newElem);
          } else {
            var _children2 = [newChild];

            var _line2 = createLine(_children2, lineNumber, node.properties.className);

            newTree.push(_line2);
          } // if it's neither the first nor the last line

        } else {
          var _children3 = [newChild];

          var _line3 = createLine(_children3, lineNumber, node.properties.className);

          newTree.push(_line3);
        }
      });
      lastLineBreakIndex = index;
    }

    index++;
  };

  while (index < tree.length) {
    _loop();
  }

  if (lastLineBreakIndex !== tree.length - 1) {
    var children = tree.slice(lastLineBreakIndex + 1, tree.length);

    if (children && children.length) {
      var lineNumber = newTree.length + startingLineNumber;
      var line = createLine(children, lineNumber);
      newTree.push(line);
    }
  }

  return wrapLines ? newTree : (_ref4 = []).concat.apply(_ref4, newTree);
}

function defaultRenderer(_ref5) {
  var rows = _ref5.rows,
      stylesheet = _ref5.stylesheet,
      useInlineStyles = _ref5.useInlineStyles;
  return rows.map(function (node, i) {
    return createElement({
      node: node,
      stylesheet: stylesheet,
      useInlineStyles: useInlineStyles,
      key: "code-segement".concat(i)
    });
  });
} // only highlight.js has the highlightAuto method


function isHighlightJs(astGenerator) {
  return astGenerator && typeof astGenerator.highlightAuto !== 'undefined';
}

function getCodeTree(_ref6) {
  var astGenerator = _ref6.astGenerator,
      language = _ref6.language,
      code = _ref6.code,
      defaultCodeValue = _ref6.defaultCodeValue;

  // figure out whether we're using lowlight/highlight or refractor/prism
  // then attempt highlighting accordingly
  // lowlight/highlight?
  if (isHighlightJs(astGenerator)) {
    var hasLanguage = checkForListedLanguage(astGenerator, language);

    if (language === 'text') {
      return {
        value: defaultCodeValue,
        language: 'text'
      };
    } else if (hasLanguage) {
      return astGenerator.highlight(language, code);
    } else {
      return astGenerator.highlightAuto(code);
    }
  } // must be refractor/prism, then


  try {
    return language && language !== 'text' ? {
      value: astGenerator.highlight(code, language)
    } : {
      value: defaultCodeValue
    };
  } catch (e) {
    return {
      value: defaultCodeValue
    };
  }
}

/* harmony default export */ function highlight(defaultAstGenerator, defaultStyle) {
  return function SyntaxHighlighter(_ref7) {
    var language = _ref7.language,
        children = _ref7.children,
        _ref7$style = _ref7.style,
        style = _ref7$style === void 0 ? defaultStyle : _ref7$style,
        _ref7$customStyle = _ref7.customStyle,
        customStyle = _ref7$customStyle === void 0 ? {} : _ref7$customStyle,
        _ref7$codeTagProps = _ref7.codeTagProps,
        codeTagProps = _ref7$codeTagProps === void 0 ? {
      className: language ? "language-".concat(language) : undefined,
      style: style['code[class*="language-"]']
    } : _ref7$codeTagProps,
        _ref7$useInlineStyles = _ref7.useInlineStyles,
        useInlineStyles = _ref7$useInlineStyles === void 0 ? true : _ref7$useInlineStyles,
        _ref7$showLineNumbers = _ref7.showLineNumbers,
        showLineNumbers = _ref7$showLineNumbers === void 0 ? false : _ref7$showLineNumbers,
        _ref7$showInlineLineN = _ref7.showInlineLineNumbers,
        showInlineLineNumbers = _ref7$showInlineLineN === void 0 ? false : _ref7$showInlineLineN,
        _ref7$startingLineNum = _ref7.startingLineNumber,
        startingLineNumber = _ref7$startingLineNum === void 0 ? 1 : _ref7$startingLineNum,
        lineNumberContainerStyle = _ref7.lineNumberContainerStyle,
        _ref7$lineNumberStyle = _ref7.lineNumberStyle,
        lineNumberStyle = _ref7$lineNumberStyle === void 0 ? {} : _ref7$lineNumberStyle,
        wrapLines = _ref7.wrapLines,
        _ref7$lineProps = _ref7.lineProps,
        lineProps = _ref7$lineProps === void 0 ? {} : _ref7$lineProps,
        renderer = _ref7.renderer,
        _ref7$PreTag = _ref7.PreTag,
        PreTag = _ref7$PreTag === void 0 ? 'pre' : _ref7$PreTag,
        _ref7$CodeTag = _ref7.CodeTag,
        CodeTag = _ref7$CodeTag === void 0 ? 'code' : _ref7$CodeTag,
        _ref7$code = _ref7.code,
        code = _ref7$code === void 0 ? Array.isArray(children) ? children[0] : children : _ref7$code,
        astGenerator = _ref7.astGenerator,
        rest = (0,objectWithoutProperties/* default */.Z)(_ref7, ["language", "children", "style", "customStyle", "codeTagProps", "useInlineStyles", "showLineNumbers", "showInlineLineNumbers", "startingLineNumber", "lineNumberContainerStyle", "lineNumberStyle", "wrapLines", "lineProps", "renderer", "PreTag", "CodeTag", "code", "astGenerator"]);

    astGenerator = astGenerator || defaultAstGenerator;
    var allLineNumbers = showLineNumbers ? react.createElement(AllLineNumbers, {
      containerStyle: lineNumberContainerStyle,
      codeStyle: codeTagProps.style || {},
      numberStyle: lineNumberStyle,
      startingLineNumber: startingLineNumber,
      codeString: code
    }) : null;
    var defaultPreStyle = style.hljs || style['pre[class*="language-"]'] || {
      backgroundColor: '#fff'
    };
    var generatorClassName = isHighlightJs(astGenerator) ? 'hljs' : 'prismjs';
    var preProps = useInlineStyles ? Object.assign({}, rest, {
      style: Object.assign({}, defaultPreStyle, customStyle)
    }) : Object.assign({}, rest, {
      className: rest.className ? "".concat(generatorClassName, " ").concat(rest.className) : generatorClassName,
      style: Object.assign({}, customStyle)
    });

    if (!astGenerator) {
      return react.createElement(PreTag, preProps, allLineNumbers, react.createElement(CodeTag, codeTagProps, code));
    }
    /*
     * some custom renderers rely on individual row elements so we need to turn wrapLines on
     * if renderer is provided and wrapLines is undefined
     */


    wrapLines = renderer && wrapLines === undefined ? true : wrapLines;
    renderer = renderer || defaultRenderer;
    var defaultCodeValue = [{
      type: 'text',
      value: code
    }];
    var codeTree = getCodeTree({
      astGenerator: astGenerator,
      language: language,
      code: code,
      defaultCodeValue: defaultCodeValue
    });

    if (codeTree.language === null) {
      codeTree.value = defaultCodeValue;
    } // determine largest line number so that we can force minWidth on all linenumber elements


    var largestLineNumber = codeTree.value.length + startingLineNumber;
    var rows = processLines(codeTree, wrapLines, lineProps, showLineNumbers, showInlineLineNumbers, startingLineNumber, largestLineNumber, lineNumberStyle);
    return react.createElement(PreTag, preProps, react.createElement(CodeTag, codeTagProps, !showInlineLineNumbers && allLineNumbers, renderer({
      rows: rows,
      stylesheet: style,
      useInlineStyles: useInlineStyles
    })));
  };
}
// EXTERNAL MODULE: ./node_modules/refractor/core.js
var core = __webpack_require__("./node_modules/refractor/core.js");
var core_default = /*#__PURE__*/__webpack_require__.n(core);
;// CONCATENATED MODULE: ./node_modules/@storybook/components/node_modules/react-syntax-highlighter/dist/esm/prism-light.js


var SyntaxHighlighter = highlight((core_default()), {});

SyntaxHighlighter.registerLanguage = function (_, language) {
  return core_default().register(language);
};

/* harmony default export */ const prism_light = (SyntaxHighlighter);
// EXTERNAL MODULE: ./node_modules/@storybook/components/dist/esm/ActionBar/ActionBar.js
var ActionBar = __webpack_require__("./node_modules/@storybook/components/dist/esm/ActionBar/ActionBar.js");
// EXTERNAL MODULE: ./node_modules/@storybook/components/dist/esm/ScrollArea/ScrollArea.js
var ScrollArea = __webpack_require__("./node_modules/@storybook/components/dist/esm/ScrollArea/ScrollArea.js");
// EXTERNAL MODULE: ./node_modules/ts-dedent/dist/index.js
var dist = __webpack_require__("./node_modules/ts-dedent/dist/index.js");
;// CONCATENATED MODULE: ./node_modules/@storybook/components/dist/esm/syntaxhighlighter/formatter.js


var formatter = memoizerific_default()(2)(function (code) {
  return (0,dist/* default */.ZP)(code);
});
;// CONCATENATED MODULE: ./node_modules/@storybook/components/dist/esm/syntaxhighlighter/syntaxhighlighter.js
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





















 // @ts-ignore

 // @ts-ignore

 // @ts-ignore

 // @ts-ignore

 // @ts-ignore

 // @ts-ignore

 // @ts-ignore

 // @ts-ignore

 // @ts-ignore

 // @ts-ignore

 // @ts-ignore

 // @ts-ignore





var syntaxhighlighter_navigator = (window_default()).navigator,
    syntaxhighlighter_document = (window_default()).document,
    globalWindow = (window_default()).window;
prism_light.registerLanguage('jsextra', prism_js_extras);
prism_light.registerLanguage('jsx', prism_jsx);
prism_light.registerLanguage('json', prism_json);
prism_light.registerLanguage('yml', prism_yaml);
prism_light.registerLanguage('md', prism_markdown);
prism_light.registerLanguage('bash', prism_bash);
prism_light.registerLanguage('css', prism_css);
prism_light.registerLanguage('html', prism_markup);
prism_light.registerLanguage('tsx', prism_tsx);
prism_light.registerLanguage('typescript', prism_typescript);
prism_light.registerLanguage('graphql', prism_graphql);
var themedSyntax = memoizerific_default()(2)(function (theme) {
  return Object.entries(theme.code || {}).reduce(function (acc, _ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        val = _ref2[1];

    return Object.assign({}, acc, _defineProperty({}, "* .".concat(key), val));
  }, {});
});
var copyToClipboard = createCopyToClipboardFunction();
function createCopyToClipboardFunction() {
  if (syntaxhighlighter_navigator !== null && syntaxhighlighter_navigator !== void 0 && syntaxhighlighter_navigator.clipboard) {
    return function (text) {
      return syntaxhighlighter_navigator.clipboard.writeText(text);
    };
  }

  return /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(text) {
      var tmp, focus;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              tmp = syntaxhighlighter_document.createElement('TEXTAREA');
              focus = syntaxhighlighter_document.activeElement;
              tmp.value = text;
              syntaxhighlighter_document.body.appendChild(tmp);
              tmp.select();
              syntaxhighlighter_document.execCommand('copy');
              syntaxhighlighter_document.body.removeChild(tmp);
              focus.focus();

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref3.apply(this, arguments);
    };
  }();
}
var Wrapper = dist_esm/* styled.div */.zo.div(function (_ref4) {
  var theme = _ref4.theme;
  return {
    position: 'relative',
    overflow: 'hidden',
    color: theme.color.defaultText
  };
}, function (_ref5) {
  var theme = _ref5.theme,
      bordered = _ref5.bordered;
  return bordered ? {
    border: "1px solid ".concat(theme.appBorderColor),
    borderRadius: theme.borderRadius,
    background: theme.background.content
  } : {};
});
var Scroller = (0,dist_esm/* styled */.zo)(function (_ref6) {
  var children = _ref6.children,
      className = _ref6.className;
  return /*#__PURE__*/react.createElement(ScrollArea/* ScrollArea */.x, {
    horizontal: true,
    vertical: true,
    className: className
  }, children);
})({
  position: 'relative'
}, function (_ref7) {
  var theme = _ref7.theme;
  return {
    '& code': {
      paddingRight: theme.layoutMargin
    }
  };
}, function (_ref8) {
  var theme = _ref8.theme;
  return themedSyntax(theme);
});
var Pre = dist_esm/* styled.pre */.zo.pre(function (_ref9) {
  var theme = _ref9.theme,
      padded = _ref9.padded;
  return {
    display: 'flex',
    justifyContent: 'flex-start',
    margin: 0,
    padding: padded ? theme.layoutMargin : 0
  };
});
var Code = dist_esm/* styled.code */.zo.code({
  flex: 1,
  paddingRight: 0,
  opacity: 1
});
var syntaxhighlighter_SyntaxHighlighter = function SyntaxHighlighter(_ref10) {
  var children = _ref10.children,
      _ref10$language = _ref10.language,
      language = _ref10$language === void 0 ? 'jsx' : _ref10$language,
      _ref10$copyable = _ref10.copyable,
      copyable = _ref10$copyable === void 0 ? false : _ref10$copyable,
      _ref10$bordered = _ref10.bordered,
      bordered = _ref10$bordered === void 0 ? false : _ref10$bordered,
      _ref10$padded = _ref10.padded,
      padded = _ref10$padded === void 0 ? false : _ref10$padded,
      _ref10$format = _ref10.format,
      format = _ref10$format === void 0 ? true : _ref10$format,
      _ref10$className = _ref10.className,
      className = _ref10$className === void 0 ? null : _ref10$className,
      _ref10$showLineNumber = _ref10.showLineNumbers,
      showLineNumbers = _ref10$showLineNumber === void 0 ? false : _ref10$showLineNumber,
      rest = _objectWithoutProperties(_ref10, ["children", "language", "copyable", "bordered", "padded", "format", "className", "showLineNumbers"]);

  if (typeof children !== 'string' || !children.trim()) {
    return null;
  }

  var highlightableCode = format ? formatter(children) : children.trim();

  var _useState = (0,react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      copied = _useState2[0],
      setCopied = _useState2[1];

  var onClick = function onClick(e) {
    e.preventDefault();
    var selectedText = globalWindow.getSelection().toString();
    var textToCopy = e.type !== 'click' && selectedText ? selectedText : highlightableCode;
    copyToClipboard(textToCopy).then(function () {
      setCopied(true);
      globalWindow.setTimeout(function () {
        return setCopied(false);
      }, 1500);
    }).catch(esm/* logger.error */.kg.error);
  };

  return /*#__PURE__*/react.createElement(Wrapper, {
    bordered: bordered,
    padded: padded,
    className: className,
    onCopyCapture: onClick
  }, /*#__PURE__*/react.createElement(Scroller, null, /*#__PURE__*/react.createElement(prism_light, _extends({
    padded: padded || bordered,
    language: language,
    showLineNumbers: showLineNumbers,
    showInlineLineNumbers: showLineNumbers,
    useInlineStyles: false,
    PreTag: Pre,
    CodeTag: Code,
    lineNumberContainerStyle: {}
  }, rest), highlightableCode)), copyable ? /*#__PURE__*/react.createElement(ActionBar/* ActionBar */.o, {
    actionItems: [{
      title: copied ? 'Copied' : 'Copy',
      onClick: onClick
    }]
  }) : null);
};
syntaxhighlighter_SyntaxHighlighter.displayName = "SyntaxHighlighter";
/* harmony default export */ const syntaxhighlighter = (syntaxhighlighter_SyntaxHighlighter);

/***/ }),

/***/ "./node_modules/comma-separated-tokens/index.js":
/***/ ((__unused_webpack_module, exports) => {

"use strict";
var __webpack_unused_export__;


exports.Q = parse
__webpack_unused_export__ = stringify

var comma = ','
var space = ' '
var empty = ''

// Parse comma-separated tokens to an array.
function parse(value) {
  var values = []
  var input = String(value || empty)
  var index = input.indexOf(comma)
  var lastIndex = 0
  var end = false
  var val

  while (!end) {
    if (index === -1) {
      index = input.length
      end = true
    }

    val = input.slice(lastIndex, index).trim()

    if (val || !end) {
      values.push(val)
    }

    lastIndex = index + 1
    index = input.indexOf(comma, lastIndex)
  }

  return values
}

// Compile an array to comma-separated tokens.
// `options.padLeft` (default: `true`) pads a space left of each token, and
// `options.padRight` (default: `false`) pads a space to the right of each token.
function stringify(values, options) {
  var settings = options || {}
  var left = settings.padLeft === false ? empty : space
  var right = settings.padRight ? space : empty

  // Ensure the last empty entry is seen.
  if (values[values.length - 1] === empty) {
    values = values.concat(empty)
  }

  return values.join(right + comma + left).trim()
}


/***/ }),

/***/ "./node_modules/hast-util-parse-selector/index.js":
/***/ ((module) => {

"use strict";


module.exports = parse

var search = /[#.]/g

// Create a hast element from a simple CSS selector.
function parse(selector, defaultTagName) {
  var value = selector || ''
  var name = defaultTagName || 'div'
  var props = {}
  var start = 0
  var subvalue
  var previous
  var match

  while (start < value.length) {
    search.lastIndex = start
    match = search.exec(value)
    subvalue = value.slice(start, match ? match.index : value.length)

    if (subvalue) {
      if (!previous) {
        name = subvalue
      } else if (previous === '#') {
        props.id = subvalue
      } else if (props.className) {
        props.className.push(subvalue)
      } else {
        props.className = [subvalue]
      }

      start += subvalue.length
    }

    if (match) {
      previous = match[0]
      start++
    }
  }

  return {type: 'element', tagName: name, properties: props, children: []}
}


/***/ }),

/***/ "./node_modules/hastscript/factory.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var find = __webpack_require__("./node_modules/property-information/find.js")
var normalize = __webpack_require__("./node_modules/property-information/normalize.js")
var parseSelector = __webpack_require__("./node_modules/hast-util-parse-selector/index.js")
var spaces = __webpack_require__("./node_modules/space-separated-tokens/index.js")/* .parse */ .Q
var commas = __webpack_require__("./node_modules/comma-separated-tokens/index.js")/* .parse */ .Q

module.exports = factory

var own = {}.hasOwnProperty

function factory(schema, defaultTagName, caseSensitive) {
  var adjust = caseSensitive ? createAdjustMap(caseSensitive) : null

  return h

  // Hyperscript compatible DSL for creating virtual hast trees.
  function h(selector, properties) {
    var node = parseSelector(selector, defaultTagName)
    var children = Array.prototype.slice.call(arguments, 2)
    var name = node.tagName.toLowerCase()
    var property

    node.tagName = adjust && own.call(adjust, name) ? adjust[name] : name

    if (properties && isChildren(properties, node)) {
      children.unshift(properties)
      properties = null
    }

    if (properties) {
      for (property in properties) {
        addProperty(node.properties, property, properties[property])
      }
    }

    addChild(node.children, children)

    if (node.tagName === 'template') {
      node.content = {type: 'root', children: node.children}
      node.children = []
    }

    return node
  }

  function addProperty(properties, key, value) {
    var info
    var property
    var result

    // Ignore nullish and NaN values.
    if (value === null || value === undefined || value !== value) {
      return
    }

    info = find(schema, key)
    property = info.property
    result = value

    // Handle list values.
    if (typeof result === 'string') {
      if (info.spaceSeparated) {
        result = spaces(result)
      } else if (info.commaSeparated) {
        result = commas(result)
      } else if (info.commaOrSpaceSeparated) {
        result = spaces(commas(result).join(' '))
      }
    }

    // Accept `object` on style.
    if (property === 'style' && typeof value !== 'string') {
      result = style(result)
    }

    // Class-names (which can be added both on the `selector` and here).
    if (property === 'className' && properties.className) {
      result = properties.className.concat(result)
    }

    properties[property] = parsePrimitives(info, property, result)
  }
}

function isChildren(value, node) {
  return (
    typeof value === 'string' ||
    'length' in value ||
    isNode(node.tagName, value)
  )
}

function isNode(tagName, value) {
  var type = value.type

  if (tagName === 'input' || !type || typeof type !== 'string') {
    return false
  }

  if (typeof value.children === 'object' && 'length' in value.children) {
    return true
  }

  type = type.toLowerCase()

  if (tagName === 'button') {
    return (
      type !== 'menu' &&
      type !== 'submit' &&
      type !== 'reset' &&
      type !== 'button'
    )
  }

  return 'value' in value
}

function addChild(nodes, value) {
  var index
  var length

  if (typeof value === 'string' || typeof value === 'number') {
    nodes.push({type: 'text', value: String(value)})
    return
  }

  if (typeof value === 'object' && 'length' in value) {
    index = -1
    length = value.length

    while (++index < length) {
      addChild(nodes, value[index])
    }

    return
  }

  if (typeof value !== 'object' || !('type' in value)) {
    throw new Error('Expected node, nodes, or string, got `' + value + '`')
  }

  nodes.push(value)
}

// Parse a (list of) primitives.
function parsePrimitives(info, name, value) {
  var index
  var length
  var result

  if (typeof value !== 'object' || !('length' in value)) {
    return parsePrimitive(info, name, value)
  }

  length = value.length
  index = -1
  result = []

  while (++index < length) {
    result[index] = parsePrimitive(info, name, value[index])
  }

  return result
}

// Parse a single primitives.
function parsePrimitive(info, name, value) {
  var result = value

  if (info.number || info.positiveNumber) {
    if (!isNaN(result) && result !== '') {
      result = Number(result)
    }
  } else if (info.boolean || info.overloadedBoolean) {
    // Accept `boolean` and `string`.
    if (
      typeof result === 'string' &&
      (result === '' || normalize(value) === normalize(name))
    ) {
      result = true
    }
  }

  return result
}

function style(value) {
  var result = []
  var key

  for (key in value) {
    result.push([key, value[key]].join(': '))
  }

  return result.join('; ')
}

function createAdjustMap(values) {
  var length = values.length
  var index = -1
  var result = {}
  var value

  while (++index < length) {
    value = values[index]
    result[value.toLowerCase()] = value
  }

  return result
}


/***/ }),

/***/ "./node_modules/hastscript/html.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var schema = __webpack_require__("./node_modules/property-information/html.js")
var factory = __webpack_require__("./node_modules/hastscript/factory.js")

var html = factory(schema, 'div')
html.displayName = 'html'

module.exports = html


/***/ }),

/***/ "./node_modules/hastscript/index.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = __webpack_require__("./node_modules/hastscript/html.js")


/***/ }),

/***/ "./node_modules/is-alphabetical/index.js":
/***/ ((module) => {

"use strict";


module.exports = alphabetical

// Check if the given character code, or the character code at the first
// character, is alphabetical.
function alphabetical(character) {
  var code = typeof character === 'string' ? character.charCodeAt(0) : character

  return (
    (code >= 97 && code <= 122) /* a-z */ ||
    (code >= 65 && code <= 90) /* A-Z */
  )
}


/***/ }),

/***/ "./node_modules/is-alphanumerical/index.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var alphabetical = __webpack_require__("./node_modules/is-alphabetical/index.js")
var decimal = __webpack_require__("./node_modules/is-decimal/index.js")

module.exports = alphanumerical

// Check if the given character code, or the character code at the first
// character, is alphanumerical.
function alphanumerical(character) {
  return alphabetical(character) || decimal(character)
}


/***/ }),

/***/ "./node_modules/is-decimal/index.js":
/***/ ((module) => {

"use strict";


module.exports = decimal

// Check if the given character code, or the character code at the first
// character, is decimal.
function decimal(character) {
  var code = typeof character === 'string' ? character.charCodeAt(0) : character

  return code >= 48 && code <= 57 /* 0-9 */
}


/***/ }),

/***/ "./node_modules/is-hexadecimal/index.js":
/***/ ((module) => {

"use strict";


module.exports = hexadecimal

// Check if the given character code, or the character code at the first
// character, is hexadecimal.
function hexadecimal(character) {
  var code = typeof character === 'string' ? character.charCodeAt(0) : character

  return (
    (code >= 97 /* a */ && code <= 102) /* z */ ||
    (code >= 65 /* A */ && code <= 70) /* Z */ ||
    (code >= 48 /* A */ && code <= 57) /* Z */
  )
}


/***/ }),

/***/ "./node_modules/parse-entities/decode-entity.browser.js":
/***/ ((module) => {

"use strict";


/* eslint-env browser */

var el

var semicolon = 59 //  ';'

module.exports = decodeEntity

function decodeEntity(characters) {
  var entity = '&' + characters + ';'
  var char

  el = el || document.createElement('i')
  el.innerHTML = entity
  char = el.textContent

  // Some entities do not require the closing semicolon (`&not` - for instance),
  // which leads to situations where parsing the assumed entity of &notit; will
  // result in the string `¬it;`.  When we encounter a trailing semicolon after
  // parsing and the entity to decode was not a semicolon (`&semi;`), we can
  // assume that the matching was incomplete
  if (char.charCodeAt(char.length - 1) === semicolon && characters !== 'semi') {
    return false
  }

  // If the decoded string is equal to the input, the entity was not valid
  return char === entity ? false : char
}


/***/ }),

/***/ "./node_modules/parse-entities/index.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var legacy = __webpack_require__("./node_modules/character-entities-legacy/index.json")
var invalid = __webpack_require__("./node_modules/character-reference-invalid/index.json")
var decimal = __webpack_require__("./node_modules/is-decimal/index.js")
var hexadecimal = __webpack_require__("./node_modules/is-hexadecimal/index.js")
var alphanumerical = __webpack_require__("./node_modules/is-alphanumerical/index.js")
var decodeEntity = __webpack_require__("./node_modules/parse-entities/decode-entity.browser.js")

module.exports = parseEntities

var own = {}.hasOwnProperty
var fromCharCode = String.fromCharCode
var noop = Function.prototype

// Default settings.
var defaults = {
  warning: null,
  reference: null,
  text: null,
  warningContext: null,
  referenceContext: null,
  textContext: null,
  position: {},
  additional: null,
  attribute: false,
  nonTerminated: true
}

// Characters.
var tab = 9 // '\t'
var lineFeed = 10 // '\n'
var formFeed = 12 // '\f'
var space = 32 // ' '
var ampersand = 38 // '&'
var semicolon = 59 // ';'
var lessThan = 60 // '<'
var equalsTo = 61 // '='
var numberSign = 35 // '#'
var uppercaseX = 88 // 'X'
var lowercaseX = 120 // 'x'
var replacementCharacter = 65533 // '�'

// Reference types.
var name = 'named'
var hexa = 'hexadecimal'
var deci = 'decimal'

// Map of bases.
var bases = {}

bases[hexa] = 16
bases[deci] = 10

// Map of types to tests.
// Each type of character reference accepts different characters.
// This test is used to detect whether a reference has ended (as the semicolon
// is not strictly needed).
var tests = {}

tests[name] = alphanumerical
tests[deci] = decimal
tests[hexa] = hexadecimal

// Warning types.
var namedNotTerminated = 1
var numericNotTerminated = 2
var namedEmpty = 3
var numericEmpty = 4
var namedUnknown = 5
var numericDisallowed = 6
var numericProhibited = 7

// Warning messages.
var messages = {}

messages[namedNotTerminated] =
  'Named character references must be terminated by a semicolon'
messages[numericNotTerminated] =
  'Numeric character references must be terminated by a semicolon'
messages[namedEmpty] = 'Named character references cannot be empty'
messages[numericEmpty] = 'Numeric character references cannot be empty'
messages[namedUnknown] = 'Named character references must be known'
messages[numericDisallowed] =
  'Numeric character references cannot be disallowed'
messages[numericProhibited] =
  'Numeric character references cannot be outside the permissible Unicode range'

// Wrap to ensure clean parameters are given to `parse`.
function parseEntities(value, options) {
  var settings = {}
  var option
  var key

  if (!options) {
    options = {}
  }

  for (key in defaults) {
    option = options[key]
    settings[key] =
      option === null || option === undefined ? defaults[key] : option
  }

  if (settings.position.indent || settings.position.start) {
    settings.indent = settings.position.indent || []
    settings.position = settings.position.start
  }

  return parse(value, settings)
}

// Parse entities.
// eslint-disable-next-line complexity
function parse(value, settings) {
  var additional = settings.additional
  var nonTerminated = settings.nonTerminated
  var handleText = settings.text
  var handleReference = settings.reference
  var handleWarning = settings.warning
  var textContext = settings.textContext
  var referenceContext = settings.referenceContext
  var warningContext = settings.warningContext
  var pos = settings.position
  var indent = settings.indent || []
  var length = value.length
  var index = 0
  var lines = -1
  var column = pos.column || 1
  var line = pos.line || 1
  var queue = ''
  var result = []
  var entityCharacters
  var namedEntity
  var terminated
  var characters
  var character
  var reference
  var following
  var warning
  var reason
  var output
  var entity
  var begin
  var start
  var type
  var test
  var prev
  var next
  var diff
  var end

  if (typeof additional === 'string') {
    additional = additional.charCodeAt(0)
  }

  // Cache the current point.
  prev = now()

  // Wrap `handleWarning`.
  warning = handleWarning ? parseError : noop

  // Ensure the algorithm walks over the first character and the end
  // (inclusive).
  index--
  length++

  while (++index < length) {
    // If the previous character was a newline.
    if (character === lineFeed) {
      column = indent[lines] || 1
    }

    character = value.charCodeAt(index)

    if (character === ampersand) {
      following = value.charCodeAt(index + 1)

      // The behaviour depends on the identity of the next character.
      if (
        following === tab ||
        following === lineFeed ||
        following === formFeed ||
        following === space ||
        following === ampersand ||
        following === lessThan ||
        following !== following ||
        (additional && following === additional)
      ) {
        // Not a character reference.
        // No characters are consumed, and nothing is returned.
        // This is not an error, either.
        queue += fromCharCode(character)
        column++

        continue
      }

      start = index + 1
      begin = start
      end = start

      if (following === numberSign) {
        // Numerical entity.
        end = ++begin

        // The behaviour further depends on the next character.
        following = value.charCodeAt(end)

        if (following === uppercaseX || following === lowercaseX) {
          // ASCII hex digits.
          type = hexa
          end = ++begin
        } else {
          // ASCII digits.
          type = deci
        }
      } else {
        // Named entity.
        type = name
      }

      entityCharacters = ''
      entity = ''
      characters = ''
      test = tests[type]
      end--

      while (++end < length) {
        following = value.charCodeAt(end)

        if (!test(following)) {
          break
        }

        characters += fromCharCode(following)

        // Check if we can match a legacy named reference.
        // If so, we cache that as the last viable named reference.
        // This ensures we do not need to walk backwards later.
        if (type === name && own.call(legacy, characters)) {
          entityCharacters = characters
          entity = legacy[characters]
        }
      }

      terminated = value.charCodeAt(end) === semicolon

      if (terminated) {
        end++

        namedEntity = type === name ? decodeEntity(characters) : false

        if (namedEntity) {
          entityCharacters = characters
          entity = namedEntity
        }
      }

      diff = 1 + end - start

      if (!terminated && !nonTerminated) {
        // Empty.
      } else if (!characters) {
        // An empty (possible) entity is valid, unless it’s numeric (thus an
        // ampersand followed by an octothorp).
        if (type !== name) {
          warning(numericEmpty, diff)
        }
      } else if (type === name) {
        // An ampersand followed by anything unknown, and not terminated, is
        // invalid.
        if (terminated && !entity) {
          warning(namedUnknown, 1)
        } else {
          // If theres something after an entity name which is not known, cap
          // the reference.
          if (entityCharacters !== characters) {
            end = begin + entityCharacters.length
            diff = 1 + end - begin
            terminated = false
          }

          // If the reference is not terminated, warn.
          if (!terminated) {
            reason = entityCharacters ? namedNotTerminated : namedEmpty

            if (settings.attribute) {
              following = value.charCodeAt(end)

              if (following === equalsTo) {
                warning(reason, diff)
                entity = null
              } else if (alphanumerical(following)) {
                entity = null
              } else {
                warning(reason, diff)
              }
            } else {
              warning(reason, diff)
            }
          }
        }

        reference = entity
      } else {
        if (!terminated) {
          // All non-terminated numeric entities are not rendered, and trigger a
          // warning.
          warning(numericNotTerminated, diff)
        }

        // When terminated and number, parse as either hexadecimal or decimal.
        reference = parseInt(characters, bases[type])

        // Trigger a warning when the parsed number is prohibited, and replace
        // with replacement character.
        if (prohibited(reference)) {
          warning(numericProhibited, diff)
          reference = fromCharCode(replacementCharacter)
        } else if (reference in invalid) {
          // Trigger a warning when the parsed number is disallowed, and replace
          // by an alternative.
          warning(numericDisallowed, diff)
          reference = invalid[reference]
        } else {
          // Parse the number.
          output = ''

          // Trigger a warning when the parsed number should not be used.
          if (disallowed(reference)) {
            warning(numericDisallowed, diff)
          }

          // Stringify the number.
          if (reference > 0xffff) {
            reference -= 0x10000
            output += fromCharCode((reference >>> (10 & 0x3ff)) | 0xd800)
            reference = 0xdc00 | (reference & 0x3ff)
          }

          reference = output + fromCharCode(reference)
        }
      }

      // Found it!
      // First eat the queued characters as normal text, then eat an entity.
      if (reference) {
        flush()

        prev = now()
        index = end - 1
        column += end - start + 1
        result.push(reference)
        next = now()
        next.offset++

        if (handleReference) {
          handleReference.call(
            referenceContext,
            reference,
            {start: prev, end: next},
            value.slice(start - 1, end)
          )
        }

        prev = next
      } else {
        // If we could not find a reference, queue the checked characters (as
        // normal characters), and move the pointer to their end.
        // This is possible because we can be certain neither newlines nor
        // ampersands are included.
        characters = value.slice(start - 1, end)
        queue += characters
        column += characters.length
        index = end - 1
      }
    } else {
      // Handle anything other than an ampersand, including newlines and EOF.
      if (
        character === 10 // Line feed
      ) {
        line++
        lines++
        column = 0
      }

      if (character === character) {
        queue += fromCharCode(character)
        column++
      } else {
        flush()
      }
    }
  }

  // Return the reduced nodes.
  return result.join('')

  // Get current position.
  function now() {
    return {
      line: line,
      column: column,
      offset: index + (pos.offset || 0)
    }
  }

  // “Throw” a parse-error: a warning.
  function parseError(code, offset) {
    var position = now()

    position.column += offset
    position.offset += offset

    handleWarning.call(warningContext, messages[code], position, code)
  }

  // Flush `queue` (normal text).
  // Macro invoked before each entity and at the end of `value`.
  // Does nothing when `queue` is empty.
  function flush() {
    if (queue) {
      result.push(queue)

      if (handleText) {
        handleText.call(textContext, queue, {start: prev, end: now()})
      }

      queue = ''
    }
  }
}

// Check if `character` is outside the permissible unicode range.
function prohibited(code) {
  return (code >= 0xd800 && code <= 0xdfff) || code > 0x10ffff
}

// Check if `character` is disallowed.
function disallowed(code) {
  return (
    (code >= 0x0001 && code <= 0x0008) ||
    code === 0x000b ||
    (code >= 0x000d && code <= 0x001f) ||
    (code >= 0x007f && code <= 0x009f) ||
    (code >= 0xfdd0 && code <= 0xfdef) ||
    (code & 0xffff) === 0xffff ||
    (code & 0xffff) === 0xfffe
  )
}


/***/ }),

/***/ "./node_modules/prismjs/components/prism-core.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/// <reference lib="WebWorker"/>

var _self = (typeof window !== 'undefined')
	? window   // if in browser
	: (
		(typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope)
		? self // if in worker
		: {}   // if in node js
	);

/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */
var Prism = (function (_self){

// Private helper vars
var lang = /\blang(?:uage)?-([\w-]+)\b/i;
var uniqueId = 0;


var _ = {
	/**
	 * By default, Prism will attempt to highlight all code elements (by calling {@link Prism.highlightAll}) on the
	 * current page after the page finished loading. This might be a problem if e.g. you wanted to asynchronously load
	 * additional languages or plugins yourself.
	 *
	 * By setting this value to `true`, Prism will not automatically highlight all code elements on the page.
	 *
	 * You obviously have to change this value before the automatic highlighting started. To do this, you can add an
	 * empty Prism object into the global scope before loading the Prism script like this:
	 *
	 * ```js
	 * window.Prism = window.Prism || {};
	 * Prism.manual = true;
	 * // add a new <script> to load Prism's script
	 * ```
	 *
	 * @default false
	 * @type {boolean}
	 * @memberof Prism
	 * @public
	 */
	manual: _self.Prism && _self.Prism.manual,
	disableWorkerMessageHandler: _self.Prism && _self.Prism.disableWorkerMessageHandler,

	/**
	 * A namespace for utility methods.
	 *
	 * All function in this namespace that are not explicitly marked as _public_ are for __internal use only__ and may
	 * change or disappear at any time.
	 *
	 * @namespace
	 * @memberof Prism
	 */
	util: {
		encode: function encode(tokens) {
			if (tokens instanceof Token) {
				return new Token(tokens.type, encode(tokens.content), tokens.alias);
			} else if (Array.isArray(tokens)) {
				return tokens.map(encode);
			} else {
				return tokens.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00a0/g, ' ');
			}
		},

		/**
		 * Returns the name of the type of the given value.
		 *
		 * @param {any} o
		 * @returns {string}
		 * @example
		 * type(null)      === 'Null'
		 * type(undefined) === 'Undefined'
		 * type(123)       === 'Number'
		 * type('foo')     === 'String'
		 * type(true)      === 'Boolean'
		 * type([1, 2])    === 'Array'
		 * type({})        === 'Object'
		 * type(String)    === 'Function'
		 * type(/abc+/)    === 'RegExp'
		 */
		type: function (o) {
			return Object.prototype.toString.call(o).slice(8, -1);
		},

		/**
		 * Returns a unique number for the given object. Later calls will still return the same number.
		 *
		 * @param {Object} obj
		 * @returns {number}
		 */
		objId: function (obj) {
			if (!obj['__id']) {
				Object.defineProperty(obj, '__id', { value: ++uniqueId });
			}
			return obj['__id'];
		},

		/**
		 * Creates a deep clone of the given object.
		 *
		 * The main intended use of this function is to clone language definitions.
		 *
		 * @param {T} o
		 * @param {Record<number, any>} [visited]
		 * @returns {T}
		 * @template T
		 */
		clone: function deepClone(o, visited) {
			visited = visited || {};

			var clone, id;
			switch (_.util.type(o)) {
				case 'Object':
					id = _.util.objId(o);
					if (visited[id]) {
						return visited[id];
					}
					clone = /** @type {Record<string, any>} */ ({});
					visited[id] = clone;

					for (var key in o) {
						if (o.hasOwnProperty(key)) {
							clone[key] = deepClone(o[key], visited);
						}
					}

					return /** @type {any} */ (clone);

				case 'Array':
					id = _.util.objId(o);
					if (visited[id]) {
						return visited[id];
					}
					clone = [];
					visited[id] = clone;

					(/** @type {Array} */(/** @type {any} */(o))).forEach(function (v, i) {
						clone[i] = deepClone(v, visited);
					});

					return /** @type {any} */ (clone);

				default:
					return o;
			}
		},

		/**
		 * Returns the Prism language of the given element set by a `language-xxxx` or `lang-xxxx` class.
		 *
		 * If no language is set for the element or the element is `null` or `undefined`, `none` will be returned.
		 *
		 * @param {Element} element
		 * @returns {string}
		 */
		getLanguage: function (element) {
			while (element && !lang.test(element.className)) {
				element = element.parentElement;
			}
			if (element) {
				return (element.className.match(lang) || [, 'none'])[1].toLowerCase();
			}
			return 'none';
		},

		/**
		 * Returns the script element that is currently executing.
		 *
		 * This does __not__ work for line script element.
		 *
		 * @returns {HTMLScriptElement | null}
		 */
		currentScript: function () {
			if (typeof document === 'undefined') {
				return null;
			}
			if ('currentScript' in document && 1 < 2 /* hack to trip TS' flow analysis */) {
				return /** @type {any} */ (document.currentScript);
			}

			// IE11 workaround
			// we'll get the src of the current script by parsing IE11's error stack trace
			// this will not work for inline scripts

			try {
				throw new Error();
			} catch (err) {
				// Get file src url from stack. Specifically works with the format of stack traces in IE.
				// A stack will look like this:
				//
				// Error
				//    at _.util.currentScript (http://localhost/components/prism-core.js:119:5)
				//    at Global code (http://localhost/components/prism-core.js:606:1)

				var src = (/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(err.stack) || [])[1];
				if (src) {
					var scripts = document.getElementsByTagName('script');
					for (var i in scripts) {
						if (scripts[i].src == src) {
							return scripts[i];
						}
					}
				}
				return null;
			}
		},

		/**
		 * Returns whether a given class is active for `element`.
		 *
		 * The class can be activated if `element` or one of its ancestors has the given class and it can be deactivated
		 * if `element` or one of its ancestors has the negated version of the given class. The _negated version_ of the
		 * given class is just the given class with a `no-` prefix.
		 *
		 * Whether the class is active is determined by the closest ancestor of `element` (where `element` itself is
		 * closest ancestor) that has the given class or the negated version of it. If neither `element` nor any of its
		 * ancestors have the given class or the negated version of it, then the default activation will be returned.
		 *
		 * In the paradoxical situation where the closest ancestor contains __both__ the given class and the negated
		 * version of it, the class is considered active.
		 *
		 * @param {Element} element
		 * @param {string} className
		 * @param {boolean} [defaultActivation=false]
		 * @returns {boolean}
		 */
		isActive: function (element, className, defaultActivation) {
			var no = 'no-' + className;

			while (element) {
				var classList = element.classList;
				if (classList.contains(className)) {
					return true;
				}
				if (classList.contains(no)) {
					return false;
				}
				element = element.parentElement;
			}
			return !!defaultActivation;
		}
	},

	/**
	 * This namespace contains all currently loaded languages and the some helper functions to create and modify languages.
	 *
	 * @namespace
	 * @memberof Prism
	 * @public
	 */
	languages: {
		/**
		 * Creates a deep copy of the language with the given id and appends the given tokens.
		 *
		 * If a token in `redef` also appears in the copied language, then the existing token in the copied language
		 * will be overwritten at its original position.
		 *
		 * ## Best practices
		 *
		 * Since the position of overwriting tokens (token in `redef` that overwrite tokens in the copied language)
		 * doesn't matter, they can technically be in any order. However, this can be confusing to others that trying to
		 * understand the language definition because, normally, the order of tokens matters in Prism grammars.
		 *
		 * Therefore, it is encouraged to order overwriting tokens according to the positions of the overwritten tokens.
		 * Furthermore, all non-overwriting tokens should be placed after the overwriting ones.
		 *
		 * @param {string} id The id of the language to extend. This has to be a key in `Prism.languages`.
		 * @param {Grammar} redef The new tokens to append.
		 * @returns {Grammar} The new language created.
		 * @public
		 * @example
		 * Prism.languages['css-with-colors'] = Prism.languages.extend('css', {
		 *     // Prism.languages.css already has a 'comment' token, so this token will overwrite CSS' 'comment' token
		 *     // at its original position
		 *     'comment': { ... },
		 *     // CSS doesn't have a 'color' token, so this token will be appended
		 *     'color': /\b(?:red|green|blue)\b/
		 * });
		 */
		extend: function (id, redef) {
			var lang = _.util.clone(_.languages[id]);

			for (var key in redef) {
				lang[key] = redef[key];
			}

			return lang;
		},

		/**
		 * Inserts tokens _before_ another token in a language definition or any other grammar.
		 *
		 * ## Usage
		 *
		 * This helper method makes it easy to modify existing languages. For example, the CSS language definition
		 * not only defines CSS highlighting for CSS documents, but also needs to define highlighting for CSS embedded
		 * in HTML through `<style>` elements. To do this, it needs to modify `Prism.languages.markup` and add the
		 * appropriate tokens. However, `Prism.languages.markup` is a regular JavaScript object literal, so if you do
		 * this:
		 *
		 * ```js
		 * Prism.languages.markup.style = {
		 *     // token
		 * };
		 * ```
		 *
		 * then the `style` token will be added (and processed) at the end. `insertBefore` allows you to insert tokens
		 * before existing tokens. For the CSS example above, you would use it like this:
		 *
		 * ```js
		 * Prism.languages.insertBefore('markup', 'cdata', {
		 *     'style': {
		 *         // token
		 *     }
		 * });
		 * ```
		 *
		 * ## Special cases
		 *
		 * If the grammars of `inside` and `insert` have tokens with the same name, the tokens in `inside`'s grammar
		 * will be ignored.
		 *
		 * This behavior can be used to insert tokens after `before`:
		 *
		 * ```js
		 * Prism.languages.insertBefore('markup', 'comment', {
		 *     'comment': Prism.languages.markup.comment,
		 *     // tokens after 'comment'
		 * });
		 * ```
		 *
		 * ## Limitations
		 *
		 * The main problem `insertBefore` has to solve is iteration order. Since ES2015, the iteration order for object
		 * properties is guaranteed to be the insertion order (except for integer keys) but some browsers behave
		 * differently when keys are deleted and re-inserted. So `insertBefore` can't be implemented by temporarily
		 * deleting properties which is necessary to insert at arbitrary positions.
		 *
		 * To solve this problem, `insertBefore` doesn't actually insert the given tokens into the target object.
		 * Instead, it will create a new object and replace all references to the target object with the new one. This
		 * can be done without temporarily deleting properties, so the iteration order is well-defined.
		 *
		 * However, only references that can be reached from `Prism.languages` or `insert` will be replaced. I.e. if
		 * you hold the target object in a variable, then the value of the variable will not change.
		 *
		 * ```js
		 * var oldMarkup = Prism.languages.markup;
		 * var newMarkup = Prism.languages.insertBefore('markup', 'comment', { ... });
		 *
		 * assert(oldMarkup !== Prism.languages.markup);
		 * assert(newMarkup === Prism.languages.markup);
		 * ```
		 *
		 * @param {string} inside The property of `root` (e.g. a language id in `Prism.languages`) that contains the
		 * object to be modified.
		 * @param {string} before The key to insert before.
		 * @param {Grammar} insert An object containing the key-value pairs to be inserted.
		 * @param {Object<string, any>} [root] The object containing `inside`, i.e. the object that contains the
		 * object to be modified.
		 *
		 * Defaults to `Prism.languages`.
		 * @returns {Grammar} The new grammar object.
		 * @public
		 */
		insertBefore: function (inside, before, insert, root) {
			root = root || /** @type {any} */ (_.languages);
			var grammar = root[inside];
			/** @type {Grammar} */
			var ret = {};

			for (var token in grammar) {
				if (grammar.hasOwnProperty(token)) {

					if (token == before) {
						for (var newToken in insert) {
							if (insert.hasOwnProperty(newToken)) {
								ret[newToken] = insert[newToken];
							}
						}
					}

					// Do not insert token which also occur in insert. See #1525
					if (!insert.hasOwnProperty(token)) {
						ret[token] = grammar[token];
					}
				}
			}

			var old = root[inside];
			root[inside] = ret;

			// Update references in other language definitions
			_.languages.DFS(_.languages, function(key, value) {
				if (value === old && key != inside) {
					this[key] = ret;
				}
			});

			return ret;
		},

		// Traverse a language definition with Depth First Search
		DFS: function DFS(o, callback, type, visited) {
			visited = visited || {};

			var objId = _.util.objId;

			for (var i in o) {
				if (o.hasOwnProperty(i)) {
					callback.call(o, i, o[i], type || i);

					var property = o[i],
					    propertyType = _.util.type(property);

					if (propertyType === 'Object' && !visited[objId(property)]) {
						visited[objId(property)] = true;
						DFS(property, callback, null, visited);
					}
					else if (propertyType === 'Array' && !visited[objId(property)]) {
						visited[objId(property)] = true;
						DFS(property, callback, i, visited);
					}
				}
			}
		}
	},

	plugins: {},

	/**
	 * This is the most high-level function in Prism’s API.
	 * It fetches all the elements that have a `.language-xxxx` class and then calls {@link Prism.highlightElement} on
	 * each one of them.
	 *
	 * This is equivalent to `Prism.highlightAllUnder(document, async, callback)`.
	 *
	 * @param {boolean} [async=false] Same as in {@link Prism.highlightAllUnder}.
	 * @param {HighlightCallback} [callback] Same as in {@link Prism.highlightAllUnder}.
	 * @memberof Prism
	 * @public
	 */
	highlightAll: function(async, callback) {
		_.highlightAllUnder(document, async, callback);
	},

	/**
	 * Fetches all the descendants of `container` that have a `.language-xxxx` class and then calls
	 * {@link Prism.highlightElement} on each one of them.
	 *
	 * The following hooks will be run:
	 * 1. `before-highlightall`
	 * 2. `before-all-elements-highlight`
	 * 3. All hooks of {@link Prism.highlightElement} for each element.
	 *
	 * @param {ParentNode} container The root element, whose descendants that have a `.language-xxxx` class will be highlighted.
	 * @param {boolean} [async=false] Whether each element is to be highlighted asynchronously using Web Workers.
	 * @param {HighlightCallback} [callback] An optional callback to be invoked on each element after its highlighting is done.
	 * @memberof Prism
	 * @public
	 */
	highlightAllUnder: function(container, async, callback) {
		var env = {
			callback: callback,
			container: container,
			selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
		};

		_.hooks.run('before-highlightall', env);

		env.elements = Array.prototype.slice.apply(env.container.querySelectorAll(env.selector));

		_.hooks.run('before-all-elements-highlight', env);

		for (var i = 0, element; element = env.elements[i++];) {
			_.highlightElement(element, async === true, env.callback);
		}
	},

	/**
	 * Highlights the code inside a single element.
	 *
	 * The following hooks will be run:
	 * 1. `before-sanity-check`
	 * 2. `before-highlight`
	 * 3. All hooks of {@link Prism.highlight}. These hooks will be run by an asynchronous worker if `async` is `true`.
	 * 4. `before-insert`
	 * 5. `after-highlight`
	 * 6. `complete`
	 *
	 * Some the above hooks will be skipped if the element doesn't contain any text or there is no grammar loaded for
	 * the element's language.
	 *
	 * @param {Element} element The element containing the code.
	 * It must have a class of `language-xxxx` to be processed, where `xxxx` is a valid language identifier.
	 * @param {boolean} [async=false] Whether the element is to be highlighted asynchronously using Web Workers
	 * to improve performance and avoid blocking the UI when highlighting very large chunks of code. This option is
	 * [disabled by default](https://prismjs.com/faq.html#why-is-asynchronous-highlighting-disabled-by-default).
	 *
	 * Note: All language definitions required to highlight the code must be included in the main `prism.js` file for
	 * asynchronous highlighting to work. You can build your own bundle on the
	 * [Download page](https://prismjs.com/download.html).
	 * @param {HighlightCallback} [callback] An optional callback to be invoked after the highlighting is done.
	 * Mostly useful when `async` is `true`, since in that case, the highlighting is done asynchronously.
	 * @memberof Prism
	 * @public
	 */
	highlightElement: function(element, async, callback) {
		// Find language
		var language = _.util.getLanguage(element);
		var grammar = _.languages[language];

		// Set language on the element, if not present
		element.className = element.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;

		// Set language on the parent, for styling
		var parent = element.parentElement;
		if (parent && parent.nodeName.toLowerCase() === 'pre') {
			parent.className = parent.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;
		}

		var code = element.textContent;

		var env = {
			element: element,
			language: language,
			grammar: grammar,
			code: code
		};

		function insertHighlightedCode(highlightedCode) {
			env.highlightedCode = highlightedCode;

			_.hooks.run('before-insert', env);

			env.element.innerHTML = env.highlightedCode;

			_.hooks.run('after-highlight', env);
			_.hooks.run('complete', env);
			callback && callback.call(env.element);
		}

		_.hooks.run('before-sanity-check', env);

		if (!env.code) {
			_.hooks.run('complete', env);
			callback && callback.call(env.element);
			return;
		}

		_.hooks.run('before-highlight', env);

		if (!env.grammar) {
			insertHighlightedCode(_.util.encode(env.code));
			return;
		}

		if (async && _self.Worker) {
			var worker = new Worker(_.filename);

			worker.onmessage = function(evt) {
				insertHighlightedCode(evt.data);
			};

			worker.postMessage(JSON.stringify({
				language: env.language,
				code: env.code,
				immediateClose: true
			}));
		}
		else {
			insertHighlightedCode(_.highlight(env.code, env.grammar, env.language));
		}
	},

	/**
	 * Low-level function, only use if you know what you’re doing. It accepts a string of text as input
	 * and the language definitions to use, and returns a string with the HTML produced.
	 *
	 * The following hooks will be run:
	 * 1. `before-tokenize`
	 * 2. `after-tokenize`
	 * 3. `wrap`: On each {@link Token}.
	 *
	 * @param {string} text A string with the code to be highlighted.
	 * @param {Grammar} grammar An object containing the tokens to use.
	 *
	 * Usually a language definition like `Prism.languages.markup`.
	 * @param {string} language The name of the language definition passed to `grammar`.
	 * @returns {string} The highlighted HTML.
	 * @memberof Prism
	 * @public
	 * @example
	 * Prism.highlight('var foo = true;', Prism.languages.javascript, 'javascript');
	 */
	highlight: function (text, grammar, language) {
		var env = {
			code: text,
			grammar: grammar,
			language: language
		};
		_.hooks.run('before-tokenize', env);
		env.tokens = _.tokenize(env.code, env.grammar);
		_.hooks.run('after-tokenize', env);
		return Token.stringify(_.util.encode(env.tokens), env.language);
	},

	/**
	 * This is the heart of Prism, and the most low-level function you can use. It accepts a string of text as input
	 * and the language definitions to use, and returns an array with the tokenized code.
	 *
	 * When the language definition includes nested tokens, the function is called recursively on each of these tokens.
	 *
	 * This method could be useful in other contexts as well, as a very crude parser.
	 *
	 * @param {string} text A string with the code to be highlighted.
	 * @param {Grammar} grammar An object containing the tokens to use.
	 *
	 * Usually a language definition like `Prism.languages.markup`.
	 * @returns {TokenStream} An array of strings and tokens, a token stream.
	 * @memberof Prism
	 * @public
	 * @example
	 * let code = `var foo = 0;`;
	 * let tokens = Prism.tokenize(code, Prism.languages.javascript);
	 * tokens.forEach(token => {
	 *     if (token instanceof Prism.Token && token.type === 'number') {
	 *         console.log(`Found numeric literal: ${token.content}`);
	 *     }
	 * });
	 */
	tokenize: function(text, grammar) {
		var rest = grammar.rest;
		if (rest) {
			for (var token in rest) {
				grammar[token] = rest[token];
			}

			delete grammar.rest;
		}

		var tokenList = new LinkedList();
		addAfter(tokenList, tokenList.head, text);

		matchGrammar(text, tokenList, grammar, tokenList.head, 0);

		return toArray(tokenList);
	},

	/**
	 * @namespace
	 * @memberof Prism
	 * @public
	 */
	hooks: {
		all: {},

		/**
		 * Adds the given callback to the list of callbacks for the given hook.
		 *
		 * The callback will be invoked when the hook it is registered for is run.
		 * Hooks are usually directly run by a highlight function but you can also run hooks yourself.
		 *
		 * One callback function can be registered to multiple hooks and the same hook multiple times.
		 *
		 * @param {string} name The name of the hook.
		 * @param {HookCallback} callback The callback function which is given environment variables.
		 * @public
		 */
		add: function (name, callback) {
			var hooks = _.hooks.all;

			hooks[name] = hooks[name] || [];

			hooks[name].push(callback);
		},

		/**
		 * Runs a hook invoking all registered callbacks with the given environment variables.
		 *
		 * Callbacks will be invoked synchronously and in the order in which they were registered.
		 *
		 * @param {string} name The name of the hook.
		 * @param {Object<string, any>} env The environment variables of the hook passed to all callbacks registered.
		 * @public
		 */
		run: function (name, env) {
			var callbacks = _.hooks.all[name];

			if (!callbacks || !callbacks.length) {
				return;
			}

			for (var i=0, callback; callback = callbacks[i++];) {
				callback(env);
			}
		}
	},

	Token: Token
};
_self.Prism = _;


// Typescript note:
// The following can be used to import the Token type in JSDoc:
//
//   @typedef {InstanceType<import("./prism-core")["Token"]>} Token

/**
 * Creates a new token.
 *
 * @param {string} type See {@link Token#type type}
 * @param {string | TokenStream} content See {@link Token#content content}
 * @param {string|string[]} [alias] The alias(es) of the token.
 * @param {string} [matchedStr=""] A copy of the full string this token was created from.
 * @class
 * @global
 * @public
 */
function Token(type, content, alias, matchedStr) {
	/**
	 * The type of the token.
	 *
	 * This is usually the key of a pattern in a {@link Grammar}.
	 *
	 * @type {string}
	 * @see GrammarToken
	 * @public
	 */
	this.type = type;
	/**
	 * The strings or tokens contained by this token.
	 *
	 * This will be a token stream if the pattern matched also defined an `inside` grammar.
	 *
	 * @type {string | TokenStream}
	 * @public
	 */
	this.content = content;
	/**
	 * The alias(es) of the token.
	 *
	 * @type {string|string[]}
	 * @see GrammarToken
	 * @public
	 */
	this.alias = alias;
	// Copy of the full string this token was created from
	this.length = (matchedStr || '').length | 0;
}

/**
 * A token stream is an array of strings and {@link Token Token} objects.
 *
 * Token streams have to fulfill a few properties that are assumed by most functions (mostly internal ones) that process
 * them.
 *
 * 1. No adjacent strings.
 * 2. No empty strings.
 *
 *    The only exception here is the token stream that only contains the empty string and nothing else.
 *
 * @typedef {Array<string | Token>} TokenStream
 * @global
 * @public
 */

/**
 * Converts the given token or token stream to an HTML representation.
 *
 * The following hooks will be run:
 * 1. `wrap`: On each {@link Token}.
 *
 * @param {string | Token | TokenStream} o The token or token stream to be converted.
 * @param {string} language The name of current language.
 * @returns {string} The HTML representation of the token or token stream.
 * @memberof Token
 * @static
 */
Token.stringify = function stringify(o, language) {
	if (typeof o == 'string') {
		return o;
	}
	if (Array.isArray(o)) {
		var s = '';
		o.forEach(function (e) {
			s += stringify(e, language);
		});
		return s;
	}

	var env = {
		type: o.type,
		content: stringify(o.content, language),
		tag: 'span',
		classes: ['token', o.type],
		attributes: {},
		language: language
	};

	var aliases = o.alias;
	if (aliases) {
		if (Array.isArray(aliases)) {
			Array.prototype.push.apply(env.classes, aliases);
		} else {
			env.classes.push(aliases);
		}
	}

	_.hooks.run('wrap', env);

	var attributes = '';
	for (var name in env.attributes) {
		attributes += ' ' + name + '="' + (env.attributes[name] || '').replace(/"/g, '&quot;') + '"';
	}

	return '<' + env.tag + ' class="' + env.classes.join(' ') + '"' + attributes + '>' + env.content + '</' + env.tag + '>';
};

/**
 * @param {RegExp} pattern
 * @param {number} pos
 * @param {string} text
 * @param {boolean} lookbehind
 * @returns {RegExpExecArray | null}
 */
function matchPattern(pattern, pos, text, lookbehind) {
	pattern.lastIndex = pos;
	var match = pattern.exec(text);
	if (match && lookbehind && match[1]) {
		// change the match to remove the text matched by the Prism lookbehind group
		var lookbehindLength = match[1].length;
		match.index += lookbehindLength;
		match[0] = match[0].slice(lookbehindLength);
	}
	return match;
}

/**
 * @param {string} text
 * @param {LinkedList<string | Token>} tokenList
 * @param {any} grammar
 * @param {LinkedListNode<string | Token>} startNode
 * @param {number} startPos
 * @param {RematchOptions} [rematch]
 * @returns {void}
 * @private
 *
 * @typedef RematchOptions
 * @property {string} cause
 * @property {number} reach
 */
function matchGrammar(text, tokenList, grammar, startNode, startPos, rematch) {
	for (var token in grammar) {
		if (!grammar.hasOwnProperty(token) || !grammar[token]) {
			continue;
		}

		var patterns = grammar[token];
		patterns = Array.isArray(patterns) ? patterns : [patterns];

		for (var j = 0; j < patterns.length; ++j) {
			if (rematch && rematch.cause == token + ',' + j) {
				return;
			}

			var patternObj = patterns[j],
				inside = patternObj.inside,
				lookbehind = !!patternObj.lookbehind,
				greedy = !!patternObj.greedy,
				alias = patternObj.alias;

			if (greedy && !patternObj.pattern.global) {
				// Without the global flag, lastIndex won't work
				var flags = patternObj.pattern.toString().match(/[imsuy]*$/)[0];
				patternObj.pattern = RegExp(patternObj.pattern.source, flags + 'g');
			}

			/** @type {RegExp} */
			var pattern = patternObj.pattern || patternObj;

			for ( // iterate the token list and keep track of the current token/string position
				var currentNode = startNode.next, pos = startPos;
				currentNode !== tokenList.tail;
				pos += currentNode.value.length, currentNode = currentNode.next
			) {

				if (rematch && pos >= rematch.reach) {
					break;
				}

				var str = currentNode.value;

				if (tokenList.length > text.length) {
					// Something went terribly wrong, ABORT, ABORT!
					return;
				}

				if (str instanceof Token) {
					continue;
				}

				var removeCount = 1; // this is the to parameter of removeBetween
				var match;

				if (greedy) {
					match = matchPattern(pattern, pos, text, lookbehind);
					if (!match) {
						break;
					}

					var from = match.index;
					var to = match.index + match[0].length;
					var p = pos;

					// find the node that contains the match
					p += currentNode.value.length;
					while (from >= p) {
						currentNode = currentNode.next;
						p += currentNode.value.length;
					}
					// adjust pos (and p)
					p -= currentNode.value.length;
					pos = p;

					// the current node is a Token, then the match starts inside another Token, which is invalid
					if (currentNode.value instanceof Token) {
						continue;
					}

					// find the last node which is affected by this match
					for (
						var k = currentNode;
						k !== tokenList.tail && (p < to || typeof k.value === 'string');
						k = k.next
					) {
						removeCount++;
						p += k.value.length;
					}
					removeCount--;

					// replace with the new match
					str = text.slice(pos, p);
					match.index -= pos;
				} else {
					match = matchPattern(pattern, 0, str, lookbehind);
					if (!match) {
						continue;
					}
				}

				var from = match.index,
					matchStr = match[0],
					before = str.slice(0, from),
					after = str.slice(from + matchStr.length);

				var reach = pos + str.length;
				if (rematch && reach > rematch.reach) {
					rematch.reach = reach;
				}

				var removeFrom = currentNode.prev;

				if (before) {
					removeFrom = addAfter(tokenList, removeFrom, before);
					pos += before.length;
				}

				removeRange(tokenList, removeFrom, removeCount);

				var wrapped = new Token(token, inside ? _.tokenize(matchStr, inside) : matchStr, alias, matchStr);
				currentNode = addAfter(tokenList, removeFrom, wrapped);

				if (after) {
					addAfter(tokenList, currentNode, after);
				}

				if (removeCount > 1) {
					// at least one Token object was removed, so we have to do some rematching
					// this can only happen if the current pattern is greedy
					matchGrammar(text, tokenList, grammar, currentNode.prev, pos, {
						cause: token + ',' + j,
						reach: reach
					});
				}
			}
		}
	}
}

/**
 * @typedef LinkedListNode
 * @property {T} value
 * @property {LinkedListNode<T> | null} prev The previous node.
 * @property {LinkedListNode<T> | null} next The next node.
 * @template T
 * @private
 */

/**
 * @template T
 * @private
 */
function LinkedList() {
	/** @type {LinkedListNode<T>} */
	var head = { value: null, prev: null, next: null };
	/** @type {LinkedListNode<T>} */
	var tail = { value: null, prev: head, next: null };
	head.next = tail;

	/** @type {LinkedListNode<T>} */
	this.head = head;
	/** @type {LinkedListNode<T>} */
	this.tail = tail;
	this.length = 0;
}

/**
 * Adds a new node with the given value to the list.
 * @param {LinkedList<T>} list
 * @param {LinkedListNode<T>} node
 * @param {T} value
 * @returns {LinkedListNode<T>} The added node.
 * @template T
 */
function addAfter(list, node, value) {
	// assumes that node != list.tail && values.length >= 0
	var next = node.next;

	var newNode = { value: value, prev: node, next: next };
	node.next = newNode;
	next.prev = newNode;
	list.length++;

	return newNode;
}
/**
 * Removes `count` nodes after the given node. The given node will not be removed.
 * @param {LinkedList<T>} list
 * @param {LinkedListNode<T>} node
 * @param {number} count
 * @template T
 */
function removeRange(list, node, count) {
	var next = node.next;
	for (var i = 0; i < count && next !== list.tail; i++) {
		next = next.next;
	}
	node.next = next;
	next.prev = node;
	list.length -= i;
}
/**
 * @param {LinkedList<T>} list
 * @returns {T[]}
 * @template T
 */
function toArray(list) {
	var array = [];
	var node = list.head.next;
	while (node !== list.tail) {
		array.push(node.value);
		node = node.next;
	}
	return array;
}


if (!_self.document) {
	if (!_self.addEventListener) {
		// in Node.js
		return _;
	}

	if (!_.disableWorkerMessageHandler) {
		// In worker
		_self.addEventListener('message', function (evt) {
			var message = JSON.parse(evt.data),
				lang = message.language,
				code = message.code,
				immediateClose = message.immediateClose;

			_self.postMessage(_.highlight(code, _.languages[lang], lang));
			if (immediateClose) {
				_self.close();
			}
		}, false);
	}

	return _;
}

// Get current script and highlight
var script = _.util.currentScript();

if (script) {
	_.filename = script.src;

	if (script.hasAttribute('data-manual')) {
		_.manual = true;
	}
}

function highlightAutomaticallyCallback() {
	if (!_.manual) {
		_.highlightAll();
	}
}

if (!_.manual) {
	// If the document state is "loading", then we'll use DOMContentLoaded.
	// If the document state is "interactive" and the prism.js script is deferred, then we'll also use the
	// DOMContentLoaded event because there might be some plugins or languages which have also been deferred and they
	// might take longer one animation frame to execute which can create a race condition where only some plugins have
	// been loaded when Prism.highlightAll() is executed, depending on how fast resources are loaded.
	// See https://github.com/PrismJS/prism/issues/2102
	var readyState = document.readyState;
	if (readyState === 'loading' || readyState === 'interactive' && script && script.defer) {
		document.addEventListener('DOMContentLoaded', highlightAutomaticallyCallback);
	} else {
		if (window.requestAnimationFrame) {
			window.requestAnimationFrame(highlightAutomaticallyCallback);
		} else {
			window.setTimeout(highlightAutomaticallyCallback, 16);
		}
	}
}

return _;

})(_self);

if ( true && module.exports) {
	module.exports = Prism;
}

// hack for components to work correctly in node.js
if (typeof __webpack_require__.g !== 'undefined') {
	__webpack_require__.g.Prism = Prism;
}

// some additional documentation/types

/**
 * The expansion of a simple `RegExp` literal to support additional properties.
 *
 * @typedef GrammarToken
 * @property {RegExp} pattern The regular expression of the token.
 * @property {boolean} [lookbehind=false] If `true`, then the first capturing group of `pattern` will (effectively)
 * behave as a lookbehind group meaning that the captured text will not be part of the matched text of the new token.
 * @property {boolean} [greedy=false] Whether the token is greedy.
 * @property {string|string[]} [alias] An optional alias or list of aliases.
 * @property {Grammar} [inside] The nested grammar of this token.
 *
 * The `inside` grammar will be used to tokenize the text value of each token of this kind.
 *
 * This can be used to make nested and even recursive language definitions.
 *
 * Note: This can cause infinite recursion. Be careful when you embed different languages or even the same language into
 * each another.
 * @global
 * @public
*/

/**
 * @typedef Grammar
 * @type {Object<string, RegExp | GrammarToken | Array<RegExp | GrammarToken>>}
 * @property {Grammar} [rest] An optional grammar object that will be appended to this grammar.
 * @global
 * @public
 */

/**
 * A function which will invoked after an element was successfully highlighted.
 *
 * @callback HighlightCallback
 * @param {Element} element The element successfully highlighted.
 * @returns {void}
 * @global
 * @public
*/

/**
 * @callback HookCallback
 * @param {Object<string, any>} env The environment variables of the hook.
 * @returns {void}
 * @global
 * @public
 */


/***/ }),

/***/ "./node_modules/property-information/find.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var normalize = __webpack_require__("./node_modules/property-information/normalize.js")
var DefinedInfo = __webpack_require__("./node_modules/property-information/lib/util/defined-info.js")
var Info = __webpack_require__("./node_modules/property-information/lib/util/info.js")

var data = 'data'

module.exports = find

var valid = /^data[-\w.:]+$/i
var dash = /-[a-z]/g
var cap = /[A-Z]/g

function find(schema, value) {
  var normal = normalize(value)
  var prop = value
  var Type = Info

  if (normal in schema.normal) {
    return schema.property[schema.normal[normal]]
  }

  if (normal.length > 4 && normal.slice(0, 4) === data && valid.test(value)) {
    // Attribute or property.
    if (value.charAt(4) === '-') {
      prop = datasetToProperty(value)
    } else {
      value = datasetToAttribute(value)
    }

    Type = DefinedInfo
  }

  return new Type(prop, value)
}

function datasetToProperty(attribute) {
  var value = attribute.slice(5).replace(dash, camelcase)
  return data + value.charAt(0).toUpperCase() + value.slice(1)
}

function datasetToAttribute(property) {
  var value = property.slice(4)

  if (dash.test(value)) {
    return property
  }

  value = value.replace(cap, kebab)

  if (value.charAt(0) !== '-') {
    value = '-' + value
  }

  return data + value
}

function kebab($0) {
  return '-' + $0.toLowerCase()
}

function camelcase($0) {
  return $0.charAt(1).toUpperCase()
}


/***/ }),

/***/ "./node_modules/property-information/html.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var merge = __webpack_require__("./node_modules/property-information/lib/util/merge.js")
var xlink = __webpack_require__("./node_modules/property-information/lib/xlink.js")
var xml = __webpack_require__("./node_modules/property-information/lib/xml.js")
var xmlns = __webpack_require__("./node_modules/property-information/lib/xmlns.js")
var aria = __webpack_require__("./node_modules/property-information/lib/aria.js")
var html = __webpack_require__("./node_modules/property-information/lib/html.js")

module.exports = merge([xml, xlink, xmlns, aria, html])


/***/ }),

/***/ "./node_modules/property-information/lib/aria.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var types = __webpack_require__("./node_modules/property-information/lib/util/types.js")
var create = __webpack_require__("./node_modules/property-information/lib/util/create.js")

var booleanish = types.booleanish
var number = types.number
var spaceSeparated = types.spaceSeparated

module.exports = create({
  transform: ariaTransform,
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: booleanish,
    ariaAutoComplete: null,
    ariaBusy: booleanish,
    ariaChecked: booleanish,
    ariaColCount: number,
    ariaColIndex: number,
    ariaColSpan: number,
    ariaControls: spaceSeparated,
    ariaCurrent: null,
    ariaDescribedBy: spaceSeparated,
    ariaDetails: null,
    ariaDisabled: booleanish,
    ariaDropEffect: spaceSeparated,
    ariaErrorMessage: null,
    ariaExpanded: booleanish,
    ariaFlowTo: spaceSeparated,
    ariaGrabbed: booleanish,
    ariaHasPopup: null,
    ariaHidden: booleanish,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: spaceSeparated,
    ariaLevel: number,
    ariaLive: null,
    ariaModal: booleanish,
    ariaMultiLine: booleanish,
    ariaMultiSelectable: booleanish,
    ariaOrientation: null,
    ariaOwns: spaceSeparated,
    ariaPlaceholder: null,
    ariaPosInSet: number,
    ariaPressed: booleanish,
    ariaReadOnly: booleanish,
    ariaRelevant: null,
    ariaRequired: booleanish,
    ariaRoleDescription: spaceSeparated,
    ariaRowCount: number,
    ariaRowIndex: number,
    ariaRowSpan: number,
    ariaSelected: booleanish,
    ariaSetSize: number,
    ariaSort: null,
    ariaValueMax: number,
    ariaValueMin: number,
    ariaValueNow: number,
    ariaValueText: null,
    role: null
  }
})

function ariaTransform(_, prop) {
  return prop === 'role' ? prop : 'aria-' + prop.slice(4).toLowerCase()
}


/***/ }),

/***/ "./node_modules/property-information/lib/html.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var types = __webpack_require__("./node_modules/property-information/lib/util/types.js")
var create = __webpack_require__("./node_modules/property-information/lib/util/create.js")
var caseInsensitiveTransform = __webpack_require__("./node_modules/property-information/lib/util/case-insensitive-transform.js")

var boolean = types.boolean
var overloadedBoolean = types.overloadedBoolean
var booleanish = types.booleanish
var number = types.number
var spaceSeparated = types.spaceSeparated
var commaSeparated = types.commaSeparated

module.exports = create({
  space: 'html',
  attributes: {
    acceptcharset: 'accept-charset',
    classname: 'class',
    htmlfor: 'for',
    httpequiv: 'http-equiv'
  },
  transform: caseInsensitiveTransform,
  mustUseProperty: ['checked', 'multiple', 'muted', 'selected'],
  properties: {
    // Standard Properties.
    abbr: null,
    accept: commaSeparated,
    acceptCharset: spaceSeparated,
    accessKey: spaceSeparated,
    action: null,
    allow: null,
    allowFullScreen: boolean,
    allowPaymentRequest: boolean,
    allowUserMedia: boolean,
    alt: null,
    as: null,
    async: boolean,
    autoCapitalize: null,
    autoComplete: spaceSeparated,
    autoFocus: boolean,
    autoPlay: boolean,
    capture: boolean,
    charSet: null,
    checked: boolean,
    cite: null,
    className: spaceSeparated,
    cols: number,
    colSpan: null,
    content: null,
    contentEditable: booleanish,
    controls: boolean,
    controlsList: spaceSeparated,
    coords: number | commaSeparated,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    default: boolean,
    defer: boolean,
    dir: null,
    dirName: null,
    disabled: boolean,
    download: overloadedBoolean,
    draggable: booleanish,
    encType: null,
    enterKeyHint: null,
    form: null,
    formAction: null,
    formEncType: null,
    formMethod: null,
    formNoValidate: boolean,
    formTarget: null,
    headers: spaceSeparated,
    height: number,
    hidden: boolean,
    high: number,
    href: null,
    hrefLang: null,
    htmlFor: spaceSeparated,
    httpEquiv: spaceSeparated,
    id: null,
    imageSizes: null,
    imageSrcSet: commaSeparated,
    inputMode: null,
    integrity: null,
    is: null,
    isMap: boolean,
    itemId: null,
    itemProp: spaceSeparated,
    itemRef: spaceSeparated,
    itemScope: boolean,
    itemType: spaceSeparated,
    kind: null,
    label: null,
    lang: null,
    language: null,
    list: null,
    loading: null,
    loop: boolean,
    low: number,
    manifest: null,
    max: null,
    maxLength: number,
    media: null,
    method: null,
    min: null,
    minLength: number,
    multiple: boolean,
    muted: boolean,
    name: null,
    nonce: null,
    noModule: boolean,
    noValidate: boolean,
    onAbort: null,
    onAfterPrint: null,
    onAuxClick: null,
    onBeforePrint: null,
    onBeforeUnload: null,
    onBlur: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onContextMenu: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFormData: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLanguageChange: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadEnd: null,
    onLoadStart: null,
    onMessage: null,
    onMessageError: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRejectionHandled: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onSecurityPolicyViolation: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onSlotChange: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnhandledRejection: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onWheel: null,
    open: boolean,
    optimum: number,
    pattern: null,
    ping: spaceSeparated,
    placeholder: null,
    playsInline: boolean,
    poster: null,
    preload: null,
    readOnly: boolean,
    referrerPolicy: null,
    rel: spaceSeparated,
    required: boolean,
    reversed: boolean,
    rows: number,
    rowSpan: number,
    sandbox: spaceSeparated,
    scope: null,
    scoped: boolean,
    seamless: boolean,
    selected: boolean,
    shape: null,
    size: number,
    sizes: null,
    slot: null,
    span: number,
    spellCheck: booleanish,
    src: null,
    srcDoc: null,
    srcLang: null,
    srcSet: commaSeparated,
    start: number,
    step: null,
    style: null,
    tabIndex: number,
    target: null,
    title: null,
    translate: null,
    type: null,
    typeMustMatch: boolean,
    useMap: null,
    value: booleanish,
    width: number,
    wrap: null,

    // Legacy.
    // See: https://html.spec.whatwg.org/#other-elements,-attributes-and-apis
    align: null, // Several. Use CSS `text-align` instead,
    aLink: null, // `<body>`. Use CSS `a:active {color}` instead
    archive: spaceSeparated, // `<object>`. List of URIs to archives
    axis: null, // `<td>` and `<th>`. Use `scope` on `<th>`
    background: null, // `<body>`. Use CSS `background-image` instead
    bgColor: null, // `<body>` and table elements. Use CSS `background-color` instead
    border: number, // `<table>`. Use CSS `border-width` instead,
    borderColor: null, // `<table>`. Use CSS `border-color` instead,
    bottomMargin: number, // `<body>`
    cellPadding: null, // `<table>`
    cellSpacing: null, // `<table>`
    char: null, // Several table elements. When `align=char`, sets the character to align on
    charOff: null, // Several table elements. When `char`, offsets the alignment
    classId: null, // `<object>`
    clear: null, // `<br>`. Use CSS `clear` instead
    code: null, // `<object>`
    codeBase: null, // `<object>`
    codeType: null, // `<object>`
    color: null, // `<font>` and `<hr>`. Use CSS instead
    compact: boolean, // Lists. Use CSS to reduce space between items instead
    declare: boolean, // `<object>`
    event: null, // `<script>`
    face: null, // `<font>`. Use CSS instead
    frame: null, // `<table>`
    frameBorder: null, // `<iframe>`. Use CSS `border` instead
    hSpace: number, // `<img>` and `<object>`
    leftMargin: number, // `<body>`
    link: null, // `<body>`. Use CSS `a:link {color: *}` instead
    longDesc: null, // `<frame>`, `<iframe>`, and `<img>`. Use an `<a>`
    lowSrc: null, // `<img>`. Use a `<picture>`
    marginHeight: number, // `<body>`
    marginWidth: number, // `<body>`
    noResize: boolean, // `<frame>`
    noHref: boolean, // `<area>`. Use no href instead of an explicit `nohref`
    noShade: boolean, // `<hr>`. Use background-color and height instead of borders
    noWrap: boolean, // `<td>` and `<th>`
    object: null, // `<applet>`
    profile: null, // `<head>`
    prompt: null, // `<isindex>`
    rev: null, // `<link>`
    rightMargin: number, // `<body>`
    rules: null, // `<table>`
    scheme: null, // `<meta>`
    scrolling: booleanish, // `<frame>`. Use overflow in the child context
    standby: null, // `<object>`
    summary: null, // `<table>`
    text: null, // `<body>`. Use CSS `color` instead
    topMargin: number, // `<body>`
    valueType: null, // `<param>`
    version: null, // `<html>`. Use a doctype.
    vAlign: null, // Several. Use CSS `vertical-align` instead
    vLink: null, // `<body>`. Use CSS `a:visited {color}` instead
    vSpace: number, // `<img>` and `<object>`

    // Non-standard Properties.
    allowTransparency: null,
    autoCorrect: null,
    autoSave: null,
    disablePictureInPicture: boolean,
    disableRemotePlayback: boolean,
    prefix: null,
    property: null,
    results: number,
    security: null,
    unselectable: null
  }
})


/***/ }),

/***/ "./node_modules/property-information/lib/util/case-insensitive-transform.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var caseSensitiveTransform = __webpack_require__("./node_modules/property-information/lib/util/case-sensitive-transform.js")

module.exports = caseInsensitiveTransform

function caseInsensitiveTransform(attributes, property) {
  return caseSensitiveTransform(attributes, property.toLowerCase())
}


/***/ }),

/***/ "./node_modules/property-information/lib/util/case-sensitive-transform.js":
/***/ ((module) => {

"use strict";


module.exports = caseSensitiveTransform

function caseSensitiveTransform(attributes, attribute) {
  return attribute in attributes ? attributes[attribute] : attribute
}


/***/ }),

/***/ "./node_modules/property-information/lib/util/create.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var normalize = __webpack_require__("./node_modules/property-information/normalize.js")
var Schema = __webpack_require__("./node_modules/property-information/lib/util/schema.js")
var DefinedInfo = __webpack_require__("./node_modules/property-information/lib/util/defined-info.js")

module.exports = create

function create(definition) {
  var space = definition.space
  var mustUseProperty = definition.mustUseProperty || []
  var attributes = definition.attributes || {}
  var props = definition.properties
  var transform = definition.transform
  var property = {}
  var normal = {}
  var prop
  var info

  for (prop in props) {
    info = new DefinedInfo(
      prop,
      transform(attributes, prop),
      props[prop],
      space
    )

    if (mustUseProperty.indexOf(prop) !== -1) {
      info.mustUseProperty = true
    }

    property[prop] = info

    normal[normalize(prop)] = prop
    normal[normalize(info.attribute)] = prop
  }

  return new Schema(property, normal, space)
}


/***/ }),

/***/ "./node_modules/property-information/lib/util/defined-info.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var Info = __webpack_require__("./node_modules/property-information/lib/util/info.js")
var types = __webpack_require__("./node_modules/property-information/lib/util/types.js")

module.exports = DefinedInfo

DefinedInfo.prototype = new Info()
DefinedInfo.prototype.defined = true

var checks = [
  'boolean',
  'booleanish',
  'overloadedBoolean',
  'number',
  'commaSeparated',
  'spaceSeparated',
  'commaOrSpaceSeparated'
]
var checksLength = checks.length

function DefinedInfo(property, attribute, mask, space) {
  var index = -1
  var check

  mark(this, 'space', space)

  Info.call(this, property, attribute)

  while (++index < checksLength) {
    check = checks[index]
    mark(this, check, (mask & types[check]) === types[check])
  }
}

function mark(values, key, value) {
  if (value) {
    values[key] = value
  }
}


/***/ }),

/***/ "./node_modules/property-information/lib/util/info.js":
/***/ ((module) => {

"use strict";


module.exports = Info

var proto = Info.prototype

proto.space = null
proto.attribute = null
proto.property = null
proto.boolean = false
proto.booleanish = false
proto.overloadedBoolean = false
proto.number = false
proto.commaSeparated = false
proto.spaceSeparated = false
proto.commaOrSpaceSeparated = false
proto.mustUseProperty = false
proto.defined = false

function Info(property, attribute) {
  this.property = property
  this.attribute = attribute
}


/***/ }),

/***/ "./node_modules/property-information/lib/util/merge.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var xtend = __webpack_require__("./node_modules/xtend/immutable.js")
var Schema = __webpack_require__("./node_modules/property-information/lib/util/schema.js")

module.exports = merge

function merge(definitions) {
  var length = definitions.length
  var property = []
  var normal = []
  var index = -1
  var info
  var space

  while (++index < length) {
    info = definitions[index]
    property.push(info.property)
    normal.push(info.normal)
    space = info.space
  }

  return new Schema(
    xtend.apply(null, property),
    xtend.apply(null, normal),
    space
  )
}


/***/ }),

/***/ "./node_modules/property-information/lib/util/schema.js":
/***/ ((module) => {

"use strict";


module.exports = Schema

var proto = Schema.prototype

proto.space = null
proto.normal = {}
proto.property = {}

function Schema(property, normal, space) {
  this.property = property
  this.normal = normal

  if (space) {
    this.space = space
  }
}


/***/ }),

/***/ "./node_modules/property-information/lib/util/types.js":
/***/ ((__unused_webpack_module, exports) => {

"use strict";


var powers = 0

exports.boolean = increment()
exports.booleanish = increment()
exports.overloadedBoolean = increment()
exports.number = increment()
exports.spaceSeparated = increment()
exports.commaSeparated = increment()
exports.commaOrSpaceSeparated = increment()

function increment() {
  return Math.pow(2, ++powers)
}


/***/ }),

/***/ "./node_modules/property-information/lib/xlink.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var create = __webpack_require__("./node_modules/property-information/lib/util/create.js")

module.exports = create({
  space: 'xlink',
  transform: xlinkTransform,
  properties: {
    xLinkActuate: null,
    xLinkArcRole: null,
    xLinkHref: null,
    xLinkRole: null,
    xLinkShow: null,
    xLinkTitle: null,
    xLinkType: null
  }
})

function xlinkTransform(_, prop) {
  return 'xlink:' + prop.slice(5).toLowerCase()
}


/***/ }),

/***/ "./node_modules/property-information/lib/xml.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var create = __webpack_require__("./node_modules/property-information/lib/util/create.js")

module.exports = create({
  space: 'xml',
  transform: xmlTransform,
  properties: {
    xmlLang: null,
    xmlBase: null,
    xmlSpace: null
  }
})

function xmlTransform(_, prop) {
  return 'xml:' + prop.slice(3).toLowerCase()
}


/***/ }),

/***/ "./node_modules/property-information/lib/xmlns.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var create = __webpack_require__("./node_modules/property-information/lib/util/create.js")
var caseInsensitiveTransform = __webpack_require__("./node_modules/property-information/lib/util/case-insensitive-transform.js")

module.exports = create({
  space: 'xmlns',
  attributes: {
    xmlnsxlink: 'xmlns:xlink'
  },
  transform: caseInsensitiveTransform,
  properties: {
    xmlns: null,
    xmlnsXLink: null
  }
})


/***/ }),

/***/ "./node_modules/property-information/normalize.js":
/***/ ((module) => {

"use strict";


module.exports = normalize

function normalize(value) {
  return value.toLowerCase()
}


/***/ }),

/***/ "./node_modules/refractor/core.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* global window, self */

// istanbul ignore next - Don't allow Prism to run on page load in browser or
// to start messaging from workers.
var ctx =
  typeof globalThis === 'object'
    ? globalThis
    : typeof self === 'object'
    ? self
    : typeof window === 'object'
    ? window
    : typeof __webpack_require__.g === 'object'
    ? __webpack_require__.g
    : {}

var restore = capture()

ctx.Prism = {manual: true, disableWorkerMessageHandler: true}

// Load all stuff in `prism.js` itself, except for `prism-file-highlight.js`.
// The wrapped non-leaky grammars are loaded instead of Prism’s originals.
var h = __webpack_require__("./node_modules/hastscript/index.js")
var decode = __webpack_require__("./node_modules/parse-entities/index.js")
var Prism = __webpack_require__("./node_modules/prismjs/components/prism-core.js")
var markup = __webpack_require__("./node_modules/refractor/lang/markup.js")
var css = __webpack_require__("./node_modules/refractor/lang/css.js")
var clike = __webpack_require__("./node_modules/refractor/lang/clike.js")
var js = __webpack_require__("./node_modules/refractor/lang/javascript.js")

restore()

var own = {}.hasOwnProperty

// Inherit.
function Refractor() {}

Refractor.prototype = Prism

// Construct.
var refract = new Refractor()

// Expose.
module.exports = refract

// Create.
refract.highlight = highlight
refract.register = register
refract.alias = alias
refract.registered = registered
refract.listLanguages = listLanguages

// Register bundled grammars.
register(markup)
register(css)
register(clike)
register(js)

refract.util.encode = encode
refract.Token.stringify = stringify

function register(grammar) {
  if (typeof grammar !== 'function' || !grammar.displayName) {
    throw new Error('Expected `function` for `grammar`, got `' + grammar + '`')
  }

  // Do not duplicate registrations.
  if (refract.languages[grammar.displayName] === undefined) {
    grammar(refract)
  }
}

function alias(name, alias) {
  var languages = refract.languages
  var map = name
  var key
  var list
  var length
  var index

  if (alias) {
    map = {}
    map[name] = alias
  }

  for (key in map) {
    list = map[key]
    list = typeof list === 'string' ? [list] : list
    length = list.length
    index = -1

    while (++index < length) {
      languages[list[index]] = languages[key]
    }
  }
}

function highlight(value, name) {
  var sup = Prism.highlight
  var grammar

  if (typeof value !== 'string') {
    throw new Error('Expected `string` for `value`, got `' + value + '`')
  }

  // `name` is a grammar object.
  if (refract.util.type(name) === 'Object') {
    grammar = name
    name = null
  } else {
    if (typeof name !== 'string') {
      throw new Error('Expected `string` for `name`, got `' + name + '`')
    }

    if (own.call(refract.languages, name)) {
      grammar = refract.languages[name]
    } else {
      throw new Error('Unknown language: `' + name + '` is not registered')
    }
  }

  return sup.call(this, value, grammar, name)
}

function registered(language) {
  if (typeof language !== 'string') {
    throw new Error('Expected `string` for `language`, got `' + language + '`')
  }

  return own.call(refract.languages, language)
}

function listLanguages() {
  var languages = refract.languages
  var list = []
  var language

  for (language in languages) {
    if (
      own.call(languages, language) &&
      typeof languages[language] === 'object'
    ) {
      list.push(language)
    }
  }

  return list
}

function stringify(value, language, parent) {
  var env

  if (typeof value === 'string') {
    return {type: 'text', value: value}
  }

  if (refract.util.type(value) === 'Array') {
    return stringifyAll(value, language)
  }

  env = {
    type: value.type,
    content: refract.Token.stringify(value.content, language, parent),
    tag: 'span',
    classes: ['token', value.type],
    attributes: {},
    language: language,
    parent: parent
  }

  if (value.alias) {
    env.classes = env.classes.concat(value.alias)
  }

  refract.hooks.run('wrap', env)

  return h(
    env.tag + '.' + env.classes.join('.'),
    attributes(env.attributes),
    env.content
  )
}

function stringifyAll(values, language) {
  var result = []
  var length = values.length
  var index = -1
  var value

  while (++index < length) {
    value = values[index]

    if (value !== '' && value !== null && value !== undefined) {
      result.push(value)
    }
  }

  index = -1
  length = result.length

  while (++index < length) {
    value = result[index]
    result[index] = refract.Token.stringify(value, language, result)
  }

  return result
}

function encode(tokens) {
  return tokens
}

function attributes(attrs) {
  var key

  for (key in attrs) {
    attrs[key] = decode(attrs[key])
  }

  return attrs
}

function capture() {
  var defined = 'Prism' in ctx
  /* istanbul ignore next */
  var current = defined ? ctx.Prism : undefined

  return restore

  function restore() {
    /* istanbul ignore else - Clean leaks after Prism. */
    if (defined) {
      ctx.Prism = current
    } else {
      delete ctx.Prism
    }

    defined = undefined
    current = undefined
  }
}


/***/ }),

/***/ "./node_modules/refractor/lang/bash.js":
/***/ ((module) => {

"use strict";


module.exports = bash
bash.displayName = 'bash'
bash.aliases = ['shell']
function bash(Prism) {
  ;(function (Prism) {
    // $ set | grep '^[A-Z][^[:space:]]*=' | cut -d= -f1 | tr '\n' '|'
    // + LC_ALL, RANDOM, REPLY, SECONDS.
    // + make sure PS1..4 are here as they are not always set,
    // - some useless things.
    var envVars =
      '\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b'
    var commandAfterHeredoc = {
      pattern: /(^(["']?)\w+\2)[ \t]+\S.*/,
      lookbehind: true,
      alias: 'punctuation',
      // this looks reasonably well in all themes
      inside: null // see below
    }
    var insideString = {
      bash: commandAfterHeredoc,
      environment: {
        pattern: RegExp('\\$' + envVars),
        alias: 'constant'
      },
      variable: [
        // [0]: Arithmetic Environment
        {
          pattern: /\$?\(\([\s\S]+?\)\)/,
          greedy: true,
          inside: {
            // If there is a $ sign at the beginning highlight $(( and )) as variable
            variable: [
              {
                pattern: /(^\$\(\([\s\S]+)\)\)/,
                lookbehind: true
              },
              /^\$\(\(/
            ],
            number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,
            // Operators according to https://www.gnu.org/software/bash/manual/bashref.html#Shell-Arithmetic
            operator: /--?|-=|\+\+?|\+=|!=?|~|\*\*?|\*=|\/=?|%=?|<<=?|>>=?|<=?|>=?|==?|&&?|&=|\^=?|\|\|?|\|=|\?|:/,
            // If there is no $ sign at the beginning highlight (( and )) as punctuation
            punctuation: /\(\(?|\)\)?|,|;/
          }
        }, // [1]: Command Substitution
        {
          pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
          greedy: true,
          inside: {
            variable: /^\$\(|^`|\)$|`$/
          }
        }, // [2]: Brace expansion
        {
          pattern: /\$\{[^}]+\}/,
          greedy: true,
          inside: {
            operator: /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
            punctuation: /[\[\]]/,
            environment: {
              pattern: RegExp('(\\{)' + envVars),
              lookbehind: true,
              alias: 'constant'
            }
          }
        },
        /\$(?:\w+|[#?*!@$])/
      ],
      // Escape sequences from echo and printf's manuals, and escaped quotes.
      entity: /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|x[0-9a-fA-F]{1,2}|u[0-9a-fA-F]{4}|U[0-9a-fA-F]{8})/
    }
    Prism.languages.bash = {
      shebang: {
        pattern: /^#!\s*\/.*/,
        alias: 'important'
      },
      comment: {
        pattern: /(^|[^"{\\$])#.*/,
        lookbehind: true
      },
      'function-name': [
        // a) function foo {
        // b) foo() {
        // c) function foo() {
        // but not “foo {”
        {
          // a) and c)
          pattern: /(\bfunction\s+)\w+(?=(?:\s*\(?:\s*\))?\s*\{)/,
          lookbehind: true,
          alias: 'function'
        },
        {
          // b)
          pattern: /\b\w+(?=\s*\(\s*\)\s*\{)/,
          alias: 'function'
        }
      ],
      // Highlight variable names as variables in for and select beginnings.
      'for-or-select': {
        pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
        alias: 'variable',
        lookbehind: true
      },
      // Highlight variable names as variables in the left-hand part
      // of assignments (“=” and “+=”).
      'assign-left': {
        pattern: /(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,
        inside: {
          environment: {
            pattern: RegExp('(^|[\\s;|&]|[<>]\\()' + envVars),
            lookbehind: true,
            alias: 'constant'
          }
        },
        alias: 'variable',
        lookbehind: true
      },
      string: [
        // Support for Here-documents https://en.wikipedia.org/wiki/Here_document
        {
          pattern: /((?:^|[^<])<<-?\s*)(\w+?)\s[\s\S]*?(?:\r?\n|\r)\2/,
          lookbehind: true,
          greedy: true,
          inside: insideString
        }, // Here-document with quotes around the tag
        // → No expansion (so no “inside”).
        {
          pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,
          lookbehind: true,
          greedy: true,
          inside: {
            bash: commandAfterHeredoc
          }
        }, // “Normal” string
        {
          pattern: /(^|[^\\](?:\\\\)*)(["'])(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|(?!\2)[^\\`$])*\2/,
          lookbehind: true,
          greedy: true,
          inside: insideString
        }
      ],
      environment: {
        pattern: RegExp('\\$?' + envVars),
        alias: 'constant'
      },
      variable: insideString.variable,
      function: {
        pattern: /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|aptitude|apt-cache|apt-get|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
        lookbehind: true
      },
      keyword: {
        pattern: /(^|[\s;|&]|[<>]\()(?:if|then|else|elif|fi|for|while|in|case|esac|function|select|do|done|until)(?=$|[)\s;|&])/,
        lookbehind: true
      },
      // https://www.gnu.org/software/bash/manual/html_node/Shell-Builtin-Commands.html
      builtin: {
        pattern: /(^|[\s;|&]|[<>]\()(?:\.|:|break|cd|continue|eval|exec|exit|export|getopts|hash|pwd|readonly|return|shift|test|times|trap|umask|unset|alias|bind|builtin|caller|command|declare|echo|enable|help|let|local|logout|mapfile|printf|read|readarray|source|type|typeset|ulimit|unalias|set|shopt)(?=$|[)\s;|&])/,
        lookbehind: true,
        // Alias added to make those easier to distinguish from strings.
        alias: 'class-name'
      },
      boolean: {
        pattern: /(^|[\s;|&]|[<>]\()(?:true|false)(?=$|[)\s;|&])/,
        lookbehind: true
      },
      'file-descriptor': {
        pattern: /\B&\d\b/,
        alias: 'important'
      },
      operator: {
        // Lots of redirections here, but not just that.
        pattern: /\d?<>|>\||\+=|==?|!=?|=~|<<[<-]?|[&\d]?>>|\d?[<>]&?|&[>&]?|\|[&|]?|<=?|>=?/,
        inside: {
          'file-descriptor': {
            pattern: /^\d/,
            alias: 'important'
          }
        }
      },
      punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
      number: {
        pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,
        lookbehind: true
      }
    }
    commandAfterHeredoc.inside = Prism.languages.bash
    /* Patterns in command substitution. */
    var toBeCopied = [
      'comment',
      'function-name',
      'for-or-select',
      'assign-left',
      'string',
      'environment',
      'function',
      'keyword',
      'builtin',
      'boolean',
      'file-descriptor',
      'operator',
      'punctuation',
      'number'
    ]
    var inside = insideString.variable[1].inside
    for (var i = 0; i < toBeCopied.length; i++) {
      inside[toBeCopied[i]] = Prism.languages.bash[toBeCopied[i]]
    }
    Prism.languages.shell = Prism.languages.bash
  })(Prism)
}


/***/ }),

/***/ "./node_modules/refractor/lang/clike.js":
/***/ ((module) => {

"use strict";


module.exports = clike
clike.displayName = 'clike'
clike.aliases = []
function clike(Prism) {
  Prism.languages.clike = {
    comment: [
      {
        pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
        lookbehind: true,
        greedy: true
      },
      {
        pattern: /(^|[^\\:])\/\/.*/,
        lookbehind: true,
        greedy: true
      }
    ],
    string: {
      pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
      greedy: true
    },
    'class-name': {
      pattern: /(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,
      lookbehind: true,
      inside: {
        punctuation: /[.\\]/
      }
    },
    keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
    boolean: /\b(?:true|false)\b/,
    function: /\w+(?=\()/,
    number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
    operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
    punctuation: /[{}[\];(),.:]/
  }
}


/***/ }),

/***/ "./node_modules/refractor/lang/css.js":
/***/ ((module) => {

"use strict";


module.exports = css
css.displayName = 'css'
css.aliases = []
function css(Prism) {
  ;(function (Prism) {
    var string = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/
    Prism.languages.css = {
      comment: /\/\*[\s\S]*?\*\//,
      atrule: {
        pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
        inside: {
          rule: /^@[\w-]+/,
          'selector-function-argument': {
            pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
            lookbehind: true,
            alias: 'selector'
          },
          keyword: {
            pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
            lookbehind: true
          } // See rest below
        }
      },
      url: {
        // https://drafts.csswg.org/css-values-3/#urls
        pattern: RegExp(
          '\\burl\\((?:' +
            string.source +
            '|' +
            /(?:[^\\\r\n()"']|\\[\s\S])*/.source +
            ')\\)',
          'i'
        ),
        greedy: true,
        inside: {
          function: /^url/i,
          punctuation: /^\(|\)$/,
          string: {
            pattern: RegExp('^' + string.source + '$'),
            alias: 'url'
          }
        }
      },
      selector: RegExp(
        '[^{}\\s](?:[^{};"\'\\s]|\\s+(?![\\s{])|' +
          string.source +
          ')*(?=\\s*\\{)'
      ),
      string: {
        pattern: string,
        greedy: true
      },
      property: /(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
      important: /!important\b/i,
      function: /[-a-z0-9]+(?=\()/i,
      punctuation: /[(){};:,]/
    }
    Prism.languages.css['atrule'].inside.rest = Prism.languages.css
    var markup = Prism.languages.markup
    if (markup) {
      markup.tag.addInlined('style', 'css')
      Prism.languages.insertBefore(
        'inside',
        'attr-value',
        {
          'style-attr': {
            pattern: /(^|["'\s])style\s*=\s*(?:"[^"]*"|'[^']*')/i,
            lookbehind: true,
            inside: {
              'attr-value': {
                pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
                inside: {
                  style: {
                    pattern: /(["'])[\s\S]+(?=["']$)/,
                    lookbehind: true,
                    alias: 'language-css',
                    inside: Prism.languages.css
                  },
                  punctuation: [
                    {
                      pattern: /^=/,
                      alias: 'attr-equals'
                    },
                    /"|'/
                  ]
                }
              },
              'attr-name': /^style/i
            }
          }
        },
        markup.tag
      )
    }
  })(Prism)
}


/***/ }),

/***/ "./node_modules/refractor/lang/graphql.js":
/***/ ((module) => {

"use strict";


module.exports = graphql
graphql.displayName = 'graphql'
graphql.aliases = []
function graphql(Prism) {
  Prism.languages.graphql = {
    comment: /#.*/,
    description: {
      pattern: /(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,
      greedy: true,
      alias: 'string',
      inside: {
        'language-markdown': {
          pattern: /(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,
          lookbehind: true,
          inside: Prism.languages.markdown
        }
      }
    },
    string: {
      pattern: /"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/,
      greedy: true
    },
    number: /(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
    boolean: /\b(?:true|false)\b/,
    variable: /\$[a-z_]\w*/i,
    directive: {
      pattern: /@[a-z_]\w*/i,
      alias: 'function'
    },
    'attr-name': {
      pattern: /[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,
      greedy: true
    },
    'class-name': {
      pattern: /(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*)[a-zA-Z_]\w*/,
      lookbehind: true
    },
    fragment: {
      pattern: /(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,
      lookbehind: true,
      alias: 'function'
    },
    keyword: /\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/,
    operator: /[!=|&]|\.{3}/,
    punctuation: /[!(){}\[\]:=,]/,
    constant: /\b(?!ID\b)[A-Z][A-Z_\d]*\b/
  }
}


/***/ }),

/***/ "./node_modules/refractor/lang/javascript.js":
/***/ ((module) => {

"use strict";


module.exports = javascript
javascript.displayName = 'javascript'
javascript.aliases = ['js']
function javascript(Prism) {
  Prism.languages.javascript = Prism.languages.extend('clike', {
    'class-name': [
      Prism.languages.clike['class-name'],
      {
        pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:prototype|constructor))/,
        lookbehind: true
      }
    ],
    keyword: [
      {
        pattern: /((?:^|})\s*)(?:catch|finally)\b/,
        lookbehind: true
      },
      {
        pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|(?:get|set)(?=\s*[\[$\w\xA0-\uFFFF])|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
        lookbehind: true
      }
    ],
    // Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
    function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
    number: /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
    operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
  })
  Prism.languages.javascript[
    'class-name'
  ][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/
  Prism.languages.insertBefore('javascript', 'keyword', {
    regex: {
      pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
      lookbehind: true,
      greedy: true,
      inside: {
        'regex-source': {
          pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
          lookbehind: true,
          alias: 'language-regex',
          inside: Prism.languages.regex
        },
        'regex-flags': /[a-z]+$/,
        'regex-delimiter': /^\/|\/$/
      }
    },
    // This must be declared before keyword because we use "function" inside the look-forward
    'function-variable': {
      pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
      alias: 'function'
    },
    parameter: [
      {
        pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
        lookbehind: true,
        inside: Prism.languages.javascript
      },
      {
        pattern: /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
        inside: Prism.languages.javascript
      },
      {
        pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
        lookbehind: true,
        inside: Prism.languages.javascript
      },
      {
        pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
        lookbehind: true,
        inside: Prism.languages.javascript
      }
    ],
    constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
  })
  Prism.languages.insertBefore('javascript', 'string', {
    'template-string': {
      pattern: /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,
      greedy: true,
      inside: {
        'template-punctuation': {
          pattern: /^`|`$/,
          alias: 'string'
        },
        interpolation: {
          pattern: /((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,
          lookbehind: true,
          inside: {
            'interpolation-punctuation': {
              pattern: /^\${|}$/,
              alias: 'punctuation'
            },
            rest: Prism.languages.javascript
          }
        },
        string: /[\s\S]+/
      }
    }
  })
  if (Prism.languages.markup) {
    Prism.languages.markup.tag.addInlined('script', 'javascript')
  }
  Prism.languages.js = Prism.languages.javascript
}


/***/ }),

/***/ "./node_modules/refractor/lang/js-extras.js":
/***/ ((module) => {

"use strict";


module.exports = jsExtras
jsExtras.displayName = 'jsExtras'
jsExtras.aliases = []
function jsExtras(Prism) {
  ;(function (Prism) {
    Prism.languages.insertBefore('javascript', 'function-variable', {
      'method-variable': {
        pattern: RegExp(
          '(\\.\\s*)' +
            Prism.languages.javascript['function-variable'].pattern.source
        ),
        lookbehind: true,
        alias: ['function-variable', 'method', 'function', 'property-access']
      }
    })
    Prism.languages.insertBefore('javascript', 'function', {
      method: {
        pattern: RegExp(
          '(\\.\\s*)' + Prism.languages.javascript['function'].source
        ),
        lookbehind: true,
        alias: ['function', 'property-access']
      }
    })
    Prism.languages.insertBefore('javascript', 'constant', {
      'known-class-name': [
        {
          // standard built-ins
          // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
          pattern: /\b(?:(?:(?:Uint|Int)(?:8|16|32)|Uint8Clamped|Float(?:32|64))?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|(?:Weak)?(?:Set|Map)|WebAssembly)\b/,
          alias: 'class-name'
        },
        {
          // errors
          pattern: /\b(?:[A-Z]\w*)Error\b/,
          alias: 'class-name'
        }
      ]
    })
    /**
     * Replaces the `<ID>` placeholder in the given pattern with a pattern for general JS identifiers.
     *
     * @param {string} source
     * @param {string} [flags]
     * @returns {RegExp}
     */
    function withId(source, flags) {
      return RegExp(
        source.replace(/<ID>/g, function () {
          return /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/.source
        }),
        flags
      )
    }
    Prism.languages.insertBefore('javascript', 'keyword', {
      imports: {
        // https://tc39.es/ecma262/#sec-imports
        pattern: withId(
          /(\bimport\b\s*)(?:<ID>(?:\s*,\s*(?:\*\s*as\s+<ID>|\{[^{}]*\}))?|\*\s*as\s+<ID>|\{[^{}]*\})(?=\s*\bfrom\b)/
            .source
        ),
        lookbehind: true,
        inside: Prism.languages.javascript
      },
      exports: {
        // https://tc39.es/ecma262/#sec-exports
        pattern: withId(
          /(\bexport\b\s*)(?:\*(?:\s*as\s+<ID>)?(?=\s*\bfrom\b)|\{[^{}]*\})/
            .source
        ),
        lookbehind: true,
        inside: Prism.languages.javascript
      }
    })
    Prism.languages.javascript['keyword'].unshift(
      {
        pattern: /\b(?:as|default|export|from|import)\b/,
        alias: 'module'
      },
      {
        pattern: /\b(?:await|break|catch|continue|do|else|for|finally|if|return|switch|throw|try|while|yield)\b/,
        alias: 'control-flow'
      },
      {
        pattern: /\bnull\b/,
        alias: ['null', 'nil']
      },
      {
        pattern: /\bundefined\b/,
        alias: 'nil'
      }
    )
    Prism.languages.insertBefore('javascript', 'operator', {
      spread: {
        pattern: /\.{3}/,
        alias: 'operator'
      },
      arrow: {
        pattern: /=>/,
        alias: 'operator'
      }
    })
    Prism.languages.insertBefore('javascript', 'punctuation', {
      'property-access': {
        pattern: withId(/(\.\s*)#?<ID>/.source),
        lookbehind: true
      },
      'maybe-class-name': {
        pattern: /(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,
        lookbehind: true
      },
      dom: {
        // this contains only a few commonly used DOM variables
        pattern: /\b(?:document|location|navigator|performance|(?:local|session)Storage|window)\b/,
        alias: 'variable'
      },
      console: {
        pattern: /\bconsole(?=\s*\.)/,
        alias: 'class-name'
      }
    }) // add 'maybe-class-name' to tokens which might be a class name
    var maybeClassNameTokens = [
      'function',
      'function-variable',
      'method',
      'method-variable',
      'property-access'
    ]
    for (var i = 0; i < maybeClassNameTokens.length; i++) {
      var token = maybeClassNameTokens[i]
      var value = Prism.languages.javascript[token] // convert regex to object
      if (Prism.util.type(value) === 'RegExp') {
        value = Prism.languages.javascript[token] = {
          pattern: value
        }
      } // keep in mind that we don't support arrays
      var inside = value.inside || {}
      value.inside = inside
      inside['maybe-class-name'] = /^[A-Z][\s\S]*/
    }
  })(Prism)
}


/***/ }),

/***/ "./node_modules/refractor/lang/json.js":
/***/ ((module) => {

"use strict";


module.exports = json
json.displayName = 'json'
json.aliases = ['webmanifest']
function json(Prism) {
  // https://www.json.org/json-en.html
  Prism.languages.json = {
    property: {
      pattern: /"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
      greedy: true
    },
    string: {
      pattern: /"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
      greedy: true
    },
    comment: {
      pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
      greedy: true
    },
    number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
    punctuation: /[{}[\],]/,
    operator: /:/,
    boolean: /\b(?:true|false)\b/,
    null: {
      pattern: /\bnull\b/,
      alias: 'keyword'
    }
  }
  Prism.languages.webmanifest = Prism.languages.json
}


/***/ }),

/***/ "./node_modules/refractor/lang/jsx.js":
/***/ ((module) => {

"use strict";


module.exports = jsx
jsx.displayName = 'jsx'
jsx.aliases = []
function jsx(Prism) {
  ;(function (Prism) {
    var javascript = Prism.util.clone(Prism.languages.javascript)
    Prism.languages.jsx = Prism.languages.extend('markup', javascript)
    Prism.languages.jsx.tag.pattern = /<\/?(?:[\w.:-]+(?:\s+(?:[\w.:$-]+(?:=(?:"(?:\\[^]|[^\\"])*"|'(?:\\[^]|[^\\'])*'|[^\s{'">=]+|\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])+\}))?|\{\s*\.{3}\s*[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\s*\}))*\s*\/?)?>/i
    Prism.languages.jsx.tag.inside['tag'].pattern = /^<\/?[^\s>\/]*/i
    Prism.languages.jsx.tag.inside[
      'attr-value'
    ].pattern = /=(?!\{)(?:"(?:\\[^]|[^\\"])*"|'(?:\\[^]|[^\\'])*'|[^\s'">]+)/i
    Prism.languages.jsx.tag.inside['tag'].inside[
      'class-name'
    ] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/
    Prism.languages.insertBefore(
      'inside',
      'attr-name',
      {
        spread: {
          pattern: /\{\s*\.{3}\s*[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\s*\}/,
          inside: {
            punctuation: /\.{3}|[{}.]/,
            'attr-value': /\w+/
          }
        }
      },
      Prism.languages.jsx.tag
    )
    Prism.languages.insertBefore(
      'inside',
      'attr-value',
      {
        script: {
          // Allow for two levels of nesting
          pattern: /=(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])+\})/i,
          inside: {
            'script-punctuation': {
              pattern: /^=(?={)/,
              alias: 'punctuation'
            },
            rest: Prism.languages.jsx
          },
          alias: 'language-javascript'
        }
      },
      Prism.languages.jsx.tag
    ) // The following will handle plain text inside tags
    var stringifyToken = function (token) {
      if (!token) {
        return ''
      }
      if (typeof token === 'string') {
        return token
      }
      if (typeof token.content === 'string') {
        return token.content
      }
      return token.content.map(stringifyToken).join('')
    }
    var walkTokens = function (tokens) {
      var openedTags = []
      for (var i = 0; i < tokens.length; i++) {
        var token = tokens[i]
        var notTagNorBrace = false
        if (typeof token !== 'string') {
          if (
            token.type === 'tag' &&
            token.content[0] &&
            token.content[0].type === 'tag'
          ) {
            // We found a tag, now find its kind
            if (token.content[0].content[0].content === '</') {
              // Closing tag
              if (
                openedTags.length > 0 &&
                openedTags[openedTags.length - 1].tagName ===
                  stringifyToken(token.content[0].content[1])
              ) {
                // Pop matching opening tag
                openedTags.pop()
              }
            } else {
              if (token.content[token.content.length - 1].content === '/>') {
                // Autoclosed tag, ignore
              } else {
                // Opening tag
                openedTags.push({
                  tagName: stringifyToken(token.content[0].content[1]),
                  openedBraces: 0
                })
              }
            }
          } else if (
            openedTags.length > 0 &&
            token.type === 'punctuation' &&
            token.content === '{'
          ) {
            // Here we might have entered a JSX context inside a tag
            openedTags[openedTags.length - 1].openedBraces++
          } else if (
            openedTags.length > 0 &&
            openedTags[openedTags.length - 1].openedBraces > 0 &&
            token.type === 'punctuation' &&
            token.content === '}'
          ) {
            // Here we might have left a JSX context inside a tag
            openedTags[openedTags.length - 1].openedBraces--
          } else {
            notTagNorBrace = true
          }
        }
        if (notTagNorBrace || typeof token === 'string') {
          if (
            openedTags.length > 0 &&
            openedTags[openedTags.length - 1].openedBraces === 0
          ) {
            // Here we are inside a tag, and not inside a JSX context.
            // That's plain text: drop any tokens matched.
            var plainText = stringifyToken(token) // And merge text with adjacent text
            if (
              i < tokens.length - 1 &&
              (typeof tokens[i + 1] === 'string' ||
                tokens[i + 1].type === 'plain-text')
            ) {
              plainText += stringifyToken(tokens[i + 1])
              tokens.splice(i + 1, 1)
            }
            if (
              i > 0 &&
              (typeof tokens[i - 1] === 'string' ||
                tokens[i - 1].type === 'plain-text')
            ) {
              plainText = stringifyToken(tokens[i - 1]) + plainText
              tokens.splice(i - 1, 1)
              i--
            }
            tokens[i] = new Prism.Token(
              'plain-text',
              plainText,
              null,
              plainText
            )
          }
        }
        if (token.content && typeof token.content !== 'string') {
          walkTokens(token.content)
        }
      }
    }
    Prism.hooks.add('after-tokenize', function (env) {
      if (env.language !== 'jsx' && env.language !== 'tsx') {
        return
      }
      walkTokens(env.tokens)
    })
  })(Prism)
}


/***/ }),

/***/ "./node_modules/refractor/lang/markdown.js":
/***/ ((module) => {

"use strict";


module.exports = markdown
markdown.displayName = 'markdown'
markdown.aliases = ['md']
function markdown(Prism) {
  ;(function (Prism) {
    // Allow only one line break
    var inner = /(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?!\n|\r\n?))/.source
    /**
     * This function is intended for the creation of the bold or italic pattern.
     *
     * This also adds a lookbehind group to the given pattern to ensure that the pattern is not backslash-escaped.
     *
     * _Note:_ Keep in mind that this adds a capturing group.
     *
     * @param {string} pattern
     * @returns {RegExp}
     */
    function createInline(pattern) {
      pattern = pattern.replace(/<inner>/g, function () {
        return inner
      })
      return RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + '(?:' + pattern + ')')
    }
    var tableCell = /(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/
      .source
    var tableRow = /\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(
      /__/g,
      function () {
        return tableCell
      }
    )
    var tableLine = /\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/
      .source
    Prism.languages.markdown = Prism.languages.extend('markup', {})
    Prism.languages.insertBefore('markdown', 'prolog', {
      'front-matter-block': {
        pattern: /(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,
        lookbehind: true,
        greedy: true,
        inside: {
          punctuation: /^---|---$/,
          'font-matter': {
            pattern: /\S+(?:\s+\S+)*/,
            alias: ['yaml', 'language-yaml'],
            inside: Prism.languages.yaml
          }
        }
      },
      blockquote: {
        // > ...
        pattern: /^>(?:[\t ]*>)*/m,
        alias: 'punctuation'
      },
      table: {
        pattern: RegExp(
          '^' + tableRow + tableLine + '(?:' + tableRow + ')*',
          'm'
        ),
        inside: {
          'table-data-rows': {
            pattern: RegExp(
              '^(' + tableRow + tableLine + ')(?:' + tableRow + ')*$'
            ),
            lookbehind: true,
            inside: {
              'table-data': {
                pattern: RegExp(tableCell),
                inside: Prism.languages.markdown
              },
              punctuation: /\|/
            }
          },
          'table-line': {
            pattern: RegExp('^(' + tableRow + ')' + tableLine + '$'),
            lookbehind: true,
            inside: {
              punctuation: /\||:?-{3,}:?/
            }
          },
          'table-header-row': {
            pattern: RegExp('^' + tableRow + '$'),
            inside: {
              'table-header': {
                pattern: RegExp(tableCell),
                alias: 'important',
                inside: Prism.languages.markdown
              },
              punctuation: /\|/
            }
          }
        }
      },
      code: [
        {
          // Prefixed by 4 spaces or 1 tab and preceded by an empty line
          pattern: /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,
          lookbehind: true,
          alias: 'keyword'
        },
        {
          // `code`
          // ``code``
          pattern: /``.+?``|`[^`\r\n]+`/,
          alias: 'keyword'
        },
        {
          // ```optional language
          // code block
          // ```
          pattern: /^```[\s\S]*?^```$/m,
          greedy: true,
          inside: {
            'code-block': {
              pattern: /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,
              lookbehind: true
            },
            'code-language': {
              pattern: /^(```).+/,
              lookbehind: true
            },
            punctuation: /```/
          }
        }
      ],
      title: [
        {
          // title 1
          // =======
          // title 2
          // -------
          pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,
          alias: 'important',
          inside: {
            punctuation: /==+$|--+$/
          }
        },
        {
          // # title 1
          // ###### title 6
          pattern: /(^\s*)#.+/m,
          lookbehind: true,
          alias: 'important',
          inside: {
            punctuation: /^#+|#+$/
          }
        }
      ],
      hr: {
        // ***
        // ---
        // * * *
        // -----------
        pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
        lookbehind: true,
        alias: 'punctuation'
      },
      list: {
        // * item
        // + item
        // - item
        // 1. item
        pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
        lookbehind: true,
        alias: 'punctuation'
      },
      'url-reference': {
        // [id]: http://example.com "Optional title"
        // [id]: http://example.com 'Optional title'
        // [id]: http://example.com (Optional title)
        // [id]: <http://example.com> "Optional title"
        pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
        inside: {
          variable: {
            pattern: /^(!?\[)[^\]]+/,
            lookbehind: true
          },
          string: /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
          punctuation: /^[\[\]!:]|[<>]/
        },
        alias: 'url'
      },
      bold: {
        // **strong**
        // __strong__
        // allow one nested instance of italic text using the same delimiter
        pattern: createInline(
          /\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/
            .source
        ),
        lookbehind: true,
        greedy: true,
        inside: {
          content: {
            pattern: /(^..)[\s\S]+(?=..$)/,
            lookbehind: true,
            inside: {} // see below
          },
          punctuation: /\*\*|__/
        }
      },
      italic: {
        // *em*
        // _em_
        // allow one nested instance of bold text using the same delimiter
        pattern: createInline(
          /\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/
            .source
        ),
        lookbehind: true,
        greedy: true,
        inside: {
          content: {
            pattern: /(^.)[\s\S]+(?=.$)/,
            lookbehind: true,
            inside: {} // see below
          },
          punctuation: /[*_]/
        }
      },
      strike: {
        // ~~strike through~~
        // ~strike~
        pattern: createInline(/(~~?)(?:(?!~)<inner>)+?\2/.source),
        lookbehind: true,
        greedy: true,
        inside: {
          content: {
            pattern: /(^~~?)[\s\S]+(?=\1$)/,
            lookbehind: true,
            inside: {} // see below
          },
          punctuation: /~~?/
        }
      },
      url: {
        // [example](http://example.com "Optional title")
        // [example][id]
        // [example] [id]
        pattern: createInline(
          /!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/
            .source
        ),
        lookbehind: true,
        greedy: true,
        inside: {
          operator: /^!/,
          content: {
            pattern: /(^\[)[^\]]+(?=\])/,
            lookbehind: true,
            inside: {} // see below
          },
          variable: {
            pattern: /(^\][ \t]?\[)[^\]]+(?=\]$)/,
            lookbehind: true
          },
          url: {
            pattern: /(^\]\()[^\s)]+/,
            lookbehind: true
          },
          string: {
            pattern: /(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,
            lookbehind: true
          }
        }
      }
    })
    ;['url', 'bold', 'italic', 'strike'].forEach(function (token) {
      ;['url', 'bold', 'italic', 'strike'].forEach(function (inside) {
        if (token !== inside) {
          Prism.languages.markdown[token].inside.content.inside[inside] =
            Prism.languages.markdown[inside]
        }
      })
    })
    Prism.hooks.add('after-tokenize', function (env) {
      if (env.language !== 'markdown' && env.language !== 'md') {
        return
      }
      function walkTokens(tokens) {
        if (!tokens || typeof tokens === 'string') {
          return
        }
        for (var i = 0, l = tokens.length; i < l; i++) {
          var token = tokens[i]
          if (token.type !== 'code') {
            walkTokens(token.content)
            continue
          }
          /*
           * Add the correct `language-xxxx` class to this code block. Keep in mind that the `code-language` token
           * is optional. But the grammar is defined so that there is only one case we have to handle:
           *
           * token.content = [
           *     <span class="punctuation">```</span>,
           *     <span class="code-language">xxxx</span>,
           *     '\n', // exactly one new lines (\r or \n or \r\n)
           *     <span class="code-block">...</span>,
           *     '\n', // exactly one new lines again
           *     <span class="punctuation">```</span>
           * ];
           */
          var codeLang = token.content[1]
          var codeBlock = token.content[3]
          if (
            codeLang &&
            codeBlock &&
            codeLang.type === 'code-language' &&
            codeBlock.type === 'code-block' &&
            typeof codeLang.content === 'string'
          ) {
            // this might be a language that Prism does not support
            // do some replacements to support C++, C#, and F#
            var lang = codeLang.content
              .replace(/\b#/g, 'sharp')
              .replace(/\b\+\+/g, 'pp') // only use the first word
            lang = (/[a-z][\w-]*/i.exec(lang) || [''])[0].toLowerCase()
            var alias = 'language-' + lang // add alias
            if (!codeBlock.alias) {
              codeBlock.alias = [alias]
            } else if (typeof codeBlock.alias === 'string') {
              codeBlock.alias = [codeBlock.alias, alias]
            } else {
              codeBlock.alias.push(alias)
            }
          }
        }
      }
      walkTokens(env.tokens)
    })
    Prism.hooks.add('wrap', function (env) {
      if (env.type !== 'code-block') {
        return
      }
      var codeLang = ''
      for (var i = 0, l = env.classes.length; i < l; i++) {
        var cls = env.classes[i]
        var match = /language-(.+)/.exec(cls)
        if (match) {
          codeLang = match[1]
          break
        }
      }
      var grammar = Prism.languages[codeLang]
      if (!grammar) {
        if (codeLang && codeLang !== 'none' && Prism.plugins.autoloader) {
          var id =
            'md-' +
            new Date().valueOf() +
            '-' +
            Math.floor(Math.random() * 1e16)
          env.attributes['id'] = id
          Prism.plugins.autoloader.loadLanguages(codeLang, function () {
            var ele = document.getElementById(id)
            if (ele) {
              ele.innerHTML = Prism.highlight(
                ele.textContent,
                Prism.languages[codeLang],
                codeLang
              )
            }
          })
        }
      } else {
        // reverse Prism.util.encode
        var code = env.content.value
          .replace(/&lt;/g, '<')
          .replace(/&amp;/g, '&')
        env.content = Prism.highlight(code, grammar, codeLang)
      }
    })
    Prism.languages.md = Prism.languages.markdown
  })(Prism)
}


/***/ }),

/***/ "./node_modules/refractor/lang/markup.js":
/***/ ((module) => {

"use strict";


module.exports = markup
markup.displayName = 'markup'
markup.aliases = ['html', 'mathml', 'svg', 'xml', 'ssml', 'atom', 'rss']
function markup(Prism) {
  Prism.languages.markup = {
    comment: /<!--[\s\S]*?-->/,
    prolog: /<\?[\s\S]+?\?>/,
    doctype: {
      // https://www.w3.org/TR/xml/#NT-doctypedecl
      pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
      greedy: true,
      inside: {
        'internal-subset': {
          pattern: /(\[)[\s\S]+(?=\]>$)/,
          lookbehind: true,
          greedy: true,
          inside: null // see below
        },
        string: {
          pattern: /"[^"]*"|'[^']*'/,
          greedy: true
        },
        punctuation: /^<!|>$|[[\]]/,
        'doctype-tag': /^DOCTYPE/,
        name: /[^\s<>'"]+/
      }
    },
    cdata: /<!\[CDATA\[[\s\S]*?]]>/i,
    tag: {
      pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
      greedy: true,
      inside: {
        tag: {
          pattern: /^<\/?[^\s>\/]+/,
          inside: {
            punctuation: /^<\/?/,
            namespace: /^[^\s>\/:]+:/
          }
        },
        'attr-value': {
          pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
          inside: {
            punctuation: [
              {
                pattern: /^=/,
                alias: 'attr-equals'
              },
              /"|'/
            ]
          }
        },
        punctuation: /\/?>/,
        'attr-name': {
          pattern: /[^\s>\/]+/,
          inside: {
            namespace: /^[^\s>\/:]+:/
          }
        }
      }
    },
    entity: [
      {
        pattern: /&[\da-z]{1,8};/i,
        alias: 'named-entity'
      },
      /&#x?[\da-f]{1,8};/i
    ]
  }
  Prism.languages.markup['tag'].inside['attr-value'].inside['entity'] =
    Prism.languages.markup['entity']
  Prism.languages.markup['doctype'].inside['internal-subset'].inside =
    Prism.languages.markup // Plugin to make entity title show the real entity, idea by Roman Komarov
  Prism.hooks.add('wrap', function (env) {
    if (env.type === 'entity') {
      env.attributes['title'] = env.content.value.replace(/&amp;/, '&')
    }
  })
  Object.defineProperty(Prism.languages.markup.tag, 'addInlined', {
    /**
     * Adds an inlined language to markup.
     *
     * An example of an inlined language is CSS with `<style>` tags.
     *
     * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
     * case insensitive.
     * @param {string} lang The language key.
     * @example
     * addInlined('style', 'css');
     */
    value: function addInlined(tagName, lang) {
      var includedCdataInside = {}
      includedCdataInside['language-' + lang] = {
        pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
        lookbehind: true,
        inside: Prism.languages[lang]
      }
      includedCdataInside['cdata'] = /^<!\[CDATA\[|\]\]>$/i
      var inside = {
        'included-cdata': {
          pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
          inside: includedCdataInside
        }
      }
      inside['language-' + lang] = {
        pattern: /[\s\S]+/,
        inside: Prism.languages[lang]
      }
      var def = {}
      def[tagName] = {
        pattern: RegExp(
          /(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(
            /__/g,
            function () {
              return tagName
            }
          ),
          'i'
        ),
        lookbehind: true,
        greedy: true,
        inside: inside
      }
      Prism.languages.insertBefore('markup', 'cdata', def)
    }
  })
  Prism.languages.html = Prism.languages.markup
  Prism.languages.mathml = Prism.languages.markup
  Prism.languages.svg = Prism.languages.markup
  Prism.languages.xml = Prism.languages.extend('markup', {})
  Prism.languages.ssml = Prism.languages.xml
  Prism.languages.atom = Prism.languages.xml
  Prism.languages.rss = Prism.languages.xml
}


/***/ }),

/***/ "./node_modules/refractor/lang/tsx.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var refractorJsx = __webpack_require__("./node_modules/refractor/lang/jsx.js")
var refractorTypescript = __webpack_require__("./node_modules/refractor/lang/typescript.js")
module.exports = tsx
tsx.displayName = 'tsx'
tsx.aliases = []
function tsx(Prism) {
  Prism.register(refractorJsx)
  Prism.register(refractorTypescript)
  ;(function (Prism) {
    var typescript = Prism.util.clone(Prism.languages.typescript)
    Prism.languages.tsx = Prism.languages.extend('jsx', typescript) // This will prevent collisions between TSX tags and TS generic types.
    // Idea by https://github.com/karlhorky
    // Discussion: https://github.com/PrismJS/prism/issues/2594#issuecomment-710666928
    var tag = Prism.languages.tsx.tag
    tag.pattern = RegExp(
      /(^|[^\w$]|(?=<\/))/.source + '(?:' + tag.pattern.source + ')',
      tag.pattern.flags
    )
    tag.lookbehind = true
  })(Prism)
}


/***/ }),

/***/ "./node_modules/refractor/lang/typescript.js":
/***/ ((module) => {

"use strict";


module.exports = typescript
typescript.displayName = 'typescript'
typescript.aliases = ['ts']
function typescript(Prism) {
  ;(function (Prism) {
    Prism.languages.typescript = Prism.languages.extend('javascript', {
      'class-name': {
        pattern: /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
        lookbehind: true,
        greedy: true,
        inside: null // see below
      },
      // From JavaScript Prism keyword list and TypeScript language spec: https://github.com/Microsoft/TypeScript/blob/master/doc/spec.md#221-reserved-words
      keyword: /\b(?:abstract|as|asserts|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|undefined|var|void|while|with|yield)\b/,
      builtin: /\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/
    }) // doesn't work with TS because TS is too complex
    delete Prism.languages.typescript['parameter'] // a version of typescript specifically for highlighting types
    var typeInside = Prism.languages.extend('typescript', {})
    delete typeInside['class-name']
    Prism.languages.typescript['class-name'].inside = typeInside
    Prism.languages.insertBefore('typescript', 'function', {
      'generic-function': {
        // e.g. foo<T extends "bar" | "baz">( ...
        pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
        greedy: true,
        inside: {
          function: /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
          generic: {
            pattern: /<[\s\S]+/,
            // everything after the first <
            alias: 'class-name',
            inside: typeInside
          }
        }
      }
    })
    Prism.languages.ts = Prism.languages.typescript
  })(Prism)
}


/***/ }),

/***/ "./node_modules/refractor/lang/yaml.js":
/***/ ((module) => {

"use strict";


module.exports = yaml
yaml.displayName = 'yaml'
yaml.aliases = ['yml']
function yaml(Prism) {
  ;(function (Prism) {
    // https://yaml.org/spec/1.2/spec.html#c-ns-anchor-property
    // https://yaml.org/spec/1.2/spec.html#c-ns-alias-node
    var anchorOrAlias = /[*&][^\s[\]{},]+/ // https://yaml.org/spec/1.2/spec.html#c-ns-tag-property
    var tag = /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/ // https://yaml.org/spec/1.2/spec.html#c-ns-properties(n,c)
    var properties =
      '(?:' +
      tag.source +
      '(?:[ \t]+' +
      anchorOrAlias.source +
      ')?|' +
      anchorOrAlias.source +
      '(?:[ \t]+' +
      tag.source +
      ')?)' // https://yaml.org/spec/1.2/spec.html#ns-plain(n,c)
    // This is a simplified version that doesn't support "#" and multiline keys
    // All these long scarry character classes are simplified versions of YAML's characters
    var plainKey = /(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(
      /<PLAIN>/g,
      function () {
        return /[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/
          .source
      }
    )
    var string = /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source
    /**
     *
     * @param {string} value
     * @param {string} [flags]
     * @returns {RegExp}
     */
    function createValuePattern(value, flags) {
      flags = (flags || '').replace(/m/g, '') + 'm' // add m flag
      var pattern = /([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|]|}|(?:[\r\n]\s*)?#))/.source
        .replace(/<<prop>>/g, function () {
          return properties
        })
        .replace(/<<value>>/g, function () {
          return value
        })
      return RegExp(pattern, flags)
    }
    Prism.languages.yaml = {
      scalar: {
        pattern: RegExp(
          /([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(
            /<<prop>>/g,
            function () {
              return properties
            }
          )
        ),
        lookbehind: true,
        alias: 'string'
      },
      comment: /#.*/,
      key: {
        pattern: RegExp(
          /((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source
            .replace(/<<prop>>/g, function () {
              return properties
            })
            .replace(/<<key>>/g, function () {
              return '(?:' + plainKey + '|' + string + ')'
            })
        ),
        lookbehind: true,
        greedy: true,
        alias: 'atrule'
      },
      directive: {
        pattern: /(^[ \t]*)%.+/m,
        lookbehind: true,
        alias: 'important'
      },
      datetime: {
        pattern: createValuePattern(
          /\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/
            .source
        ),
        lookbehind: true,
        alias: 'number'
      },
      boolean: {
        pattern: createValuePattern(/true|false/.source, 'i'),
        lookbehind: true,
        alias: 'important'
      },
      null: {
        pattern: createValuePattern(/null|~/.source, 'i'),
        lookbehind: true,
        alias: 'important'
      },
      string: {
        pattern: createValuePattern(string),
        lookbehind: true,
        greedy: true
      },
      number: {
        pattern: createValuePattern(
          /[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.?\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/
            .source,
          'i'
        ),
        lookbehind: true
      },
      tag: tag,
      important: anchorOrAlias,
      punctuation: /---|[:[\]{}\-,|>?]|\.\.\./
    }
    Prism.languages.yml = Prism.languages.yaml
  })(Prism)
}


/***/ }),

/***/ "./node_modules/space-separated-tokens/index.js":
/***/ ((__unused_webpack_module, exports) => {

"use strict";
var __webpack_unused_export__;


exports.Q = parse
__webpack_unused_export__ = stringify

var empty = ''
var space = ' '
var whiteSpace = /[ \t\n\r\f]+/g

function parse(value) {
  var input = String(value || empty).trim()
  return input === empty ? [] : input.split(whiteSpace)
}

function stringify(values) {
  return values.join(space).trim()
}


/***/ }),

/***/ "./node_modules/xtend/immutable.js":
/***/ ((module) => {

module.exports = extend

var hasOwnProperty = Object.prototype.hasOwnProperty;

function extend() {
    var target = {}

    for (var i = 0; i < arguments.length; i++) {
        var source = arguments[i]

        for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
                target[key] = source[key]
            }
        }
    }

    return target
}


/***/ }),

/***/ "./node_modules/character-entities-legacy/index.json":
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"AElig":"Æ","AMP":"&","Aacute":"Á","Acirc":"Â","Agrave":"À","Aring":"Å","Atilde":"Ã","Auml":"Ä","COPY":"©","Ccedil":"Ç","ETH":"Ð","Eacute":"É","Ecirc":"Ê","Egrave":"È","Euml":"Ë","GT":">","Iacute":"Í","Icirc":"Î","Igrave":"Ì","Iuml":"Ï","LT":"<","Ntilde":"Ñ","Oacute":"Ó","Ocirc":"Ô","Ograve":"Ò","Oslash":"Ø","Otilde":"Õ","Ouml":"Ö","QUOT":"\\"","REG":"®","THORN":"Þ","Uacute":"Ú","Ucirc":"Û","Ugrave":"Ù","Uuml":"Ü","Yacute":"Ý","aacute":"á","acirc":"â","acute":"´","aelig":"æ","agrave":"à","amp":"&","aring":"å","atilde":"ã","auml":"ä","brvbar":"¦","ccedil":"ç","cedil":"¸","cent":"¢","copy":"©","curren":"¤","deg":"°","divide":"÷","eacute":"é","ecirc":"ê","egrave":"è","eth":"ð","euml":"ë","frac12":"½","frac14":"¼","frac34":"¾","gt":">","iacute":"í","icirc":"î","iexcl":"¡","igrave":"ì","iquest":"¿","iuml":"ï","laquo":"«","lt":"<","macr":"¯","micro":"µ","middot":"·","nbsp":" ","not":"¬","ntilde":"ñ","oacute":"ó","ocirc":"ô","ograve":"ò","ordf":"ª","ordm":"º","oslash":"ø","otilde":"õ","ouml":"ö","para":"¶","plusmn":"±","pound":"£","quot":"\\"","raquo":"»","reg":"®","sect":"§","shy":"­","sup1":"¹","sup2":"²","sup3":"³","szlig":"ß","thorn":"þ","times":"×","uacute":"ú","ucirc":"û","ugrave":"ù","uml":"¨","uuml":"ü","yacute":"ý","yen":"¥","yuml":"ÿ"}');

/***/ }),

/***/ "./node_modules/character-reference-invalid/index.json":
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"0":"�","128":"€","130":"‚","131":"ƒ","132":"„","133":"…","134":"†","135":"‡","136":"ˆ","137":"‰","138":"Š","139":"‹","140":"Œ","142":"Ž","145":"‘","146":"’","147":"“","148":"”","149":"•","150":"–","151":"—","152":"˜","153":"™","154":"š","155":"›","156":"œ","158":"ž","159":"Ÿ"}');

/***/ })

}]);
//# sourceMappingURL=748.5309b019.iframe.bundle.js.map