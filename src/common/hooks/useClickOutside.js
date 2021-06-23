import { useEffect } from "react";

export function useClickOutside(ref, handler) {
  useEffect(() => {
    window.onclick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        e.preventDefault();
        handler();
      }
    };

    return () => (window.onclick = null);
  });
}
