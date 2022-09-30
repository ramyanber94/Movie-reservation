import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  counter = Array;
  movie: any;
  seatsObject: Array<string> = [];
  constructor(private http : HttpService) { }

  ngOnInit(): void {
    if(history.state.data){
      this.movie = history.state.data;
      localStorage.setItem('movieDetails', JSON.stringify(history.state.data));
    }else {
      this.movie = JSON.parse(localStorage.getItem('movieDetails')!);
    }
    let datas = {}
    this.http.getMovieByName(this.movie.title).subscribe(data => {
      console.log(data);
      if(data){
        datas = data
      }
    })
    let seat = document.querySelectorAll('.seat');
    let id = 1
    seat.forEach((s)=> {
      s.addEventListener('click', (e) => this.seatClicked(e));
      s.setAttribute("id", id.toString());
      id++
    })
  }

  seatClicked(e : any){
    e.target.style.backgroundColor = e.target.style.backgroundColor === "rgb(51, 51, 51)" ? "rgb(93, 48, 189)" : "rgb(51, 51, 51)";
    if(this.seatsObject.includes(e.target.id)){
      let filteredArray = this.seatsObject.filter((v) => { return v !== e.target.id });
      this.seatsObject = filteredArray
    }else {
      this.seatsObject.push(e.target.id);
    }
  }

  reserveSeats(){
    const date = new Date()
    let request = {
        "seats": this.seatsObject.toString(),
        "name":this.movie.title,
        "date": date
    }
    this.http.reserveMovie(request);
  }

}
