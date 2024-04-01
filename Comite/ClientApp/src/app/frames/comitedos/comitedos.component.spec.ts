import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComitedosComponent } from './comitedos.component';

describe('ComitedosComponent', () => {
  let component: ComitedosComponent;
  let fixture: ComponentFixture<ComitedosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComitedosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComitedosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
