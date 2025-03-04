import { Component, OnInit } from '@angular/core';
import { AvailableJobsService } from 'src/app/Services/availableJobs.service';
import { JobsProfiles } from 'src/app/Shared/JobsProfiles.model';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css']
})
export class CareersComponent implements OnInit {

  jobs: JobsProfiles[];
  constructor(
    private availableJobs: AvailableJobsService
  ) { }

  ngOnInit() {
    this.jobs = this.availableJobs.getAllAvailableJobs();
    console.log(this.jobs);
  }


}
