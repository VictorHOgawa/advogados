import React, { useRef, useState, useEffect } from "react";

export default function EnterCode({
  callback,
  reset,
  isLoading,
  code,
  setCode,
}: any) {
  // Refs to control each digit input element
  const inputRefs: any = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  // Reset all inputs and clear state
  const resetCode = () => {
    inputRefs.forEach((ref: any) => {
      ref.current.value = "";
    });
    inputRefs[0].current.focus();
    setCode("");
  };

  // Call our callback when code = 6 chars
  useEffect(() => {
    if (code.length === 8) {
      if (typeof callback === "function") callback(code);
      resetCode();
    }
  }, [code]); //eslint-disable-line

  // Listen for external reset toggle
  useEffect(() => {
    resetCode();
  }, [reset]); //eslint-disable-line

  // Handle input
  function handleInput(e: any, index: any) {
    const input = e.target;
    const previousInput = inputRefs[index - 1];
    const nextInput = inputRefs[index + 1];

    // Update code state with single digit
    const newCode = [code];
    // Convert lowercase letters to uppercase
    if (/^[a-z]+$/.test(input.value)) {
      const uc = input.value.toUpperCase();
      newCode[index] = uc;
      inputRefs[index].current.value = uc;
    } else {
      newCode[index] = input.value;
    }
    setCode(newCode.join(""));

    input.select();

    if (input.value === "") {
      // If the value is deleted, select previous input, if exists
      if (previousInput) {
        previousInput.current.focus();
      }
    } else if (nextInput) {
      // Select next input on entry, if exists
      nextInput.current.select();
    }
  }

  // Select the contents on focus
  function handleFocus(e: any) {
    e.target.select();
  }

  // Handle backspace key
  function handleKeyDown(e: any, index: any) {
    const input = e.target;
    const previousInput = inputRefs[index - 1];
    const nextInput = inputRefs[index + 1];

    if ((e.keyCode === 8 || e.keyCode === 46) && input.value === "") {
      e.preventDefault();
      setCode(
        (prevCode: any) => prevCode.slice(0, index) + prevCode.slice(index + 1)
      );
      if (previousInput) {
        previousInput.current.focus();
      }
    }
  }

  // Capture pasted characters
  const handlePaste = (e: any) => {
    const pastedCode = e.clipboardData.getData("text");
    if (pastedCode.length === 8) {
      setCode(pastedCode.toUpperCase());
      inputRefs.forEach((inputRef: any, index: any) => {
        inputRef.current.value = pastedCode.charAt(index);
      });
    }
  };

  // Clear button deletes all inputs and selects the first input for entry

  return (
    <div className="flex gap-2 relative">
      {[0, 1, 2, 3, 4, 5, 6, 7].map((index) => (
        <input
          className="text-2xl text-white bg-gray-800 w-10 flex p-2 text-center"
          key={index}
          type="text"
          maxLength={1}
          onChange={(e) => handleInput(e, index)}
          ref={inputRefs[index]}
          autoFocus={index === 0}
          onFocus={handleFocus}
          onKeyDown={(e) => handleKeyDown(e, index)}
          onPaste={handlePaste}
          disabled={isLoading}
        />
      ))}
    </div>
  );
}
