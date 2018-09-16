const initialState = {
  ageData: [],
  raceData: [],
  h: 0,
  s: 0,
  n: 0,
  sr: 0
}

export default function(state = initialState, action) {
  switch (action.type) {
    case "STORE_AGE":
      var age = action.payload.age;
      var c = false;
      var ageData = initialState.ageData;
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
    case "STORE_RACE":
      var race = action.payload.race;
      var c = false;
      var raceData = initialState.raceData;
      raceData.forEach((datum) => {
        if(datum.name == race){
          datum['value'] +=1;
          c = true;
        }
      });
      if(c == false){
        raceData.push({name: race, value: 1});
      }
      return {
        ...state,
        raceData: raceData.slice()
      };
    case "STORE_STATS":
      return {
        ...state,
        h: action.payload.hap,
        s: action.payload.sad,
        n: action.payload.neut,
        sr: action.payload.surp
      };
    default:
      return state;
  }
}
