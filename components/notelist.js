import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import GamesIcon from '@mui/icons-material/SportsEsports';

function NoteList(props) {
  const [games, setGames] = useState(props.games);

  const gameList = Object.keys(games).map((game, idx) => {
    return (
      <ListItemButton>
        <ListItemText primary={game} key={idx} />
      </ListItemButton>
    )
  });

  return (
    <div className='note-list'>
      <List
        sx={{ width: '100%', maxWidth: 360 }}
        component="nav">
        <div className='list-header'>
            <h5><GamesIcon />Games</h5>
        </div>

        {gameList}
      </List>
    </div>
  )
}

export default NoteList;