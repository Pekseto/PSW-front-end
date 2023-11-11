import { Component, OnChanges, OnInit, Output } from '@angular/core';
import { Point } from '../../tour-authoring/model/points.model';
import { Tour } from '../../tour-authoring/model/tour.model';
import { Position } from '../model/position.model';

@Component({
  selector: 'xp-tour-execution',
  templateUrl: './tour-execution.component.html',
  styleUrls: ['./tour-execution.component.css']
})
export class TourExecutionComponent implements OnInit {

  position: Position
  tour: Tour = {id: 1,name: "Markova", description: "odlicna",
                  difficult: 2, tags:"nista", status:"draft", price: 3, authorId: 1}

  ngOnInit(): void {
    
    };

    handleUpdatedPosition(updatedPosition: Position) {
      this.position = updatedPosition;
      console.log(this.position)
    }
}
