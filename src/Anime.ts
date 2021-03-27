import { request } from "./processor/Request";
import { AnimeResult } from "./types/AnimeResult";
import { AnimeCharacterStaffResult } from "./types/AnimeCharacterStaffResult";

export interface AnimeContract {
    get(): Promise<AnimeResult>;
    getCharacterStaff(): Promise<AnimeCharacterStaffResult>;
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
}