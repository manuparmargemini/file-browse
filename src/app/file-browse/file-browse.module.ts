import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileBrowseComponent } from './file-browse.component';
import { ProgressComponent } from './progress/progress.component';



@NgModule({
  declarations: [FileBrowseComponent, ProgressComponent],
  imports: [
    CommonModule
  ],
  exports: [FileBrowseComponent]
})
export class FileBrowseModule { }
