import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMenuComponent } from './app-menu.component';

describe('AppMenuComponent', () => {
  let component: AppMenuComponent;
  let fixture: ComponentFixture<AppMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have 'Venn Diagram Generator' app title`, async(() => {
    const fixture = TestBed.createComponent(AppMenuComponent);
    const appMenu = fixture.debugElement.componentInstance;
    expect(appMenu.title).toEqual('Venn Diagram Generator');
  }));
  
});
