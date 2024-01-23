export interface ContentEntry {
    heading: string;
    body: string;
    images: string[];
    links?: any[];
}

export interface PageInfo {
    summary: string;
    content: ContentEntry[];
}