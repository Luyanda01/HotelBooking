import { Component, OnInit } from '@angular/core';
import  {FormBuilder, FormGroup} from '@angular/forms'
@Component({
  selector: 'app-customer-proof',
  template: `
    
      <nav>
      <h1>PAYMENT CONFIMATION</h1>
      </nav>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Reference</th>
          <th scope="col">Name</th>
          <th scope="col">Phone No</th>
          <th scope="col">Email </th>
          <th scope="col">No of Guests</th>
          <th scope="col">Check-In</th>
          <th scope="col">Check-Out</th>
          <th scope="col">Action</th>
        </tr>
      </thead>

      <tbody>
          <tr>
            <td>1</td>
            <td>Luyanda</td>
            <td>1111111</td>
            <td>luyanda@gmail.com</td>
            <td>1</td>
            <td>12/13/2000</td>
            <td>12/25/2020</td>
            <td>
              <button class="btn btn-light">Confirm Booking</button>
          </tr>
      </tbody>




    </table>

    


  `,
  styles: [
  ]
})
export class CustomerProofComponent implements OnInit {
    formValue !: FormGroup;
  constructor(private formbuilder:FormBuilder) { }

  ngOnInit(): void {
    this.formValue=this.formbuilder.group({
      name:[''],
      phone:[''],
      email:[''],
      noOfGuest:[''],
      checkIn:[''],
      checkOut:[''],
    })
  }

}
