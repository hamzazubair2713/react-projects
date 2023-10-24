import React, { useEffect, useState } from "react";
import { RippleButton, RippleEffect } from "./RippleStyles";

const Ripple = ({ children }) => {
  const [position, setPosition] = useState({ x: -1, y: -1 });
  const [ripple, setRipple] = useState(false);

  useEffect(() => {
    if (position.x !== -1 && position.y !== -1) {
      setRipple(true);
      setTimeout(() => {
        setRipple(false);
      }, 1000);
    } else {
      setRipple(false);
    }
  }, [position]);

  useEffect(() => {
    if (!ripple) {
      setPosition({
        x: -1,
        y: -1,
      });
    }
  }, [ripple]);

  function handelClick(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;
    setPosition({
      x: offsetX,
      y: offsetY,
    });
  }
  return (
    <>
      <RippleButton onClick={handelClick}>
        {ripple && (
          <RippleEffect left={position.x} top={position.y}></RippleEffect>
        )}
        {children}
      </RippleButton>
    </>
  );
};

export default Ripple;
