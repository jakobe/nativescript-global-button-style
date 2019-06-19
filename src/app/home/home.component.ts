import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bd-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title = 'Globals Button styles';
  ngOnInit(): void {
    setTimeout(() => this.themeColor = 'primary', 2000);
  }
  themeColor = 'dark';
}
