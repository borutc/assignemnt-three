import { LegendInterface } from './interface/legend.interface';
import { MappedDnk } from './maped-dnk';
import { MappedDnkInterface } from './interface/mapped-dnk.interface';
import { SuspectInterface } from './interface/suspect.interface';

export class SolverService {

    divideDNK(dnk:string, wordLength: number): string[] {
        let dividedDNK: string[] = [];
        for (let i: number = 0; i < dnk.length; i++) {
            if(i !=0 && (i+1) % wordLength == 0){
                dividedDNK.push(dnk.slice(i + 1 - wordLength, i+1))
            }
        }
        return dividedDNK;
    }

    mapDnkToWords(dnkArray:string[], legend:LegendInterface): MappedDnk {
        let mappedWords: MappedDnk = new MappedDnk();
        for(let type in legend){
            for(let innerType in legend[type]) {
                for(let dnk of dnkArray) {
                    if(dnk == legend[type][innerType]) {
                        mappedWords[type] = innerType;
                    }
                }
            }
        }
        return mappedWords;
    }

    findSuspect(mappedDnk: MappedDnkInterface, suspects:SuspectInterface[]): string {
        for(let suspect of suspects){
            if(
                suspect.eyes == mappedDnk.eyes &&
                suspect.hair == mappedDnk.hair &&
                suspect.race == mappedDnk.race
            ) {
                return 'Suspect is: \n' + suspect.name;
            } else {
                return 'No matches found or wrong DNK input';
            }
        }
    }
}
