const parseEfficiencyData = (data: any) => {
  // prepare series object
  let series: any = {
    actual: [],
    efficiency: [],
    plan: [],
    timestamp: [],
  };

  // parse all objects into respective arrays
  for (let item of data) {
    series.actual.push(item.actual);
    series.efficiency.push(item.efficiency);
    series.plan.push(item.plan);
    series.timestamp.push(item.timestamp);
  }

  return series;
};

export { parseEfficiencyData };
