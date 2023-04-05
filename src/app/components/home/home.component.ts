import { Component, HostListener, OnInit } from '@angular/core';
import AOS from 'aos';


import 'aos/dist/aos.css'; 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {


 

  slides = [
    { imgUrl: '../../../assets/images/cover1.png', title: 'Welcome', description: 'Mchemo Construction Manger.Dealers in Constructions and Reinnovations' },
    { imgUrl: '../../../assets/images/cover5.png', title: 'Quality', description: 'Is our number one priority' },
    { imgUrl: '../../../assets/images/cover6.png', title: 'Trustworthiness', description: 'We can Guarantee you that' },
    { imgUrl: '../../../assets/images/cover13.png', title: 'Professionalism', description: 'The one that you have never seen' },
    { imgUrl: '../../../assets/images/cover12.png', title: 'Creativity', description: 'We add a little bit of our taste to improve your work add a little bit of our taste to add a little bit of our taste to  ' },
    { imgUrl: '../../../assets/images/cover11.png', title: 'Let\'s work', description: 'You are at the right place' }
  ];
  currentSlide = 0;
  ngOnInit() {
    AOS.init({
      
    });
    this.showSlide(0);
   
  }
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    AOS.refresh();
  }

  showSlide(index: number) {
    this.currentSlide = index % this.slides.length;
    setTimeout(() => {
      this.showSlide(this.currentSlide + 1);
    }, 3000);}
 

}
