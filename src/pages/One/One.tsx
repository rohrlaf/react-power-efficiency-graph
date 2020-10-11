import React, { useEffect, useState } from "react";
import Chart from "../../components/Chart/Chart";
import { getPowerEfficiencyOne } from "../../api/power-efficiency";

const One = () => {
  const [data, setData] = useState({});

  const getData = async () => {
    const data = await getPowerEfficiencyOne();
    setData(data?.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1>Dataset: One</h1>
      <Chart data={data} title="Dataset: One" />
    </>
  );
};

export default One;
