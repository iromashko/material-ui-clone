import { Component, OnInit} from '@angular/core';
import { DirectivesFacade } from '@material-uiclone/material/domain';

@Component({
  selector: 'material-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {
    


    constructor(private directivesFacade: DirectivesFacade) {
    }


    ngOnInit() {
    }

}

