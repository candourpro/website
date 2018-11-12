import React from 'react'
import {
  Container,
  Text,
  Button,
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
        {!small && <Container displayFlex alignItemsCenter>
          <Text component={Link} to='/docs/overview' marginLeft={3}>
            Docs
          </Text>
          <Button
            component='a'
            href='https://github.com/candourpro/candour'
            target='_blank'
            marginLeft={3}
            padding={0.5}
          >
            GitHub
          </Button>
        </Container>}
        {small && <SmallMenuIcon {...props} />}
      </Container>
    </>
  )
}
