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
        data: data.efficiency,
      },
      {
        name: "Actual",
        type: "column",
        yAxis: 0,
        data: data.actual,
      },
      {
        name: "Plan",
        type: "column",
        yAxis: 0,
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
