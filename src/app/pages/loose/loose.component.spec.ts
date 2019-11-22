import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LooseComponent } from './loose.component';

describe('LooseComponent', () => {
  let component: LooseComponent;
  let fixture: ComponentFixture<LooseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LooseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LooseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
