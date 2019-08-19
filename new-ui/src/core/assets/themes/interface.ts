import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    primary: string,
    primaryDark: string,
    secondary: string,
    accent: string,
    surface: string,
    background: string,
    backgroundDark: string,
  }
}
