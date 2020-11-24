import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-faq-contents',
  templateUrl: './faq-contents.component.html',
  styleUrls: ['./faq-contents.component.scss'],
  animations: [
    trigger('toggle', [
      state(
        'true',
        style({
          height: '*',
          opacity: 1
        })
      ),
      state(
        'false',
        style({
          height: 0,
          opacity: 0
        })
      ),
      transition('true <=> false', [
        animate('230ms cubic-bezier(0.35, 0, 0.25, 1)')
      ])
    ])
  ]
})
export class FaqContentsComponent implements OnInit {
  isOpen = false;
  constructor() { }

  ngOnInit(): void {
  }

}