import { Genre } from "../genre/Genre";

export interface Related {
    readonly Adaptation: Genre[];
    readonly 'Side story': Genre[];
    readonly Summary: Genre[];
}