import { Component, Input } from "@angular/core";

@Component({
  selector:'app-child',
  template:`
          <p>{{msg}}</p>
  `
})

export class ChildComponent{
    @Input() msg:string;
}

