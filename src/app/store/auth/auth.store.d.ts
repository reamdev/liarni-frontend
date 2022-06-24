declare module 'auth-store' {
  export interface AuthState {
    isAuthenticated: boolean;
    error: string[];
  }
}