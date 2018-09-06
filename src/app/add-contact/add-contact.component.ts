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
  @Input() buttonName = 'Add';
  public form: FormGroup;
  public isValid = true;
  constructor(public fb: FormBuilder) {
    this.form = fb.group({
      name: new FormControl('', Validators.required),
      phoneNumber: new FormControl('', Validators.compose(
        [Validators.required, Validators.pattern(/^[\\+]?[(]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{4,6}$/)])),
      email: new FormControl('', Validators.compose([Validators.email, Validators.required])),
    });
  }

  get name() { return this.form.get('name'); }
  get phoneNumber() { return this.form.get('phoneNumber'); }
  get email() { return this.form.get('email'); }

  ngOnInit() {
    console.log(this.isEditing);
    if (this.isEditing) {
      this.form.patchValue(this.isEditing);
    }
  }

  onSubmit() {
    console.log(this.form);
    if (this.form.status === 'VALID') {
      this.isValid = true;
      this.onAdd.emit({id: Date.now(), ...this.form.value});
    } else {
      this.isValid = false;
    }
  }
}
