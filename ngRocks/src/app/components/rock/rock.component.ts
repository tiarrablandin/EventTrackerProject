import { Component, OnInit } from '@angular/core';
import { Rock } from 'src/app/models/rock';
import { RockService } from 'src/app/services/rock.service';

@Component({
  selector: 'app-rock',
  templateUrl: './rock.component.html',
  styleUrls: ['./rock.component.css']
})
export class RockComponent implements OnInit {

  title: string = 'Rocks';
  selected: Rock | null = null;
  newRock: Rock = new Rock();
  editRock: Rock | null = null;
  showComplete: boolean = false;
  searchTerm: string = "";

  rocks: Rock[] = [];

  constructor(private rockService: RockService) { }

  ngOnInit(): void {
    this.reload();
  }

  search(){
    this.rockService.search(this.searchTerm).subscribe({
      next: (data) => {
        this.rocks = data;
      },
      error: (err) => {
        console.error("RockComponent.search(): error searching for rock");
        console.error(err);
      }
    });
  }

  reload(){
    this.rockService.index().subscribe({
      next: (data) => {
        this.rocks = data;
      },
      error: (err) => {
        console.error("RockComponent.reload(): error loading rocks");
        console.error(err);
      }
    });
  }

  rockCount(){
    return this.rocks.length;
  }

  displayRock(rock: Rock){
    if(this.selected === rock){
      this.selected = null;
    }else{
      this.selected = rock;
    }
  }

  // setAddRock() {
  // }

  addRock() {
    this.rockService.create(this.newRock).subscribe({
      next: (data) => {
        this.newRock = new Rock();
        this.reload();
      },
      error: (err) => {
        console.error("RockComponent.create(): error creating rock");
        console.error(err);
      }
    });
  }

  updateRock(updatedRock: Rock) {
    this.rockService.update(updatedRock).subscribe({
      next: (data) => {
        this.reload();
        this.editRock = null;
        this.selected = data;
      },
      error: (err) => {
        console.error("RockComponent.updateRock(): error updating rock");
        console.error(err);
      }
    });
  }

  setEditRock() {
    this.editRock = Object.assign({}, this.selected);
  }

  deleteRock(id: number){
    this.rockService.delete(id).subscribe({
      next: () => {
        this.reload();
      },
      error: (err) => {
        console.error("RockComponent.deleteRock(): error deleting rock");
        console.error(err);
      }
    });
  }

}
