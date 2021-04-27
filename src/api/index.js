import axios from "axios";

const key = "7fee4957c5msh65c32fabd477d63p1b134bjsn9cf282802c99",
  host = "covid-19-data.p.rapidapi.com";

const options = {
  method: "GET",
  url: "https://covid-19-data.p.rapidapi.com/country/",
  params: { name: "India" },
  headers: {
    "x-rapidapi-key": key,
    "x-rapidapi-host": host,
  },
};

export const fetchData = async (country) => {
  if (country) {
    options.params.name = country;
  }

  try {
    const {
      data: {
        0: { country, confirmed, critical, deaths, recovered, lastUpdate },
      },
    } = await axios.request(options);
    return { country, confirmed, critical, deaths, recovered, lastUpdate };
  } catch (error) {
    console.log(error);
  }
};

const countryList = {
  method: "GET",
  url: "https://covid-19-data.p.rapidapi.com/help/countries",
  headers: {
    "x-rapidapi-key": key,
    "x-rapidapi-host": host,
  },
};

export const countries = async () => {
  try {
    const { data } = await axios.request(countryList);
    return data.map((country) => country.name);
  } catch (error) {
    console.log(error);
  }
};
