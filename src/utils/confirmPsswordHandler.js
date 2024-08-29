// کد های پریدن به اینپوت بعدی در تابع زیر
export const handleCodeChange = (
  event,
  index,
  nextInput,
  inputCode,
  setInputCode,
  buttonFocus
) => {
  const newcode = [...inputCode];
  newcode[index] = event.target.value;
  setInputCode(newcode);

  if (index < 3) {
    nextInput.current[index + 1].focus();
  } else {
    buttonFocus.current.focus();
  }
};

// کد های برگشتن به اینپوت قبلی در صورت پاک کردن کردن در تابع زیر
export const handleKeyDown = (event, index, nextInput) => {
  if (event.key === "Backspace") {
    if (index > 0) {
      setTimeout(() => {
        nextInput.current[index - 1].focus();
      }, 1); // زمان تأخیر را به میلی ثانیه تنظیم کنید
    } else if (index === 0) {
      nextInput.current[index].value = "";
      event.preventDefault();
    }
  }
};
