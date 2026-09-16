// Design tokens from JEE_Exam_System_UIUX_Design_Document.md
export const C = {
  primary: "#1F4E79",
  primaryDark: "#163A5A",
  success: "#2E7D32",
  successBg: "#E8F5E9",
  error: "#C62828",
  errorBg: "#FDECEA",
  warning: "#B8860B",
  warningBg: "#FFF6DF",
  surface: "#F7F9FC",
  border: "#E3E8EF",
  text: "#1B2430",
  textMuted: "#5B6472",
};

export function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
