import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './Card.module.css';

const CardComponent = ({className, cardTitle, value, lastUpdate, cardSubtitle }) => (
    <Grid item Auto-layout component={Card} className={cx(styles.card, className)}>
        <CardContent>
            <Typography color='textSecondary' gutterBottom>
                {cardTitle}
            </Typography>
            <Typography variant='h5' compnent='h2'>
                <CountUp start={0} end={value} duration={2.75} separator=" " />
            </Typography>
            <Typography variant='body2' component='p'>
                {cardSubtitle}
            </Typography>
        </CardContent>
    </Grid>
)

export default CardComponent