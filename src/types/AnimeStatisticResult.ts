import { Base } from "./Base";
import { Score } from "./score/Score";

export interface AnimeStatisticResult extends Base {
    readonly completed: number;
    readonly dropped: number;
    readonly on_hold: number;
    readonly plan_to_watch: number;
    readonly scores: { [key: string]: Score };
    readonly total: number;
    readonly watching: number;
}