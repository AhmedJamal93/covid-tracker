import React, { useState, useEffect } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { fetchDailyData } from '../../api';

import styles from './Chart.module.css';

// const dailyData = await fetchDailyData()
//     console.log(dailyData)

const Chart = ({ data: {totalConfirmed, recovered, deaths}, country}) => {
    const [dailyData, setDailyData] = useState({})

    useEffect(() => {
        const fetchAPI = async () => {
            const initialDailyData = await fetchDailyData();

            setDailyData(initialDailyData)
        };

        fetchAPI();
    }, [])

    const lineChart = (
        dailyData[0] ? (
            <Line
                data={{
                 labels : dailyData.map(({ date }) => new Date(date).toLocaleDateString()),
                 datasets : [{
                     data : dailyData.map((data) => data.totalConfirmed),
                     label : "Infected",
                     borderColor : "yellow",
                     fill : true,
                 },
                 {
                    data : dailyData.map((data) => data.deaths),
                    label : "Deaths",
                    borderColor : "red",
                    fill : true,
                }
                ]   
                }}
            />
        ):null
    );
    
    return(
        <div className={styles.container}>
            {lineChart}
        </div>
    )
}


export default Chart