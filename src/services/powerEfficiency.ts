const getPowerEfficiencyOne = async () => {
  // first component
  const result = await fetch('https://run.mocky.io/v3/476d7474-9066-4da5-b40d-8990f09f5f3d');
  return await result.json();
};

const getPowerEfficiencyTwo = async () => {
  // second component
  const result = await fetch('https://run.mocky.io/v3/c83e8d8a-0a8e-44be-bef8-c08bc2837a9c');
  return await result.json();
};

export { getPowerEfficiencyOne, getPowerEfficiencyTwo };