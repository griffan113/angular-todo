import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title = 'Task Tracker';

  constructor() {}

  public ngOnInit(): void {}

  public handleAddTask() {
    console.log('Add Task');
  }
}
