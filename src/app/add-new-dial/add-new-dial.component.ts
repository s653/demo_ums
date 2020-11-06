import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { InfoServiceService } from '../services/info-service.service';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-add-new-dial',
  templateUrl: './add-new-dial.component.html',
  styleUrls: ['./add-new-dial.component.css']
})
export class AddNewDialComponent implements OnInit {
  

  constructor(private _dataService:InfoServiceService,public fb:FormBuilder) { }

    myForm:FormGroup;
    values:any =[];
    ngOnInit() {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      city: ['', Validators.required]
      
    });
    }

    onSubmit(values)
  {
    this._dataService.saveUser(values).subscribe();
      
  }
}