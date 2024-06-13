"use strict";
exports.__esModule = true;
var react_1 = require("@headlessui/react");
var image_1 = require("next/image");
var link_1 = require("next/link");
var react_2 = require("react");
var navigation_1 = require("next/navigation");
var AuthModal = function (_a) {
    var open = _a.open, toogleModal = _a.toogleModal, isDeleting = _a.isDeleting;
    var router = navigation_1.useRouter();
    return (react_2["default"].createElement(react_2["default"].Fragment, null,
        react_2["default"].createElement(react_1.Transition, { appear: true, show: open, as: react_2.Fragment },
            react_2["default"].createElement(react_1.Dialog, { as: "div", className: "relative z-10", onClose: toogleModal },
                react_2["default"].createElement(react_1.TransitionChild, { as: react_2.Fragment, enter: "ease-out duration-300", enterFrom: "opacity-0", enterTo: "opacity-100", leave: "ease-in duration-200", leaveFrom: "opacity-100", leaveTo: "opacity-0" },
                    react_2["default"].createElement("div", { className: "fixed inset-0 bg-white bg-opacity-40 backdrop-blur-sm" })),
                react_2["default"].createElement("div", { className: "fixed inset-0 overflow-y-auto" },
                    react_2["default"].createElement("div", { className: "flex min-h-full items-end sm:items-center justify-center p-0 sm:p-4 text-center" },
                        react_2["default"].createElement(react_1.TransitionChild, { as: react_2.Fragment, enter: "ease-out duration-300", enterFrom: "opacity-0 scale-95", enterTo: "opacity-100 scale-100", leave: "ease-in duration-200", leaveFrom: "opacity-100 scale-100", leaveTo: "opacity-0 scale-95" },
                            react_2["default"].createElement(react_1.DialogPanel, { className: "w-full max-w-full md:max-w-xl transform overflow-hidden rounded-none sm:rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all z-50" },
                                react_2["default"].createElement("div", { className: "flex justify-between items-center p-3 border-b mb-5 w-full" },
                                    react_2["default"].createElement(react_1.DialogTitle, { as: "h3", className: "text-xs font-medium leading-6 text-gray-900" }, "Sign up/Login"),
                                    react_2["default"].createElement(image_1["default"], { height: 10, width: 10, onClick: toogleModal, alt: "img", src: "https://res.cloudinary.com/dwqantex4/image/upload/v1718104910/x_as7ir4.png", className: "cursor-pointer" })),
                                react_2["default"].createElement("div", { className: "flex flex-col gap-y-4 justify-center items-center w-full" },
                                    react_2["default"].createElement(image_1["default"], { height: 220, width: 220, alt: "img", src: "https://res.cloudinary.com/dwqantex4/image/upload/v1718140973/Frame_101_s7w2d3.png", className: "w-]" }),
                                    react_2["default"].createElement("p", { className: "text-xs text-center max-w-full sm:max-w-4xl text-black font-semibold" }, "You need to Sign up or Login to be able to take this action."),
                                    react_2["default"].createElement("div", { className: "flex flex-col justify-center items-center sm:flex-row gap-3 w-full max-w-[70%] mx-auto p-4" },
                                        react_2["default"].createElement("button", { className: "w-full sm:w-auto p-2.5 bg-white text-black text-xs font-medium border border-black rounded-lg hover:bg-gray-200 transition duration-300 ease-in-out text-center", onClick: toogleModal }, "Cancel"),
                                        react_2["default"].createElement(link_1["default"], { href: "/auth/register", className: "w-full sm:w-auto p-2.5 bg-black text-white text-xs font-medium border border-black rounded-lg hover:bg-gray-800 transition duration-300 ease-in-out text-center" }, "Sign up")),
                                    react_2["default"].createElement("p", { className: "text-xs text-center text-slate-400 font-semibold" },
                                        "Already have an account?",
                                        " ",
                                        react_2["default"].createElement(link_1["default"], { href: "/auth/login", className: "text-black" }, "Login")))))))))));
};
exports["default"] = AuthModal;
