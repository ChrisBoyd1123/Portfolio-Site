import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBioComponent } from './home.component';

describe('HomeBioComponent', () => {
  let component: HomeBioComponent;
  let fixture: ComponentFixture<HomeBioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeBioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
