import { Component } from "@angular/core";

@Component({
  selector: "app-pipes-example",
  templateUrl: "./pipes-example.component.html",
  styleUrls: ["./pipes-example.component.css"]
})
export class PipesExampleComponent {

  course = {
    title: "The Complete Angular Course",
    rating: 4.9745,
    students: 30123,
    price: 190.95,
    releaseDate: new Date(2016, 3, 1),
    description: "Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
  };
}
