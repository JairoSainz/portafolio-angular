import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CrudComponent } from './crud/crud.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CrudComponent],
  template: '<app-crud>',
  styles: ''
})
export class AppComponent {
  title = 'portafolio-angular';
}
