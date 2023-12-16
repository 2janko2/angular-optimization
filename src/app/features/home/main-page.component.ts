import { ChangeDetectionStrategy, Component, inject, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { TagsService } from "../../core/services/tags.service";
import { ArticleListConfig } from "../../core/models/article-list-config.model";
import { AsyncPipe, NgClass, NgForOf, NgIf } from "@angular/common";
import { ArticleListComponent } from "../../shared/article-helpers/article-list.component";
import { takeUntil, tap } from "rxjs/operators";
import { Subject } from "rxjs";
import { CustomerService } from "../../core/services/user.service";
import { LetDirective } from "@rx-angular/template/let";
import { ShowAuthedDirective } from "../../shared/show-authed.directive";
import { TagListComponent } from "../tag-list/tag-list.component";

@Component({
  selector: "app-main-page",
  templateUrl: "./main-page.component.html",
  styleUrls: ["./main-page.component.css"],
  imports: [
    NgClass,
    ArticleListComponent,
    AsyncPipe,
    LetDirective,
    NgForOf,
    ShowAuthedDirective,
    NgIf,
    TagListComponent
  ],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainPageComponent implements OnInit, OnDestroy {
  isCustomerLoggedIn = false;

  listConfig: ArticleListConfig = {
    type: "all",
    filters: {}
  };

  tags$ = inject(TagsService)
    .getAll()
    .pipe(tap(() => (this.tagsLoaded = true)));

  tagsLoaded = false;

  subscriptionCancellation$ = new Subject<void>();

  constructor(
    private readonly router: Router,
    private readonly customerService: CustomerService
  ) {
  }

  ngOnInit(): void {
    this.customerService.isCustomerLoggedIn
      .pipe(
        tap((isAuthenticated) => {
          if (isAuthenticated) {
            debugger;
            this.redirectUnauthorizedCustomer("feed");
          } else {
            debugger;
            this.redirectUnauthorizedCustomer("all");
          }
        }),
        takeUntil(this.subscriptionCancellation$)
      )
      .subscribe(
        (isAuthenticated: boolean) => (this.isCustomerLoggedIn = isAuthenticated)
      );
  }

  ngOnDestroy(): void {
    this.subscriptionCancellation$.next();
    this.subscriptionCancellation$.complete();
  }

  redirectUnauthorizedCustomer(type: string = "", filters: Object = {}): void {
    if (type === "feed" && !this.isCustomerLoggedIn) {
      void this.router.navigate(["/login"]);
      return;
    }

    this.listConfig = { type: type, filters: filters };
  }
}
