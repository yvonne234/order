import {Injectable} from "@angular/core";
import { JobsProfiles } from '../Shared/JobsProfiles.model';

@Injectable({
    providedIn: 'root'
})
export class AvailableJobsService{
    private availableJobs : JobsProfiles[];

    constructor(){
        this.availableJobs = [
            new JobsProfiles(1, "Software Developer", "C#, .Net, Azure, Entity Framework"),
            new JobsProfiles(2, "Solution Architect", "C#, .Net, Azure, AWS, Micro Services"),
            new JobsProfiles(3, "Front End Developer", "Angular/React/Vue, CSS, Bootstrap, HTML"),
            new JobsProfiles(4, "Devops Engineer", "Terraform, AWS, Jenkins, Dockers")
        ]
    }

    getAllAvailableJobs(){
        return this.availableJobs;
    }
    
}