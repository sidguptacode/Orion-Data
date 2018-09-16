const initialState = {
  demographicsData: null,
  smileData: null
}

export default function(state = initialState, action) {
  switch (action.type) {
    // case "STORE_VID":
    //   return {
    //     ...state,
    //     video: action.payload.video
    //   };
    default:
      return state;
  }
}
