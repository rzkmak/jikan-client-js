import { AiringProp } from "./AiringProp";

export interface Airing {
    readonly from: Date;
    readonly prop: AiringProp;
    readonly string: string;
    readonly to: Date;
}
