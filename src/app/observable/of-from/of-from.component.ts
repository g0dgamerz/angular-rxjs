import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.css']
})
export class OfFromComponent implements OnInit{
 /**
  *
  */

 obsMsg:any;
 constructor(private _designUtility: DesignUtilityService) { }
  ngOnInit(): void {
//OF
const obs1 = of('Anup','Shekhar','sharma');
obs1.subscribe(res=>{
  console.log(res);
  this._designUtility.print(res,'elContainer');
})
const obs2 = of({a:'Anup',b:'Shekhar',c:'sharma'});
obs2.subscribe(res=>{
  this.obsMsg = res;
  console.log('obsMsg =>',res);
 // this._designUtility.print(res,'elContainer');
})
}
 
}
