import React from "react";
import Cards from "./components/Cards/Cards";
import Chart from "./components/Chart/Chart";
import CountryPicker from "./components/CountryPicker/CountryPicker";
import styles from "./App.module.css";
import { fetchData } from "./api";
import image from "./images/covid-19.png";

class App extends React.Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data: data, country: country });
  };

  render() {
    const { data } = this.state;

    return (
      <div className={styles.container}>
        <img src={image} alt="Covid 19 Corona Virus" className={styles.image} />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} />
      </div>
    );
  }
}

export default App;
