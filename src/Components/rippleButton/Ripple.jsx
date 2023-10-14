import React, { useEffect, useState } from "react";
import { RippleButton, RippleEffect } from "./RippleStyles";

const Ripple = () => {
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
    setPosition({
      x: e.clientX - e.target.offsetLeft,
      y: e.clientY - e.target.offsetTop,
    });
  }
  return (
    <RippleButton onClick={handelClick}>
      {ripple && (
        <RippleEffect left={position.x} top={position.y}></RippleEffect>
      )}
      Click me
    </RippleButton>
  );
};

export default Ripple;
