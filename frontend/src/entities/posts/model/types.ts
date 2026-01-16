
export interface Post {
  title: string,
  description: string,
  done: boolean,
  createdAt: Date,
  id:string,
}


export interface PostsState {
  data: Post[];
  hasPosts: boolean;
  error: string  | null;
}