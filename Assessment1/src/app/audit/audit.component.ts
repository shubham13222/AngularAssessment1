import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { Audit } from '@/_models';
import { AuditService, AuthenticationService } from '@/_services';

@Component({ templateUrl: 'audit.component.html' })
export class AuditComponent implements OnInit
{
    audits = [];
    dateFormateObject = [{ id :12, text: '12 Hrs' },{ id : 24, text : '24 Hrs'}];
    dateFormate : string = "dd/MMM/yyyy hh:mm:ss";
    searchData : string;

    constructor(
        private authenticationService: AuthenticationService,
        private auditService: AuditService
    )
    {
    }

    ngOnInit()
    {
        this.loadAllAudits(); 
    }

    private loadAllAudits()
    {
        this.auditService.getAll()
            .subscribe(audits => this.audits = audits);
    }

    private setDateFormat(value){
        let inWhichFormat = value;
        if(inWhichFormat == 12)
        {
            this.dateFormate = "dd/MMM/yyyy hh:mm:ss";
        }
        else{
            this.dateFormate = "dd/MMM/yyyy HH:mm:ss";
        }
    }
}