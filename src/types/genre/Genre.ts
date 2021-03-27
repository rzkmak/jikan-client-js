import { ResourceType } from "../resource/ResourceType";

export interface Genre {
    readonly mal_id: number;
    readonly name: string;
    readonly type: ResourceType;
    readonly url: string;
  }
