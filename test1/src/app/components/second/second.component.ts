import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Store, select } from '@ngrx/store';


import { Change, Increase, Decrease } from '../../actions/counter.actions';
import { interval } from 'rxjs';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {
  data;
  interval = 1000;

  constructor(private store: Store<{firstNumber: number, secondNumber: number}>) { }

  ngOnInit() {
    this.store.pipe(select('numbers')).subscribe((data) => {
      this.data = data;
    });
  }

  start() {
    setInterval(() => {
      // this.store.dispatch(new Increase());
      // this.store.dispatch(new Decrease());
      this.store.dispatch(new Change());
    }, this.interval);
  }
}
