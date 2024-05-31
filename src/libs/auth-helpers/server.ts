"use server";

import { createClient } from "../supabase/server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getURL, getErrorRedirect, getStatusRedirect } from "../helpers";
import { getAuthTypes } from "./settings";

/**
 * Validates an email address.
 * @param {string} email - The email address to validate.
 * @returns {boolean} - Returns true if the email address is valid, otherwise false.
 */

function isValidEmail(email: string) {
  var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return regex.test(email);
}

/**
 * Redirects to a specified path.
 * @param {string} path - The path to redirect to.
 * @returns {Promise<void>} - A promise that resolves to void.
 */
export async function redirectToPath(path: string) {
  return redirect(path);
}

/**
 * Signs the user out.
 * @param {FormData} formData - The form data containing the path name.
 * @returns {Promise<string>} - A promise that resolves to a redirect path.
 */
export async function SignOut(formData: FormData) {
  const pathName = String(formData.get("pathName")).trim();

  const supabase = createClient();
  const { error } = await supabase.auth.signOut();

  if (error) {
    return getErrorRedirect(
      pathName,
      "Hmm... Something went wrong.",
      "You could not be signed out.",
    );
  }

  return "/auth/login";
}

/**
 * Signs in the user with an email.
 * @param {FormData} formData - The form data containing the email.
 * @returns {Promise<string>} - A promise that resolves to a redirect path.
 */
export async function signInWithEmail(formData: FormData) {
  const cookieStore = cookies();
  const callbackURL = getURL("/auth/callback");
 
  const email = String(formData.get("email")).trim();
  let redirectPath: string;

  if (!isValidEmail(email)) {
    redirectPath = getErrorRedirect(
      "/signin/email_signin",
      "Invalid email address.",
      "Please try again.",
    );
  }

  const supabase = createClient();
  let options = {
    emailRedirectTo: callbackURL,
    shouldCreateUser: true,
  };

  // If allowPassword is false, do not create a new user
  const { allowPassword } = getAuthTypes();
  if (allowPassword) options.shouldCreateUser = false;
  const { data, error } = await supabase.auth.signInWithOtp({
    email,
    options: options,
  });

  if (error) {
    redirectPath = getErrorRedirect(
      "/signin/email_signin",
      "You could not be signed in.",
      error.message,
    );
  } else if (data) {
    cookieStore.set("preferredSignInView", "email_signin", { path: "/" });
    redirectPath = getStatusRedirect(
      "/signin/email_signin",
      "Success!",
      "Please check your email for a magic link. You may now close this tab.",
      true,
    );
  } else {
    redirectPath = getErrorRedirect(
      "/signin/email_signin",
      "Hmm... Something went wrong.",
      "You could not be signed in.",
    );
  }

  return redirectPath;
}

/**
 * Requests a password update for the user.
 * @param {FormData} formData - The form data containing the email.
 * @returns {Promise<string>} - A promise that resolves to a redirect path.
 */
export async function requestPasswordUpdate(formData: FormData) {
  const callbackURL = getURL("/auth/forgotpassword");

  // Get form data
  const email = String(formData.get("email")).trim();
  let redirectPath: string;

  if (!isValidEmail(email)) {
    redirectPath = getErrorRedirect(
      "/auth/forgotpassword",
      "Invalid email address.",
      "Please try again.",
    );
  }

  const supabase = createClient();

  const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: callbackURL,
  });

  if (error) {
    redirectPath = getErrorRedirect(
      "/auth/forgotpassword",
      error.message,
      "Please try again.",
    );
  } else if (data) {
    redirectPath = getStatusRedirect(
      "/auth/forgotpassword/verify",
      "Success!",
      "Please check your email for a password reset link. You may now close this tab.",
      true,
    );
  } else {
    redirectPath = getErrorRedirect(
      "/auth/forgotpassword",
      "Hmm... Something went wrong.",
      "Password reset email could not be sent.",
    );
  }

  return redirectPath;
}

/**
 * Signs in the user with a password.
 * @param {FormData} formData - The form data containing the email and password.
 * @returns {Promise<string>} - A promise that resolves to a redirect path.
 */
export async function signInWithPassword(formData: FormData) {
  const cookieStore = cookies();
  const email = String(formData.get("email")).trim();
  const password = String(formData.get("password")).trim();
  let redirectPath: string;

  const supabase = createClient();
  const { error, data } = await supabase.auth.signInWithPassword({
    email,
    password,
  }); 

  if (error) {
    redirectPath = getErrorRedirect(
      "/auth/forgotpassword/newpassword",
      "Sign in failed.",
      error.message,
    );
  } else if (data.user) {
    cookieStore.set("preferredSignInView", "newpassword", { path: "/" });
    redirectPath = getStatusRedirect("/", "Success!", "You are now signed in.");
  } else {
    redirectPath = getErrorRedirect(
      "/auth/newpassword",
      "Hmm... Something went wrong.",
      "You could not be signed in.",
    );
  }

  return redirectPath;
}

/**
 * Signs up the user with an email and password.
 * @param {FormData} formData - The form data containing the email and password.
 * @returns {Promise<string>} - A promise that resolves to a redirect path.
 */
export async function signUp(formData: FormData) {
  const callbackURL = getURL("/auth/callback");

  const email = String(formData.get("email")).trim();
  const password = String(formData.get("password")).trim();
  let redirectPath: string;

  if (!isValidEmail(email)) {
    redirectPath = getErrorRedirect(
      "/auth/register",
      "Invalid email address.",
      "Please try again.",
    );
  }

  const supabase = createClient();
  const { error, data } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: callbackURL,
    },
  });

  if (error) {
    redirectPath = getErrorRedirect(
      "/auth/register",
      "Sign up failed.",
      error.message,
    );
  } else if (data.session) {
    redirectPath = getStatusRedirect("/", "Success!", "You are now signed in.");
  } else if (
    data.user &&
    data.user.identities &&
    data.user.identities.length == 0
  ) {
    redirectPath = getErrorRedirect(
      "/auth/register",
      "Sign up failed.",
      "There is already an account associated with this email address. Try resetting your password.",
    );
  } else if (data.user) {
    redirectPath = getStatusRedirect(
      "/",
      "Success!",
      "Please check your email for a confirmation link. You may now close this tab.",
    );
  } else {
    redirectPath = getErrorRedirect(
      "/auth/register",
      "Hmm... Something went wrong.",
      "You could not be signed up.",
    );
  }

  return redirectPath;
}

/**
 * Verifies the OTP entered by the user.
 * @param {FormData} formData - The form data containing the email and OTP.
 * @returns {Promise<string>} - A promise that resolves to a redirect path.
 */
export async function verifyOtp(formData: FormData) {
  const email = String(formData.get("email")).trim();
  const otp = String(formData.get("otp")).trim();
  let redirectPath;

  const supabase = createClient();

  // Call Supabase function to verify OTP
  const { data, error } = await supabase.auth.verifyOtp({ email, token: otp, type: 'recovery' });

  if (error) {
    redirectPath = getErrorRedirect(
      "/auth/forgotpassword/verifyotp",
      "Invalid OTP.",
      "Please try again.",
    );
  } else {
    redirectPath = getStatusRedirect(
      "/auth/forgotpassword/updatepassword",
      "OTP Verified!",
      "You can now update your password.",
    );
  }

  return redirectPath;
}


/**
 * Updates the user's password.
 * @param {FormData} formData - The form data containing the new password and confirmation.
 * @returns {Promise<string>} - A promise that resolves to a redirect path.
 */
export async function updatePassword(formData: FormData) {
  const password = String(formData.get("password")).trim();
  const passwordConfirm = String(formData.get("passwordConfirm")).trim();
  let redirectPath: string;

  // Check that the password and confirmation match
  if (password !== passwordConfirm) {
    redirectPath = getErrorRedirect(
      "/signin/update_password",
      "Your password could not be updated.",
      "Passwords do not match.",
    );
  }

  const supabase = createClient();
  const { error, data } = await supabase.auth.updateUser({
    password,
  });

  if (error) {
    redirectPath = getErrorRedirect(
      "/signin/update_password",
      "Your password could not be updated.",
      error.message,
    );
  } else if (data.user) {
    redirectPath = getStatusRedirect(
      "/",
      "Success!",
      "Your password has been updated.",
    );
  } else {
    redirectPath = getErrorRedirect(
      "/signin/update_password",
      "Hmm... Something went wrong.",
      "Your password could not be updated.",
    );
  }

  return redirectPath;
}

/**
 * Updates the user's email.
 * @param {FormData} formData - The form data containing the new email.
 * @returns {Promise<string>} - A promise that resolves to a redirect path.
 */
export async function updateEmail(formData: FormData) {
  // Get form data
  const newEmail = String(formData.get("newEmail")).trim();

  // Check that the email is valid
  if (!isValidEmail(newEmail)) {
    return getErrorRedirect(
      "/account",
      "Your email could not be updated.",
      "Invalid email address.",
    );
  }

  const supabase = createClient();

  const callbackUrl = getURL(
    getStatusRedirect("/account", "Success!", `Your email has been updated.`),
  );

  const { error } = await supabase.auth.updateUser(
    { email: newEmail },
    {
      emailRedirectTo: callbackUrl,
    },
  );

  if (error) {
    return getErrorRedirect(
      "/account",
      "Your email could not be updated.",
      error.message,
    );
  } else {
    return getStatusRedirect(
      "/account",
      "Confirmation emails sent.",
      `You will need to confirm the update by clicking the links sent to both the old and new email addresses.`,
    );
  }
}

/**
 * Updates the user's name.
 * @param {FormData} formData - The form data containing the new full name.
 * @returns {Promise<string>} - A promise that resolves to a redirect path.
 */
export async function updateName(formData: FormData) {
  // Get form data
  const fullName = String(formData.get("fullName")).trim();

  const supabase = createClient();
  const { error, data } = await supabase.auth.updateUser({
    data: { full_name: fullName },
  });

  if (error) {
    return getErrorRedirect(
      "/account",
      "Your name could not be updated.",
      error.message,
    );
  } else if (data.user) {
    return getStatusRedirect(
      "/account",
      "Success!",
      "Your name has been updated.",
    );
  } else {
    return getErrorRedirect(
      "/account",
      "Hmm... Something went wrong.",
      "Your name could not be updated.",
    );
  }
}

/**
 * Updates the user's profile picture.
 * @param {string} userId - The user's ID.
 * @param {File} file - The new profile picture file.
 * @returns {Promise<string>} - A promise that resolves to a redirect path.
 */
export async function updateProfilePicture(userId: string, file: File) {
  const supabase = createClient();

  // Decode base64 file
  const buffer = Buffer.from(await file.arrayBuffer());
 
  // Upload to Supabase Storage
  const { data, error } = await supabase.storage
    .from('profile-images')
    .upload(`${userId}/profile-image.png`, buffer, {
      contentType: file.type,
      upsert: true,
    });

  if (error) {
    return getErrorRedirect(
      "/account",
      "Your profile picture could not be updated.",
      error.message
    );
  }

  // Get public URL of the uploaded image
  const { data: DT } = supabase.storage
    .from('profile-images')
    .getPublicUrl(`${userId}/profile-image.png`);

  // Update user profile with the new image URL
  const { error: updateError } = await supabase
    .from('users')
    .update({ avatar_url: DT?.publicUrl })
    .eq('id', userId);

  if (updateError) {
    return getErrorRedirect(
      "/account",
      "Your profile picture could not be updated.",
      updateError.message
    );
  }

  return getStatusRedirect(
    "/account",
    "Success!",
    "Your profile picture has been updated."
  );
}


/**
 * Retrieves the current user.
 * @returns {Promise<Object>} - A promise that resolves to the current user.
 * @throws {Error} - Throws an error if the user could not be retrieved.
 */
export async function getCurrentUser() {
  const supabase = createClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error) {
    throw new Error(error.message);
  }

  return user;
}

/**
 * Deletes the user's account.
 * @param {string} userId - The user's ID.
 * @returns {Promise<string>} - A promise that resolves to a redirect path.
 */
export async function deleteUserAccount(userId: string) {
  const supabase = createClient();

  // Delete user from Supabase Auth
  const { error } = await supabase.auth.admin.deleteUser(userId);

  if (error) {
    return getErrorRedirect(
      "/account",
      "Your account could not be deleted.",
      error.message
    );
  }

  // Optionally, delete user data from your users table
  const { error: userError } = await supabase
    .from('users')
    .delete()
    .eq('id', userId);

  if (userError) {
    return getErrorRedirect(
      "/account",
      "Your account data could not be deleted.",
      userError.message
    );
  }

  return redirect("/goodbye");
}