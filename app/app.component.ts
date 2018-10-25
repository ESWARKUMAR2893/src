import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'First Opinion – The free way to talk to a doctor2';

  /*images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);*/

  /*images = [1, 2, 3].map(() => `/Users/rd/Desktop/Images=${Math.random()}`);*/

  images =[ '/src/images/6.png',
            '/src/images/19.png',
            '/src/images/6.png'];


}
