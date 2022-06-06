import { Component, OnInit } from '@angular/core';
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
    private kindergartenService: KindergartenService
  ) { }

  ngOnInit(): void {
  }

}
