import { useState, useEffect, useRef } from "react";

const useOuterClick = (setFn: any) => {
  const ref = useRef<HTMLInputElement>(null);
  useEffect(() => {
    document.addEventListener("click", handleOutsideClick, true);
    return () => {
      document.removeEventListener("click", handleOutsideClick, true);
    };
  });

  const handleOutsideClick = (e: any) => {
    if (ref.current && ref.current.contains(e.target)) {
      setFn(true);
    } else {
      setFn(false);
    }
  };
  return { ref };
  // return ref; client can omit `useRef`
};

export default useOuterClick;
