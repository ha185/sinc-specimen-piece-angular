import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppDetails } from 'src/core/models/app.details';
import { UpdateService } from 'src/service/update.service';

@Component({
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  version = 'x.x.x.x';
  details: AppDetails;

  constructor(
    private route: ActivatedRoute,
    private updateService: UpdateService
  ) {
    this.version = route.snapshot.paramMap.get('version');
  }
  ngOnInit(): void {
    this.updateService.getDetails(this.version).subscribe({
      next: (details) => {
        this.details = details;
      },
    });
  }
}
