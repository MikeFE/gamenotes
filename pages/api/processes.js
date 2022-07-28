const psList = require('ps-list');

export default async (req, res) => {
  // return new Promise((resolve, reject) => {
  //   psList().then(
  //   (procList) => {
  //     const procNames = new Set(procList.map(proc => proc.name));
  //     res.status(200).json({processes: Array.from(procNames)});
  //   },
  //   (err) => {
  //     res.status(200).json({ error: 'Failed to get process list' });
  //     console.log("Getting process list failed", err);
  //   });
  // });

  const procList = await psList();
  const procNames = new Set(procList.map(proc => proc.name));
  res.status(200).json({processes: Array.from(procNames)});
}