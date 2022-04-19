const initialState = new Array();

const AllUser = (state = initialState, action) => {
  switch (action.type) {
    case "setUpdatedData": {
      state = action.payload;
      return state;
    }

    case "deleteUserData": {
      state = action.payload;
      return state;
    }

    default:
      return state;
  }
};

export { AllUser };
