import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <hr>
    <footer>
      <p>&copy; Carolanne</p>
    </footer>
  `,
  styles: [
    'hr { margin-top: 90px }',
    'footer { text-align:center; font-size: 0.7rem }',
  ]
})
export class FooterComponent {}