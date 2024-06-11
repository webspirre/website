"use client";
"use strict";
exports.__esModule = true;
exports.AuthProvider = void 0;
var react_1 = require("react");
var AuthContext = react_1.createContext({
    auth: null,
    setAuth: function () { },
    authUser: null,
    setAuthUser: function () { }
});
exports.AuthProvider = function (_a) {
    var children = _a.children;
    var _b = react_1.useState(null), auth = _b[0], setAuth = _b[1];
    var _c = react_1.useState(null), authUser = _c[0], setAuthUser = _c[1];
    return (react_1["default"].createElement(AuthContext.Provider, { value: { auth: auth, setAuth: setAuth, authUser: authUser, setAuthUser: setAuthUser } }, children));
};
exports["default"] = AuthContext;
