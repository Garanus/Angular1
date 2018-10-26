import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  items = [
    {
      text: 'Chcesz spędzić wakacje w Chorwacji? Masz rację! Byliśmy, nie żałujemy - planujemy kolejny wyjazd...\n' +
        '\n' +
        'Kraj ten stał się kilka lat temu, po wojnie bałkańskiej, ponownie popularny. Początkowo z uwagi na klimat, czyste wody Adriatyku i na niskie ceny. Obecnie głównie z uwagi na wspaniałe morze i warunki klimatyczne, bo już raczej nie przez atrakcyjne ceny, po tym jak w ogromnej liczbie najechali Chorwację turyści (szerzej o kosztach napisaliśmy poniżej). Aczkolwiek ceny są tam ciągle niższe niż w zachodniej Europie, szczególnie zakwaterowania. Pokoje, apartamenty są niedrogie i stosunkowo łatwo dostępne.\n' +
        '\n' +
        'Chorwacja to piękny kraj, ciepły i słoneczny. Wspaniałe są wody Adriatyku, a skaliste, poszatkowane, pełne półwyspów, zatoczek i wysepek brzegi są zupełnie niezwykłe. Są tam pełne niesamowitych zjawisk naturalnych i cudownych widoków parki narodowe.\n' +
        '\n' +
        'Zaskakują także miasta o długiej historii i ciekawej architekturze, przypominającej tę z Włoch, a to poprzez silne wpływy w dawnych czasach Republiki Weneckiej. Może bardziej przekonają Was opisy parków i miast, które znajdziecie dalej na stronach serwisu.\n' +
        '\n' +
        'Wypoczynek czyni komfortowym dobra kuchnia, z szeroką ofertą świeżych owoców morza. Warto odwiedzić Chorwację, można leżeć, pływać, spacerować, zwiedzać – co kto lubi.',
      image: 'http://s3.viva.pl/newsy/chorwacja-co-warto-zobaczyc-463190-GALLERY_BIG.jpg'
    },
    {
      text: 'Tereny dzisiejszej Chorwacji zamieszkiwały niegdyś plemiona iliryjskie. Od plemienia Dalmatów pochodzi nazwa południowej prowincji. Potem tereny nadmorskie kolonizowali Grecy, następnie Celtowie, a od II-I wieku p.n.e. Rzymianie. Szczególnie ci ostatni pozostawili po sobie sporo obiektów architektonicznych (choćby pozostałości pałacu Dioklecjana w Splicie).',
      image: 'http://www.peregrynacje.pl/images/1HR_0724_209x140.jpg'
    },
    {
      text: 'W serwisie, opisując ciekawe miejsca skupimy się na najbardziej malowniczym zakątku kraju i częstym celu wyjazdów wakacyjnych - Dalmacji. To obszar południowej połowy Chorwacji, rozciągający się wzdłuż wybrzeży Adriatyku (pas szeroki na ok. 50 km, długi na 400 km) od wyspy Pag aż po Czarnogórę. Dostarcza niesamowitych widoków dzięki ogromnej liczbie półwyspów i wysp. Znajdziecie tu wiele wspaniałych plaż.',
      image: 'https://i.wpimg.pl/O/644x429/d.wpimg.pl/1956766448-1208584657/chorwacja.jpg'
    },
    {
      text: 'Text',
      image: 'https://gryplanszowe.pl/pol_pl_PQ-Puzzle-1000-el-Widok-na-wybrzeze-Amalfi-4323_1.jpg'
    },
    {
      text: 'Text',
      image: 'https://gryplanszowe.pl/pol_pl_PQ-Puzzle-1000-el-Widok-na-wybrzeze-Amalfi-4323_1.jpg'
    }

  ];

  constructor() { }

  ngOnInit() {
  }

}
