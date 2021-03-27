import { Character } from './character/Character'
import { Staff } from './staff/Staff';

export interface AnimeCharacterStaffResult {
    readonly characters: Character[];
    readonly request_cache_expiry: number;
    readonly request_cached: boolean;
    readonly request_hash: string;
    readonly staff: Staff[];
  }
