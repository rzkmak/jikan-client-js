import { Base } from "./Base";
import { Review } from "./review/Review";

export interface AnimeReviewResult extends Base  {
    readonly reviews: Review[];
}