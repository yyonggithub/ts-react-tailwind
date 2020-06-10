import { CSSProperties } from "react";
import ResizeObserver from "resize-observer-polyfill";

export const createObserver = (
  node: HTMLElement,
  handleEvent: (entries: ResizeObserverEntry[]) => void
) => {
  const ro = new ResizeObserver((entries) => handleEvent(entries));
  ro.observe(node);
  return ro;
};

export type Placement = "top" | "right" | "bottom" | "left";

export const handlePosition = (
  overlay: HTMLElement,
  trigger: HTMLElement,
  offsetParent: HTMLElement,
  placement: Placement,
  arrowSize = 0
) => {
  const overlayRect = overlay.getBoundingClientRect();
  const triggerRect = trigger.getBoundingClientRect();
  const offsetRect = offsetParent.getBoundingClientRect();

  const style = { top: 0, left: 0 };
  const offsetTop = triggerRect.top - offsetRect.top;
  const offsetLeft = triggerRect.left - offsetRect.left;

  switch (placement) {
    case "top":
      style.top = offsetTop - overlayRect.height - arrowSize;
      style.left = offsetLeft + (triggerRect.width - overlayRect.width) / 2;
      break;
    case "bottom":
      style.top = offsetTop + triggerRect.height + arrowSize;
      style.left = offsetLeft + (triggerRect.width - overlayRect.width) / 2;
      break;
    case "left":
      style.top = offsetTop + (triggerRect.height - overlayRect.height) / 2;
      style.left = offsetLeft - overlayRect.width - arrowSize;
      break;
    case "right":
      style.top = offsetTop + (triggerRect.height - overlayRect.height) / 2;
      style.left = offsetLeft + triggerRect.width + arrowSize;
      break;
    default:
      break;
  }

  const offset = {
    top: style.top,
    left: style.left,
    bottom: style.top,
    right: style.left,
  };

  const popupRect = {
    top: offset.top + offsetRect.top,
    left: offset.left + offsetRect.left,
    bottom: offset.top + offsetRect.top,
    right: offset.left + offsetRect.left,
  };

  return {
    offset,
    rect: popupRect,
  };
};
