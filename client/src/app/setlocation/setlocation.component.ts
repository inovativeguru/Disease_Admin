import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { SetlocationService } from './setlocation.service';


@Component({
	selector: 'app-setlocation',
	templateUrl: './setlocation.component.html',
	encapsulation: ViewEncapsulation.None,
	styleUrls: ['./setlocation.component.css'],
	providers:[SetlocationService]
})
export class SetlocationComponent implements OnInit {

	public componentData2: any = '';
	latitude: number ;
	lngitude: number ;
	locationData:any={};
	res:any;

	constructor(private setlocationService:SetlocationService ) { 
		setTimeout(() => {
			this.userSettings2['inputPlaceholderText'] = 'Search Here';
			this.userSettings2 = Object.assign({}, this.userSettings2);
		}, 50000);
	}
	ngOnInit() {	
	}

	public userSettings2: any = {
		showRecentSearch: false,
		geoCountryRestriction: ['in'],
		searchIconUrl: 'http://downloadicons.net/sites/default/files/identification-search-magnifying-glass-icon-73159.png',
		geoTypes: ['establishment']
	};

	autoCompleteCallback2(data: any): any {
		this.componentData2 = JSON.stringify(data);
		this.latitude=data.geometry.location.lat;
		this.lngitude=data.geometry.location.lng;
		this.locationData.address=data.formatted_address;
		this.locationData.location=data.geometry.location;
		this.locationData.place_id=data.place_id;
		this.setlocationService.addlocation(this.locationData)
		.subscribe((res)=>{
			this.res=res.data.locationData;
			console.log("res",res);
		})
	}


	onChoseLocation(event){
		console.log("Event",event);
		this.latitude=event.coords.lat;
		this.lngitude=event.coords.lng;
	}
}