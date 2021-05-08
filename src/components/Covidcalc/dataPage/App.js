import React from "react";
import { Cards, Chart, CountryPicker, fetchData } from "./component";
import styles from "./AppS.css";
import covidImg from "./component/img/heading.png"

class App extends React.Component {
    state = {
        data: {},
        country: "",
    };
    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({ data: fetchedData });
    }
    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        this.setState({ data: fetchedData, country: country });
    };
    render() {
        const { data, country } = this.state;
        return (
            <div className={styles.container}>
                <img className={styles.image} src={covidImg} style={{ opacity: '0.85' }} alt="c19" />
                <br />
                <text>
                    <b>Global and Country Wise Cases of Corona Virus</b>
                </text>
                <br />
                <text>
                    <i>(For a particular select a Country from below)</i>
                </text>
                <br />
                <br />
                <Cards data={data} country={country} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country} />
            </div>
        );
    }
}

export default App;