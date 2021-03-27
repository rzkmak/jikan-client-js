import { Base } from "./Base";
import { Episode } from "./episode/Episode";
import { Pv } from "./episode/Pv";

export interface AnimeVideosResult extends Base {
    readonly episodes: Episode[];
    readonly promo: Pv[];
}
