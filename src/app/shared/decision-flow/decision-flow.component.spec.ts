import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecisionFlowComponent } from './decision-flow.component';

describe('DecisionFlowComponent', () => {
  let component: DecisionFlowComponent;
  let fixture: ComponentFixture<DecisionFlowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecisionFlowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecisionFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
