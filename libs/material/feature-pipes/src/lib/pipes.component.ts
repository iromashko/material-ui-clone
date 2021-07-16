import { Component, OnInit} from '@angular/core';
import { PipesFacade } from '@material-uiclone/material/domain';

@Component({
  selector: 'material-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {
    


    constructor(private pipesFacade: PipesFacade) {
    }


    ngOnInit() {
    }

}

