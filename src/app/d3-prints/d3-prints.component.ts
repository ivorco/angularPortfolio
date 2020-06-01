import { Component, OnInit } from '@angular/core';
import { ThingieverseService } from '../thingieverse.service';

@Component({
  selector: 'app-d3-prints',
  templateUrl: './d3-prints.component.html',
  styleUrls: ['./d3-prints.component.css'],
})
export class D3PrintsComponent implements OnInit {
  prints: string;
  constructor() {}

  ngOnInit(): void {this.getDataFromTV();}

  getDataFromTV() {
     this.prints = JSON.stringify(ThingieverseService.getThings());
  }
}
