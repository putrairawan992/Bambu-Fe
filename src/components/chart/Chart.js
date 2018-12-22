import React, { Component } from 'react';
import axios from 'axios';

import style from './Chart.css';
import { getMinMaxFromObject, getPriceRange } from '../../helpers/number';
import Line from './Line';

class Chart extends Component {
  state = {
    data: [],
    highest: 0,
    lowest: 0,
    priceRange: []
  };

  componentDidMount() {
    this.retrieveData(this.props.ticker);
  }

  componentWillReceiveProps(nextProps) {
    this.retrieveData(nextProps.ticker);
  }

  retrieveData = async ticker => {
    if (ticker !== null) {
      try {
        const res = await axios.get(
          `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${ticker}&apikey=COPQP7I4AE7UAAE4`
        );

        const result = res.data['Time Series (Daily)'];

        //find the highest and lowest from the data list
        const { highest, lowest } = getMinMaxFromObject(result);

        const data = Object.values(result);
        const priceRange = getPriceRange(lowest, highest, 10);

        this.setState({ priceRange, data, highest, lowest });
      } catch (err) {
        console.log(err);
      }
    }
  };

  render() {
    const { data, highest, lowest, priceRange } = this.state;

    if (Object.keys(data).length === 0) return null;

    return (
      <div style={{ padding: '1rem', height: '100%' }}>
        <div className={style.chart}>
          <div className={style.axis}>
            {priceRange.map(value => {
              return <div className={style.priceAxis}>${value.toFixed(2)}</div>;
            })}
          </div>
          {data.map((date, index) => {
            return (
              <Line highest={highest} lowest={lowest} {...date} key={index} />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Chart;
