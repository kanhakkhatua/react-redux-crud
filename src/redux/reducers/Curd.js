const initialState = new Array();
const singleUserInitial = [];

const AllUser = (state = initialState, action) => {
  switch (action.type) {
    case "setAllUser":
      // console.log(action.payload);
      let payload = action.payload;
      let arr = state;
      // console.log(arr);
      arr.push(payload);
      state = arr;
      // console.log(state);
      return state;

    default:
      return state;
  }
};
const SingleUser = (state = singleUserInitial, action) => {
  switch (action.type) {
    case "setSingleUser":
      return state.push(action.payload);
    default:
      return state;
  }
};

export { AllUser, SingleUser };
