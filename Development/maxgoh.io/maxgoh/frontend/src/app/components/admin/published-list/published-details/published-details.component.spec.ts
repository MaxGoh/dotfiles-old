import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishedDetailsComponent } from './published-details.component';

describe('PublishedDetailsComponent', () => {
  let component: PublishedDetailsComponent;
  let fixture: ComponentFixture<PublishedDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublishedDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishedDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
