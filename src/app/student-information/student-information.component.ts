import { Component, OnInit } from '@angular/core';
import { InfoServiceService } from '../services/info-service.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

export interface PeriodicElement {
  id: number;
  name: string;
  email: string;
  password: string;
  c_password: string;
}
  
@Component({
  selector: 'app-student-information',
  templateUrl: './student-information.component.html',
  styleUrls: ['./student-information.component.css']
})

export class StudentInformationComponent implements OnInit{

 
  dataSource: PeriodicElement[] = [];

  constructor(private _dataService:InfoServiceService,private notifyService : InfoServiceService, private fb: FormBuilder, public dialog: MatDialog) {
    
  }
  displayedColumns: string[] = ['id', 'name', 'email','password','c_password'];
  myForm:FormGroup;
    values:any =[];
    response:any;
    ngOnInit() {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      c_password: ['', Validators.required]
      
    });
    this.onDisplay();
  
    }

  onSubmit(values)
  {
    this._dataService.saveUser(values).subscribe(
      (res)=> {this.response = res;
        console.log(res);
      },
      (err) => { console.error(err); }
    );
        
  }
 
  onDisplay()
  {
     this._dataService.getUser().subscribe((data)=>{
      
      this.dataSource.push(data);
      
    })
  }
  
  }  