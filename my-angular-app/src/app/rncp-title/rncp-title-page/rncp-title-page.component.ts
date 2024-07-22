import { Component, OnInit, OnDestroy } from '@angular/core';
import { RncpTitleService } from "../rncp-title.service";
import { RNCP } from "../rncp-title.model";
import { MatTabChangeEvent } from "@angular/material/tabs";
import { SubSink } from "subsink";

@Component({
  selector: 'app-rncp-title-page',
  templateUrl: './rncp-title-page.component.html',
  styleUrls: ['./rncp-title-page.component.css']
})
export class RncpTitlePageComponent implements OnInit, OnDestroy {
  rncpTitleData: RNCP[] = [];
  public filteredRncpTitleData: RNCP[] = []; // remove public
  public listMenuTab: string[] = [];
  public searchTerm: string = '';
  private subs = new SubSink();

  constructor(private rncpTitleServices: RncpTitleService) {}

  ngOnInit(): void {
    this.subs.add(
      this.rncpTitleServices.getRncpTitle().subscribe(data => {
        if (data) {
          this.rncpTitleData = data;
          this.getTabLabel(data);
          this.filteredRncpTitleData = [...this.rncpTitleData];
        }
      })
    );
  }

  getTabLabel(rncpTitleData: RNCP[]) {
    let label = rncpTitleData.map((rncpTitle) => rncpTitle.certifier.short_name).sort((a, b) => a.localeCompare(b));
    this.listMenuTab = ["All", ...new Set(label)]; 
  }

  filterRncpTitleData(selectedLabel: string): void {
    let filteredData = this.rncpTitleData;
    if (selectedLabel !== "All") {
      filteredData = filteredData.filter(rncpTitle => rncpTitle.certifier.short_name === selectedLabel);
    }
    if (this.searchTerm) {
      filteredData = filteredData.filter(rncpTitle => rncpTitle.short_name.toLowerCase().includes(this.searchTerm.toLowerCase()));
    }
    this.filteredRncpTitleData = filteredData;
  }

  onTabClick(event: MatTabChangeEvent): void {
    const selectedLabel = event.tab.textLabel;
    this.filterRncpTitleData(selectedLabel);
  }

  onSearchTermChange(): void {
    this.filterRncpTitleData("All");
  }

  resetAllFilter(): void {
    this.searchTerm = '';
    this.filterRncpTitleData("All");
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
