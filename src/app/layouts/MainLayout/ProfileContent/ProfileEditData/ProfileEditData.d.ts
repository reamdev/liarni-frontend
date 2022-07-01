declare module 'profile-edit-data' {
  import { UserModel } from 'interface-models'

  export type ProfileEditDataProps = {
    user: UserModel | undefined
  }
}