import { ResourceStatus } from "../resource/ResourceStatus";

export interface User {
    readonly date: Date;
    readonly episodes_seen: number | null;
    readonly episodes_total: number | null;
    readonly image_url: string;
    readonly score: number | null;
    readonly status: ResourceStatus;
    readonly url: string;
    readonly username: string;
  }
