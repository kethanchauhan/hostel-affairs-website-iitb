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
    { name: 'Alumni Affairs', path: 'alumni' },
    { name: 'International Relations', path: 'ir' },
    { name: 'Hospital', path: 'hospital' },
    { name: 'Security Guidelines', path: 'security' },
    { name: 'Sustainability Cell', path: 'sustainabilitycell' },
    { name: 'Hygiene Committee', path: 'hygienecommittee' },
    //{ name: 'Food Outlets', path: 'foodoutlets' },
    { name: 'Hostels', path: 'hostels' },
    { name: 'Guest Accomodation Booking System', path: 'guestaccomodation' },
    { name: 'SAC Room Booking Portal', url: 'https://gymkhana.iitb.ac.in/portal/sac' },
    { name: 'Guest House Booking System', url: 'http://www.iitb.ac.in/GuestHouse/index.html' },
    { name: 'Tenders', path: 'tenders' },
    { name: 'Hall Manager Duties', path: 'hallmanagerduties' }
  ];

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    $('.sidenav-item').click(function() {
      $('.mobile-sidenav').hide();
      $('#navbar-burger').removeClass('is-active');
    });

    $('.mobile-sidenav-close').click(function() {
      $('.mobile-sidenav').hide();
      $('#navbar-burger').removeClass('is-active');
    });

  }
}
