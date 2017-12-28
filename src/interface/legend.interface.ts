import { EyesColorInterface } from './eyes-color.interface';
import { HairColorInterface } from './hair-color.interface';
import { RaceInterface } from './race.interface';

export interface LegendInterface {

        eyes: EyesColorInterface;
        hair: HairColorInterface;
        race: RaceInterface;
        [key: string]: any;

}
