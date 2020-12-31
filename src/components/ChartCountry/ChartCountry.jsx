import React, { useState, useEffect } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { fetchData } from '../../api';

import styles from './ChartCountry.module.css';

// const dailyData = await fetchDailyData()
//     console.log(dailyData)

const ChartCountry = ({ data: {totalConfirmed, recovered, deaths}, country}) => {
    const [dailyData, setDailyData] = useState({})

    useEffect(() => {
        const fetchAPI = async () => {
            const initialDailyData = await fetchData(country);

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

    const barChart = (
        totalConfirmed ? (
            <Bar 
                data = {{
                    labels: ["Infected","Recovered","Deaths"],
                    datasets : [
                        {
                            label: "People",
                            backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                            data: [totalConfirmed.value, recovered.value, deaths.value],
                            },
                    ]
                }}
                options={{
                    legend: { display: false },
                    title: { display: true, text: `Current state in ${country}` },
                  }}
            />
        ):null
    );
    
    return(
        <div className={styles.container}>
            {barChart}
        </div>
    )
}


export default ChartCountry;