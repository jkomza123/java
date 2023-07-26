import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Atsakymai } from './atsakymai';
import { Klausimai } from './klausimai';
import { KlausimaiService } from './klausimai.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  klausimai: Klausimai[];
  atsakymai: Atsakymai;
  public currentQuestion:number = 0;
  public points:number = 0;
  public ats:string[];


  //constructor(private atsakymaiservice: AtsakymaiService) { }

  constructor(private klausimaiservice: KlausimaiService) { }

  ngOnInit() {
    const arr=["","",""];
    this.ats=arr;
    this.currentQuestion=0;
    this.getAll();
    this.atsakymai={
      id:0,
      ats1: "",
      ats2: "",
      ats3: "",
      taskai: 0,
      vardas: ""
  }
  }

  public getAll(): void{
    this.klausimaiservice.getAll().subscribe(
      (response: Klausimai[]) => {
        this.klausimai=response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
  )};
  nextButton = document.getElementById("next-btn");
  nextQuestion(){
    document.getElementById("ats1").style.pointerEvents = "all";
    document.getElementById("ats2").style.pointerEvents = "all";
    document.getElementById("ats3").style.pointerEvents = "all";
    if(document.getElementById("ats4")){
    document.getElementById("ats4").style.pointerEvents = "all"; 
    }

    document.getElementById("ats1").classList.remove("correct");
    document.getElementById("ats1").classList.remove("incorrect");
    document.getElementById("ats2").classList.remove("correct");
    document.getElementById("ats2").classList.remove("incorrect");
    document.getElementById("ats3").classList.remove("correct");
    document.getElementById("ats3").classList.remove("incorrect");
    if(document.getElementById("ats4")){
    document.getElementById("ats4").classList.remove("correct");
    document.getElementById("ats4").classList.remove("incorrect");
    }

      if(this.currentQuestion+1<this.klausimai.length){
        this.currentQuestion++;
        document.getElementById("next-btn").style.display = "none"
      }
      else if(this.currentQuestion+1==this.klausimai.length){
        document.getElementById("fname").style.display = "block";
        this.currentQuestion++;
        document.getElementById("klaus").innerHTML = "Įveskite savo vardą";
        document.getElementById("next-btn").innerHTML = "Pateikti";
        document.getElementById("ats1").style.display = "none";
        document.getElementById("ats2").style.display = "none";
        document.getElementById("ats3").style.display = "none";
        if(document.getElementById("ats4")){
        document.getElementById("ats4").style.display = "none";}
        document.getElementById("next-btn").addEventListener("click", ()=>{
          this.savename();
          this.atsakymai.id=0;
          this.atsakymai.taskai=this.points;
          this.atsakymai.ats1=this.ats[0] ?? "";
          this.atsakymai.ats2=this.ats[1] ?? "";
          this.atsakymai.ats3=this.ats[2] ?? "";
          this.klausimaiservice.postAts(this.atsakymai).subscribe(
            (data: Atsakymai) =>{
              console.log(data);
            },
            (error: HttpErrorResponse) => {
              alert(error.message);
            }
          );
        })
      }
      else{

        document.getElementById("klaus").innerHTML = "Jūs surinkote "+ this.points +" iš " + (this.currentQuestion).toString() + " taškų!";
        document.getElementById("fname").style.display = "none";
        document.getElementById("next-btn").style.display = "none";
        document.getElementById("finalbutton").style.display = "block";
        document.getElementById("finalbutton").addEventListener("click", ()=>{
          location.reload();
        })
      }
  }

  answer(currentQno:number,option:any,atsak:string){
      this.ats[currentQno]=atsak??"";
      document.getElementById("ats1").style.pointerEvents = "none";
      document.getElementById("ats2").style.pointerEvents = "none";
      document.getElementById("ats3").style.pointerEvents = "none";
    if(document.getElementById("ats4")){
      document.getElementById("ats4").style.pointerEvents = "none";
      }
      document.getElementById("ats" + this.klausimai[this.currentQuestion].teisingas).classList.add("correct");
      document.getElementById("next-btn").style.display = "block";

    if(option==this.klausimai[this.currentQuestion].teisingas){
      document.getElementById("next-btn").style.display = "block";
      this.points++;
  }
    
    else{
    document.getElementById("ats" + option).classList.add("incorrect");
  }
}
savename(){
  this.atsakymai.vardas= (<HTMLInputElement>document.getElementById("fname")).value;
}
}