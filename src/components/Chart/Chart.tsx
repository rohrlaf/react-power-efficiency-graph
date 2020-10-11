import React from "react";
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import "highcharts/modules/accessibility";
import "highcharts/modules/exporting";

export interface Props {
  data: any;
  title: string;
  props?: HighchartsReact.Props;
}

const Chart = ({ data, title, props }: Props) => {
  const options: Highcharts.Options = {
    chart: {
      zoomType: "xy",
    },
    title: {
      text: title,
    },
    series: [
      {
        name: "Efficiency",
        type: "line",
        yAxis: 1,
        data: [
          {
            y: 93.82260912850924,
            x: 1596232800000,
          },
          {
            y: 96.031271149726,
            x: 1596434400000,
          },
          {
            y: 98.83321243812016,
            x: 1596438000000,
          },
        ],
      },
      {
        name: "Actual",
        type: "column",
        yAxis: 0,
        data: [
          {
            y: 0.39811,
            x: 1596232800000,
          },
          {
            y: 0.511363,
            x: 1596434400000,
          },
          {
            y: 1.272613,
            x: 1596438000000,
          },
        ],
      },
      {
        name: "Plan",
        type: "column",
        yAxis: 0,
        data: [
          {
            y: 0.1836055856,
            x: 1596232800000,
          },
          {
            y: 0.9517256515,
            x: 1596434400000,
          },
          {
            y: 0.9517256515,
            x: 1596438000000,
          },
        ],
      },
    ],
    xAxis: {
      labels: {
        formatter: function () {
          return Highcharts.dateFormat("%d %b '%y", this.value);
        },
      },
    },
    yAxis: [
      {
        title: {
          text: "MW",
        },
      },
      {
        max: 100,
        min: 0,
        opposite: true,
        title: {
          text: "Efficiency %",
        },
      },
    ],
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} {...props} />
    </div>
  );
};

export default Chart;
