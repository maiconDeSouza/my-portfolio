import 'styled-components'
import { defaultColors } from '../styles/defaultColors'

type defaultColorsType = typeof defaultColors

declare module 'styled-components' {
    export interface DefaultTheme extends defaultColorsType {}
  }