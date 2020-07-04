import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
  let changeableUrl = url;

  if (country) {
    changeableUrl = `${url}/countries/${country}`;
  }
  try {
    //await works like then, it takes out value returnd by response
    //we get an object with these properties. We destructure the object,
    //and store it inide an object named data
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(changeableUrl);
    
    return {
      confirmed,
      recovered,
      deaths,  
      lastUpdate,
    };
  } catch (error) {}
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);
console.log("tha data is: ", data);
    const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.totalConfirmed,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));
    console.log(modifiedData)
    return modifiedData;
  } catch (error) {
    console.log("error fetching dailyData", error);
  }
};

export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);
    return countries.map((country) => country.name);
  } catch (e) {
    console.log(e);
  }
};
