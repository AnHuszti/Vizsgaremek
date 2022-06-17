import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Kindergarten } from 'src/app/model/kindergarten';
import { ConfigService } from 'src/app/service/config.service';
import { KindergartenService } from 'src/app/service/kindergarten.service';

@Component({
  selector: 'app-kindergarten',
  templateUrl: './kindergarten.component.html',
  styleUrls: ['./kindergarten.component.scss']
})
export class KindergartenComponent implements OnInit {

  columns = this.config.kindergartenTableColumns

  list$ = this.kindergartenService.getAll()

  constructor(
    private config: ConfigService,
    private kindergartenService: KindergartenService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  jumpToEdit(kindergarten: Kindergarten): void {
    this.router.navigate(['/tagovoda/edit', kindergarten._id])
  }
}
