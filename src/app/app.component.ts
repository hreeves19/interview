import { Component } from '@angular/core';
import { SlugifyPipe } from './pipes/slugify.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers: [SlugifyPipe]
})
export class AppComponent {
  title = 'interview';
  list: Array<string> = ['test1', 'test2', 'test3', 'test4', 'test5', 'test6', 'test7', 'test8', 'test9', 'test10'];
  unslugifiedString = 'testing slugify stuffs';
  constructor(
    public slugify: SlugifyPipe
  ) {
    this.unslugifiedString = this.slugify.transform(this.unslugifiedString);
    console.log(this.unslugifiedString);
  }
}
