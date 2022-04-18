let initialState = new Array();
const singleUserInitial = {};

const AllUser = (state = initialState, action) => {
  switch (action.type) {
    case "setAllUser":
      // console.log(action.payload);
      let payload = action.payload;
      let arr = state;

      arr.push(payload);
      state = arr;

      return state;
    default:
      return state;
  }
};
const SingleUser = (state = singleUserInitial, action) => {
  switch (action.type) {
    case "setSingleUser":
      let copydata = initialState[action.index];

      state.name = copydata.name;
      state.email = copydata.email;
      state.phone = copydata.phone;
      state.index = action.index;

      return state;
    default:
      return state;
  }
};

const updateUser = (state = initialState, action) => {
  switch (action.type) {
    case "setEditData":
      let copydata = state[action.i];
      let data = action.payload;

      console.log(copydata);
      console.log(data);

      // const UpdateData = state.filter((e) => {});

      return state;
    default:
      return state;
  }
};

export { AllUser, SingleUser, updateUser };
