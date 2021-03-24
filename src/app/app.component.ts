import { Component, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sampleAngular';
  toggleMenu: boolean = false;
  exportImportOptions = [
    {label: 'Export', value: 'export'},
    {label: 'Import', value: 'import'},
    {label: 'Download Sample', value: 'download'}
  ];
  @ViewChild('selectionButton') selectionButton;
  constructor(private renderer: Renderer2) {}
  menuSelectionHandler(selectedItem: string) {
    console.log(selectedItem);
  }
  ngOnInit() {
    this.renderer.listen('window', 'click',(e:Event)=>{
      if(this.selectionButton && !this.selectionButton.nativeElement.contains(e.target)){
        console.log('came in');
        this.toggleMenu=false;
      }
 });
  }
}
