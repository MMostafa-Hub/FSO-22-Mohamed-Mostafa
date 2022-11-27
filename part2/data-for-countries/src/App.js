import axios from "axios";
import { useEffect, useState } from "react";
import { RenderResult } from "./components/RenderResult";

const App = () => {
  const [countriesData, setCountriesData] = useState([]);
  const [countriesToShow, setCountriesToShow] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // an effect hook that runs when the component is rendered for the first time
  // which loads countries data from remote server
  useEffect(() => {
    // loads countries data from remote server, and returns a promise
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      // this code runs when the promise is fulfilled
      // because there's no country named Israel
      let dataResponse = response.data.filter(
        (country) => country.name.common !== "Israel"
      );
      setCountriesData(dataResponse);
      setCountriesToShow(dataResponse);
    });
  }, []);

  // handles the change event of the input field and searches for the country name
  const handleSearchTermChange = (event) => {
    event.preventDefault();
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);

    // filters the countries based on the search term
    setCountriesToShow(
      countriesData.filter((country) =>
        country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  };

  return (
    <>
      {/* search form */}
      <span>find countries </span>
      <input value={searchTerm} onChange={handleSearchTermChange} />
      <RenderResult countriesToShow={countriesToShow} />
    </>
  );
};

export default App;
