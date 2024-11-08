export interface ContentEntry {
    heading: string;
    body: string;
    images: string[];
    links?: any[];
}

export interface PageInfo {
    headding: string;
    summary: string[];
    content: ContentEntry[];
}