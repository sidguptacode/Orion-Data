export function storeAge(age){
  console.log("logged");
  return({
      type: "STORE_AGE",
      payload: {age: age}
    });
}

export function storeRace(race){
  return({
      type: "STORE_RACE",
      payload: {race: race}
    });
}
