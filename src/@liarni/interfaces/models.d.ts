declare module 'interface-models' {
  export interface UserModel {
    _id: string,
    name: string,
    lastName: string,
    email: string,
    password: string,
    userName: string,
    birthDate?: Date,
    avatar?: string,
    banner?: string,
    biografia?: string,
    ubicacion?: string,
    sitioWeb?: string
  }

  export interface TweetModel {
    _id: string,
    date: string,
    message: string,
    user: UserModel
  }
}