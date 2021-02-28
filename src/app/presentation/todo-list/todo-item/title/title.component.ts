import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
})
export class TitleComponent implements OnInit {
  @Input() title!: string;
  @Input() isEditing!: boolean;
  @Output() onChange = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  handleChange(title: string): void {
    this.onChange.emit(title);
  }
}
