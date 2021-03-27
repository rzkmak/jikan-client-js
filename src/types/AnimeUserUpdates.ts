import { Base } from "./Base";
import { User } from "./user/User";

export interface AnimeUserUpdates extends Base {
    readonly users: User[];
}