import { Airing } from "./airing/Airing";
import { Base } from "./Base";
import { Genre } from "./genre/Genre";
import { Related } from "./related/Related";

export interface MangaResult extends Base {
    readonly mal_id:               number;
    readonly url:                  string;
    readonly title:                string;
    readonly title_english:        string;
    readonly title_synonyms:       string[];
    readonly title_japanese:       string;
    readonly status:               string;
    readonly image_url:            string;
    readonly type:                 string;
    readonly volumes:              number;
    readonly chapters:             number;
    readonly publishing:           boolean;
    readonly published:            Airing;
    readonly rank:                 number;
    readonly score:                number;
    readonly scored_by:            number;
    readonly popularity:           number;
    readonly members:              number;
    readonly favorites:            number;
    readonly synopsis:             string;
    readonly background:           null;
    readonly related:              Related;
    readonly genres:               Genre[];
    readonly authors:              Genre[];
    readonly serializations:       Genre[];
}