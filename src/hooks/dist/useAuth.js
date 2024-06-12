"use strict";
exports.__esModule = true;
var react_1 = require("react");
var AuthProvider_1 = require("@/context/AuthProvider");
var useAuth = function () {
    var context = react_1.useContext(AuthProvider_1["default"]);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    var auth = context.auth;
    react_1.useDebugValue(auth, function (auth) { return (auth ? "Logged In" : "Logged Out"); });
    return context;
};
exports["default"] = useAuth;
