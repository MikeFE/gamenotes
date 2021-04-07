const psList = require('ps-list');

psList().then((processes) => {
  const procNames = new Set(processes.map(proc => proc.name));
  console.log(procNames);
});
