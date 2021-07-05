import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  showFlag: boolean = false;
  selectedImageIndex: number = -1;
  imageObject: Array<object> = [
    {
      imageSm: '/assets/freeAds/free-Ads.png',
      image: '/assets/large/freeAds/free-Ads.png',
      alt: 'Acceuil de Freeads'
    },{
      imageSm: '/assets/freeAds/detail.png',
      image: '/assets/large/freeAds/detail.png',
      alt: 'Détail d\'un produit'
    },{
      imageSm: '/assets/freeAds/profil.png',
      image: '/assets/large/freeAds/profil.png',
      alt: 'Profil du site free ads'
    },{
      imageSm: '/assets/irc/home-page.png',
      image: '/assets/large/irc/home-page.png',
      alt: 'Page de connexion de irc'
    },{
      imageSm: '/assets/irc/main-page.png',
      image: '/assets/large/irc/main-page.png',
      alt: 'Page principal de Free Ads'
    },{
      imageSm: '/assets/irc/modal.png',
      image: '/assets/large/irc/modal.png',
      alt: 'Une des nombreuse modal qui facilite l\'utilisation du site'
    },{
      imageSm: '/assets/quizz/main-page.png',
      image: '/assets/large/quizz/main-page.png',
      alt: 'Page d\'acceuil du site'
    },{
      imageSm: '/assets/quizz/stats-user.png',
      image: '/assets/large/quizz/stats-user.png',
      alt: 'Stats utilisateur vu par un administrateur'
    },{
      imageSm: '/assets/quizz/stats-quizzplus.png',
      image: '/assets/large/quizz/stats-quizzplus.png',
      alt: 'Statistique des quizzs'
    },{
      imageSm: '/assets/pizzeria/pizza.png',
      image: '/assets/large/pizzeria/pizza.png',
      alt: 'Tout les pizza disponible'
    },{
      imageSm: '/assets/pizzeria/détail.png',
      image: '/assets/large/pizzeria/détail.png',
      alt: 'Détail d\'une pizza'
    },{
      imageSm: '/assets/pizzeria/dessert.png',
      image: '/assets/large/pizzeria/dessert.png',
      alt: 'Page des dessert'
    },

  ];
  constructor() { }

  ngOnInit(): void {
  }

  showLightbox(index: any) {
    this.selectedImageIndex = index;
    this.showFlag = true;
  }

  closeEventHandler() {
    this.showFlag = false;
  }

  thisSrc(nbr: any) {
    //@ts-ignore
    return this.imageObject[nbr].imageSm
  }
}
