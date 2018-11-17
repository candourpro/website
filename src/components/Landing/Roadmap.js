import React from 'react'
import HonestiveRoadmap from 'honestive-react-roadmap'
import {
  Container,
  Text,
  Heading,
} from 'candour'

const Point = ({ url, children }) => (
  <Container
    primitiveType='roadmapPoint'
    component='a'
    href={url}
    target='_blank'
    level={8}
  >
    {children}
  </Container>
)

const Line = ({ width }) => (
  <Container
    width={width || 1.5}
    height='1px'
    backgroundColor='#67FDDA'
  />
)

export default () => (
  <Container backgroundColor='#F9FBFC' padding paddingTop={5} paddingBottom={5} border='1px solid #E9EAE9'>
    <Container maxWidth={40} margin='0 auto' displayFlex flexDirectionColumn alignItemsCenter>
      <Heading level={3} tight fontWeight700 textAlignCenter>
        The Goal
      </Heading>
      <Text level={5} paddingBottom={2} textAlignCenter maxWidth={25} colorLightBlack>
        Build powerful design system that increase developer productivity
        ten-fold.
      </Text>
      <HonestiveRoadmap
        last={4}
        endpoint='https://candour-honestive.herokuapp.com/graphql'
        components={{
          Point,
          Line,
        }}
      />
    </Container>
  </Container>
)
