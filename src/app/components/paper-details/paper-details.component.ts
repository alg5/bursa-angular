import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { PaperModel } from 'src/app/classes/BursaModels';
import { ShapePaperDetals } from 'src/app/classes/enums';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-paper-details',
  templateUrl: './paper-details.component.html',
  styleUrls: ['./paper-details.component.css'],
})
export class PaperDetailsComponent implements OnInit {

  @Input() paperId:number = 0;
  @Input() shape : ShapePaperDetals.Row;

  ShapePaperDetals = ShapePaperDetals;

  paperDetails:PaperModel = null;
  paperDetailsError:number = 0;

  columnNames = {
    PaperName : 'שם נייר'
    , PaperTypeValue: 'סוג נייר'
    , LastDeal: 'עסקה אחרונה'
    , LastRate: 'שער אחרון'
    , LastRatePercent:'שינוי יומי %'
    , Amount: "מס' עסקאות"  
    , DateIssue: "תאריך"  
    , RateBuy: "שאר קניה"
    , RateSell: "שאר מכירה"
  }
  translations = {
    PaperName : 'שם נייר'
    , DateIssue: "תאריך"  
    , NoDataMessage:  "לא נמצאו נתונים בתנאי המבוקש"  
    , RateBuy: "שאר קניה"
    , RateSell: "שאר מכירה" 
  }
 
  
  
  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
      this.httpService.subjectPaperDetails.subscribe((n)=>{
        // console.log("this.events.subscribe((n)", n, this.paperId);
        if(n == this.paperId){
          this.GetDetailsFromApi(n);
        }
        
      })
  }
  ngAfterViewInit(){
    // this.eventsSubscription = this.events.subscribe((n) => this.GetDetailsFromApi(n));
  }
  ngOnDestroy() {
    this.httpService.subjectPaperDetails.unsubscribe();
  }
  GetDetailsFromApi(n:number){
    console.log("GetDetailsFromApi", n, this.paperId);
    this.httpService.GetPaperById(n).subscribe((data)=>{
      // console.log("this.events.subscribe((n)", n, this.paperId);
      this.paperDetails = data["GetPaperById"];
      console.log("GetDetailsFromApi", n, this.paperId,  this.paperDetails);
      
    })
  }

}
