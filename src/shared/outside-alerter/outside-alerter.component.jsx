import React from "react";
import "./outside-alerter.styles.scss";
import { useEffect } from "react";
import { useRef } from "react";

function useOutsieAlerter(ref, handle) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        ref.current &&
        !ref.current.contains(event.target) &&
        !event.target.classList.contains("ignore-alerter") &&
        event.target.nodeName !== "path"
      ) {
        handle();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, handle]);
}

function OutsideAlerter({ children, handle }) {
  const wrapperRef = useRef(null);
  useOutsieAlerter(wrapperRef, handle);

  return <div ref={wrapperRef}>{children}</div>;
}

export default OutsideAlerter;
