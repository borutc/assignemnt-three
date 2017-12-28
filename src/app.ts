import { SolverService } from './solver.service';
import { Data } from './data';
import 'jquery';

export class App {

    private dnkArray: string[];
    private solverService: SolverService = new SolverService();
    private data: Data = new Data();
    constructor() {}

    onClick(dnk: string) {
        this.dnkArray = this.solverService.divideDNK(dnk, 6);
        return this.solverService.findSuspect(this.solverService.mapDnkToWords(this.dnkArray, this.data.getLegend()), this.data.getSuspects());
    }

}



window.onload = () =>
{
    let greeter = new App();

    $('#solve').click(function(){
        alert(greeter.onClick($('#dnk').val().toString()));
    });



};
