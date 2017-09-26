import { Component, OnInit } from '@angular/core';

// this won't pass linting
import { Observable } from 'rxjs';
// we need to be more explicit so as to only bundle what we require
// import { Observable } from 'rxjs/Observable';
// import '/add/observable/of';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // change to access modifier so the code passes linting and works with aot
  private title = '';
  message = '';

  ngOnInit(): void {
  // change the text and access modifier so the tests pass, expects 'the husky demo'
    Observable.of('the wrong text')
    .subscribe(s => {
      this.title = s;
    });
  }
  submit() {
    console.log(this.message);
  }
}
