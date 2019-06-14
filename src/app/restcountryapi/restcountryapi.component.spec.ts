import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestcountryapiComponent } from './restcountryapi.component';

describe('RestcountryapiComponent', () => {
  let component: RestcountryapiComponent;
  let fixture: ComponentFixture<RestcountryapiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestcountryapiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestcountryapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
