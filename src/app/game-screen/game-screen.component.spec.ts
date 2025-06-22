import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GameScreenComponent } from './game-screen.component';
import { PlayerComponent } from '../player/player.component';

describe('GameScreenComponent', () => {
  let component: GameScreenComponent;
  let fixture: ComponentFixture<GameScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameScreenComponent, PlayerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
