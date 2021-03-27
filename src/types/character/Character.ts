import { Role } from "../resource/ResourceRole";
import { Staff } from "../staff/Staff";

export interface Character {
    readonly image_url: string;
    readonly mal_id: number;
    readonly name: string;
    readonly role: Role;
    readonly url: string;
    readonly voice_actors: Staff[];
}
