declare module 'theme-store' {
  export type ThemeModeType = 'light' | 'dark'

  export interface ThemeState {
    theme: ThemeModeType;
  }
}