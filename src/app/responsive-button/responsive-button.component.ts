import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-responsive-button',
  templateUrl: './responsive-button.component.html',
  styleUrls: ['./responsive-button.component.css']
})
export class ResponsiveButtonComponent implements OnInit {
  @Input() icon: string;
  @Input() content: string;

  constructor() { }

  ngOnInit(): void {
  }

}
