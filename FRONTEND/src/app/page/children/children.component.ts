import { Component, OnInit } from '@angular/core';
import { ChildrenService } from 'src/app/service/children.service';
import { ConfigService } from 'src/app/service/config.service';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.scss']
})

export class ChildrenComponent implements OnInit {

  columns = this.config.childrenTableColumns

  list$ = this.childrenService.getAll()

  constructor(
    private config: ConfigService,
    private childrenService: ChildrenService
  ) {}

  ngOnInit(): void {
  }

}
