import React from 'react';
import dynamic from 'next/dynamic';

import {Container} from '@material-ui/core';
import Alert from 'react-bootstrap/Alert'

import ProcessList from '../components/processlist'
import Menu from '../components/menu'

// CKEditor 5 uses a bunch of references to 'window' in its code,
// we need to dynamically load here and tell Next not to use SSR,
// only run this component in the browser where 'window' is defined.
const NoteEditor = dynamic(() => import('../components/editor'), {ssr: false});

export default function Home() {
  const onSelect = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info);
  };

  const onCheck = (checkedKeys, info) => {
    console.log('onCheck', checkedKeys, info);
  };

  return (
    <div>
      <Container className="header container-shadow" maxWidth="sm" disableGutters>
        <div className="titlebar">
          <i class="fas fa-3x fa-file-alt note-icon" />
          <h4 className="mb-0 mt-2">Test Game - Example Note 1</h4>
        </div>
      </Container>
      <Container className="content container-shadow" maxWidth="sm" disableGutters>
        <NoteEditor />
      </Container>
      {/*<ProcessList />*/}
    </div>
  )
}
