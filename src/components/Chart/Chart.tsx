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
    title: {
      text: title,
    },
    series: [
      {
        type: "line",
        data: data,
        // data: [1, 2, 3],
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
