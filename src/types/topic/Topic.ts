import { Post } from '../post/Post'

export interface Topic {
    readonly author_name: string;
    readonly author_url: string;
    readonly date_posted: Date;
    readonly last_post: Post;
    readonly replies: number;
    readonly title: string;
    readonly topic_id: number;
    readonly url: string;
  }