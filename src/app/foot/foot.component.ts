import { Component } from '@angular/core';

@Component({
  selector: 'app-foot',
  templateUrl: './foot.component.html',
  styleUrls: ['./foot.component.scss']
})
export class FootComponent {
  
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}
