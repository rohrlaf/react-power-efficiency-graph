import React, { useEffect, useState } from "react";
import Chart from "../../components/Chart/Chart";
import { getPowerEfficiencyOne } from "../../services/powerEfficiency";
import { parseEfficiencyData } from "../../services/parseEfficiencyData";

const One = () => {
  const [series, setSeries] = useState({});

  const getData = async () => {
    const data = await getPowerEfficiencyOne();
    const series = parseEfficiencyData(data?.data);
    setSeries(series);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1>Dataset: One</h1>
      <Chart data={series} title="Dataset: One" />
    </>
  );
};

export default One;
