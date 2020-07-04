import React from "react";
import { Cards, Chart, CountryPicker, Header } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";
import {LinearProgress, makeStyles} from '@material-ui/core'


const App = () => {
  
  const [data, setData] = React.useState({});
  const [country, setCountry] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    console.log(fetchedData);
    setData(fetchedData);
    setCountry(country);
    console.log("the data in state is: ", data);
  };

  //set data received from fetchData as data state
  React.useEffect(() => {
    setLoading(true);
    const receiveData = async () => {
      const result = await fetchData();
      setData(result);
      setLoading(false);
    };
    receiveData();
  }, []);


  return (
    <div className={styles.container}>
      <Header />
      {loading ? (
        <LinearProgress color="secondary"/>
      ) : (null)}
      <Cards data={data} />
      <CountryPicker handleCountryChange={handleCountryChange} />
      <Chart data={data} country={country}/>
      <hr/>
      <h3 style={{color: 'navy'}}>Made with ❤️ by <a href="github.com/hasanza">Hasan Raza</a></h3>
    </div>
  ); 
};

export default App;
