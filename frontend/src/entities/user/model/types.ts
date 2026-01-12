export interface User {
  id: string;
  username: string;
}


export interface UserState {
  data: User | null;
  error: string  | null;

}