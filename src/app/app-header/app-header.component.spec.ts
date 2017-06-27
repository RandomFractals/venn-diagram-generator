import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AppHeaderComponent} from './app-header.component';

describe('AppHeaderComponent', () => {
  let component: AppHeaderComponent;
  let fixture: ComponentFixture<AppHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppHeaderComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have 'Venn Diagram Generator' app title`, async(() => {
    const fixture = TestBed.createComponent(AppHeaderComponent);
    const appMenu = fixture.debugElement.componentInstance;
    expect(appMenu.title).toEqual('Venn Diagram Generator');
  }));
  
});
