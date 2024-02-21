import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-akt-card',
  templateUrl: './akt-card.component.html',
  styleUrl: './akt-card.component.css'
})
export class AktCardComponent implements OnInit {
    constructor(){

    }

    @Input()
    title = "Services";

    @Input() img = "itservice.jpg";

    ngOnInit(): void {
      
    }

}
