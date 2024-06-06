"use server";
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
exports.deleteUserAccount = exports.getCurrentUser = exports.updateProfilePicture = exports.updateName = exports.updateEmail = exports.updatePassword = exports.verifyOtp = exports.signUp = exports.signInWithPassword = exports.resendOTP = exports.requestPasswordUpdate = exports.signInWithEmail = exports.SignOut = exports.redirectToPath = void 0;
var server_1 = require("../supabase/server");
var headers_1 = require("next/headers");
var navigation_1 = require("next/navigation");
var helpers_1 = require("../helpers");
var settings_1 = require("./settings");
/**
 * Validates an email address.
 * @param {string} email - The email address to validate.
 * @returns {boolean} - Returns true if the email address is valid, otherwise false.
 */
function isValidEmail(email) {
    var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
}
/**
 * Redirects to a specified path.
 * @param {string} path - The path to redirect to.
 * @returns {Promise<void>} - A promise that resolves to void.
 */
function redirectToPath(path) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, navigation_1.redirect(path)];
        });
    });
}
exports.redirectToPath = redirectToPath;
/**
 * Signs the user out.
 * @param {FormData} formData - The form data containing the path name.
 * @returns {Promise<string>} - A promise that resolves to a redirect path.
 */
function SignOut(formData) {
    return __awaiter(this, void 0, void 0, function () {
        var pathName, supabase, error;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    pathName = String(formData.get("pathName")).trim();
                    supabase = server_1.createClient();
                    return [4 /*yield*/, supabase.auth.signOut()];
                case 1:
                    error = (_a.sent()).error;
                    if (error) {
                        return [2 /*return*/, helpers_1.getErrorRedirect(pathName, "Hmm... Something went wrong.", "You could not be signed out.")];
                    }
                    return [2 /*return*/, "/auth/login"];
            }
        });
    });
}
exports.SignOut = SignOut;
/**
 * Signs in the user with an email.
 * @param {FormData} formData - The form data containing the email.
 * @returns {Promise<string>} - A promise that resolves to a redirect path.
 */
function signInWithEmail(formData) {
    return __awaiter(this, void 0, void 0, function () {
        var cookieStore, callbackURL, email, redirectPath, supabase, options, allowPassword, _a, data, error;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    cookieStore = headers_1.cookies();
                    callbackURL = helpers_1.getURL("/auth/callback");
                    email = String(formData.get("email")).trim();
                    if (!isValidEmail(email)) {
                        redirectPath = helpers_1.getErrorRedirect("/signin/email_signin", "Invalid email address.", "Please try again.");
                    }
                    supabase = server_1.createClient();
                    options = {
                        emailRedirectTo: callbackURL,
                        shouldCreateUser: true
                    };
                    allowPassword = settings_1.getAuthTypes().allowPassword;
                    if (allowPassword)
                        options.shouldCreateUser = false;
                    return [4 /*yield*/, supabase.auth.signInWithOtp({
                            email: email,
                            options: options
                        })];
                case 1:
                    _a = _b.sent(), data = _a.data, error = _a.error;
                    if (error) {
                        redirectPath = helpers_1.getErrorRedirect("/signin/email_signin", "You could not be signed in.", error.message);
                    }
                    else if (data) {
                        cookieStore.set("preferredSignInView", "email_signin", { path: "/" });
                        redirectPath = helpers_1.getStatusRedirect("/signin/email_signin", "Success!", "Please check your email for a magic link. You may now close this tab.", true);
                    }
                    else {
                        redirectPath = helpers_1.getErrorRedirect("/signin/email_signin", "Hmm... Something went wrong.", "You could not be signed in.");
                    }
                    return [2 /*return*/, redirectPath];
            }
        });
    });
}
exports.signInWithEmail = signInWithEmail;
/**
 * Requests a password update for the user.
 * @param {FormData} formData - The form data containing the email.
 * @returns {Promise<string>} - A promise that resolves to a redirect path.
 */
function requestPasswordUpdate(formData) {
    return __awaiter(this, void 0, void 0, function () {
        var callbackURL, email, redirectPath, supabase, _a, data, error;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    callbackURL = helpers_1.getURL("/auth/forgotpassword");
                    email = String(formData.get("email")).trim();
                    if (!isValidEmail(email)) {
                        redirectPath = helpers_1.getErrorRedirect("/auth/forgotpassword", "Invalid email address.", "Please try again.");
                    }
                    supabase = server_1.createClient();
                    return [4 /*yield*/, supabase.auth.resetPasswordForEmail(email, {
                            redirectTo: callbackURL
                        })];
                case 1:
                    _a = _b.sent(), data = _a.data, error = _a.error;
                    if (error) {
                        redirectPath = helpers_1.getErrorRedirect("/auth/forgotpassword", error.message, "Please try again.");
                    }
                    else if (data) {
                        redirectPath = helpers_1.getStatusRedirect("/auth/forgotpassword/verify", "Success!", "Please check your email for a password reset link. You may now close this tab.", true);
                    }
                    else {
                        redirectPath = helpers_1.getErrorRedirect("/auth/forgotpassword", "Hmm... Something went wrong.", "Password reset email could not be sent.");
                    }
                    return [2 /*return*/, redirectPath];
            }
        });
    });
}
exports.requestPasswordUpdate = requestPasswordUpdate;
/**
 * Requests a password update for the user.
 * @param {FormData} formData - The form data containing the email.
 * @returns {Promise<string>} - A promise that resolves to a redirect path.
 */
function resendOTP(formData) {
    return __awaiter(this, void 0, void 0, function () {
        var callbackURL, email, redirectPath, supabase, _a, data, error;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    callbackURL = helpers_1.getURL("/auth/forgotpassword/verify");
                    email = String(formData.get("email")).trim();
                    if (!isValidEmail(email)) {
                        redirectPath = helpers_1.getErrorRedirect("/auth/forgotpassword/verify", "Invalid email address.", "Please try again.");
                        return [2 /*return*/, redirectPath];
                    }
                    supabase = server_1.createClient();
                    return [4 /*yield*/, supabase.auth.resetPasswordForEmail(email, {
                            redirectTo: callbackURL
                        })];
                case 1:
                    _a = _b.sent(), data = _a.data, error = _a.error;
                    if (error) {
                        redirectPath = helpers_1.getErrorRedirect("/auth/forgotpassword/verify", error.message, "Please try again.");
                    }
                    else if (data) {
                        redirectPath = helpers_1.getStatusRedirect("/auth/forgotpassword/verify", "Success!", "A new OTP has been sent to your email. Please check your email.", true);
                    }
                    else {
                        redirectPath = helpers_1.getErrorRedirect("/auth/forgotpassword/verify", "Hmm... Something went wrong.", "OTP could not be sent.");
                    }
                    return [2 /*return*/, redirectPath];
            }
        });
    });
}
exports.resendOTP = resendOTP;
/**
 * Signs in the user with a password.
 * @param {FormData} formData - The form data containing the email and password.
 * @returns {Promise<string>} - A promise that resolves to a redirect path.
 */
function signInWithPassword(formData) {
    return __awaiter(this, void 0, void 0, function () {
        var cookieStore, email, password, redirectPath, supabase, _a, error, data;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    cookieStore = headers_1.cookies();
                    email = String(formData.get("email")).trim();
                    password = String(formData.get("password")).trim();
                    supabase = server_1.createClient();
                    return [4 /*yield*/, supabase.auth.signInWithPassword({
                            email: email,
                            password: password
                        })];
                case 1:
                    _a = _b.sent(), error = _a.error, data = _a.data;
                    if (error) {
                        redirectPath = helpers_1.getErrorRedirect("/auth/forgotpassword/newpassword", "Sign in failed.", error.message);
                    }
                    else if (data.user) {
                        cookieStore.set("preferredSignInView", "newpassword", { path: "/" });
                        redirectPath = helpers_1.getStatusRedirect("/", "Success!", "You are now signed in.");
                    }
                    else {
                        redirectPath = helpers_1.getErrorRedirect("/auth/newpassword", "Hmm... Something went wrong.", "You could not be signed in.");
                    }
                    return [2 /*return*/, redirectPath];
            }
        });
    });
}
exports.signInWithPassword = signInWithPassword;
/**
 * Signs up the user with an email and password.
 * @param {FormData} formData - The form data containing the email and password.
 * @returns {Promise<string>} - A promise that resolves to a redirect path.
 */
function signUp(formData) {
    return __awaiter(this, void 0, void 0, function () {
        var callbackURL, email, password, redirectPath, supabase, _a, error, data;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    callbackURL = helpers_1.getURL("/auth/callback");
                    email = String(formData.get("email")).trim();
                    password = String(formData.get("password")).trim();
                    if (!isValidEmail(email)) {
                        redirectPath = helpers_1.getErrorRedirect("/auth/register", "Invalid email address.", "Please try again.");
                    }
                    supabase = server_1.createClient();
                    return [4 /*yield*/, supabase.auth.signUp({
                            email: email,
                            password: password,
                            options: {
                                emailRedirectTo: callbackURL
                            }
                        })];
                case 1:
                    _a = _b.sent(), error = _a.error, data = _a.data;
                    if (error) {
                        redirectPath = helpers_1.getErrorRedirect("/auth/register", "Sign up failed.", error.message);
                    }
                    else if (data.session) {
                        redirectPath = helpers_1.getStatusRedirect("/", "Success!", "You are now signed in.");
                    }
                    else if (data.user &&
                        data.user.identities &&
                        data.user.identities.length == 0) {
                        redirectPath = helpers_1.getErrorRedirect("/auth/register", "Sign up failed.", "There is already an account associated with this email address. Try resetting your password.");
                    }
                    else if (data.user) {
                        redirectPath = helpers_1.getStatusRedirect("/", "Success!", "Please check your email for a confirmation link. You may now close this tab.");
                    }
                    else {
                        redirectPath = helpers_1.getErrorRedirect("/auth/register", "Hmm... Something went wrong.", "You could not be signed up.");
                    }
                    return [2 /*return*/, redirectPath];
            }
        });
    });
}
exports.signUp = signUp;
/**
 * Verifies the OTP entered by the user.
 * @param {FormData} formData - The form data containing the email and OTP.
 * @returns {Promise<string>} - A promise that resolves to a redirect path.
 */
function verifyOtp(formData) {
    return __awaiter(this, void 0, void 0, function () {
        var email, otp1, otp2, otp3, otp4, otp5, otp6, otp, redirectPath, supabase, _a, data, error;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    email = String(formData.get("email")).trim();
                    otp1 = String(formData.get("digit-0")).trim();
                    otp2 = String(formData.get("digit-1")).trim();
                    otp3 = String(formData.get("digit-2")).trim();
                    otp4 = String(formData.get("digit-3")).trim();
                    otp5 = String(formData.get("digit-4")).trim();
                    otp6 = String(formData.get("digit-5")).trim();
                    otp = otp1 + otp2 + otp3 + otp4 + otp5 + otp6;
                    console.log("otp", otp);
                    console.log("email", email);
                    supabase = server_1.createClient();
                    return [4 /*yield*/, supabase.auth.verifyOtp({
                            email: email,
                            token: otp,
                            type: "recovery"
                        })];
                case 1:
                    _a = _b.sent(), data = _a.data, error = _a.error;
                    if (error) {
                        redirectPath = helpers_1.getErrorRedirect("/auth/forgotpassword/verify", "Invalid OTP.", "Please try again.");
                    }
                    else {
                        redirectPath = helpers_1.getStatusRedirect("/auth/forgotpassword/newpassword", "OTP Verified!", "You can now update your password.");
                    }
                    return [2 /*return*/, redirectPath];
            }
        });
    });
}
exports.verifyOtp = verifyOtp;
/**
 * Updates the user's password.
 * @param {FormData} formData - The form data containing the new password and confirmation.
 * @returns {Promise<string>} - A promise that resolves to a redirect path.
 */
function updatePassword(formData) {
    return __awaiter(this, void 0, void 0, function () {
        var password, passwordConfirm, redirectPath, supabase, _a, error, data;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    password = String(formData.get("password")).trim();
                    passwordConfirm = String(formData.get("passwordConfirm")).trim();
                    // Check that the password and confirmation match
                    if (password !== passwordConfirm) {
                        redirectPath = helpers_1.getErrorRedirect("/auth/forgotpassword/newpassword", "Your password could not be updated.", "Passwords do not match.");
                    }
                    supabase = server_1.createClient();
                    return [4 /*yield*/, supabase.auth.updateUser({
                            password: password
                        })];
                case 1:
                    _a = _b.sent(), error = _a.error, data = _a.data;
                    if (error) {
                        redirectPath = helpers_1.getErrorRedirect("/auth/forgotpassword/newpassword", "Your password could not be updated.", error.message);
                    }
                    else if (data.user) {
                        redirectPath = helpers_1.getStatusRedirect("/auth/login", "Success!", "Your password has been updated.");
                    }
                    else {
                        redirectPath = helpers_1.getErrorRedirect("/auth/forgotpassword/newpassword", "Hmm... Something went wrong.", "Your password could not be updated.");
                    }
                    return [2 /*return*/, redirectPath];
            }
        });
    });
}
exports.updatePassword = updatePassword;
/**
 * Updates the user's email.
 * @param {FormData} formData - The form data containing the new email.
 * @returns {Promise<string>} - A promise that resolves to a redirect path.
 */
function updateEmail(formData) {
    return __awaiter(this, void 0, void 0, function () {
        var newEmail, supabase, callbackUrl, error;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    newEmail = String(formData.get("newEmail")).trim();
                    // Check that the email is valid
                    if (!isValidEmail(newEmail)) {
                        return [2 /*return*/, helpers_1.getErrorRedirect("/account", "Your email could not be updated.", "Invalid email address.")];
                    }
                    supabase = server_1.createClient();
                    callbackUrl = helpers_1.getURL(helpers_1.getStatusRedirect("/account", "Success!", "Your email has been updated."));
                    return [4 /*yield*/, supabase.auth.updateUser({ email: newEmail }, {
                            emailRedirectTo: callbackUrl
                        })];
                case 1:
                    error = (_a.sent()).error;
                    if (error) {
                        return [2 /*return*/, helpers_1.getErrorRedirect("/account", "Your email could not be updated.", error.message)];
                    }
                    else {
                        return [2 /*return*/, helpers_1.getStatusRedirect("/account", "Confirmation emails sent.", "You will need to confirm the update by clicking the links sent to both the old and new email addresses.")];
                    }
                    return [2 /*return*/];
            }
        });
    });
}
exports.updateEmail = updateEmail;
/**
 * Updates the user's name.
 * @param {FormData} formData - The form data containing the new full name.
 * @returns {Promise<string>} - A promise that resolves to a redirect path.
 */
function updateName(formData) {
    return __awaiter(this, void 0, void 0, function () {
        var fullName, supabase, _a, error, data;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    fullName = String(formData.get("fullName")).trim();
                    supabase = server_1.createClient();
                    return [4 /*yield*/, supabase.auth.updateUser({
                            data: { full_name: fullName }
                        })];
                case 1:
                    _a = _b.sent(), error = _a.error, data = _a.data;
                    if (error) {
                        return [2 /*return*/, helpers_1.getErrorRedirect("/account", "Your name could not be updated.", error.message)];
                    }
                    else if (data.user) {
                        return [2 /*return*/, helpers_1.getStatusRedirect("/account", "Success!", "Your name has been updated.")];
                    }
                    else {
                        return [2 /*return*/, helpers_1.getErrorRedirect("/account", "Hmm... Something went wrong.", "Your name could not be updated.")];
                    }
                    return [2 /*return*/];
            }
        });
    });
}
exports.updateName = updateName;
/**
 * Updates the user's profile picture.
 * @param {string} userId - The user's ID.
 * @param {File} file - The new profile picture file.
 * @returns {Promise<string>} - A promise that resolves to a redirect path.
 */
function updateProfilePicture(userId, file) {
    return __awaiter(this, void 0, void 0, function () {
        var supabase, buffer, _a, _b, _c, data, error, DT, updateError;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    supabase = server_1.createClient();
                    _b = (_a = Buffer).from;
                    return [4 /*yield*/, file.arrayBuffer()];
                case 1:
                    buffer = _b.apply(_a, [_d.sent()]);
                    return [4 /*yield*/, supabase.storage
                            .from("profile-images")
                            .upload(userId + "/profile-image.png", buffer, {
                            contentType: file.type,
                            upsert: true
                        })];
                case 2:
                    _c = _d.sent(), data = _c.data, error = _c.error;
                    if (error) {
                        return [2 /*return*/, helpers_1.getErrorRedirect("/account", "Your profile picture could not be updated.", error.message)];
                    }
                    DT = supabase.storage
                        .from("profile-images")
                        .getPublicUrl(userId + "/profile-image.png").data;
                    return [4 /*yield*/, supabase
                            .from("users")
                            .update({ avatar_url: DT === null || DT === void 0 ? void 0 : DT.publicUrl })
                            .eq("id", userId)];
                case 3:
                    updateError = (_d.sent()).error;
                    if (updateError) {
                        return [2 /*return*/, helpers_1.getErrorRedirect("/account", "Your profile picture could not be updated.", updateError.message)];
                    }
                    return [2 /*return*/, helpers_1.getStatusRedirect("/account", "Success!", "Your profile picture has been updated.")];
            }
        });
    });
}
exports.updateProfilePicture = updateProfilePicture;
/**
 * Retrieves the current user.
 * @returns {Promise<Object>} - A promise that resolves to the current user.
 * @throws {Error} - Throws an error if the user could not be retrieved.
 */
function getCurrentUser() {
    return __awaiter(this, void 0, void 0, function () {
        var supabase, _a, user, error;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    supabase = server_1.createClient();
                    return [4 /*yield*/, supabase.auth.getUser()];
                case 1:
                    _a = _b.sent(), user = _a.data.user, error = _a.error;
                    if (error) {
                        throw new Error(error.message);
                    }
                    return [2 /*return*/, user];
            }
        });
    });
}
exports.getCurrentUser = getCurrentUser;
/**
 * Deletes the user's account.
 * @param {string} userId - The user's ID.
 * @returns {Promise<string>} - A promise that resolves to a redirect path.
 */
function deleteUserAccount(userId) {
    return __awaiter(this, void 0, void 0, function () {
        var supabase, error, userError;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    supabase = server_1.createClient();
                    return [4 /*yield*/, supabase.auth.admin.deleteUser(userId)];
                case 1:
                    error = (_a.sent()).error;
                    if (error) {
                        return [2 /*return*/, helpers_1.getErrorRedirect("/account", "Your account could not be deleted.", error.message)];
                    }
                    return [4 /*yield*/, supabase
                            .from("users")["delete"]()
                            .eq("id", userId)];
                case 2:
                    userError = (_a.sent()).error;
                    if (userError) {
                        return [2 /*return*/, helpers_1.getErrorRedirect("/account", "Your account data could not be deleted.", userError.message)];
                    }
                    return [2 /*return*/, navigation_1.redirect("/goodbye")];
            }
        });
    });
}
exports.deleteUserAccount = deleteUserAccount;
