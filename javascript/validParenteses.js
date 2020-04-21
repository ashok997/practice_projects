var isValid = function (s) {
  const ref = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  const stack = [];

  for (const char of s) {
    //'for of' loop
    if (char in ref) {
      if (!stack.length) return false; // empty stack? return
      if (ref[char] === stack[stack.length - 1]) {
        stack.pop();
      } else {
        return false;
      }
    } else {
      stack.push(char);
    }
  }

  return stack.length === 0;
};
