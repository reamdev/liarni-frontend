declare module 'layouts-main-layout' {
  export type MainLayoutProps = {
    children: React.ReactNode;
  }

  export interface OptionMenuProps {
    name?: string;
    ref: (node: HTMLDivElement | null) => void;
  }
}
