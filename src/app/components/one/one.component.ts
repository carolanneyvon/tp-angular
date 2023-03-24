import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent {
  @Input() data = '';
}


//@Output
// export class OneComponent {
//   @Output() emitter = new EventEmitter();
//   constructor(){
//     setTimeout(() => {
//       this.emitter.emit();
//     }, 3000);
//   }
// }

//Final
// export class OneComponent {
//   @Output() 
//   public emitter = new EventEmitter();
//}