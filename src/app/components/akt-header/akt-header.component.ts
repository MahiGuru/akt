import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-akt-header',
  templateUrl: './akt-header.component.html',
  styleUrl: './akt-header.component.css'
})
export class AktHeaderComponent implements OnInit {
  ngOnInit(): void {
    initFlowbite()
  }
}
