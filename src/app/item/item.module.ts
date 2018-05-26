import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './item.component';

// pipes
import { HighlightPipe } from '../pipes/highlight.pipe';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    ItemComponent,
    HighlightPipe
  ],
  exports: [
    ItemComponent,
    HighlightPipe
  ]
})
export class ItemModule { }
