import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Globals } from '../global';
import { GlobalService } from '../global.service';

@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Are you sure?</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p>Hello, <b>{{name}}</b>, are you sure you want to continue to find out your Valentine Day Swap partner?</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="goToResult(name)">Continue</button>
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Go Back</button>
    </div>
  `
})
export class NgbdModalContent {
  @Input() name;

  constructor(public activeModal: NgbActiveModal,
    private router: Router
  ) { }

  goToResult(sender) {
    this.activeModal.close();
    this.router.navigate(['result', sender]);
  }
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  pairs = this.globals.pairs
  Math: Math = Math;

  constructor(
    private globals: Globals,
    private modalService: NgbModal) { }

  ngOnInit(): void {

  }

  playerClick(sender) {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.name = sender;
  }
}