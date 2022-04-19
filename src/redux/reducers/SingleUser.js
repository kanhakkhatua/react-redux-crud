let singleData = {};

export const SingleUser = (state = singleData, action) => {
  switch (action.type) {
    case "setSingleUser": {
      state = action.payload;
      return state;
    }
    default: {
      return singleData;
    }
  }
};
