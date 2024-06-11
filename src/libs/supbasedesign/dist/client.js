"use strict";
exports.__esModule = true;
exports.createClient = void 0;
var ssr_1 = require("@supabase/ssr");
// Define a function to create a Supabase client for client-side operations
exports.createClient = function () {
    return ssr_1.createBrowserClient(
    // Pass Supabase URL and anonymous key from the environment to the client
    process.env.NEXT_PUBLIC_SUPABASE_URL2, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY2);
};
