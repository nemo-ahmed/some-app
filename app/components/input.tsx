import { createElement } from "react";

function Input(props: Partial<HTMLInputElement>) {
  return createElement("input", {
    ...props,
    "aria-label": props.ariaLabel || props.name,
    className:
      props.className ||
      "border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500",
    type: props.type || "text",
  });
}

export default Input;
