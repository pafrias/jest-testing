function addNumbers(...args) {
  let result = 0;

  for (let num of args) {
    if (typeof num !== "number") return undefined
    result += num;
  }

  return result;
}

export {
  addNumbers
};
