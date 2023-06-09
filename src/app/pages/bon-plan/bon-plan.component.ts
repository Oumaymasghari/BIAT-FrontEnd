import { Component, OnInit } from '@angular/core';
import { ActiviteamicaleService } from 'src/app/shared/Services/activiteAmicale/activiteamicale.service';

@Component({
  selector: 'app-bon-plan',
  templateUrl: './bon-plan.component.html',
  styleUrls: ['./bon-plan.component.scss']
})
export class BonPlanComponent implements OnInit {

  constructor(private activiteamicaleService: ActiviteamicaleService) { }
  activiteAmicales:any;
  restaurents:any;
hotels:any;
evennements:any;
voyageOrganisees:any;
  ngOnInit(): void {
    this.getFilterWordCount();
    this.getActiviteAmicales();
  }



  getFilterWordCount(): void {
    this.activiteamicaleService.getFilterWordCount().subscribe(
      data => {
        console.error('data', data);
        this.activiteAmicales = data;
      },
      error => {
        console.error('Error fetching activiteAmicales:', error);
      }
    );
  }


  get sortedrestaurents(): any[] {
    // Sort the hotels based on nbMots in descending order
    return this.restaurents.sort((a, b) => b.nbMots - a.nbMots);
  }

  getActiviteAmicales(): void {
    this.activiteamicaleService.getActiviteAmicales('ConventionRestauration').subscribe(
      data => {
        console.log(data);
        
        this.restaurents = data;
      
      },
      error => {
        console.error('Error fetching restaurents:', error);
      }
    );
  
    this.activiteamicaleService.getActiviteAmicales('ConventionHotels').subscribe(
      data => {
        this.hotels = data;
      },
      error => {
        console.error('Error fetching hotels:', error);
      }
    );
  
    this.activiteamicaleService.getActiviteAmicales('Evennement').subscribe(
      data => {
        this.evennements = data;
      },
      error => {
        console.error('Error fetching evennements:', error);
      }
    );
  
    this.activiteamicaleService.getActiviteAmicales('VoyageOrganisee').subscribe(
      data => {
        this.voyageOrganisees = data;
      },
      error => {
        console.error('Error fetching voyageOrganisees:', error);
      }
    );
  }

}
