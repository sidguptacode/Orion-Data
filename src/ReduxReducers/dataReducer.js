const initialState = {
  ageData: [],
  smileData: null
}

export default function(state = initialState, action) {
  switch (action.type) {
    case "STORE_AGE":
      var age = action.payload.age;
      var c = false;
      var ageData = this.state.ageData;
      ageData.forEach((datum) => {
        if(datum.name == age){
          datum['value'] +=1;
          c = true;
        }
      });
      if(c == false){
        ageData.push({name: age, value: 1});
      }
      return {
        ...state,
        ageData: ageData.slice()
      };
    default:
      return state;
  }
}
