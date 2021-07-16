import { Component, OnInit} from '@angular/core';
import { OtherFacade } from '@material-uiclone/material/domain';

@Component({
  selector: 'material-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.scss']
})
export class OtherComponent implements OnInit {
    


    constructor(private otherFacade: OtherFacade) {
    }


    ngOnInit() {
    }

}

