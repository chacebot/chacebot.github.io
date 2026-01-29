export interface ContentEntry {
  heading: string;
  body: string;
  images: string[];
  links?: any[];
}

export interface PageInfo {
  heading: string;
  summary: string[];
  content: ContentEntry[];
}
