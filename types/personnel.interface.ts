export namespace Personnel {
  export interface RootState {
    personnel: Personnel
    user: User
  }

  export interface User {
    id: string
    password: string
  }

  export interface Me {
    roles: string[]
    token: string
  }

  export interface Personnel {
    id: number
    title: string
    detail: string
    contact: Contact
    url: string
  }

  export interface Contact {
    email: string
    phone: string
  }
}
