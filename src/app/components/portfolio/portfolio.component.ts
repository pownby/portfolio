import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  public projects: Array<any>;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getPortfolioProjects().then(projects => this.projects = projects);
  }
}
