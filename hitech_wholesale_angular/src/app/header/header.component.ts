import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthService} from "../services/auth.service";
import {CommonService} from "../services/common.service";
import { faCoffee,faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  faSignInAlt = faSignInAlt;
  faSignOutAlt=faSignOutAlt;
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter<any>();
  defaultPicture: string = "";
  imageSrc: string | ArrayBuffer | null ="";
  file: File | undefined;

  items: any;


  constructor(public authService: AuthService, public commonService: CommonService) {

  }

  ngOnInit(): void {



  //   this.items = [
  //     {
  //         label:'File',
  //         icon:'pi pi-fw pi-file',
  //         items:[
  //             {
  //                 label:'New',
  //                 icon:'pi pi-fw pi-plus',
  //                 items:[
  //                 {
  //                     label:'Bookmark',
  //                     icon:'pi pi-fw pi-bookmark'
  //                 },
  //                 {
  //                     label:'Video',
  //                     icon:'pi pi-fw pi-video'
  //                 },

  //                 ]
  //             },
  //             {
  //                 label:'Delete',
  //                 icon:'pi pi-fw pi-trash'
  //             },
  //             {
  //                 separator:true
  //             },
  //             {
  //                 label:'Export',
  //                 icon:'pi pi-fw pi-external-link'
  //             }
  //         ]
  //     },
  //     {
  //         label:'Edit',
  //         icon:'pi pi-fw pi-pencil',
  //         items:[
  //             {
  //                 label:'Left',
  //                 icon:'pi pi-fw pi-align-left'
  //             },
  //             {
  //                 label:'Right',
  //                 icon:'pi pi-fw pi-align-right'
  //             },
  //             {
  //                 label:'Center',
  //                 icon:'pi pi-fw pi-align-center'
  //             },
  //             {
  //                 label:'Justify',
  //                 icon:'pi pi-fw pi-align-justify'
  //             },

  //         ]
  //     },
  //     {
  //         label:'Users',
  //         icon:'pi pi-fw pi-user',
  //         items:[
  //             {
  //                 label:'New',
  //                 icon:'pi pi-fw pi-user-plus',

  //             },
  //             {
  //                 label:'Delete',
  //                 icon:'pi pi-fw pi-user-minus',

  //             },
  //             {
  //                 label:'Search',
  //                 icon:'pi pi-fw pi-users',
  //                 items:[
  //                 {
  //                     label:'Filter',
  //                     icon:'pi pi-fw pi-filter',
  //                     items:[
  //                         {
  //                             label:'Print',
  //                             icon:'pi pi-fw pi-print'
  //                         }
  //                     ]
  //                 },
  //                 {
  //                     icon:'pi pi-fw pi-bars',
  //                     label:'List'
  //                 }
  //                 ]
  //             }
  //         ]
  //     },
  //     {
  //         label:'Events',
  //         icon:'pi pi-fw pi-calendar',
  //         items:[
  //             {
  //                 label:'Edit',
  //                 icon:'pi pi-fw pi-pencil',
  //                 items:[
  //                 {
  //                     label:'Save',
  //                     icon:'pi pi-fw pi-calendar-plus'
  //                 },
  //                 {
  //                     label:'Delete',
  //                     icon:'pi pi-fw pi-calendar-minus'
  //                 },

  //                 ]
  //             },
  //             {
  //                 label:'Archieve',
  //                 icon:'pi pi-fw pi-calendar-times',
  //                 items:[
  //                 {
  //                     label:'Remove',
  //                     icon:'pi pi-fw pi-calendar-minus'
  //                 }
  //                 ]
  //             }
  //         ]
  //     },
  //     {
  //         label:'Quit',
  //         icon:'pi pi-fw pi-power-off'
  //     }
  // ];

    this.items = [
      {
        label:'Home',
        imageSrc:'assets/hitech-wholesale/Hi-Tech-logo.png',
        
      },
      {
          label:'Home',
          icon:'pi pi-fw pi-home',
          
      },
      {
          label:'Products',
          icon:'pi pi-fw pi-box',
         
      },
      {
          label:'Catlogue',
          icon:'pi pi-fw pi-book',
          
      },
      {
          label:'About Us',
          icon:'pi pi-fw pi-user',
          
      },
      {
          label:'Contact Us',
          icon:'pi pi-fw pi-phone'
      }
  ];

  

    this.defaultPicture = this.commonService.getPublic() + '/profile_pic/no_dp.png';
    const user = localStorage.getItem('user');
    if (user){
      const localUserID = JSON.parse(<string>user).uniqueId;
      this.imageSrc = this.commonService.getPublic() + '/profile_pic/profile_pic_' + localUserID + '.jpeg';
    }

    //this will work at the time of user change
    this.authService.getUserBehaviorSubjectListener().subscribe(response => {
      const user = response;
      if (user){
        const localUserID = user.uniqueId;
        this.imageSrc = this.commonService.getPublic() + '/profile_pic/profile_pic_' + localUserID + '.jpeg';
      }
    });

  }
  toggleSlidebar(choice=true){
    this.toggleSidebarForMe.emit({choice: choice});
  }

  logOutCurrentUser() {
    this.authService.logout();
  }
  logOutFromAll() {
    this.authService.logoutAll();
  }

  onChange(event: any){
    this.file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e => this.imageSrc = reader.result);
    // @ts-ignore
    reader.readAsDataURL(this.file);
    this.authService.upload(this.file).subscribe((response) => {
        console.log(response);
        if (response.success === 100){
        }
      }
    );
    event.srcElement.value = null;
  }


}
