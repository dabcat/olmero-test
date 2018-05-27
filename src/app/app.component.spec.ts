import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

import { ApiService } from './services/api.service';
import { ItemModule } from './item/item.module';
import { HttpClientModule } from '@angular/common/http';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ItemModule, HttpClientModule ],
      providers: [ ApiService ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
