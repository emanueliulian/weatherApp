import React, { Component } from 'react';

// components
import Header from "./components/header/Header";
import SearchBar from "./components/search-bar/searchBar";
import Card from "./elements/Card/Card";
import Preview from "./components/Preview/Preview";
import Loading from "./elements/Loading/Loading";
import WeatherDetails from "./components/WeatherDetails/WeatherDetails";

// style
import './style.css'
import classes from './App.module.css';
import assetMapping from './assets/assetMapping.json';

class App extends Component {
    state = {
        searchBarInput: '',
        weatherDetails: {
            temperature: '',
            description: ''
        },
        loading: false,
        error: false
    }

    searchBarHandler = (event) => {
        this.setState({
            searchBarInput: event.target.value,
        })
    }

    setWeather = () => {
        const city = this.state.searchBarInput;
        //const API_KEY = faddbd019e42f5405bf7f019ca7e9926;
        const API_URL = 'https://api.openweathermap.org/data/2.5/weather';
        const URL = API_URL + `?q=${city}&appid=faddbd019e42f5405bf7f019ca7e9926&units=metric`;
        this.setState({
            weatherDetails: {},
            loading: true,
            error: false
        }, () => {
            fetch(URL)
                .then(res => res.json())
                .then(data => {
                    if(data.cod === 200) {
                        console.log(data.cod)
                        this.setState({
                            weatherDetails: {
                                temperature: data.main.temp,
                                feelsLike: data.main.feels_like,
                                description: data.weather[0].main
                            },
                            loading: false
                        });
                    } else {
                        throw data.cod
                    }
                })
                .catch(err => {
                    console.log(err);
                    this.setState({
                        loading: false,
                        error: true
                    })
                })
        })
    }

    render() {
        let cardContent = <Preview />
        if (this.state.loading) {
            cardContent = <Loading />
        } else if (this.state.error) {
            cardContent = 'error'
        } else if (this.state.weatherDetails.temperature && this.state.weatherDetails.description !== '') {
           cardContent = <WeatherDetails data={this.state.weatherDetails} />;
        }

        return (
            <div className='App'>
                <Header color={assetMapping.colors[
                        (this.state.error) ? 'error' : this.state.weatherDetails.description
                    ]} />
                <main className={classes.AppWrapper}>
                    <SearchBar
                        value={this.state.searchBarInput}
                        onChangeHandler={this.searchBarHandler}
                        onClickHandler={this.setWeather}
                        error={this.state.error}
                    />
                    <Card>
                        {cardContent}
                    </Card>
                </main>
            </div>
        );
    }
}

export default App;