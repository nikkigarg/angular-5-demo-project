import { Employee } from './model';
import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>`,
  templateUrl: './servers.component.html',
  // template:`<div>hi</div>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverStatus: string = 'offline';
  serverCreationStatus = 'No server was created!';
  serverName = 'Testserver';
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2'];
  color = ''
  options = ['green', 'red', 'blue'];
  emp : Employee = new Employee('niki');

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
    console.log(this.emp)
  }
  // On create server status
  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }
  // to get server status
  getServerStatus() {
    return this.serverStatus;
  }
  // to get color
  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
