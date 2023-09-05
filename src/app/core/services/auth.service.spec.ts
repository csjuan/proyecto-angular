import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { AuthService } from "./auth.service"
import { TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { RouterMock } from "../mocks/router-mock";
import { Router } from "@angular/router";
import { user } from "src/app/dashboard/pages/users/components/modelos";





describe('AuthService', () => {
    let servicio: AuthService;
    let controlHttp: HttpTestingController;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule, RouterTestingModule ],
            providers: [
                {
                    provide: Router,
                    useClass: RouterMock,
                }
            ]
        });
        servicio = TestBed.inject(AuthService);
        controlHttp = TestBed.inject(HttpTestingController);
    })
    it('emision de valor de userauth$', () => {
        const usuarioMock: user =
        {
            id: 1,
            name: 'fake-gitjose',
            apellido: 'gauna',
            direccion: 'colon 237',
            email:'gauna@gmail.com',
            password: '451f51dvb',
            rol: 'Usuario',
            token: 'biacasca'  
        }
        const mockTest: user[] = [usuarioMock]
        
        servicio.login({
            email: usuarioMock.email,
            password: usuarioMock.password
        });
        controlHttp.expectOne({
            method: 'GET',
            url: `http://localhost:3000/user?email=${usuarioMock.email}&password=${usuarioMock.password}`            
        }).flush(mockTest)
    })
})