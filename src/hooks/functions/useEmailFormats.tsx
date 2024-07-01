export const formatEmail = (email: string) => {
  if (!email.includes("@")) {
    return email;
  }

  const [user, domain] = email.split("@");
  const hiddenUser =
    user.length > 3 ? `${user.slice(0, 3)}******${user.slice(-1)}` : user;
  const hiddenDomain = domain.length > 4 ? `g****.com` : domain;
  return `${hiddenUser}@${hiddenDomain}`;
};
