import { Injectable } from '@angular/core';
import { BehaviorSubject,Observable,Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {


  constructor() { }
  public EmployeFormData = new BehaviorSubject(undefined);

}
