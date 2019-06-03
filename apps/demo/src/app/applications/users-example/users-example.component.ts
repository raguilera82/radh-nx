import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
    selector: 'app-users-example',
    template: `
        <h1>GitLab Users</h1>
        <radh-gitlab-users (toasted)="onToasted($event)"></radh-gitlab-users>
        <radh-toast #toast></radh-toast>
    `
})

export class UsersExampleComponent implements OnInit {

    @ViewChild('toast', null) toast: ElementRef;

    constructor() { }

    ngOnInit() { }

    onToasted(ev) {
        this.toast.nativeElement.launchToast(ev.detail.login);
    }
}
