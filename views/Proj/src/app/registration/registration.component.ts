import { Component, OnInit,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
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
