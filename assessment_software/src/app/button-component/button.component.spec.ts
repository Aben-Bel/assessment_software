import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit onClick event when button is clicked', () => {
    const eventSpy = spyOn(component.onClick, 'emit');

    const button = fixture.debugElement.query(By.css('button'));
    button.triggerEventHandler('click', null);

    expect(eventSpy).toHaveBeenCalled();
  });

  it('should set the button style based on the "Filled" variant input', () => {
    component.variant = 'Filled';
    component.color = 'black';
    fixture.detectChanges();

    const button = fixture.debugElement.query(By.css('button')).nativeElement;

    expect(button.style.backgroundColor).toBe('rgb(48, 86, 211)'); // rgb equivalent of '#3056d3'
    expect(button.style.color).toBe('black');
    expect(button.style.border).toBe('none');
  });

  it('should set the button style based on the "Outlined" variant input', () => {
    component.variant = 'Outlined';
    component.color = 'white';
    fixture.detectChanges();

    const button = fixture.debugElement.query(By.css('button')).nativeElement;

    expect(button.style.backgroundColor).toBe('transparent');
    expect(button.style.color).toBe('white');
    expect(button.style.border).toBe('1px solid rgb(48, 86, 211)'); // rgb equivalent of '#3056d3'
  });

  it('should set the button style based on the "Standard" variant input', () => {
    component.variant = 'Standard';
    component.color = 'black';
    fixture.detectChanges();

    const button = fixture.debugElement.query(By.css('button')).nativeElement;

    expect(button.style.backgroundColor).toBe('transparent');
    expect(button.style.color).toBe('black');
    expect(button.style.border).toBe('none');
  });
});
