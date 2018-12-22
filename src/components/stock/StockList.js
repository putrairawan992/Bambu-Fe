import React, { Fragment } from 'react';

import { STOCK_LIST } from '../../helpers/constants';
import Stock from './Stock';

const StockList = () => {
  return (
    <Fragment>
      {STOCK_LIST.map(ticker => {
        return <Stock ticker={ticker} key={ticker} />;
      })}
    </Fragment>
  );
};

export default StockList;
