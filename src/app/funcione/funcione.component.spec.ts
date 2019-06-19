import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncioneComponent } from './funcione.component';

describe('FuncioneComponent', () => {
  let component: FuncioneComponent;
  let fixture: ComponentFixture<FuncioneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuncioneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
