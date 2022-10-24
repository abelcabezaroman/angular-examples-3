import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgUrl: string = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/1200px-Cat_November_2010-1a.jpg"
  title: string = 'nombre-primera-app-angular';
  anime1 = {title: "Code geass", description: "Mejor anime del mundo", imgUrl: "https://ramenparados.com/wp-content/uploads/2016/11/Code-Geass-anime.jpg"};


  motorbikes = [
    {
      img: "https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-street-bob-114/2022-street-bob-114-f56/2022-street-bob-114-f56-motorcycle.jpg?impolicy=myresize&rw=500",
      name: "Street bob",
      price: 18700,
      colors: [
        {name: "Dark panic", color: "#1c1c1c"},
        {name: "Universe grey", color: "#444348"},
        {name: "Devil red", color: "#b40007"},
        {name: "Cosmic blue",color: "#076aa1"},
      ]
    },
    {
      img: "https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-softail-standard/2022-softail-standard-010/2022-softail-standard-010-motorcycle.jpg?impolicy=myresize&rw=500",
      name: "Softail standard",
      price: 17500,
      colors: [
        {name: "Dark panic", color: "#1c1c1c"},
      ]
    },
    {
      img: "https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-breakout-114/2022-breakout-114-f59/2022-breakout-114-f59-motorcycle.jpg?impolicy=myresize&rw=500",
      name: "Vreakout",
      price: 27400,
      colors: [
        {name: "Dark panic", color: "#1c1c1c"},
        {name: "Universe grey", color: "#444348"},
        {name: "Militar green", color: "#6e6b39"},
      ]
    }
  ]
}
