export const setAllUser = (data) => {
  return {
    type: "setAllUser",
    payload: data,
  };
};

export const setSingleUser = (data, index) => {
  return {
    type: "setSingleUser",
    payload: data,
    index: index,
  };
};
