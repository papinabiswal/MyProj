import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  isCancledClicked = false;
  @Output()
    cancleButtonEvent : EventEmitter <boolean> = new EventEmitter <boolean>();
  constructor() { }

  ngOnInit() {
  }
  cancle(){
    this.isCancledClicked = false;
      this.cancleButtonEvent.emit(this.isCancledClicked);
    console.log('cancle');
  }

}
