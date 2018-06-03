import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public projects: Promise<any>;

  constructor(private http: HttpClient) { 
    this.projects = new Promise((resolve, reject) => { 
      this.http.get('assets/projects.json').subscribe(data => {
        resolve(data);
      }, () => { reject(); }); 
    });
  }

  /**
  * Gets a list of portfolios
  */
  public getPortfolioProjects(): Promise<any> {
    return this.projects.then(projects => { return projects['portfolio']});
  }

  /**
  * Gets a list of professional projects
  */
  public getProfessionalProjects(): Promise<any> {
    return this.projects.then(projects => { return projects['professional']});
  }
}
