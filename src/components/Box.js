import React from 'react'
import {
  Container,
} from 'candour'
import colors from '../theme/colors'

export default () => (
  <Container displayFlex justifyContentCenter>
    <Container
      backgroundImage={`linear-gradient(to right, ${colors.veryDark}, ${colors.darkGrey}`}
      roundCorners
      height={12}
      width={12}
      displayFlex
    >
      <Container
        backgroundImage='linear-gradient(to right, #3A7BDA, #578CD8)'
        roundCorners
        height={10}
        width={2}
        margin
      />
      <Container>
        <Container displayFlex>
          <Container
            backgroundColor={colors.lightGrey}
            roundCorners
            height={7}
            width={3}
            marginTop
          />
          <Container
            backgroundColor={colors.lightGrey}
            roundCorners
            height={7}
            width={3}
            marginTop
            marginLeft
          />
        </Container>

        <Container
          backgroundColor={colors.darkerWhite}
          roundCorners
          height={2}
          width={7}
          margin
          marginLeft={0}
          displayFlex
          justifyContentCenter
          alignItemsCenter
        />
      </Container>
    </Container>
  </Container>
)
