import React, { useState } from "react";

const Steps = () => {
  const message = [
    "Learn React *",
    "Apply for job💼",
    " Invest your new Income🤑",
  ];
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  function handelPrev() {
    if (step > 1) {
      setStep(step - 1);
    }
  }
  function handelNext() {
    if (step < 3) {
      setStep(step + 1);
    }
  }
  return (
    <div>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>
          <p className="message">
            Step {step} : {message[step - 1]}
          </p>

          <div className="buttons">
            <button
              style={{ background: "#7950f2", color: "#fff" }}
              onClick={handelPrev}
            >
              Previous
            </button>
            <button
              style={{ background: "#7950f2", color: "#fff" }}
              onClick={handelNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Steps;
