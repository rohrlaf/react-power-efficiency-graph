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
        color: "#ad1265",
        data: data.efficiency,
      },
      {
        name: "Actual",
        type: "column",
        yAxis: 0,
        color: "#0bb7a0",
        data: data.actual,
      },
      {
        name: "Plan",
        type: "column",
        yAxis: 0,
        color: "#ccd2d5",
        data: data.plan,
      },
    ],
    tooltip: {
      formatter: function () {
        const point: any = this.point as any;
        return `Actual ${point.actual}, Plan ${point.plan}, Efficiency ${point.efficiency}`;
      },
    },
    xAxis: {
      labels: {
        formatter: function () {
          return Highcharts.dateFormat("%d %b '%y", this.value);
        },
      },
    },
    yAxis: [
      {
        plotLines: [
          {
            color: "#4a5860",
            dashStyle: "ShortDot",
            label: {
              text: "Maximum Power",
            },
            width: 1,
            value: data.maximum,
          },
          {
            color: "#4a5860",
            dashStyle: "ShortDot",
            label: {
              text: "Minimum Power",
            },
            width: 1,
            value: data.minimum,
          },
        ],
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
