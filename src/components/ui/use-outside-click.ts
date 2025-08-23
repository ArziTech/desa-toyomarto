import React, {ReactEventHandler, useEffect} from "react";

export const useOutsideClick = (
    ref: React.RefObject<HTMLDivElement>,
    callback: (event: ReactEventHandler) => void
) => {
  useEffect(() => {
    // @ts-expect-error okay
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      callback(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, callback]);
};
