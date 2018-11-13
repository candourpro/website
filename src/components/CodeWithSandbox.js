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

export default ({ sandbox, editable, children, ...rest }) => {
  const editorContainerStyle = useConvert({ minWidth: 35 })
  const [code, setCode] = useState(children)

  return (
    <Container>
      {sandbox && <Sandbox {...rest}>
        {code}
      </Sandbox>}
      <Code padding paddingBottom={0}>
        <Style
          scopeSelector='.token'
          rules={{
            '.attr-value': {
              color: 'hsla(120, 1%, 40%, 1)',
            },
            '.attr-name': {
              fontWeight: 600,
            },
            '.string': {
              color: 'hsla(120, 1%, 40%, 1)',
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
