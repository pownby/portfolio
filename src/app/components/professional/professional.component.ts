import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-professional',
  templateUrl: './professional.component.html',
  styleUrls: ['./professional.component.scss']
})
export class ProfessionalComponent implements OnInit {
  public projects: Array<any>;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getProfessionalProjects().then(projects => this.projects = projects);
  }

}
