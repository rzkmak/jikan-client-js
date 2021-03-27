import { Base } from './Base';
import { Character } from './character/Character'
import { Staff } from './staff/Staff';

export interface AnimeCharacterStaffResult extends Base {
    readonly characters: Character[];
    readonly staff: Staff[];
  }
