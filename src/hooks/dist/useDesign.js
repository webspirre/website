"use strict";
exports.__esModule = true;
var react_1 = require("react");
var DesignProvider_1 = require("@/context/DesignProvider");
var useDesign = function () {
    var context = react_1.useContext(DesignProvider_1["default"]);
    if (!context) {
        throw new Error("useDesign must be used within a DesignProvider");
    }
    var design = context.design;
    react_1.useDebugValue(design, function (design) { return (design ? "Design Loaded" : "No Design"); });
    return context;
};
exports["default"] = useDesign;
