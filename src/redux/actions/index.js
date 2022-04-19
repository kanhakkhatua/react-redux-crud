export const setSingleUser = (data) => {
  return {
    type: "setSingleUser",
    payload: data,
  };
};

export const setUpdatedData = (data) => {
  return {
    type: "setUpdatedData",
    payload: data,
  };
};

export const deleteUserData = (data) => {
  return {
    type: "deleteUserData",
    payload: data,
  };
};
