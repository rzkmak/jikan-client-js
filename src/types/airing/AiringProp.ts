import { AiringDate } from "./AiringDate";

export interface AiringProp {
    readonly from: AiringDate;
    readonly to: AiringDate;
}