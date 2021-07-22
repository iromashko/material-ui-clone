import { Component } from '@angular/core';
import { UserService } from '@material-uiclone/shared/util-services';

@Component({
  selector: 'material-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent {
  user$ = this.userService.user$;

  constructor(private userService: UserService) {}
}
