import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Observable } from 'rxjs';
import { Children } from 'src/app/model/children';
import { ChildrenService } from 'src/app/service/children.service';

@Component({
  selector: 'app-edit-child',
  templateUrl: './edit-child.component.html',
  styleUrls: ['./edit-child.component.scss']
})
export class EditChildComponent implements OnInit {

  child$: Observable<Children> = this.activatedRoute.params.pipe(
    switchMap( params => this.childrenService.getOne(params['id']) )
   )

  constructor(
    private router: Router,
    private childrenService: ChildrenService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

}
