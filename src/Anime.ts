import { request } from "./processor/Request";
import { AnimeResult } from "./types/AnimeResult";
import { AnimeCharacterStaffResult } from "./types/AnimeCharacterStaffResult";
import { AnimeEpisodesResult } from "./types/AnimeEpisodesResult";
import { AnimeNewsResult } from "./types/AnimeNewsResult";


export interface AnimeContract {
    get(): Promise<AnimeResult>;
    getCharacterStaff(): Promise<AnimeCharacterStaffResult>;
    getEpisodes(page: number): Promise<AnimeEpisodesResult>;
    getNews(): Promise<AnimeNewsResult>;
}

export class Anime implements AnimeContract {
    readonly id: number;

    constructor(id: number) {
        this.id = id;
    }

    async get(): Promise<AnimeResult> {
        return await request(`anime/${this.id}`) as AnimeResult;
    }

    async getCharacterStaff(): Promise<AnimeCharacterStaffResult> {
        return await request(`anime/${this.id}/characters_staff`) as AnimeCharacterStaffResult;
    }

    async getEpisodes(page: number = 1): Promise<AnimeEpisodesResult> {
        return await request(`anime/${this.id}/episodes/${page}`) as AnimeEpisodesResult;
    }

    async getNews(): Promise<AnimeNewsResult> {
        return await request(`anime/${this.id}/news`) as AnimeNewsResult;
    }
}