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
      <Container className="header container-shadow" maxWidth="sm">
        <Alert variant="primary" className="status">
          Test message
        </Alert>
      </Container>
      <Container className="content container-shadow" maxWidth="sm" disableGutters>
        <NoteEditor />
      </Container>
      {/*<ProcessList />*/}
    </div>
  )
}
