import {Component, inject, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {ConfirmationDialogComponent} from "../confirmation-dialog/confirmation-dialog.component";
import {ProjectsApiService} from "../../../home/services/projects-api.service";
import {MatSnackBar} from "@angular/material/snack-bar";

interface IMethodology{
  name: string;
  description:string
}

@Component({
  selector: 'app-form-create-project',
  templateUrl: './form-create-project.component.html',
  styleUrl: './form-create-project.component.css'
})
export class FormCreateProjectComponent implements OnInit{
  private _snackBar = inject(MatSnackBar);

  userId:number;
  programmingLanguagesList=[
    {id:1,name:"Javascript"},
    {id:2,name:"Typescript"},
    {id:3,name:"HTML"},
    {id:4,name:"CSS"},
    {id:5,name:"Python"},
    {id:6,name:"PHP"},
    {id:7,name:"Java"},
    {id:8,name:"C_Sharp"},
    {id:9,name:"C_PLUS_PLUS"},
    {id:10,name:"C"},
    {id:11,name:"Kotlin"},
    {id:12,name:"Swift"},
    {id:13,name:"Dart"},
    {id:14,name:"Ruby"},
  ]

  frameworksList = [
    { id: 1, name: "Vue_Js" },
    { id: 2, name: "Angular" },
    { id: 3, name: "React" },
    { id: 4, name: "Bootstrap" },
    { id: 5, name: "Tailwind_CSS" },
    { id: 6, name: "Express" },
    { id: 7, name: "Django" },
    { id: 8, name: "Flask" },
    { id: 9, name: "Laravel" },
    { id: 10, name: "Svelte" },
    { id: 11, name: "Spring_Boot" },
    { id: 12, name: "ASP_NET" },
    { id: 13, name: "Flutter" },
    { id: 14, name: "Jetpack_Compose" },
    { id: 15, name: "React_Native" },
    { id: 16, name: "Xamarin" },
    { id: 17, name: "Tkinter" },
    { id: 18, name: "Qt" },
    { id: 19, name: "Swing" },
    { id: 20, name: "JavaFX" },
    { id: 21, name: "WPF" },
    { id: 22, name: "Electron" }
  ];


  projectCurrencyList=[
    {id:1,name:"PEN"},
    {id:2,name:"USD"}
  ]

  methodologiesList:IMethodology[]=[]
  // -----------

  selectedFrameworksAux:string[]=[]

  selectedProgrammingLanguagesAux:string[]=[]

  // -----------

  form: FormGroup;
  //hideTechnologies = new FormControl(false);
  hideMethodologies = new FormControl(true);

  selectedLanguages:string[] = [];
  selectedFrameworks:string[] = [];

  removeSelectedLanguage(index:number, list: string[]){
    list.splice(index, 1);
    this.selectedProgrammingLanguagesAux.splice(index,1);
  }

  removeSelectedFramework(index:number, list: string[]){
    list.splice(index,1);
    this.selectedFrameworksAux.splice(index,1);
  }

  constructor(private fb: FormBuilder, public dialog: MatDialog,private projectsService:ProjectsApiService) {
    this.userId = Number(localStorage.getItem('id'));
    this.form = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      projectType: ['', Validators.required],
      languages:this.fb.array([]),
      frameworks:this.fb.array([]),
      presupuesto: ['', Validators.required],
      currency: ['PEN', Validators.required],
      methodologyName: [''],
      methodologyDescription: [''],
    });

    this.hideMethodologies.valueChanges.subscribe((checked: boolean | null) => {
      this.methodologiesList=[]
    });
  }
  ngOnInit() {

  }


  onSubmit() {
    if (this.form.valid /*&& this.languages.length>0 && this.frameworks.length>0*/) {

      const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
        width: '400px',
        data: {message: '¿Estás seguro de que quieres publicar el proyecto?'}
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result) {

          let project ={
            name: this.form.get('title')?.value,
            description: this.form.get('description')?.value,
            ownerId:this.userId,
            languages:this.form.get('languages')?.value,
            frameworks:this.form.get('frameworks')?.value,
            type:this.form.get('projectType')?.value,
            budget:this.form.get('presupuesto')?.value,
            currency:this.form.get('currency')?.value,
            methodologies:this.methodologiesList
          }
          /*this.projectsService.postProject(project).subscribe(response=>{
            console.log(response)
          })*/
          this.projectsService.postProject(project).subscribe({
            next: result => {
              this._snackBar.open("Proyecto publicado","Close",{
                duration: 3000,
              })
            },
            error: error => {
              this._snackBar.open("Error","Close",{
                duration: 2000,
              })
            }
          })
        }
      });
    } else {
      console.log('Formulario no válido');
    }
  }

  get languages():FormArray{
    return this.form.get('languages') as FormArray;
  }

  get frameworks():FormArray{
    return this.form.get('frameworks') as FormArray;
  }

  addingLanguages(languageName:string){
    this.selectedProgrammingLanguagesAux.push(languageName);
    const numberControl = this.fb.control(languageName)
    this.languages.push(numberControl);
  }

  addingFrameworks(frameworkName:string){
    this.selectedFrameworksAux.push(frameworkName);
    const numberControl = this.fb.control(frameworkName)
    this.frameworks.push(numberControl);
  }

  addingMethodology(){
    let methodology:IMethodology={
      name:this.form.get('methodologyName')?.value,
      description:this.form.get('methodologyDescription')?.value,
    }

    this.methodologiesList.push(methodology);
    this.form.get('methodologyName')?.setValue('')
    this.form.get('methodologyDescription')?.setValue('')
  }
}
