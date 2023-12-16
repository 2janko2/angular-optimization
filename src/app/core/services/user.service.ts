import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs";

import { JwtService } from "./jwt.service";
import { map, distinctUntilChanged, tap, shareReplay } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { User } from "../models/user.model";
import { Router } from "@angular/router";

@Injectable({ providedIn: "root" })
export class CustomerService {
  private _user = new BehaviorSubject<User | null>(null);
  
  public customer = this._user
    .asObservable()
    .pipe(distinctUntilChanged());

  
  public isCustomerLoggedIn = this.customer.pipe(map((user) => !!user));

  constructor(
    private readonly http: HttpClient,
    private readonly jwtService: JwtService,
    private readonly router: Router
  ) {}

  login(credentials: {
    email: string;
    password: string;
  }): Observable<{ user: User }> {
    return this.http
      .post<{ user: User }>("/users/login", { user: credentials })
      .pipe(tap(({ user }) => this.setCustomerSpecificInfos(user)));
  }

  register(credentials: {
    username: string;
    email: string;
    password: string;
  }): Observable<{ user: User }> {
    return this.http
      .post<{ user: User }>("/users", { user: credentials })
      .pipe(tap(({ user }) => this.setCustomerSpecificInfos(user)));
  }

  logout(): void {
    this.removeCustomerSpecificInfos();
    void this.router.navigate(["/"]);
  }

  getCurrentUser(): Observable<{ user: User }> {
    return this.http.get<{ user: User }>("/user").pipe(
      tap({
        next: ({ user }) => this.setCustomerSpecificInfos(user),
        error: () => this.removeCustomerSpecificInfos(),
      }),
      shareReplay(1)
    );
  }

  update(user: Partial<User>): Observable<{ user: User }> {
    return this.http.put<{ user: User }>("/user", { user }).pipe(
      tap(({ user }) => {
        this._user.next(user);
      })
    );
  }

  setCustomerSpecificInfos(user: User): void {
    this.jwtService.saveToken(user.token);
    this._user.next(user);
  }

  removeCustomerSpecificInfos(): void {
    this.jwtService.destroyToken();
    this._user.next(null);
  }
}
