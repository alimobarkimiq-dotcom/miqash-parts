export type LandingEvent =
  | "landing_view"
  | "click_buy_now"
  | "click_whatsapp"
  | "change_product_image"
  | "scroll_75"
  | "scroll_100";

declare global {
  interface Window {
    clarity?: (...args: unknown[]) => void;
  }
}

export function clarityEvent(event: LandingEvent) {
  if (typeof window !== "undefined" && typeof window.clarity === "function") {
    window.clarity("event", event);
  }
}

export function setupScrollTracking() {
  if (typeof window === "undefined") return () => {};

  let sent75 = false;
  let sent100 = false;

  const handleScroll = () => {
    const scrollTop = window.scrollY + window.innerHeight;
    const height = document.documentElement.scrollHeight;
    const percent = scrollTop / height;

    if (percent >= 0.75 && !sent75) {
      sent75 = true;
      clarityEvent("scroll_75");
    }

    if (percent >= 0.98 && !sent100) {
      sent100 = true;
      clarityEvent("scroll_100");
    }
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll();

  return () => window.removeEventListener("scroll", handleScroll);
}