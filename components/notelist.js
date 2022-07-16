import React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

class NoteList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {games: props.games};
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  renderTree() {
    const gameList = Object.keys(this.state.games).map((game, idx) => {
      return (
        <ListItemButton>
          <ListItemText primary={game} key={idx} />
        </ListItemButton>
      )
    });

    return (
      <List
        sx={{ width: '100%', maxWidth: 360 }}
        component="nav">
        <div className='list-header'>Games</div>

        {gameList}

      </List>
    )
  }

  render() {
    return (
      <div>{this.renderTree()}</div>
    )
  }
}

export default NoteList;