import React from "react";
import { Cards, Chart, CountryPicker, Header } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";



const App = () => {
  
  const [data, setData] = React.useState({});
  const [country, setCountry] = React.useState("");
  

  const handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    console.log(fetchedData);
    setData(fetchedData);
    setCountry(country);
    console.log("the data in state is: ", data);
  };

  //set data received from fetchData as data state
  React.useEffect(() => {
    
    const receiveData = async () => {
      const result = await fetchData();
      setData(result);
      
    };
    receiveData();
  }, []);


  return (
    <div className={styles.container}>
      <Header />
      <Cards data={data} />
      <CountryPicker handleCountryChange={handleCountryChange} />
      <Chart data={data} country={country}/>
      <hr/>
      <h3 style={{color: 'navy'}}>Made with <span role="img" aria-label="heart emoji">❤️</span> by <a href="github.com/hasanza">Hasan Raza</a></h3>
    </div>
  ); 
};

export default App;
