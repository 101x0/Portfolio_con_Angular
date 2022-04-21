import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})
export class SegundoComponenteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    let cards = document.getElementsByClassName("card_container");

    cards[0].addEventListener("click", openTasks);
    cards[1].addEventListener("click", openCesar);
    cards[2].addEventListener("click", openChess);
    cards[3].addEventListener("click", openComments);


    function openTasks() {
      window.open("https://101x0.github.io/Gestor_Tareas/", "", "width=500, height=600, top=50,left=400");
    }

    function openCesar() {
      window.open("https://101x0.github.io/CifradoCesar/", "", "width=850, height=1000, top=50,left=400");
    }

    function openChess() {
      window.open("https://101x0.github.io/Tablero_Ajedrez/", "", "width=700, height=650, top=50,left=400");
    }

    function openComments() {
      window.open("https://101x0.github.io/Sistema_de_comentarios/", "", "width=700, height=650, top=50,left=400");
    }


  }

}
