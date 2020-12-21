import { React, Component} from 'react'

import { Cards, Chart, Country } from './components';
import { fetchData } from './api/';
import styles from './App.module.css';


class App extends Component{
  state = {
    data:{},
  }

  async componentDidMount(){
    const data = await fetchData();
    this.setState({
      data
    })
  }

  render(){
    const {data} = this.state
    return(
      <div className={styles.container}>
        <Cards data={data}/>
      </div>
    )
  }
}

export default App;
