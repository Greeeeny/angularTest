import { Component } from "@angular/core";
//装饰器 Decorator
//-- 用于指定一个Class的用途,本质是函数，所以要加()
//---ts里面的概念
//-- 用@开头
@Component({
    template:'<h2>my Component</h2><hr><two-component></two-component>',
    //selector:'[myTitle]' ---当作属性来用
    //selector:'.oneComponent' ---当作class来用
    selector:'oneComponent' //当作元素标签用
})
export class oneComponent { 

}

/*
<div myTitle="xx"></div>
<oneComponent></oneComponent>
<p class="oneComponent"></p>
*/