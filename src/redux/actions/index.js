export const setAllUser = (data) => {
  return {
    type: "setAllUser",
    payload: data,
  };
};

export const setSingleUser = (index) => {
  return {
    type: "setSingleUser",
    index: index,
  };
};

export const setEditData = (data, i) => {
  return {
    type: "setEditData",
    payload: data,
    i: i,
  };
};
