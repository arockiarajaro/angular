import { Component, OnInit,OnChanges } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  id:any;
  constructor(private route:ActivatedRoute,private router:Router) {
    this.router.routeReuseStrategy.shouldReuseRoute=()=>false;
   }

  ngOnInit() {
    this.id=this.route.snapshot.paramMap.get("id");
    console.log(this.id);
  }
  ngOnChanges()
  {
    
  }

}
