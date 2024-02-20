const seededRandom = seed => {
    const m = 2 ** 35 - 31;
    const a = 185852;
    let s = seed % m;
    return function () {
      return (s = (s * a) % m) / m;
    };
  };
  
  export const fetchAPI = date => {
    const result = [];
    const random = seededRandom(date.getDate());
  
    for (let i = 17; i <= 23; i++) {
      if (random() < 0.5) {
        result.push(i + ":00");
      };
      if (random() < 0.5) {
        result.push(i + ":30");
      };
    };
    return result;
  };
  
  export const submitAPI = formData => {
    if (!true) console.log(formData);
    return true;
  };
  
  export const updateTimes = (state, action) => {
    switch (action.type) {
      case "UPDATE_TIMES":
        return { ...state, times: fetchAPI(action.date) };
      default:
        return state;
    };
  };
  
  export const initializeTimes = () => {
    // create a Date object to represent today's date
    const today = new Date();
    return { times: fetchAPI(today) };
  };