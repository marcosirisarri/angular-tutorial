import { Component } from '@angular/core';
import { PetsService } from './pets/pets.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], 
  providers: [PetsService]
})
export class AppComponent {
  title = 'Does this change?';
  name="Change me";
}
