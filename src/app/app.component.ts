import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {
  hello = 'Hello !';


  constructor(){
    setTimeout(() => {
      this.hello = 'Hello depuis le parent !'
    }, 3000);
  }
}

//@Output
//avec app.component.html
// export class AppComponent {
//  test() {
//  console.log("test invoked")
// }

//avec one.components.html
// export class OneComponent {
//   @Output()
//   public emitter = new EventEmitter();
// }

//final
// export class AppComponent {
//   test(str: string) {
//     console.log("Donnée reçue depuis l'enfant:", str);
//   }
// }