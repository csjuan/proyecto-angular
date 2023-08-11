import { TestBed } from "@angular/core/testing"
import { LoginComponent } from "./login.component"
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from "@angular/material/input";
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('LoginComponent', () =>{
    let componente: LoginComponent;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ LoginComponent ],
            imports: [MatFormFieldModule, MatInputModule, HttpClientTestingModule] 
        })
        componente = TestBed.createComponent(LoginComponent).componentInstance
    })
    it('test login', () => {
        componente.emailControl.setValue('');
        componente.passwordControl.setValue('');
        expect(componente.formlogin.invalid).toBeTrue();
    })
})