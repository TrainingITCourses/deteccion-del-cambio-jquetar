import {Component} from '@angular/core';
import {SwUpdate, UpdateAvailableEvent} from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  constructor(private swUpdate: SwUpdate) {
    if (this.swUpdate.isEnabled) {
      if (!this.swUpdate.isEnabled) {
        console.log('Nope 🙁');
      }
      this.swUpdate.available.subscribe((event: UpdateAvailableEvent) => {
        const msg = 'current: ' + event.current.hash + '. Load new: ' + event.available.hash;
        if (confirm(msg + ', Click ok to install')) {
          window.location.reload();
        }
      });
    }
  }
}
