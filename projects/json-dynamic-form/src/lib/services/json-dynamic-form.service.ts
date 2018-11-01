import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Validators } from '@angular/forms';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { FieldConfig } from '../models/field-config.interface';

import { JsonDynamicFormConfigService } from './json-dynamic-form-config.service';

@Injectable({
  providedIn: 'root'
})
export class JsonDynamicFormService {

  constructor(@Inject(JsonDynamicFormConfigService) private config,
              private http: HttpClient) { }

  public getForm(formName: string): Observable <FieldConfig[]> {
    return this.http.get(this.config.serverPath + formName + '.json')
      .pipe(
        map((result: FieldConfig[]) => {
          result['form'].map(element => {

            // Transform JSON string validation parameters to Form Validators objects.
            if (element && element.hasOwnProperty('validation')) {
              const validation = [];
              Object.keys(element.validation).map(val => {
                switch (val) {
                  case 'minLength' :
                    validation.push(Validators.minLength(element.validation[val]));
                    break;
                  case 'required' :
                    validation.push(Validators.required);
                    break;
                }
              });
              element.validation = validation;
            }

          });
          return result;
        })
      );
  }

}
