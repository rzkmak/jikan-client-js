import { ResourceLanguage } from "../resource/ResourceLanguage";

export interface Staff {
    readonly image_url: string;
    readonly language?: ResourceLanguage;
    readonly mal_id: number;
    readonly name: string;
    readonly url: string;
    readonly positions?: string[];
  }