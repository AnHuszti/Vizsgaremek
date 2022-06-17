import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Observable } from 'rxjs';
import { Kindergarten } from 'src/app/model/kindergarten';
import { KindergartenService } from 'src/app/service/kindergarten.service';

@Component({
  selector: 'app-edit-kindergarten',
  templateUrl: './edit-kindergarten.component.html',
  styleUrls: ['./edit-kindergarten.component.scss']
})
export class EditKindergartenComponent implements OnInit {

  kindergarten$: Observable<Kindergarten> = this.activatedRoute.params.pipe(
   switchMap( params => this.kindergartenService.getOne(params['id']) )
  )

  constructor(
    private router: Router,
    private kindergartenService: KindergartenService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
  }

}
