import React, { useState } from 'react'
import {
  Container,
  Code,
  Style,
  useConvert,
} from 'candour'
import Editor from 'react-simple-code-editor'
import { highlight, languages } from 'prismjs/components/prism-core'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-markup'
import 'prismjs/components/prism-jsx'
import Sandbox from './Sandbox'

export default ({ sandbox, editable, wrapper, children, ...rest }) => {
  const editorContainerStyle = useConvert({ minWidth: '100%' })
  const [code, setCode] = useState(children)

  return (
    <Container>
      {sandbox && <Sandbox>
        {wrapper ? wrapper(code) : code}
      </Sandbox>}
      <Code padding paddingBottom={0} {...rest}>
        <Style
          scopeSelector='.token'
          rules={{
            '.attr-value': {
              color: 'grey',
            },
            '.attr-name': {
              fontWeight: 600,
            },
            '.string': {
              color: 'grey',
            },
            '.number': {
              color: 'grey',
            },
            '.tag': {
              fontWeight: 600,
            },
          }}
        />
        <Editor
          value={code}
          onValueChange={setCode}
          highlight={newCode => highlight(newCode, languages.jsx)}
          style={editorContainerStyle}
          disabled={!editable}
        />
      </Code>
    </Container>
  )
}
