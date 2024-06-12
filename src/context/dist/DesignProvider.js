"use client";
"use strict";
exports.__esModule = true;
exports.DesignProvider = void 0;
var react_1 = require("react");
var DesignContext = react_1.createContext({
    design: null,
    setDesign: function () { }
});
exports.DesignProvider = function (_a) {
    var children = _a.children;
    var _b = react_1.useState(null), design = _b[0], setDesign = _b[1];
    return (React.createElement(DesignContext.Provider, { value: { design: design, setDesign: setDesign } }, children));
};
exports["default"] = DesignContext;
