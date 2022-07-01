declare module 'mc-post' {
  import { UserModel } from 'interface-models'
  export type MCPostProps = {
    user: UserModel
    data: string;
    date: string;
  }
}