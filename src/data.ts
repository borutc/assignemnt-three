import { SuspectInterface } from './interface/suspect.interface';
import { LegendInterface } from './interface/legend.interface';

export class Data {

    private suspects = [
        {
            name: 'John Novak',
            hair: 'black',
            eyes: 'green',
            race: 'asian'
        },
        {
            name: 'Vin Diesel',
            hair: 'blond',
            eyes: 'brown',
            race: 'caucasian'
        },
        {
            name: 'Guy Fawkes',
            hair: 'black',
            eyes: 'brown',
            race: 'hispanic'
        }
    ];

    private legend = {
        eyes: {
            black: '140L98',
            green: '140A98',
            brown: '140A88',
            blue: '140L97'
        },
        hair: {
            brown: 'HHHKLJ',
            black: 'HHHKLI',
            blond: 'HHLH1L',
            white: 'HHLH2L'
        },
        race: {
            asian: '1HYYYN',
            hispanic: 'IHYYYN',
            white: 'IHYYNN',
        }
    };

    getSuspects():SuspectInterface[] {
        return this.suspects;
    }

    getLegend():LegendInterface {
        return this.legend;
    }
}
