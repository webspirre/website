export const resetAlert = () => {
  if (typeof localStorage !== "undefined") {
    localStorage.setItem("alertShown", "false");
  }
};
