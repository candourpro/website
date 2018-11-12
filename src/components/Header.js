import React from 'react'
import {
  Container,
  Text,
  Link,
  Button,
  useBreakpoints,
} from 'candour'
import {
  Link as RouterLink,
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
        <Link component={RouterLink} to='/' displayFlex alignItemsCenter>
          <Container height width backgroundColor={colors.black} />
          <Text marginLeft fontWeight700>
            Candour
          </Text>
        </Link>
        {!small && <Container displayFlex alignItemsCenter>
          <Link
            component={RouterLink}
            to='/docs/overview'
            marginLeft={3}
          >
            Docs
          </Link>
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
