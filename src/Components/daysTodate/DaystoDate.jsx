import React, { useState } from "react";

const DaystoDate = () => {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(step - 1);

  function decStep() {
    if (step > 1) {
      setStep((prev) => prev - 1);
    }
  }
  function incStep() {
    setStep((prev) => prev + 1);
  }
  function decCounter() {
    setCount((prev) => prev - step);
  }
  const date = new Date();
  date.setDate(date.getDate() + count);
  console.log(date.toDateString());
  return (
    <>
      <div>
        <button onClick={decStep}>-</button>
        <p>step: {step}</p>
        <button onClick={incStep}>+</button>
      </div>
      <div>
        <button onClick={decCounter}>-</button>
        <p>count: {count}</p>
        <button onClick={() => setCount((prev) => prev + step)}>+</button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </>
  );
};

export default DaystoDate;
