import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../core/services/auth.service';
import { Observable } from 'rxjs';
import { user } from './pages/users/components/modelos';
import { Store } from '@ngrx/store';
import { selecAdmin, selectAuthUser, } from '../store/auth/auth.selectors';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
    showFiller = false;
    public userauth$: Observable<user | null>;
    public selecAdmin: Observable<boolean>;    
 
 
constructor(private router: Router,
            private authService: AuthService,
            private store: Store )
             {
                this.userauth$ = this.store.select(selectAuthUser);
                this.selecAdmin = this.store.select(selecAdmin);
            } 

logout(): void {
    this.authService.logout();
      this.router.navigate(['auth','login'],{})
    }
    
}
