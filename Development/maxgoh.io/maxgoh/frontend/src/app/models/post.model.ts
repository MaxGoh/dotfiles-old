export interface Posts {
  id: number;
  title: string;
  slug: string;
  published_on: Date;
  summary: string;
  tags: string[];
}

export interface PostDetail {
  id: number;
  title: string;
  body: string;
  published_on: Date;
  tags: string[];
}
