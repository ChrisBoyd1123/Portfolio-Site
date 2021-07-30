import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareSoftskillsComponent } from './software-softskills.component';

describe('SoftwareSoftskillsComponent', () => {
  let component: SoftwareSoftskillsComponent;
  let fixture: ComponentFixture<SoftwareSoftskillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoftwareSoftskillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftwareSoftskillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
