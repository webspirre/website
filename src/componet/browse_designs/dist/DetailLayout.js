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
var react_1 = require("react");
var ItemDetail_1 = require("@/app/detail/[id]/ItemDetail");
var server_1 = require("@/utils/designs/server");
var AuthModal_1 = require("../modals/AuthModal");
var DetailLayout = function (_a) {
    var user = _a.user, id = _a.id;
    //   const { id } = useParams<{ id: string }>();
    var _b = react_1.useState([]), designs = _b[0], setDesigns = _b[1];
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
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    react_1.useEffect(function () {
        displayDesigns();
    }, []);
    var _c = react_1.useState(id), currentProjectId = _c[0], setCurrentProjectId = _c[1];
    var _d = react_1.useState(false), authModal = _d[0], setAuthModal = _d[1];
    var handleAuthModal = function () { return setAuthModal(function (prev) { return !prev; }); };
    var handleNext = function () {
        var _a;
        var currentIndex = designs.findIndex(function (item) { return item.uid === currentProjectId; });
        var nextIndex = (currentIndex + 1) % designs.length;
        if (currentProjectId) {
            setCurrentProjectId((_a = designs[nextIndex]) === null || _a === void 0 ? void 0 : _a.uid);
        }
    };
    var handlePrevious = function () {
        var _a;
        var currentIndex = designs.findIndex(function (item) { return item.uid === currentProjectId; });
        var previousIndex = (currentIndex - 1 + designs.length) % designs.length;
        if (currentProjectId) {
            setCurrentProjectId((_a = designs[previousIndex]) === null || _a === void 0 ? void 0 : _a.uid);
        }
    };
    console.log("djdd", id);
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(AuthModal_1["default"], { open: authModal, toogleModal: handleAuthModal }),
        react_1["default"].createElement("div", { className: "justify-center px-2 xl:px-20 mt-5 xl:mt-[100px]  flex w-full items-center  " },
            react_1["default"].createElement(ItemDetail_1["default"]
            // id={id}
            , { 
                // id={id}
                id: currentProjectId, onNext: handleNext, onPrevious: handlePrevious, user: user, toogleModal: handleAuthModal }))));
};
exports["default"] = DetailLayout;
