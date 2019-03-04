import fluidSteps from 'candour-fluid-steps'
import colors from 'candour-colors'
import borders from 'candour-borders'
import themeColors from './colors'
import themeBorders from './borders'

export default [
  fluidSteps(),
  colors(themeColors),
  borders(themeBorders),
]
