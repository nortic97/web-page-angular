import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PortafolioWeb';

  ngOnInit(): void {

    this.thomas();

  }

  thomas() {
    let pattern = ['t', 'h', 'o', 'm', 'a', 's', 'n', 'g', '1', '5', '1', '2', '1', '3'];
    let current = 0;

    let keyHandler = function (event: { key: string; }) {

      // If the key isn't in the pattern, or isn't the current key in the pattern, reset
      if (pattern.indexOf(event.key) < 0 || event.key !== pattern[current]) {
        current = 0;
        return;
      }

      // Update how much of the pattern is complete
      current++;

      // If complete, alert and reset
      if (pattern.length === current) {
        current = 0;
        alert("Code active");
        location.href = "#/tngeygmjdnp";
      }

    };

    // Listen for keydown events
    document.addEventListener('keydown', keyHandler, false);
  }

}
