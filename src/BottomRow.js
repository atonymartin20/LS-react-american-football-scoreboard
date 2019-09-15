import React, { useState } from "react";
import "./App.css";

const BottomRow = () => {
  const [downs, changeDown] = useState(1);
  const [toGo, changeToGo] = useState(10);
  const [ballLocation, changeLocation] = useState(25);
  const [quarter, changeQuarter] = useState(1);
  const testFunction = (num) => {
    if (num = 4) {  
        num = 0;
    }
    else {
      num += 1;
    }
  }
  // Commit 4 9/14/19
  return (
    <div>
      <div className="bottomRow">
        <div className="down">
          <h3 className="down__title">Down</h3>
          <div className="down__value">{downs}</div>
        </div>
        <div className="toGo">
          <h3 className="toGo__title">To Go</h3>
          <div className="toGo__value">{toGo}</div>
        </div>
        <div className="ballOn">
          <h3 className="ballOn__title">Ball on</h3>
          <div className="ballOn__value">{ballLocation}</div>
        </div>
        <div className="quarter">
          <h3 className="quarter__title">Quarter</h3>
          <div className="quarter__value">{quarter}</div>
        </div>
      </div>
      <div className="buttons">
      <button className="bottomRowButtons" onClick={() => changeDown(downs + 1)
      }>Next Down</button>
      <button className="bottomRowButtons" onClick={() => changeToGo(ballLocation + 1)}>Negative Yardage</button>

      <button className="bottomRowButtons" onClick={() => changeToGo(ballLocation - 1)}>Positive Yardage</button>
      <button className="bottomRowButtons" onClick={() => changeQuarter(quarter + 1)}>Change Quarter</button>

      </div>
    </div>
  );
};

export default BottomRow;
