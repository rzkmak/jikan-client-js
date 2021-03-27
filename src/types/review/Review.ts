export interface Review {
    readonly content: string;
    readonly date: Date;
    readonly helpful_count: number;
    readonly mal_id: number;
    readonly reviewer: Reviewer;
    readonly url: string;
}

export interface Reviewer {
    readonly episodes_seen: number;
    readonly image_url: string;
    readonly scores: Scores;
    readonly url: string;
    readonly username: string;
}

export interface Scores {
    readonly animation: number;
    readonly character: number;
    readonly enjoyment: number;
    readonly overall: number;
    readonly sound: number;
    readonly story: number;
}