import axios from 'axios';

const url = 'http://covid19.mathdro.id/api'


// fetching data from api
export const fetchData = async (country) => {
    let changeableUrl = url

    if (country){
        changeableUrl = `${url}/countries/${country}`
    }

    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeableUrl)
        console.log(confirmed)
        return{ confirmed, recovered, deaths, lastUpdate }
    } catch (error) {
        return error
    }
}