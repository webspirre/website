"use client";
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var image_1 = require("next/image");
var link_1 = require("next/link");
var Browse_1 = require("./Browse");
var VideoModal_1 = require("../modals/VideoModal");
var react_1 = require("react");
var AuthModal_1 = require("../modals/AuthModal");
var useDesign_1 = require("@/hooks/useDesign");
var server_1 = require("@/utils/designs/server");
var HomeLayout = function (_a) {
    var user = _a.user;
    var _b = react_1.useState(false), toogleModal = _b[0], setToogleModal = _b[1];
    var handleToggle = function () { return setToogleModal(function (prev) { return !prev; }); };
    var _c = react_1.useState(false), authModal = _c[0], setAuthModal = _c[1];
    var handleAuthModal = function () { return setAuthModal(function (prev) { return !prev; }); };
    var _d = useDesign_1["default"](), setDesign = _d.setDesign, design = _d.design;
    var _e = react_1.useState([]), designs = _e[0], setDesigns = _e[1];
    var displayDesigns = function () { return __awaiter(void 0, void 0, void 0, function () {
        var designs;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, server_1.fetchDesigns()];
                case 1:
                    designs = _a.sent();
                    console.log("Data Response", designs);
                    if (designs) {
                        setDesigns(designs);
                        // setDesign(designs);
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    react_1.useEffect(function () {
        displayDesigns();
    }, []);
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
            react_1["default"].createElement(Browse_1["default"], { user: user, handleAuthModal: handleAuthModal, designs: designs }))));
};
exports["default"] = HomeLayout;
