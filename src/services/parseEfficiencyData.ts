const parseEfficiencyData = (data: any) => {
  // prepare series object
  let series: any = {
    actual: [],
    efficiency: [],
    maximum: null,
    minimum: null,
    plan: [],
  };

  // extrac max and min from latest item
  series.maximum = data[-1]?.maximum;
  series.minimum = data[-1]?.minimum;

  // parse all objects into respective arrays
  for (let item of data) {
    series.actual.push([item.timestamp, item.actual]);
    series.efficiency.push([item.timestamp, item.efficiency]);
    series.plan.push([item.timestamp, item.plan]);
  }

  return series;
};

export { parseEfficiencyData };
