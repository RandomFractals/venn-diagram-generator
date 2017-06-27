import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { TopicListComponent } from './topic-list/topic-list.component';
import { VennDiagramComponent } from './venn-diagram/venn-diagram.component';
import { AppFooterComponent } from './app-footer/app-footer.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        AppHeaderComponent, 
        TopicListComponent, 
        VennDiagramComponent,
        AppFooterComponent, 
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should render title in h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Venn Diagram Generator');
  }));
});
