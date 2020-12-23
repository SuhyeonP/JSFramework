import { Component } from '@angular/core';

const array:string[]=['d0','d1','d2']
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title : string = 'haha';
  showArray : string[];
  visible:boolean=true;
  id:string;
  pwd:string;
  vis1:boolean=false;
  vis2:boolean=false;
  login:boolean=false;

  tryLogin():void{
    console.log(this.id,this.pwd);
    if(this.id==='1234'){
      this.vis1=true;
      this.vis2=false;
      this.login=true;
    }else{
      this.vis1=false;
      this.vis2=true;
      this.login=true;
    }
  }
  tryLogout():void{
    this.vis1=false;
    this.vis2=false;
    this.login=false;
    this.id='';
    this.pwd='';
  }

  constructor (){  //빌드전에 실행되는거같음(화면 만들어지기전)
    this.showArray=array;
  }
  public clickhi () : void{
    this._innerFunc();
    console.log(array);
    console.log(this.title);
  }
  public changeVs():void{
    this.visible=!this.visible;
  }

  private _innerFunc(){
    array.push('d'+array.length);
  }
}
