import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from './user.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ApiService {

  constructor(
    private http:HttpClient,
    private userService:UserService,
    private router:Router) { }

  api = {
    "similarProperties": [
      {
        "id": 1,
        "state": "For Rent",
        "price": "$1700",
        "priceDetail": "monthly",
        "image": "assets/images/listing-03.jpg",
        "title": "Meridian Villas",
        "mapUrl": "https://maps.google.com/maps?q=221B+Baker+Street,+London,+United+Kingdom&hl=en&t=v&hnear=221B+Baker+St,+London+NW1+6XE,+United+Kingdom",
        "adress": "778 Country St. Panama City, FL",
        "area": 1450,
        "bedrooms": 1,
        "rooms": 2,
        "bathrooms": 2,
        "client": "Chester Miller",
        "date": 4
      },
      {
        "id": 2,
        "state": "For Sale",
        "price": "$420,000",
        "priceDetail": "$770 / sq ft",
        "image": "assets/images/listing-04.jpg",
        "title": "Selway Apartments",
        "mapUrl": "https://maps.google.com/maps?q=221B+Baker+Street,+London,+United+Kingdom&hl=en&t=v&hnear=221B+Baker+St,+London+NW1+6XE,+United+Kingdom",
        "adress": "33 William St. Northbrook, IL",
        "area": 540,
        "bedrooms": 1,
        "rooms": 2,
        "bathrooms": 3,
        "client": "Kristen Berry",
        "date": 3
      },
      {
        "id": 1,
        "state": "For Sale",
        "price": "$535,000",
        "priceDetail": "$640 / sq ft",
        "image": "assets/images/listing-05.jpg",
        "title": "Oak Tree Villas",
        "mapUrl": "https://maps.google.com/maps?q=221B+Baker+Street,+London,+United+Kingdom&hl=en&t=v&hnear=221B+Baker+St,+London+NW1+6XE,+United+Kingdom",
        "adress": "71 Lower River Dr. Bronx, NY",
        "area": 350,
        "bedrooms": 1,
        "rooms": 2,
        "bathrooms": 1,
        "client": "Mabel Gagnon",
        "date": 4
      }
    ],
    "blog": [
      {
        "id": 1,
        "title": "8 Tips to Help You Finding New Home",
        "date": "Novemer 12, 2016",
        "post_header": "<p>Nam nisl lacus, dignissim ac tristique ut, scelerisque eu massa. Vestibulum ligula nunc, rutrum in malesuada vitae. </p>",
        "post": "<p>Nam nisl lacus, dignissim ac tristique ut, scelerisque eu massa. Vestibulum ligula nunc, rutrum in malesuada vitae, tempus sed augue. Curabitur quis lectus quis augue dapibus facilisis. Vivamus tincidunt orci est, in vehicula nisi eleifend ut. Vestibulum sagittis varius orci vitae.</p><div class='post-quote'><span class='icon'></span><blockquote>Mauris aliquet ultricies ante, non faucibus ante gravida sed. Sed ultrices pellentesque purus, vulputate volutpat ipsum hendrerit sed neque sed sapien rutrum.</blockquote></div><p>In ut odio libero, at vulputate urna. Nulla tristique mi a massa convallis cursus. Nulla eu mi magna. Etiam suscipit commodo gravida. Cras suscipit, quam vitae adipiscing faucibus, risus nibh laoreet odio, a porttitor metus eros ut enim. Morbi augue velit, tempus mattis dignissim nec, porta sed risus. Donec eget magna eu lorem tristique pellentesque eget eu dui. Fusce lacinia tempor malesuada. Ut lacus sapien, placerat a ornare nec, elementum sit amet felis. Maecenas pretium lorem hendrerit eros sagittis fermentum.</p><p>Phasellus enim magna, varius et commodo ut, ultricies vitae velit. Ut nulla tellus, eleifend euismod pellentesque vel, sagittis vel justo. In libero urna, venenatis sit amet ornare non, suscipit nec risus. Sed consequat justo non mauris pretium at tempor justo sodales. Quisque tincidunt laoreet malesuada. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer vitae ante enim. Fusce sed elit est. Suspendisse sit amet mauris in quam pretium faucibus et aliquam odio. </p>",
        "image": "assets/images/blog-post-01.jpg",
        "comments": 5
      },
      {
        "id": 2,
        "title": "Bedroom Colors You'll Never Regret",
        "date": "Novemer 12, 2016",
        "post_header": "<p>Nam nisl lacus, dignissim ac tristique ut, scelerisque eu massa. Vestibulum ligula nunc, rutrum in malesuada vitae. </p>",
        "post": "<p>Nam nisl lacus, dignissim ac tristique ut, scelerisque eu massa. Vestibulum ligula nunc, rutrum in malesuada vitae, tempus sed augue. Curabitur quis lectus quis augue dapibus facilisis. Vivamus tincidunt orci est, in vehicula nisi eleifend ut. Vestibulum sagittis varius orci vitae.</p><div class='post-quote'><span class='icon'></span><blockquote>Mauris aliquet ultricies ante, non faucibus ante gravida sed. Sed ultrices pellentesque purus, vulputate volutpat ipsum hendrerit sed neque sed sapien rutrum.</blockquote></div><p>In ut odio libero, at vulputate urna. Nulla tristique mi a massa convallis cursus. Nulla eu mi magna. Etiam suscipit commodo gravida. Cras suscipit, quam vitae adipiscing faucibus, risus nibh laoreet odio, a porttitor metus eros ut enim. Morbi augue velit, tempus mattis dignissim nec, porta sed risus. Donec eget magna eu lorem tristique pellentesque eget eu dui. Fusce lacinia tempor malesuada. Ut lacus sapien, placerat a ornare nec, elementum sit amet felis. Maecenas pretium lorem hendrerit eros sagittis fermentum.</p><p>Phasellus enim magna, varius et commodo ut, ultricies vitae velit. Ut nulla tellus, eleifend euismod pellentesque vel, sagittis vel justo. In libero urna, venenatis sit amet ornare non, suscipit nec risus. Sed consequat justo non mauris pretium at tempor justo sodales. Quisque tincidunt laoreet malesuada. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer vitae ante enim. Fusce sed elit est. Suspendisse sit amet mauris in quam pretium faucibus et aliquam odio. </p>",
        "image": "assets/images/blog-post-02.jpg",
        "comments": 5
      },
      {
        "id": 3,
        "title": "8 Tips to Help You Finding New Home",
        "date": "Novemer 26, 2016",
        "post_header": "<p>Nam nisl lacus, dignissim ac tristique ut, scelerisque eu massa. Vestibulum ligula nunc, rutrum in malesuada vitae. </p>",
        "post": "<p>Nam nisl lacus, dignissim ac tristique ut, scelerisque eu massa. Vestibulum ligula nunc, rutrum in malesuada vitae, tempus sed augue. Curabitur quis lectus quis augue dapibus facilisis. Vivamus tincidunt orci est, in vehicula nisi eleifend ut. Vestibulum sagittis varius orci vitae.</p><div class='post-quote'><span class='icon'></span><blockquote>Mauris aliquet ultricies ante, non faucibus ante gravida sed. Sed ultrices pellentesque purus, vulputate volutpat ipsum hendrerit sed neque sed sapien rutrum.</blockquote></div><p>In ut odio libero, at vulputate urna. Nulla tristique mi a massa convallis cursus. Nulla eu mi magna. Etiam suscipit commodo gravida. Cras suscipit, quam vitae adipiscing faucibus, risus nibh laoreet odio, a porttitor metus eros ut enim. Morbi augue velit, tempus mattis dignissim nec, porta sed risus. Donec eget magna eu lorem tristique pellentesque eget eu dui. Fusce lacinia tempor malesuada. Ut lacus sapien, placerat a ornare nec, elementum sit amet felis. Maecenas pretium lorem hendrerit eros sagittis fermentum.</p><p>Phasellus enim magna, varius et commodo ut, ultricies vitae velit. Ut nulla tellus, eleifend euismod pellentesque vel, sagittis vel justo. In libero urna, venenatis sit amet ornare non, suscipit nec risus. Sed consequat justo non mauris pretium at tempor justo sodales. Quisque tincidunt laoreet malesuada. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer vitae ante enim. Fusce sed elit est. Suspendisse sit amet mauris in quam pretium faucibus et aliquam odio. </p>",
        "image": "assets/images/blog-post-03.jpg",
        "comments": 3
      },
      {
        "id": 4,
        "title": "ANOTHER---8 Tips to Help You Finding New Home",
        "date": "Novemer 12, 2016",
        "post_header": "<p>Nam nisl lacus, dignissim ac tristique ut, scelerisque eu massa. Vestibulum ligula nunc, rutrum in malesuada vitae. </p>",
        "post": "<p>Nam nisl lacus, dignissim ac tristique ut, scelerisque eu massa. Vestibulum ligula nunc, rutrum in malesuada vitae, tempus sed augue. Curabitur quis lectus quis augue dapibus facilisis. Vivamus tincidunt orci est, in vehicula nisi eleifend ut. Vestibulum sagittis varius orci vitae.</p><div class='post-quote'><span class='icon'></span><blockquote>Mauris aliquet ultricies ante, non faucibus ante gravida sed. Sed ultrices pellentesque purus, vulputate volutpat ipsum hendrerit sed neque sed sapien rutrum.</blockquote></div><p>In ut odio libero, at vulputate urna. Nulla tristique mi a massa convallis cursus. Nulla eu mi magna. Etiam suscipit commodo gravida. Cras suscipit, quam vitae adipiscing faucibus, risus nibh laoreet odio, a porttitor metus eros ut enim. Morbi augue velit, tempus mattis dignissim nec, porta sed risus. Donec eget magna eu lorem tristique pellentesque eget eu dui. Fusce lacinia tempor malesuada. Ut lacus sapien, placerat a ornare nec, elementum sit amet felis. Maecenas pretium lorem hendrerit eros sagittis fermentum.</p><p>Phasellus enim magna, varius et commodo ut, ultricies vitae velit. Ut nulla tellus, eleifend euismod pellentesque vel, sagittis vel justo. In libero urna, venenatis sit amet ornare non, suscipit nec risus. Sed consequat justo non mauris pretium at tempor justo sodales. Quisque tincidunt laoreet malesuada. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer vitae ante enim. Fusce sed elit est. Suspendisse sit amet mauris in quam pretium faucibus et aliquam odio. </p>",
        "image": "assets/images/blog-post-01.jpg",
        "comments": 5
      },
      {
        "id": 5,
        "title": "ANOTHER---Bedroom Colors You'll Never Regret",
        "date": "Novemer 12, 2016",
        "post_header": "<p>Nam nisl lacus, dignissim ac tristique ut, scelerisque eu massa. Vestibulum ligula nunc, rutrum in malesuada vitae. </p>",
        "post": "<p>Nam nisl lacus, dignissim ac tristique ut, scelerisque eu massa. Vestibulum ligula nunc, rutrum in malesuada vitae, tempus sed augue. Curabitur quis lectus quis augue dapibus facilisis. Vivamus tincidunt orci est, in vehicula nisi eleifend ut. Vestibulum sagittis varius orci vitae.</p><div class='post-quote'><span class='icon'></span><blockquote>Mauris aliquet ultricies ante, non faucibus ante gravida sed. Sed ultrices pellentesque purus, vulputate volutpat ipsum hendrerit sed neque sed sapien rutrum.</blockquote></div><p>In ut odio libero, at vulputate urna. Nulla tristique mi a massa convallis cursus. Nulla eu mi magna. Etiam suscipit commodo gravida. Cras suscipit, quam vitae adipiscing faucibus, risus nibh laoreet odio, a porttitor metus eros ut enim. Morbi augue velit, tempus mattis dignissim nec, porta sed risus. Donec eget magna eu lorem tristique pellentesque eget eu dui. Fusce lacinia tempor malesuada. Ut lacus sapien, placerat a ornare nec, elementum sit amet felis. Maecenas pretium lorem hendrerit eros sagittis fermentum.</p><p>Phasellus enim magna, varius et commodo ut, ultricies vitae velit. Ut nulla tellus, eleifend euismod pellentesque vel, sagittis vel justo. In libero urna, venenatis sit amet ornare non, suscipit nec risus. Sed consequat justo non mauris pretium at tempor justo sodales. Quisque tincidunt laoreet malesuada. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer vitae ante enim. Fusce sed elit est. Suspendisse sit amet mauris in quam pretium faucibus et aliquam odio. </p>",
        "image": "assets/images/blog-post-02.jpg",
        "comments": 5
      },
      {
        "id": 6,
        "title": "ANOTHER---8 Tips to Help You Finding New Home",
        "date": "Novemer 26, 2016",
        "post_header": "<p>Nam nisl lacus, dignissim ac tristique ut, scelerisque eu massa. Vestibulum ligula nunc, rutrum in malesuada vitae. </p>",
        "post": "<p>Nam nisl lacus, dignissim ac tristique ut, scelerisque eu massa. Vestibulum ligula nunc, rutrum in malesuada vitae, tempus sed augue. Curabitur quis lectus quis augue dapibus facilisis. Vivamus tincidunt orci est, in vehicula nisi eleifend ut. Vestibulum sagittis varius orci vitae.</p><div class='post-quote'><span class='icon'></span><blockquote>Mauris aliquet ultricies ante, non faucibus ante gravida sed. Sed ultrices pellentesque purus, vulputate volutpat ipsum hendrerit sed neque sed sapien rutrum.</blockquote></div><p>In ut odio libero, at vulputate urna. Nulla tristique mi a massa convallis cursus. Nulla eu mi magna. Etiam suscipit commodo gravida. Cras suscipit, quam vitae adipiscing faucibus, risus nibh laoreet odio, a porttitor metus eros ut enim. Morbi augue velit, tempus mattis dignissim nec, porta sed risus. Donec eget magna eu lorem tristique pellentesque eget eu dui. Fusce lacinia tempor malesuada. Ut lacus sapien, placerat a ornare nec, elementum sit amet felis. Maecenas pretium lorem hendrerit eros sagittis fermentum.</p><p>Phasellus enim magna, varius et commodo ut, ultricies vitae velit. Ut nulla tellus, eleifend euismod pellentesque vel, sagittis vel justo. In libero urna, venenatis sit amet ornare non, suscipit nec risus. Sed consequat justo non mauris pretium at tempor justo sodales. Quisque tincidunt laoreet malesuada. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer vitae ante enim. Fusce sed elit est. Suspendisse sit amet mauris in quam pretium faucibus et aliquam odio. </p>",
        "image": "assets/images/blog-post-03.jpg",
        "comments": 3
      }
    ],
    "popularPosts": [
      {
        "id": 1,
        "title": "What to Do a Year Before Buying Apartment",
        "date": "October 26, 2016",
        "image": "assets/images/blog-widget-03.jpg"
      },
      {
        "id": 2,
        "title": "Bedroom Colors You'll Never Regret",
        "date": "November 9, 2016",
        "image": "assets/images/blog-widget-02.jpg"
      },
      {
        "id": 3,
        "title": "8 Tips to Help You Finding New Home",
        "date": "November 12, 2016",
        "image": "assets/images/blog-widget-01.jpg"
      }
    ],
    "blogPost": {
      "id": 1,
      "image": "assets/images/blog-post-02a.jpg",
      "title": "Bedroom Colors You'll Never Regret",
      "date": "Novemer 9, 2016",
      "commentsNum": 5,
      "post": "<p>Nam nisl lacus, dignissim ac tristique ut, scelerisque eu massa. Vestibulum ligula nunc, rutrum in malesuada vitae, tempus sed augue. Curabitur quis lectus quis augue dapibus facilisis. Vivamus tincidunt orci est, in vehicula nisi eleifend ut. Vestibulum sagittis varius orci vitae.</p><div class='post-quote'><span class='icon'></span><blockquote>Mauris aliquet ultricies ante, non faucibus ante gravida sed. Sed ultrices pellentesque purus, vulputate volutpat ipsum hendrerit sed neque sed sapien rutrum.</blockquote></div><p>In ut odio libero, at vulputate urna. Nulla tristique mi a massa convallis cursus. Nulla eu mi magna. Etiam suscipit commodo gravida. Cras suscipit, quam vitae adipiscing faucibus, risus nibh laoreet odio, a porttitor metus eros ut enim. Morbi augue velit, tempus mattis dignissim nec, porta sed risus. Donec eget magna eu lorem tristique pellentesque eget eu dui. Fusce lacinia tempor malesuada. Ut lacus sapien, placerat a ornare nec, elementum sit amet felis. Maecenas pretium lorem hendrerit eros sagittis fermentum.</p><p>Phasellus enim magna, varius et commodo ut, ultricies vitae velit. Ut nulla tellus, eleifend euismod pellentesque vel, sagittis vel justo. In libero urna, venenatis sit amet ornare non, suscipit nec risus. Sed consequat justo non mauris pretium at tempor justo sodales. Quisque tincidunt laoreet malesuada. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer vitae ante enim. Fusce sed elit est. Suspendisse sit amet mauris in quam pretium faucibus et aliquam odio. </p>",
      "next": {
        "id": 1,
        "post": "Tips For Newbie Hitchhiker"
      },
      "prev": {
        "id": 2,
        "post": "What's So Great About Merry?"
      },
      "author": {
        "image": "assets/images/agent-avatar.jpg",
        "name": "Jennie Wilson",
        "email": "jennie@example.com",
        "about": "Nullam ultricies, velit ut varius molestie, ante metus condimentum nisi, dignissim facilisis turpis ex in libero. Sed porta ante tortor, a pulvinar mi facilisis nec. Proin finibus dolor ac convallis congue."
      },
      "relatedPosts": [
        {
          "id": 1,
          "image": "assets/images/blog-post-02.jpg",
          "title": "Bedroom Colors You'll Never Regret",
          "post_header": "Nam nisl lacus, dignissim ac tristique ut, scelerisque eu massa. Vestibulum ligula nunc, rutrum in malesuada vitae."
        },
        {
          "id": 2,
          "image": "assets/images/blog-post-03.jpg",
          "title": "What to Do a Year Before Buying Apartment",
          "post_header": "Nam nisl lacus, dignissim ac tristique ut, scelerisque eu massa. Vestibulum ligula nunc, rutrum in malesuada vitae."
        }
      ],
      "comments": [
        {
          "image": "http://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm&amp;s=70",
          "name": "Kathy Brown",
          "date": "12th, June 2015",
          "comment": "Morbi velit eros, sagittis in facilisis non, rhoncus et erat. Nam posuere tristique sem, eu ultricies tortor imperdiet vitae. Curabitur lacinia neque non metus",
          "replies": [
            {
              "image": "http://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm&amp;s=70",
              "name": "Tom Smith",
              "date": "12th, June 2015",
              "reply": "Rrhoncus et erat. Nam posuere tristique sem, eu ultricies tortor imperdiet vitae. Curabitur lacinia neque."
            },
            {
              "image": "http://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm&amp;s=70",
              "name": "Kathy Brown",
              "date": "12th, June 2015",
              "reply": "Nam posuere tristique sem, eu ultricies tortor."
            },
            {
              "image": "http://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm&amp;s=70",
              "name": "John Doe",
              "date": "12th, June 2015",
              "reply": "Great template!"
            },
          ]
        },
        {
          "image": "http://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm&amp;s=70",
          "name": "John Doe",
          "date": "15th, May 2015",
          "comment": "Commodo est luctus eget. Proin in nunc laoreet justo volutpat blandit enim. Sem felis, ullamcorper vel aliquam non, varius eget justo. Duis quis nunc tellus sollicitudin mauris.",
          "replies": []
        }
      ]
    }
  }

  public link:string = 'http://iq-staging.eu-west-1.elasticbeanstalk.com';


  public adminToken:string;
  public getAdminToken():Observable<any> {
    return this.http.post(this.link+'/api/authenticate', {
      "password": "admin",
      "rememberMe": true,
      "username": "admin"
    })
  }
  public makeAdminToken(token) { this.adminToken = token.id_token }


  public getUserProfile() {
    this.http.get(this.link+'/api/public/profiles?nested=true&userId.equals='+this.userService['id'], this.userHeader()).subscribe({
      next: res => this.userService.makeUserProfile(res),
      error: err => this.API_ERROR(err, null)
    })
  }


  public getAgentProfile() {
    this.http.get(this.link+'/api/public/agents?userId.equals='+this.userService['id'], this.userHeader()).subscribe({
      next: res => this.userService.makeAgentProfile(res),
      error: err => this.API_ERROR(err, null)
    })
  }


  public adminHeader():Object {
    return {
      headers: new HttpHeaders({
        'Authorization':  'Bearer '+this.adminToken,
      })
    }
  }

  public userHeader():Object {
    return {
      headers: new HttpHeaders({
        'Authorization':  'Bearer '+this.userService.userToken,
      })
    }
  }
  public userJsonHeader():Object {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization':  'Bearer '+this.userService.userToken,
      })
    }
  }


  public API_ERROR(err, lang) {
    switch (err.error.title) {
      case "Unauthorized":
        console.log(err);
        this.router.navigate(['/'+lang+'/login']);
        break;

      default:
        console.log('submit error');
        console.log(err);
        break;
    }
  }

}
