import { Routes } from '@angular/router';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { TemplateFormsComponent } from './template-forms/template-forms.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ChildPageComponent } from './child-page/child-page.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { DynamicPageComponent } from './dynamic-page/dynamic-page.component';

export const routes: Routes = [
    {path:'reactive-forms',component:ReactiveFormsComponent},
    {path:'template-forms',component:TemplateFormsComponent},
    {path:'dynamic/:id',component:DynamicPageComponent},
    {path:'child',component:ChildPageComponent,children:[
        {path:"first", component:FirstPageComponent},
        {path:"second", component:SecondPageComponent},

    ]},
    {path:'',redirectTo:'/reactive-forms',pathMatch:'full'},
    {path:"**", component:ErrorPageComponent}
];
