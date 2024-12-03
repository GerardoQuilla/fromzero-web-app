import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ApplyConfirmationComponent} from "../apply-confirmation/apply-confirmation.component";
import {ActivatedRoute} from "@angular/router";
import {ProjectsApiService} from "../../../../main-page-enterprise/components/home/services/projects-api.service";
import {IProject} from "../../../../main-page-enterprise/components/home/models/iproject";
import {IDeliverable} from "../../../../main-page-enterprise/components/deliverables/model/ideliverable";
import {
  DeliverablesApiService
} from "../../../../main-page-enterprise/components/deliverables/services/deliverables-api.service";

@Component({
  selector: 'app-apply-to-project',
  templateUrl: './apply-to-project.component.html',
  styleUrl: './apply-to-project.component.css'
})
export class ApplyToProjectComponent implements OnInit{
  project!:IProject;
  methodologies!:IDeliverable[];

  constructor(private route: ActivatedRoute, public dialog: MatDialog,
              private projectsService:ProjectsApiService,
              private delvsService:DeliverablesApiService) {}

  openDialog(){
    let userId= Number(localStorage.getItem("id"))
    this.dialog.open(ApplyConfirmationComponent, {
      data:{
        developerUserId: userId,
        projectId:this.project.id
      }
    })
  }

  ngOnInit(): void {
    let projectId:number;
    this.route.params.subscribe(params=>{
      projectId= +params['id'];
      this.projectsService.getProjectById(projectId).subscribe(project=>{
        this.project=project
      })
      this.delvsService.getAllDeliverablesByProjectId(projectId).subscribe(deliverables=>{
        this.methodologies=deliverables;
      })
    })
  }

}
