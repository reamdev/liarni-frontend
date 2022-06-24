declare module '@theme' {
  import { ThemeModeType } from 'theme-store'

  export type Theme = {
    mode: ThemeModeType
    primary_color: string,
    secondary_color: string,
    tertiary_color: string,
    text_color: string,
  }
}