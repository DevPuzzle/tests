import { Component, OnInit, Input } from '@angular/core';



@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {
  @Input() numbers;
  borderColor;


  constructor() { }

  ngOnInit() {
    console.log('first', this.numbers);
  }

    // this.borderColor = this.numbers.firstNumber >= 0 ? 'blue' : 'red';
    // this.borderColor = this.numbers.secondNumber >= 0 ? 'blue' : 'red';




}
