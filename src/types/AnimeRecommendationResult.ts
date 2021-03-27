import { Base } from "./Base";
import { Recommendation } from "./recommendation/Recommendation";

export interface AnimeRecommendationResult extends Base {
    readonly recommendations: Recommendation[];
}