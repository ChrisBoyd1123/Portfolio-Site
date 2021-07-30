import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IllustrationCommissionsComponent } from './illustration-commissions.component';

describe('IllustrationCommissionsComponent', () => {
  let component: IllustrationCommissionsComponent;
  let fixture: ComponentFixture<IllustrationCommissionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IllustrationCommissionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IllustrationCommissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
