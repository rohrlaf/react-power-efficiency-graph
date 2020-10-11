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
  series.maximum = data[data.length - 1]?.maximum;
  series.minimum = data[data.length - 1]?.minimum;

  // parse all objects into respective arrays
  for (let item of data) {
    series.actual.push({
      x: item.timestamp,
      y: item.actual,
      actual: item.actual,
      efficiency: item.efficiency,
      plan: item.plan,
    });
    series.efficiency.push({
      x: item.timestamp,
      y: item.efficiency,
      actual: item.actual,
      efficiency: item.efficiency,
      plan: item.plan,
    });
    series.plan.push({
      x: item.timestamp,
      y: item.plan,
      actual: item.actual,
      efficiency: item.efficiency,
      plan: item.plan,
    });
  }

  return series;
};

export { parseEfficiencyData };
