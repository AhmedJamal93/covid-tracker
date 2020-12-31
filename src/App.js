import { React, Component} from 'react'

import { Cards, Chart, Country, ChartCountry } from './components';
import { fetchData } from './api/';
import styles from './App.module.css';
import { Grid, Typography } from '@material-ui/core';
import image from './images/covid-19.png';


class App extends Component{
  state = {
    data:{},
    dataCountry:{},
    country:''
  }

  async componentDidMount(){
    const data = await fetchData();
    this.setState({
      data
    })
  }

  handleCountryChange = async (country) => {
    const dataCountry = await fetchData(country);

    this.setState({ dataCountry, country: country });
    console.log(country)
  }


  render(){
    const {data} = this.state
    return(
      <div className={styles.container}>
      <img className={styles.image} src={image} />
        <Grid 
          container
          direction="column"
        >
          <Grid
            container
            justify="center"
            alignItems="flex-start"
          >
            <h1>WORLDWIDE</h1>
          </Grid>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
          >
            <Grid 
              item
              xs
            >
              <Cards className='cards' data={data}/>
            </Grid>
            <Grid 
              item
              xs={10}
            >
              <Chart data={data} country={this.state.country} />
            </Grid>
          </Grid>
          <Grid
            container
            justify="center"
          >
            <Country handleCountryChange={this.handleCountryChange} />
            <ChartCountry data={this.state.dataCountry} country={this.state.country} />
          </Grid>
        </Grid> 
      </div>
    )
  }
}

export default App;
