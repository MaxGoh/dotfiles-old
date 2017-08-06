// Modules
import { PathLocationStrategy, LocationStrategy, HashLocationStrategy} from '@angular/common';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

// Components
import { AppComponent } from './app.component';
import { MarkdownModule } from 'angular2-markdown';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { BlogdetailsComponent } from './components/blog/blogdetails/blogdetails.component';
import { DraftListComponent } from './components/admin/draft-list/draft-list.component';
import { PublishedListComponent } from './components/admin/published-list/published-list.component';
import { DraftDetailsComponent } from './components/admin/draft-list/draft-details/draft-details.component';
import { CreateNewPostComponent } from './components/admin/create-new-post/create-new-post.component';
import { EditPostComponent } from './components/admin/edit-post/edit-post.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { PublishedDetailsComponent } from './components/admin/published-list/published-details/published-details.component';
import { MenuComponent } from './components/menu/menu.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProjectComponent } from './components/project/project.component';
import { ProfileComponent } from './components/admin/profile/profile.component';
import { ChallengesComponent } from './components/challenges/challenges.component';

// Guards
import { AuthGuard } from './guards/auth.guard';

// Services
import { BlogService } from './services/blog/blog.service';
import { AuthService } from './services/auth/auth.service';
import { MenuService } from './services/menu/menu.service';
import { LoadingService } from './services/loading/loading.service';
import { GoogleAnalyticsEventsService } from './services/google-analytics/google-analytics.service';

// Directives
import { closeNavBarDirective } from './directives/collapse-navbar.directive';

// Pipes
import { TruncatePipe } from './pipes/truncate.pipe';

 //Third Party Modules
import { MarkdownToHtmlModule } from 'markdown-to-html-pipe';
import { SimplemdeModule, SIMPLEMDE_CONFIG } from 'ng2-simplemde';
import { DisqusModule } from "ngx-disqus";
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { TagInputModule } from 'ngx-chips';
import { MemoriesComponent } from './component/memories/memories.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'publish', pathMatch: 'full' },
      { path: 'draft', component: DraftListComponent },
      { path: 'publish', component: PublishedListComponent },
      { path: 'profile', component: ProfileComponent },
    ]
  },
  { path: 'admin/draft/:id', component: DraftDetailsComponent, canActivate: [AuthGuard] },
  { path: 'admin/publish/:id', component: PublishedDetailsComponent, canActivate: [AuthGuard] },
  { path: 'admin/new', component: CreateNewPostComponent, canActivate: [AuthGuard] },
  { path: 'admin/edit/:id', component: EditPostComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blog/:slug', component: BlogdetailsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'project', component: ProjectComponent },
  { path: 'memories', component: MemoriesComponent },
  { path: 'challenges', component: ChallengesComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    LoginComponent,
    HomeComponent,
    BlogComponent,
    BlogdetailsComponent,
    closeNavBarDirective,
    PublishedListComponent,
    DraftDetailsComponent,
    CreateNewPostComponent,
    DraftListComponent,
    EditPostComponent,
    AboutComponent,
    ContactComponent,
    PublishedDetailsComponent,
    MenuComponent,
    TruncatePipe,
    NavbarComponent,
    FooterComponent,
    ProjectComponent,
    ProfileComponent,
    MemoriesComponent,
    ChallengesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    MarkdownToHtmlModule,
    TagInputModule,
    RouterModule.forRoot(appRoutes),
    DisqusModule.forRoot('maxgoh'),
    SlimLoadingBarModule.forRoot(),
    SimplemdeModule.forRoot({
      provide: SIMPLEMDE_CONFIG,
      // config options 1
      useValue: ({
        showIcons: ['code', 'table'],
        spellChecker: false,
        status: false,
        hideIcons: ['guide', 'heading'],
        toolbar: ['|', 'bold', '|', 'italic', 'heading', '|', 'quote', '|', 'code', 'strikethrough', 'image', 'preview', 'side-by-side', 'fullscreen'],
        autofocus: true,
        autosave: {
          enabled: true,
          uniqueId: 'MyUniqueID',
          delay: 1000,
        },
        blockStyles: {
          bold: '**',
          italic: '_',
          code: ``,
        },
        placeholder: 'Type here...',
      }),
      promptURLs: true,
      renderingConfig: {
        singleLineBreaks: false,
        codeSyntaxHighlighting: true,
      },
    }),
  ],
  providers:
  [
    Title,
    BlogService,
    AuthService,
    AuthGuard,
    MenuService,
    LoadingService,
    GoogleAnalyticsEventsService,
    { provide: LocationStrategy, useClass: PathLocationStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
