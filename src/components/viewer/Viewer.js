import React from 'react';
import style from './Viewer.css';

import StockList from '../stock/StockList';
import Chart from '../chart/Chart';

const Viewer = ({ match }) => {
  return (
    <main className={style.viewer}>
      <div className={style.stockList}>
        <StockList />
      </div>
      <div className={style.chart}>
        <Chart ticker={match.params.ticker} />
      </div>
    </main>
  );
};

export default Viewer;
