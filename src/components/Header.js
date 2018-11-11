import React from 'react'
import {
  Container,
  Text,
  useBreakpoints,
} from 'candour'
import {
  Link,
} from 'react-router-dom'
import colors from '../theme/colors'
import SmallMenuIcon from './SmallMenu/Icon'

export default (props) => {
  const { small } = useBreakpoints()

  return (
    <>
      <Container
        displayFlex
        justifyContentSpaceBetween
        alignItemsCenter
        padding
        paddingTop={1.5}
        paddingBottom={1.5}
        fontWeight700
      >
        <Container component={Link} to='/' displayFlex alignItemsCenter>
          <Container height width backgroundColor={colors.black} />
          <Text marginLeft fontWeight700>
            Candour
          </Text>
        </Container>
        {!small && <Container displayFlex>
          <Text component={Link} to='/docs/overview/introduction' marginLeft={3}>
            Docs
          </Text>
          <Text marginLeft={3}>
            GitHub
          </Text>
          <Text marginLeft={3}>
            Get started
          </Text>
        </Container>}
        {small && <SmallMenuIcon {...props} />}
      </Container>
    </>
  )
}
