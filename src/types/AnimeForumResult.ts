import { Base } from "./Base";
import { Topic } from "./topic/Topic";

export interface AnimeForumResult extends Base {
    readonly topics: Topic[];
}
