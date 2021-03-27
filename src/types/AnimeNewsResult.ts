import { Article } from "./article/Article";
import { Base } from "./Base";

export interface AnimeNewsResult extends Base {
    readonly articles: Article[];
}