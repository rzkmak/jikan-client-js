import { request } from "./processor/Request";
import { AnimeResult } from "./types/AnimeResult";
import { AnimeCharacterStaffResult } from "./types/AnimeCharacterStaffResult";
import { AnimeEpisodesResult } from "./types/AnimeEpisodesResult";
import { AnimeNewsResult } from "./types/AnimeNewsResult";
import { AnimeStatisticResult } from "./types/AnimeStatisticResult";
import { AnimeForumResult } from "./types/AnimeForumResult";
import { AnimeMoreInfoResult } from "./types/AnimeMoreInfoResult";
import { AnimeReviewResult } from "./types/AnimeReviewResult";
import { AnimeRecommendationResult } from "./types/AnimeRecommendationResult";
import { AnimeUserUpdates } from "./types/AnimeUserUpdates";


export interface AnimeContract {
    get(): Promise<AnimeResult>;
    getCharacterStaff(): Promise<AnimeCharacterStaffResult>;
    getEpisodes(page: number): Promise<AnimeEpisodesResult>;
    getNews(): Promise<AnimeNewsResult>;
    getPV(): Promise<AnimeEpisodesResult>;
    getStatistics(): Promise<AnimeStatisticResult>;
    getForum(): Promise<AnimeForumResult>;
    getMoreInfo(): Promise<AnimeMoreInfoResult>;
    getReviews(page: number): Promise<AnimeReviewResult>;
    getRecommendations(): Promise<AnimeRecommendationResult>;
    getUserUpdates(page: number): Promise<AnimeUserUpdates>
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

    async getPV(): Promise<AnimeEpisodesResult> {
        return await request(`anime/${this.id}/videos`) as AnimeEpisodesResult;
    }

    async getStatistics(): Promise<AnimeStatisticResult> {
        return await request(`anime/${this.id}/stats`) as AnimeStatisticResult;
    }

    async getForum(): Promise<AnimeForumResult> {
        return await request(`anime/${this.id}/forum`) as AnimeForumResult;
    }

    async getMoreInfo(): Promise<AnimeMoreInfoResult> {
        return await request(`anime/${this.id}/moreinfo`) as AnimeMoreInfoResult;
    }

    async getReviews(page: number = 1): Promise<AnimeReviewResult> {
        return await request(`anime/${this.id}/reviews/${page}`) as AnimeReviewResult;
    }

    async getRecommendations(): Promise<AnimeRecommendationResult> {
        return await request(`anime/${this.id}/recommendations`) as AnimeRecommendationResult;
    }

    async getUserUpdates(page: number = 1): Promise<AnimeUserUpdates> {
        return await request(`anime/${this.id}/userupdates/${page}`) as AnimeUserUpdates;
    }

}