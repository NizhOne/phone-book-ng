import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import { RowData } from '../RowData';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  @Output() onAdd = new EventEmitter<RowData>();
  @Input() isEditing: any;
  public form: FormGroup;
  constructor(public fb: FormBuilder) {
    this.form = fb.group({
      name: new FormControl('', Validators.required),
      phoneNumber: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
    });
  }

  ngOnInit() {
    if (this.isEditing) {
      this.form.patchValue(this.isEditing);
    }
  }

  onSubmit() {
    if (this.form.status === 'VALID') {
      this.onAdd.emit({id: Date.now(), ...this.form.value});
    }
  }
}
