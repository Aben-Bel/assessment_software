import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PathDisplayComponent } from './path-display.component';

describe('PathDisplayComponent', () => {
  let component: PathDisplayComponent;
  let fixture: ComponentFixture<PathDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PathDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PathDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
