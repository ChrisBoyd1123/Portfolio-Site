import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareProjectsComponent } from './software-projects.component';

describe('SoftwareProjectsComponent', () => {
  let component: SoftwareProjectsComponent;
  let fixture: ComponentFixture<SoftwareProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoftwareProjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftwareProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
