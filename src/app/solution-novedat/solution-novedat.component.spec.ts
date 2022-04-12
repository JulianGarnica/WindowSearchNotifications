import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionNovedatComponent } from './solution-novedat.component';

describe('SolutionNovedatComponent', () => {
  let component: SolutionNovedatComponent;
  let fixture: ComponentFixture<SolutionNovedatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolutionNovedatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionNovedatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
