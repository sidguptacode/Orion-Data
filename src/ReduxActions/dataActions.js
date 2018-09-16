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

export function storeStats(hap, neut, sad, surp){
  console.log("lzxc");
  return({
      type: "STORE_STATS",
      payload: {hap: hap, sad: sad, neut: neut, surp: surp}
    });
}
