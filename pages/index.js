import React from 'react';
import dynamic from 'next/dynamic';

import {Grid, Paper} from '@mui/material';
import Menu from '../components/menu'

// CKEditor 5 uses a bunch of references to 'window' in its code,
// we need to dynamically load here and tell Next not to use SSR,
// only run this component in the browser where 'window' is defined.
// See: https://nextjs.org/docs/advanced-features/dynamic-import#with-no-ssr
const NoteEditor = dynamic(() => import('../components/editor'), {ssr: false});

export default function Home() {
  const onSelect = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info);
  };

  const onCheck = (checkedKeys, info) => {
    console.log('onCheck', checkedKeys, info);
  };

  return (
    <div id="root">
      <Grid container spacing={1} className="grid-container">
          <Grid item xs={3} className="grid-item-empty"></Grid>
          <Grid item xs={8} className="grid-item grid-item-shadow">
            <div className="titlebar">
              <i className="fas fa-3x fa-file-alt note-icon"/>
              <h4 className="mb-0 mt-2">Test Game - Example Note 1</h4>
            </div>
          </Grid>
        <Grid item xs={3} className="grid-item grid-item-shadow">
          <Menu />
        </Grid>
        <Grid item xs={8} className="grid-item grid-item-shadow">
          <NoteEditor />
        </Grid>
      </Grid>
    </div>
  )
}
