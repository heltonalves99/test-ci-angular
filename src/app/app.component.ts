import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  anotherTitle = 'another-test';

  public showOnerName (): string {
    return 'Helton Alves';
  }

  public testString (): string {
    return 'Another String';
  }
}
