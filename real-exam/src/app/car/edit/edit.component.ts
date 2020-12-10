import { Component, Input, OnInit } from '@angular/core';
import { ICar } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  @Input() car: ICar;

  constructor() { }

  ngOnInit(): void {
  }

}
