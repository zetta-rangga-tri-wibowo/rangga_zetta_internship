import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from "@angular/material/table";
import { School } from "../../school/school.model";

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.css']
})
export class StudentTableComponent implements OnInit {
  loading = true;
  dummyData: any[] = [
    {
      short_name: "Short name",
      long_name: "Long name",
      school_siret: "School siret",
      school_address: [],
      preparation_center_ats: [
        {
          rncp_title_id: {
            _id: "1",
            short_name: "Short name"
          },
          class_id: {
            _id: "1",
            name: "Name"
          }
        }
      ],
      certifier_ats: [],
      class: "Class",
      status: "Status"
    }
  ]
  displayedColumns: string[] = [ 'short_name', 'long_name', 'school_siret', 'school_address', 'preparation_center_ats', 'certifier_ats', "class", "status", "actions" ];
  dataSource = new MatTableDataSource(this.dummyData);


  constructor() { }

  ngOnInit(): void {

  }

}
