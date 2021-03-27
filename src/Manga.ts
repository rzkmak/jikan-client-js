import { request } from "./processor/Request";
import { MangaResult } from "./types/MangaResult"

export interface MangaContract {
    get(): Promise<MangaResult>
}

export class Manga implements MangaContract {
    readonly id: number;

    constructor(id: number) {
        this.id = id;
    }

    async get(): Promise<MangaResult> {
        return await request(`manga/${this.id}`) as MangaResult;
    }
}