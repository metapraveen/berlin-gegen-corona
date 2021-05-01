import React from "react";

export default function copyToClipboard(event: React.MouseEvent<HTMLElement>) {
  const value = event.currentTarget.getAttribute("data-value");
  if (!value) return;
  const el = document.createElement("textarea");
  el.value = value.toString();
  el.setAttribute("readonly", "");
  el.style.position = "absolute";
  el.style.left = "-9999px";
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
}
