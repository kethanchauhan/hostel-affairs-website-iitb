import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';
import * as SimpleBar from 'simplebar';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit, AfterViewInit {
  sidenavItems = [
    { name: 'Home', path: 'home' },
    { name: 'HA Council', path: 'council' },
    { name: 'Cashless Campus', url: 'http://gymkhana.iitb.ac.in/cashlesscampus' },
    { name: 'Alumni Affairs', path: 'alumni' },
    { name: 'International Relations', path: 'ir' },
    { name: 'Hospital', url: 'http://www.iitb.ac.in/facilities/hospital.html' },
    { name: 'Hospital Guidebook', url: 'https://gymkhana.iitb.ac.in/~hostels/Hospital_Guidebook.pdf' },
    { name: 'Hostels', path: 'hostels' },
    { name: 'Lost and Found Forum', url: 'https://gymkhana.iitb.ac.in/~hostels/lostnfound.php' },
    { name: 'Complaint Management System', url: 'http://gymkhana.iitb.ac.in/cms_new/' },
    { name: 'Guest Accomodation Booking System', url: 'https://gymkhana.iitb.ac.in/~hostels/portal/GABS/index.php' },
    { name: 'Guest House Booking System', url: 'http://www.iitb.ac.in/GuestHouse/index.html' },
    { name: 'Hostel Delivery', path: 'delivery' },
    { name: 'TumTum Schedule', url: 'https://gymkhana.iitb.ac.in/~hostels/BusSchedule1.pdf' },
    { name: 'Canteen Regulations', url: 'https://gymkhana.iitb.ac.in/~hostels/Canteen_Regulations.pdf' },
    { name: 'Tenders', path: 'tenders' },
    { name: 'Hall Manager Duties', path: 'hallmanagerduties' }
  ]

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    $('.sidenav-item').click(function() {
      $('.mobile-sidenav').hide();
      $('.navbar-burger').removeClass('is-active');
    });

    $('.mobile-sidenav-close').click(function() {
      $('.mobile-sidenav').hide();
      $('#navbar-burger').removeClass('is-active');
    });

  }
}
