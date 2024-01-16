export interface ContentEntry {
    heading: string;
    body: string;
    images: string[];
    links?: any[]
}

export interface EntryCollection {
    entries: ContentEntry[]
}