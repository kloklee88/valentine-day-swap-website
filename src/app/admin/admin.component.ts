import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  response: string;
  playerNames: string;

  constructor(
    private globalService: GlobalService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.globalService.getSendersOnly()
      .subscribe(players => {
        this.playerNames = players.toString();
      });
  }

  shuffle() {
    this.globalService.shufflePlayers();
    this.response = "Player pairs have been shuffled!";
  }

  initialize() {
    let playerNamesArray = this.playerNames.split(',');
    playerNamesArray = playerNamesArray.map(name => name.trim().charAt(0).toUpperCase() + name.trim().slice(1).toLowerCase());
    console.log(playerNamesArray);
    let playerJson = [];
    playerNamesArray.forEach(name => {
      playerJson.push({
        "sender": name,
        "recipient": name
      })
    });
    console.log(playerJson);
    this.globalService.deleteData().subscribe(() => {
      this.globalService.postData(playerJson).subscribe(responseData => {
        this.loadData();
        this.response = "Players have been successfully updated!";
      });
    })
  }

}
