import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IllustrationBioComponent } from './illustration-gallery.component';

describe('IllustrationBioComponent', () => {
  let component: IllustrationBioComponent;
  let fixture: ComponentFixture<IllustrationBioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IllustrationBioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IllustrationBioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
