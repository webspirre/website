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
var client_1 = require("@/libs/auth-helpers/client");
var server_1 = require("@/libs/auth-helpers/server");
var image_1 = require("next/image");
var link_1 = require("next/link");
var navigation_1 = require("next/navigation");
var react_1 = require("react");
var Form = function () {
    var router = navigation_1.useRouter();
    var _a = react_1.useState(false), isSubmitting = _a[0], setIsSubmitting = _a[1];
    // const [email, setEmail] = useState(localStorage.getItem("email") || "");
    var _b = react_1.useState(""), email = _b[0], setEmail = _b[1];
    react_1.useEffect(function () {
        if (typeof window !== "undefined") {
            var storedEmail = localStorage.getItem("email");
            if (storedEmail) {
                setEmail(storedEmail);
            }
        }
    }, []);
    var handleSubmit = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    setIsSubmitting(true); // Disable the button while the request is being handled
                    return [4 /*yield*/, client_1.handleRequest(e, server_1.requestPasswordUpdate, router)];
                case 1:
                    _a.sent();
                    setIsSubmitting(false);
                    return [2 /*return*/];
            }
        });
    }); };
    var handleEmailChange = function (e) {
        var email = e.target.value;
        setEmail(email);
        localStorage.setItem("email", email); // Store email in localStorage
    };
    return (react_1["default"].createElement("div", { className: "flex flex-col items-center justify-center gap-4" },
        react_1["default"].createElement(link_1["default"], { href: "/" },
            react_1["default"].createElement(image_1["default"], { height: 20, width: 100, src: "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1705721941/utilities/logo_e8rxwj.svg", alt: "left", className: "hidden sm:block mb-[36px]" })),
        react_1["default"].createElement("div", { className: "w-[400px]" },
            react_1["default"].createElement("div", { className: "relative" },
                react_1["default"].createElement(link_1["default"], { href: "/auth/login", className: "flex absolute bottom-[30px]" },
                    react_1["default"].createElement(image_1["default"], { height: 20, width: 16, src: "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1717142604/utilities/webspirre/Vector_9_auopfm.svg", alt: "left", className: " " })),
                react_1["default"].createElement("h1", { className: "text-center text-[24px] py-4 font-bold" }, "Recover password")),
            react_1["default"].createElement("p", { className: "text-center text-[12px] mb-4" }, "Enter your email address to recover your password.")),
        react_1["default"].createElement("form", { className: "flex flex-col mx-auto md:mx-0 gap-4", noValidate: true, onSubmit: function (e) { return handleSubmit(e); } },
            react_1["default"].createElement("label", { htmlFor: "email", className: "text-[14px] -mb-2" }, "Email address"),
            react_1["default"].createElement("input", { id: "email", type: "email", name: "email", autoCapitalize: "none", autoComplete: "email", autoCorrect: "off", placeholder: "example@mail.com", className: "border border-[#C7C7C7] bg-white p-4 rounded-md h-[60px] w-[350px] sm:w-[430px]", value: email, onChange: handleEmailChange }),
            react_1["default"].createElement("button", { type: "submit", className: "bg-black text-center text-white font-bold p-2 py-4 mt-2 rounded-md disabled:cursor-not-allowed", disabled: [!email].every(Boolean) }, !isSubmitting ? "Get code" : "Getting Code..."))));
};
exports["default"] = Form;
