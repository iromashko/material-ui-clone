import { Component, OnInit} from '@angular/core';
import { ServicesFacade } from '@material-uiclone/material/domain';

@Component({
  selector: 'material-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
    


    constructor(private servicesFacade: ServicesFacade) {
    }


    ngOnInit() {
    }

}

