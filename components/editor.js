import React, { useState } from 'react';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import CustomEditor from 'ckeditor5-custom-build/build/ckeditor';

function NoteEditor(props) {
  const [gameName, setGameName] = useState(null);
  const [noteName, setNoteName] = useState(null);

  const saveData = (data) => {
    const postData = {
      gameName: gameName,
      noteName: noteName,
      noteData: data
    };

    return fetch(process.env.BASEURL + '/api/savenote',
      {
        method: 'POST',
        body: JSON.stringify(postData)
      }
    ).then((r) => {
      r.json().then(v => console.log(v.message));
    });
  }

  const editorConfig = {
    toolbar: {
      items: [
        'heading',
        '|',
        'fontFamily',
        'fontSize',
        'fontColor',
        'highlight',
        '|',
        'bold',
        'italic',
        'underline',
        'strikethrough',
        'link',
        '|',
        'bulletedList',
        'numberedList',
        'removeFormat',
        '|',
        'alignment',
        'outdent',
        'indent',
        '|',
        'horizontalLine',
        'blockQuote',
        'insertTable',
        'mediaEmbed',
        'codeBlock',
        'fontBackgroundColor',
        'code',
        '|',
        'undo',
        'redo'
      ]
    },
    language: 'en',
    image: {
      toolbar: [
        'imageTextAlternative',
        'imageStyle:full',
        'imageStyle:side'
      ]
    },
    table: {
      contentToolbar: [
        'tableColumn',
        'tableRow',
        'mergeTableCells',
        'tableCellProperties',
        'tableProperties'
      ]
    },
    licenseKey: '',
    autosave: {
      save: editor => saveData(editor.getData())
    }
  };

  return (
    <div>
      <CKEditor
          editor={CustomEditor}
          config={editorConfig}
          data="<p>Hello from CKEditor 5!</p>"
          onReady={ editor => {
              // You can store the "editor" and use when it is needed.
              console.log( 'Editor is ready to use!', editor );
          } }>
      </CKEditor>
    </div>
  );
}

export default NoteEditor;