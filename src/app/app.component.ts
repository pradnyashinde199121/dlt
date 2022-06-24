import { Component } from '@angular/core';
import {CommonService} from './services/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'treeView';

  constructor(private CommonService:CommonService){}
  ngOnInit(): void {
    this.getInput();
  }
  getInput(){
    const data={ level: 1 };
    this.CommonService.getInputVlues(data).subscribe(x=>{
      console.log(x);
    });
  }
}
