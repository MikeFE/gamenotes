import React from 'react';
import dynamic from 'next/dynamic';

import {Container} from '@material-ui/core'
import ProcessList from '../components/processlist'
import Menu from '../components/menu'

// CKEditor 5 uses a bunch of references to 'window' in its code,
// we need to dynamically load here and tell Next not to use SSR,
// only run this component in the browser where 'window' is defined.
const NoteEditor = dynamic(() => import('../components/editor'), {ssr: false});

const treeData = [
  {
    title: 'parent 1',
    key: '0-0',
    children: [
      {
        title: 'parent 1-0',
        key: '0-0-0',
        disabled: true,
        children: [
          {
            title: 'leaf',
            key: '0-0-0-0',
            disableCheckbox: true,
          },
          {
            title: 'leaf',
            key: '0-0-0-1',
          },
        ],
      },
      {
        title: 'parent 1-1',
        key: '0-0-1',
        children: [
          {
            title: (
              <span
                style={{
                  color: '#1890ff',
                }}
              >
                sss
              </span>
            ),
            key: '0-0-1-0',
          },
        ],
      },
    ],
  },
];

export default function Home() {
  const onSelect = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info);
  };

  const onCheck = (checkedKeys, info) => {
    console.log('onCheck', checkedKeys, info);
  };

  return (
    <div>
      <Container className="header" maxWidth="sm">
        header here
      </Container>
      <Container className="content" maxWidth="sm" disableGutters>
        <NoteEditor />
      </Container>
      {/*<ProcessList />*/}
    </div>
  )
}
