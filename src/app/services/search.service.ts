import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SearchService {

  constructor(
    private http:HttpClient,
    private api:ApiService) { }



  public dummyImg:string = 'https://s3.eu-central-1.amazonaws.com/aliraqhomes-dev/media/assets/default-house.jpg';

  private doneWithImages = new Subject<number>();
  public searchImages$:Observable<number> = this.doneWithImages.asObservable();


  /* ------------------------------------------------------------------- */
  /*  Main Listings Search
  ---------------------------------------------------------------------- */
  public searchQuery:any;
  public searchResult:any[] = [];
  public newSearch(data) { this.searchResult = data }

  public getSearchImages() {
    if( this.searchResult.length == 0 ) this.doneWithImages.next( Math.random() );
    for(let i=0; i<this.searchResult.length; i++) {
      this.http.get(this.api.link+'/api/public/property-images?propertyId.equals='+this.searchResult[i].id).subscribe(res => {
        this.searchResult[i].images = res;

        if(i == this.searchResult.length-1) setTimeout(() => this.doneWithImages.next( Math.random() ), 100);
      });
    }
  }



  /* ------------------------------------------------------------------- */
  /*  Single Property Search
  ---------------------------------------------------------------------- */
  public propertyResult:any;
  public newProperty(data) { this.propertyResult = data }

  public getPropertyImages() {
    this.http.get(this.api.link+'/api/public/property-images?propertyId.equals='+this.propertyResult.id).subscribe(res => {
      this.propertyResult.images = res;
      setTimeout(() => this.doneWithImages.next( Math.random() ), 100);
    })
  }



  /* ------------------------------------------------------------------- */
  /*  Single Agent Search
  ---------------------------------------------------------------------- */
  public agentResult:any;
  public newAgent(data) { this.agentResult  = data }
  public getAgentProperties() {
    this.http.get(this.api.link+'/api/public/properties?serviceType.in=SALE&adUserId.equals='+this.agentResult.user.id).subscribe(res => {
      this.agentResult.saleListing = res;

      this.http.get(this.api.link+'/api/public/properties?serviceType.in=RENTAL&adUserId.equals='+this.agentResult.user.id).subscribe(res => {
        this.agentResult.rentalListing = res;
        this.getAgentPropertiesImages();
      })
    })
  }
  public getAgentPropertiesImages() {
    if(this.agentResult.saleListing.length == 0) this.getAgentPropertiesImages2();
    for(let i=0; i<this.agentResult.saleListing.length; i++) {
      this.http.get(this.api.link+'/api/public/property-images?propertyId.equals='+this.agentResult.saleListing[i].id).subscribe(res => {
        this.agentResult.saleListing[i].images = res;

        if(i == this.agentResult.saleListing.length-1) this.getAgentPropertiesImages2();
      })
    }
  }
  private getAgentPropertiesImages2() {
    if(this.agentResult.rentalListing.length == 0) setTimeout(() => this.doneWithImages.next( Math.random() ), 100);
    for(let i=0; i<this.agentResult.rentalListing.length; i++) {
      this.http.get(this.api.link+'/api/public/property-images?propertyId.equals='+this.agentResult.rentalListing[i].id).subscribe(res => {
        this.agentResult.rentalListing[i].images = res;

        if(i == this.agentResult.rentalListing.length-1) setTimeout(() => this.doneWithImages.next( Math.random() ), 100);
      })
    }
  }


  /* ------------------------------------------------------------------- */
  /*  Profile Properties
  ---------------------------------------------------------------------- */
  public profileProperties:any ={
    saleListing: null, rentalListing:null
  };
  public getProfileProperties(id) {
    this.http.get(this.api.link+'/api/public/properties?serviceType.in=SALE&adUserId.equals='+id).subscribe(res => {
      this.profileProperties.saleListing = res;

      this.http.get(this.api.link+'/api/public/properties?serviceType.in=RENTAL&adUserId.equals='+id).subscribe(res => {
        this.profileProperties.rentalListing = res;
        this.getProfilePropertiesImages();
      })
    })
  }
  private getProfilePropertiesImages() {
    if(this.profileProperties.saleListing.length == 0) this.getProfilePropertiesImages2();
    for(let i=0; i<this.profileProperties.saleListing.length; i++) {
      this.http.get(this.api.link+'/api/public/property-images?propertyId.equals='+this.profileProperties.saleListing[i].id).subscribe(res => {
        this.profileProperties.saleListing[i].images = res;

        if(i == this.profileProperties.saleListing.length-1) this.getProfilePropertiesImages2();
      })
    }
  }
  private getProfilePropertiesImages2() {
    if(this.profileProperties.rentalListing.length == 0) setTimeout(() => this.doneWithImages.next( Math.random() ), 100);
    for(let i=0; i<this.profileProperties.rentalListing.length; i++) {
      this.http.get(this.api.link+'/api/public/property-images?propertyId.equals='+this.profileProperties.rentalListing[i].id).subscribe(res => {
        this.profileProperties.rentalListing[i].images = res;

        if(i == this.profileProperties.rentalListing.length-1) setTimeout(() => this.doneWithImages.next( Math.random() ), 100);
      })
    }
  }


  /* ------------------------------------------------------------------- */
  /*  Featured Properties
  ---------------------------------------------------------------------- */
  public featuredProperties:any = {
    saleListing: null, rentalListing:null
  }
  public getFeaturedProperties() {
    this.http.get(this.api.link+'/api/public/properties?serviceType.in=SALE&featured.equals=true').subscribe(res => {
      this.featuredProperties.saleListing = res;

      this.http.get(this.api.link+'/api/public/properties?serviceType.in=RENTAL&featured.equals=true').subscribe(res => {
        this.featuredProperties.rentalListing = res;
        this.getFeaturedImages();
      })
    })
  }
  private getFeaturedImages() {
    if(this.featuredProperties.saleListing.length == 0) this.getFeaturedImages2();
    for(let i=0; i<this.featuredProperties.saleListing.length; i++) {
      this.http.get(this.api.link+'/api/public/property-images?propertyId.equals='+this.featuredProperties.saleListing[i].id).subscribe(res => {
        this.featuredProperties.saleListing[i].images = res;

        if(i == this.featuredProperties.saleListing.length-1) this.getFeaturedImages2();
      })
    }
  }
  private getFeaturedImages2() {
    if(this.featuredProperties.rentalListing.length == 0) setTimeout(() => this.doneWithImages.next( Math.random() ), 100);
    for(let i=0; i<this.featuredProperties.rentalListing.length; i++) {
      this.http.get(this.api.link+'/api/public/property-images?propertyId.equals='+this.featuredProperties.rentalListing[i].id).subscribe(res => {
        this.featuredProperties.rentalListing[i].images = res;

        if(i == this.featuredProperties.rentalListing.length-1) setTimeout(() => this.doneWithImages.next( Math.random() ), 100);
      })
    }
  }


  /* ------------------------------------------------------------------- */
  /*  Bookmarked Properties
  ---------------------------------------------------------------------- */
  public bookmarkedProperties:any = [];
  public getBookmarkedProperties(bookmarks, header) {
    this.bookmarkedProperties = [];
    bookmarks.forEach(item => {
      this.http.get(this.api.link+'/api/properties/'+item.propertyId, header).subscribe(res => {
        this.bookmarkedProperties.push(res);
        this.getBookmarkedPropertiesImages();
      })
    });
  }
  private getBookmarkedPropertiesImages() {
    if(this.bookmarkedProperties.length == 0) setTimeout(() => this.doneWithImages.next( Math.random() ), 100);
    for(let i=0; i<this.bookmarkedProperties.length; i++) {
      this.http.get(this.api.link+'/api/public/property-images?propertyId.equals='+this.bookmarkedProperties[i].id).subscribe(res => {
        this.bookmarkedProperties[i].images = res;

        if(i == this.bookmarkedProperties.length-1) setTimeout(() => this.doneWithImages.next( Math.random() ), 100);
      })
    }
  }

}
