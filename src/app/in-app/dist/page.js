"use client";
"use strict";
exports.__esModule = true;
var Browse_1 = require("@/componet/browse_designs/Browse");
var react_1 = require("react");
// async
function page() {
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("div", { className: "mt-20" },
            react_1["default"].createElement(Browse_1["default"], { user: null, handleAuthModal: function () { } }))));
}
exports["default"] = page;
