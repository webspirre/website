"use strict";
exports.__esModule = true;
exports.supabase = void 0;
var supabase_js_1 = require("@supabase/supabase-js");
// const supabaseUrl = process.env.SUPABASE_URL as string
var supabaseUrl = "https://yzaqysrwnqfefhjxmcbt.supabase.co";
// const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY as string
var supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl6YXF5c3J3bnFmZWZoanhtY2J0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA5NTA4MzcsImV4cCI6MjAyNjUyNjgzN30.pw6PWByqRNb7b92AZWB8ZbGBfbEo0A4PoA0MnMfIHb4";
exports.supabase = supabase_js_1.createClient(supabaseUrl, supabaseKey);
