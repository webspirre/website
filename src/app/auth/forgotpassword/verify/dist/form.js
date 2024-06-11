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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
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
    var _b = react_1.useState(false), isSubmittingR = _b[0], setIsSubmittingR = _b[1];
    var _c = react_1.useState(["", "", "", "", "", ""]), code = _c[0], setCode = _c[1];
    var _d = react_1.useState(""), email = _d[0], setEmail = _d[1];
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
                    setIsSubmitting(true);
                    return [4 /*yield*/, client_1.handleRequest(e, server_1.verifyOtp, router)];
                case 1:
                    _a.sent();
                    setIsSubmitting(false);
                    return [2 /*return*/];
            }
        });
    }); };
    var handleResend = function () { return __awaiter(void 0, void 0, void 0, function () {
        var formData;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setIsSubmittingR(true);
                    formData = new FormData();
                    formData.append("email", email);
                    return [4 /*yield*/, server_1.resendOTP(formData)];
                case 1:
                    _a.sent();
                    setIsSubmittingR(false);
                    return [2 /*return*/];
            }
        });
    }); };
    var handleInputChange = function (e, index) {
        var _a, _b;
        var value = e.target.value;
        if (/^\d$/.test(value)) {
            var newCode = __spreadArrays(code);
            newCode[index] = value;
            setCode(newCode);
            if (index < code.length - 1) {
                (_a = e.target.nextSibling) === null || _a === void 0 ? void 0 : _a.focus();
            }
        }
        else if (value === "") {
            var newCode = __spreadArrays(code);
            newCode[index] = "";
            setCode(newCode);
            if (index > 0) {
                (_b = e.target.previousSibling) === null || _b === void 0 ? void 0 : _b.focus();
            }
        }
    };
    var isSubmitDisabled = code.some(function (digit) { return digit === ""; });
    function maskEmail(email) {
        var _a = email.split("@"), localPart = _a[0], domain = _a[1];
        if (!domain) {
            return email;
        }
        var localPartMasked = localPart.slice(0, 3) + "****" + localPart.slice(-2);
        var _b = domain.split("."), domainName = _b[0], domainExtension = _b[1];
        if (!domainName || !domainExtension) {
            return email;
        }
        var domainMasked = domainName[0] + "***" + domainName.slice(-1);
        return localPartMasked + "@" + domainMasked + "." + domainExtension;
    }
    var emailAddress = maskEmail(email);
    return (react_1["default"].createElement("div", { className: "flex flex-col items-center justify-center gap-4" },
        react_1["default"].createElement(link_1["default"], { href: "/" },
            react_1["default"].createElement(image_1["default"], { height: 20, width: 100, src: "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1705721941/utilities/logo_e8rxwj.svg", alt: "left", className: "hidden sm:block mb-[36px]" })),
        react_1["default"].createElement("div", { className: "w-[400px]" },
            react_1["default"].createElement("div", { className: "relative" },
                react_1["default"].createElement(link_1["default"], { href: "/auth/login", className: "flex absolute bottom-[30px]" },
                    react_1["default"].createElement(image_1["default"], { height: 20, width: 16, src: "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1717142604/utilities/webspirre/Vector_9_auopfm.svg", alt: "left", className: "" })),
                react_1["default"].createElement("h1", { className: "text-center text-[24px] py-4 font-bold" }, "Recover password")),
            react_1["default"].createElement("p", { className: "text-center text-[12px] mb-4" },
                "A 6 digit code has been sent to",
                " ",
                react_1["default"].createElement("span", { className: "font-bold" },
                    emailAddress,
                    ","),
                " enter the code to verify.")),
        react_1["default"].createElement("form", { className: "flex sm:w-[400px] flex-col mx-auto md:mx-0 gap-4", noValidate: true, onSubmit: handleSubmit },
            react_1["default"].createElement("input", { type: "hidden", value: email, name: "email" }),
            react_1["default"].createElement("div", { className: "flex justify-center gap-2" }, code.map(function (digit, index) { return (react_1["default"].createElement("input", { key: index, type: "text", maxLength: 1, value: digit, name: "digit-" + index, onChange: function (e) { return handleInputChange(e, index); }, className: "border border-[#C7C7C7] bg-white p-2 rounded-md h-[60px] w-[50px] text-center text-2xl" })); })),
            react_1["default"].createElement("button", { type: "submit", className: "bg-black text-center w-full text-white font-bold p-2 py-4 mt-2 rounded-md", disabled: isSubmitDisabled }, !isSubmitting ? "Verify code" : "Verifying code...")),
        react_1["default"].createElement("form", { onSubmit: handleResend },
            react_1["default"].createElement("input", { type: "hidden", value: email, name: "email" }),
            react_1["default"].createElement("button", { type: "button", className: "text-center w-full text-black font-bold p-2 py-4 mt-2 rounded-md" }, !isSubmittingR ? "Resend code" : "Resending code..."))));
};
exports["default"] = Form;
