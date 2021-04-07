// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const regedit = require('regedit')

export default (req, res) => {
  let results = [];
  let appId;

  regedit.list('HKCU\\SOFTWARE\\Valve\\Steam')
  .on('data', function(entry) {
    //console.log(entry.key)
    console.log(entry.data.values)

    appId = entry.data.values.RunningAppID.value
    console.log(appId)
  })
  .on('finish', function () {
    console.log('list operation finished')
    res.status(200).json({ appid: appId });
  });
}
