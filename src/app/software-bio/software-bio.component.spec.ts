import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareBioComponent } from './software-bio.component';

describe('SoftwareBioComponent', () => {
  let component: SoftwareBioComponent;
  let fixture: ComponentFixture<SoftwareBioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoftwareBioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftwareBioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
