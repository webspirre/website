"use client";
"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var link_1 = require("next/link");
var Browse_1 = require("./Browse");
var VideoModal_1 = require("../modals/VideoModal");
var react_1 = require("react");
var AuthModal_1 = require("../modals/AuthModal");
var HomeLayout = function (_a) {
    var user = _a.user;
    var _b = react_1.useState(false), toogleModal = _b[0], setToogleModal = _b[1];
    var handleToggle = function () { return setToogleModal(function (prev) { return !prev; }); };
    var _c = react_1.useState(false), authModal = _c[0], setAuthModal = _c[1];
    var handleAuthModal = function () { return setAuthModal(function (prev) { return !prev; }); };
    console.log("User", user);
    var backgroundImageUrl = "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1705724835/utilities/background_illustration_lcdskr.svg";
    return (react_1["default"].createElement("main", null,
        react_1["default"].createElement(VideoModal_1["default"], { toogleModal: handleToggle, open: toogleModal }),
        react_1["default"].createElement(AuthModal_1["default"], { open: authModal, toogleModal: handleAuthModal }),
        react_1["default"].createElement("div", { style: {
                backgroundImage: "url(" + backgroundImageUrl + ")",
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "360px",
                position: "relative"
            }, className: "flex flex-col items-center justify-center w-full " },
            react_1["default"].createElement(image_1["default"], { height: 453, width: 420, src: "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1705952595/utilities/hero_H1_and_vector_sy4fzl.svg", alt: "rice", className: "px-4" }),
            react_1["default"].createElement("h1", { className: "sm:text-[14px] px-4 sm:w-[400px] pt-4 text-center" }, "Skip the stressful part. Get real and practical web design inspiration from the internet's best designed and highest-converting websites."),
            react_1["default"].createElement("div", { className: "flex items-center justify-center gap-2 px-4 pt-6 sm:text-10px" },
                react_1["default"].createElement(link_1["default"], { href: "/", className: "bg-black py-4 px-4 overflow-hidden hover:scale-105 transition-transform duration-300  sm:py-2 sm:px-8 text-white rounded-[20px]  font-medium text-[12px]" }, "Get started now"),
                react_1["default"].createElement("div", { 
                    // href="/"
                    onClick: handleToggle, className: "bg-white hover-black overflow-hidden hover:scale-100 transition-transform duration-300 flex items-center gap-1 py-4 px-4 sm:py-2 sm:px-4 text-black rounded-[20px] border border-[#BBBBBB] font-medium text-[12px] cursor-pointer" },
                    react_1["default"].createElement(image_1["default"], { height: 21, width: 10, src: "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1715212239/utilities/play_icon_1_zueuon.svg", alt: "rice", className: "" }),
                    "See how it works"))),
        react_1["default"].createElement("div", { className: "" },
            react_1["default"].createElement(Browse_1["default"], { user: user, handleAuthModal: handleAuthModal }))));
};
exports["default"] = HomeLayout;
