// var editor = new EditorJS({
//   holderId : 'editorjs',
//   tools: {
//        header: {
//          class: Header,
//          inlineToolbar : true
//        },
//        // ...
//    },
//
// });

function insert(text) {
  document.execCommand('insertText', false, text);
}
