# JSON Dynamic form

Have you ever dream building your form just by passing some JSON configuration from your server to Angular.
If the answer is yes, this project is maybe for you!

Thanks to Ted Motto's post [Configurable Reactive Forms in Angular with dynamic components](https://toddmotto.com/angular-dynamic-components-forms), I adapted his project to be able to pass a JSON file.

## How does it work

1) app.module

Import the module and config file

```
import { JsonDynamicFormModule } from 'json-dynamic-form';
import { JsonDynamicFormConfig } from 'json-dynamic-form';
```

Tell your module where to fetch your JSON files

```
const JsonDynamicFormConfig: JsonDynamicFormConfig = {
  serverPath: 'http://localhost:4200/assets/'
};
```

Declare your the Dynamic Form Module

```
imports: [
  JsonDynamicFormModule.forRoot(JsonDynamicFormConfig)
]
````

2) Create a JSON file

See examples in the assets folder


2) Display your forms

```
  <jdf-dynamic-form
    formName="login"
    #form="jdfDynamicForm"
    (submit)="submit($event)">
  </jdf-dynamic-form>
```

N.B: - formName must be the name of your JSON file
     - variable "form" retrieves your form object in your component

That's it!

## Notes

The project support basic validation, several types of HTML form elements, wrapping, adding classes, etc.

Of course, feel free to propose any evolution.
