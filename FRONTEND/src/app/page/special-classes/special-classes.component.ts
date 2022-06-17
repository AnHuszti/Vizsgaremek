import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpecialClasses } from 'src/app/model/special-classes';
import { ConfigService } from 'src/app/service/config.service';
import { SpecialClassesService } from 'src/app/service/special-classes.service';

@Component({
  selector: 'app-special-classes',
  templateUrl: './special-classes.component.html',
  styleUrls: ['./special-classes.component.scss']
})
export class SpecialClassesComponent implements OnInit {

  columns = this.config.specialClassesTableColumns

  list$ = this.specialClassesService.getAll()

  constructor(
    private config: ConfigService,
    private specialClassesService: SpecialClassesService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  jumpToEdit(specClas: SpecialClasses): void {
    this.router.navigate(['/kulonora/edit', specClas._id])
  }
}
