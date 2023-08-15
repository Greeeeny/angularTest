import { Component, OnInit } from '@angular/core';
//<p>里，title属性需鼠标悬停一段时间出现
@Component({
  selector: 'app-five',
  templateUrl: './five.component.html',
  styleUrls: ['./five.component.scss']
})
export class FiveComponent  {

//MVVM： Model
uname = 'test name' //可以不写也可以写‘；’
uage = 20
printUname() {
  console.log(this.uname)
  }

}
