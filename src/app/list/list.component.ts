import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AppBase } from 'src/core/models/app.base';
import { UpdateService } from 'src/service/update.service';

@Component({
  selector: 'app-root',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  versionList: Observable<AppBase[]>;

  constructor(private updateService: UpdateService) {
    this.versionList = this.updateService.getVersions();
  }
}
