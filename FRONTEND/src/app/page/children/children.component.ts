import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Children } from 'src/app/model/children';
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

  new = new Children()

  constructor(
    private config: ConfigService,
    private childrenService: ChildrenService,
    private router: Router
  ) {}

  ngOnInit(): void {
  }
  
  jumpToEdit(child: Children): void {
    if (child._id != "0") {
      this.router.navigate(['/gyermek/edit', child._id])
    } else {
      this.router.navigate(['/gyermek/edit', 0])
    }
  }
}
