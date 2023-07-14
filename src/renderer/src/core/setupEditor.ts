import { EditorState, basicSetup } from '@codemirror/basic-setup'
import { json } from '@codemirror/lang-json'
import { EditorView, keymap } from '@codemirror/view'

export class SetupEditor {
  private basicExtensions = [basicSetup, json(), EditorState.tabSize.of(2)]

  constructor() {}
}
