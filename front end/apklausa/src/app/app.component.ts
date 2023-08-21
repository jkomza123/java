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
  public currentQuestion:number;
  public points:number = 0;
  public ats:string[];


  //constructor(private atsakymaiservice: AtsakymaiService) { }

  constructor(private klausimaiservice: KlausimaiService) { }

  ngOnInit() {

    const arr=["","",""];
    this.ats=arr;
    this.currentQuestion=-1;
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
  
  nextQuestion(){

    document.getElementById("fname").style.display="none";

    if(this.currentQuestion<this.klausimai.length-1){
      this.currentQuestion++;
      document.getElementById("next-btn").innerHTML="Kitas";
      document.getElementById("status").innerHTML=(this.currentQuestion+1).toString()+" iš "+this.klausimai.length.toString();
      document.getElementById("klaus").innerHTML=this.klausimai[this.currentQuestion].klausimas;
      document.getElementById("ats1").innerHTML=this.klausimai[this.currentQuestion].ats1;
      document.getElementById("ats2").innerHTML=this.klausimai[this.currentQuestion].ats2;
      document.getElementById("ats3").innerHTML=this.klausimai[this.currentQuestion].ats3;
      document.getElementById("ats1").style.display = "block";
      document.getElementById("ats2").style.display = "block";
      document.getElementById("ats3").style.display = "block";

      document.getElementById("ats1").style.pointerEvents = "all";
      document.getElementById("ats2").style.pointerEvents = "all";
      document.getElementById("ats3").style.pointerEvents = "all";
      document.getElementById("ats1").classList.remove("correct");
      document.getElementById("ats1").classList.remove("incorrect");
      document.getElementById("ats2").classList.remove("correct");
      document.getElementById("ats2").classList.remove("incorrect");
      document.getElementById("ats3").classList.remove("correct");
      document.getElementById("ats3").classList.remove("incorrect");
      document.getElementById("next-btn").style.display = "none"
    
    if(this.klausimai[this.currentQuestion].ats4){
      document.getElementById("ats4").innerHTML=this.klausimai[this.currentQuestion].ats4;
      document.getElementById("ats4").style.display = "block";
      document.getElementById("ats4").style.pointerEvents = "all";
      document.getElementById("ats4").classList.remove("correct");
      document.getElementById("ats4").classList.remove("incorrect");
    }
    else document.getElementById("ats4").style.display = "none";

      if(this.currentQuestion==this.klausimai.length-1){
        document.getElementById("next-btn").innerHTML="Baigti";
        document.getElementById("next-btn").addEventListener("click", ()=>{
          this.atsakymai.vardas= (<HTMLInputElement>document.getElementById("fname")).value;
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
    }
    else{
      document.getElementById("status").style.display="none";
      document.getElementById("ats1").style.display = "none";
      document.getElementById("ats2").style.display = "none";
      document.getElementById("ats3").style.display = "none";
      document.getElementById("ats4").style.display = "none";
      document.getElementById("klaus").innerHTML = "Jūs surinkote "+ this.points +" iš " + (this.currentQuestion+1).toString() + " taškų!";
      document.getElementById("fname").style.display = "none";
      document.getElementById("next-btn").style.display = "none";
      document.getElementById("finalbutton").style.display = "block";
      document.getElementById("finalbutton").addEventListener("click", ()=>{
        location.reload();
      })
    }
  }

  answer(currentQno:number,option:any,atsak:string){
      document.getElementById("next-btn").style.display = "block";
      this.ats[currentQno]=atsak??"";
      document.getElementById("ats1").style.pointerEvents = "none";
      document.getElementById("ats2").style.pointerEvents = "none";
      document.getElementById("ats3").style.pointerEvents = "none";
      document.getElementById("ats" + this.klausimai[this.currentQuestion].teisingas).classList.add("correct");

    if(document.getElementById("ats4")){
      document.getElementById("ats4").style.pointerEvents = "none";
      }

    if(option==this.klausimai[this.currentQuestion].teisingas){
      this.points++;
      }
    
    else{
    document.getElementById("ats" + option).classList.add("incorrect");
  }
}
}