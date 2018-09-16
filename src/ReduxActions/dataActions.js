export function storeAge(age){
  return({
      type: "STORE_AGE",
      payload: {age: age}
    });
}
