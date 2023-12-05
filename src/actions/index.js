export const incNumber = () => {
  return {
    type: "INCREMENT",
  };
};

export const decNumber = () => {
  return {
    type: "DECREMENT",
  };
};

export const incByFive = (num) => {
  return {
    type: "PLUSFIVE",
    payload: num,
  };
};
export const decByFive = (num) => {
  return {
    type: "MINUSFIVE",
    payload: num,
  };
};
