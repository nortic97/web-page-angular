import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThomasComponent } from './thomas.component';

describe('ThomasComponent', () => {
  let component: ThomasComponent;
  let fixture: ComponentFixture<ThomasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThomasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThomasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
