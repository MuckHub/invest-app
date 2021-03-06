import CanvasJSReact from '../canvasjs.react';
import React, { useEffect } from 'react';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default function Chart({
  years,
  investementRisk,
  investmentAmount,
  contribution,
  target,
}) {
  let allData = [];

  const calculateContributions = () => {
    let contributions = [];
    let year = 2021;
    let amount = +investmentAmount;
    for (let i = 0; i < years; i++) {
      let item = { y: amount, label: year };
      year++;
      amount = amount + +contribution * 12;
      contributions.push(item);
    }
    allData.push(contributions);
  };

  const calculateExpected = (risk) => {
    let expected = [];
    let year = 2021;
    let amount = +investmentAmount;

    for (let i = 0; i < years; i++) {
      let item = { y: amount, label: year };
      year++;
      amount = Math.round(amount + (amount / 100) * (risk + 15));
      expected.push(item);
    }
    allData.push(expected);
  };

  const calculateTarget = () => {
    let targetData = [];
    let year = 2021;
    let amount = +target;

    for (let i = 0; i < years; i++) {
      let item = { y: amount, label: year };
      year++;
      targetData.push(item);
    }
    allData.push(targetData);
  };

  calculateContributions();
  calculateExpected(investementRisk);
  calculateTarget();

  const options = {
    animationEnabled: true,
    axisY: {
      prefix: '$',
    },
    toolTip: {
      shared: true,
    },
    data: [
      {
        type: 'spline',
        name: 'contributions',
        showInLegend: true,
        dataPoints: allData[0],
      },
      {
        type: 'spline',
        name: 'expected',
        showInLegend: true,
        dataPoints: allData[1],
      },
      {
        type: 'spline',
        name: 'target',
        showInLegend: true,
        dataPoints: allData[2],
      },
    ],
  };
  return (
    <div>
      <CanvasJSChart options={options} />
    </div>
  );
}
