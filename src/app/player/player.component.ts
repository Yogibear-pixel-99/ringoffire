import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-player',
  imports: [],
  templateUrl: './player.component.html',
  styleUrl: './player.component.scss'
})
export class PlayerComponent {

@Input()playerName = '';
}
