let notyfInstance = null;

function getNotyf() {
  if (typeof window === "undefined") return null;
  if (notyfInstance) return notyfInstance;

  const { Notyf } = require("notyf");
  notyfInstance = new Notyf({
    duration: 3500,
    ripple: true,
    position: { x: "right", y: "bottom" },
    dismissible: true,
    types: [
      {
        type: "exun",
        background: "#2977F5",
        icon: '<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="13" cy="13" r="13" fill="white"/><rect x="11.65" y="7" width="2.7" height="7.4" rx="1.35" fill="#2977F5"/><circle cx="13" cy="17.9" r="1.35" fill="#2977F5"/></svg>',
        dismissible: true,
      },
    ],
  });
  return notyfInstance;
}

export function showExunToast(message) {
  const notyf = getNotyf();
  if (!notyf) return;
  notyf.open({ type: "exun", message });
}
