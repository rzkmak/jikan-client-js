import { request } from "./processor/Request";
import { AnimeResult } from "./types/AnimeResult";

export interface AnimeContract {
    get(): Promise<AnimeResult>;
}

export class Anime implements AnimeContract {
    readonly id: number;

    constructor(id: number) {
        this.id = id;
    }

    async get(): Promise<AnimeResult> {
        const { body } =  await request(`anime/${this.id}`);
        return JSON.parse(body) as AnimeResult;
    }
}