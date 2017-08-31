import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menuName: string[];

  constructor() { }

  ngOnInit() {
  //копки меню
  this.menuName = ['CONTACT','BLOG','WORK','SERVICE',' ABOUT'];
}
}
