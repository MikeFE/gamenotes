import fs from 'fs/promises'

async function getGameList() {
  try {
    const data = await fs.readFile(`${process.cwd()}/notes/games.json`, { encoding: 'utf8' });
    return JSON.parse(data);
  } catch (err) {
    console.error(err);
    return null;
  }
}

export default async (req, res) => {
  if (req.method === 'GET') {
    if (req.body) {
      try {
        const data = JSON.parse(req.body);
      } catch (e) {
        res.status(400).end();
        return;
      }

      console.log('api/games GET body: ', req.body);
    }

    const r = await getGameList();
    if (!r) {
      console.log('Failed to get games list.');
      res.status(400).end();
      return;
    }

    console.log("sending 200: ", r);
    res.status(200).json(r);
    return;
  }

  // Invalid http method
  res.status(405).end();
}