import React from 'react'
import {
  Container,
  Heading,
  Text,
  useBreakpoints,
} from 'candour'
import CodeWithSandbox from '../../CodeWithSandbox'

export default ({ title, code, icon, children, ...rest }) => {
  const { small } = useBreakpoints()

  return (
    <Container paddingTop={5} paddingBottom={5} limited displayFlex={!small} justifyContentSpaceBetween>
      <Container maxWidth={26} paddingRight={2}>
        {icon && <Container component={icon} height={7} width='initial' paddingBottom />}
        <Heading level={4} fontWeight700 displayFlex alignItemsCenter>
          {title}
        </Heading>
        <Text colorLightBlack paddingTop>
          {children}
        </Text>
      </Container>

      <Container maxWidth={!small && 25} width='100%'>
        <CodeWithSandbox sandbox key={code} {...rest}>
          {code}
        </CodeWithSandbox>
      </Container>
    </Container>
  )
}
