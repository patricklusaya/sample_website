import { Component, HostListener, OnInit } from '@angular/core';
import AOS from 'aos';


import 'aos/dist/aos.css'; 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  sendEmail() {
    window.location.href = 'mailto:youremail@gmail.com';
  }
 


  currentSlide = 0;
  ngOnInit() {
    AOS.init({
      
    });
   
   
  }
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    AOS.refresh();
  }

 
    projects = [
      {
        title: 'Project 1',
        description: 'A luxurious custom-built home featuring high-end finishes and smart-home technology.',
        images: ['../../../assets/images/pro9.png', '../../../assets/images/pro9.png', '../../../assets/images/pro11.jpg']
      },
      {
        title: 'Project 2',
        description: 'This project involved creating a cozy and inviting cabin-style home in a natural setting, complete with handcrafted finishes and details.',
        images: ['../../../assets/images/pro10.jpg', '../../../assets/images/pro9.png', '../../../assets/images/pro11.jpg']
      },
      {
        title: 'Project 3',
        description: 'Our team worked closely with the homeowner to design and build their dream home, incorporating personalized touches throughout..',
        images: ['../../../assets/images/pro8.jpg', '../../../assets/images/pro8.png', '../../../assets/images/pro11.png']
      }
    ];
  
   
}
