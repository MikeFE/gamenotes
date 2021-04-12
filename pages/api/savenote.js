// data should be JSON.parse(request.body)
const checkFields = (data, props) => {
  return props.every(val => data.hasOwnProperty(val));
}

export default (req, res) => {
  if (req.method === 'POST') {
    const note = JSON.parse(req.body);

    if (!checkFields(note, ['gameName', 'noteName', 'noteData'])) {
      res.status(400).json({message: 'Missing required field.'});
      return;
    }

    res.status(200).json({message:
      `Saved ${note.noteData.length} bytes to game: ${note.gameName}, note: ${note.noteName}`});

    return;
  }

  // Invalid http method
  res.status(405).end();
}