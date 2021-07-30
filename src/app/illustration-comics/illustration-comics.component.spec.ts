import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IllustrationComicsComponent } from './illustration-comics.component';

describe('IllustrationComicsComponent', () => {
  let component: IllustrationComicsComponent;
  let fixture: ComponentFixture<IllustrationComicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IllustrationComicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IllustrationComicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
