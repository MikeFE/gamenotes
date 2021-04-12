import React from 'react';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import CustomEditor from 'ckeditor5-custom-build/build/ckeditor';

class NoteEditor extends React.Component {
  editorConfig = {
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
      save(editor) {
        const data = editor.getData();
        return new Promise( resolve => {
            setTimeout( () => {
                console.log( 'Saved', data );

                resolve();
            }, 1000 );
        } );
      }
    }
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  saveData(data) {
    console.log("Saving data");
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {

    return (
      <div>
        <CKEditor
            editor={ CustomEditor }
            config={this.editorConfig}
            data="<p>Hello from CKEditor 5!</p>"
            onReady={ editor => {
                // You can store the "editor" and use when it is needed.
                console.log( 'Editor is ready to use!', editor );
            } }
            onChange={ ( event, editor ) => {
                const data = editor.getData();
                console.log( { event, editor, data } );
            } }
            onBlur={ ( event, editor ) => {
                console.log( 'Blur.', editor );
            } }
            onFocus={ ( event, editor ) => {
                console.log( 'Focus.', editor );
            } }>
        </CKEditor>
      </div>
    );
  }
}

export default NoteEditor;