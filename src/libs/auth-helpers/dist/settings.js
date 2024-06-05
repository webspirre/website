"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.getRedirectMethod = exports.getDefaultSignInView = exports.getViewTypes = exports.getAuthTypes = void 0;
// Boolean toggles to determine which auth types are allowed
var allowOauth = true;
var allowEmail = true;
var allowPassword = true;
// Boolean toggle to determine whether auth interface should route through server or client
// (Currently set to false because screen sometimes flickers with server redirects)
var allowServerRedirect = false;
// Check that at least one of allowPassword and allowEmail is true
if (!allowPassword && !allowEmail)
    throw new Error("At least one of allowPassword and allowEmail must be true");
exports.getAuthTypes = function () {
    return { allowOauth: allowOauth, allowEmail: allowEmail, allowPassword: allowPassword };
};
exports.getViewTypes = function () {
    // Define the valid view types
    var viewTypes = [];
    if (allowEmail) {
        viewTypes = __spreadArrays(viewTypes, ["email_signin"]);
    }
    if (allowPassword) {
        viewTypes = __spreadArrays(viewTypes, [
            "password_signin",
            "forgot_password",
            "update_password",
            "signup",
        ]);
    }
    return viewTypes;
};
exports.getDefaultSignInView = function (preferredSignInView) {
    // Define the default sign in view
    var defaultView = allowPassword ? "password_signin" : "email_signin";
    if (preferredSignInView && exports.getViewTypes().includes(preferredSignInView)) {
        defaultView = preferredSignInView;
    }
    return defaultView;
};
exports.getRedirectMethod = function () {
    return allowServerRedirect ? "server" : "client";
};
