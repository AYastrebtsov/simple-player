import { Component, Input, Output, EventEmitter } from "@angular/core";

export interface PeriodicElement {
  id: number;
  name: string;
  file: string;
}

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.scss"],
})
export class TableComponent {
  displayedColumns: string[] = ["id", "name", "file"];
  @Input({ required: true }) dataSource!: PeriodicElement[];
  @Output() selectedEvent = new EventEmitter<number>();

  selectRow(id: number) {
    this.selectedEvent.emit(id - 1);
  }
}
