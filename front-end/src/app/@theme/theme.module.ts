import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { regService} from '../services/reg.services'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NbEmailPassAuthProvider, NbAuthModule } from '@nebular/auth';
import {HttpModule} from '@angular/http';
import { UserOb} from '../objects/UserObject';


import {
  NbActionsModule,
  NbCardModule,
  NbLayoutModule,
  NbMenuModule,
  NbRouteTabsetModule,
  NbSearchModule,
  NbSidebarModule,
  NbTabsetModule,
  NbThemeModule,
  NbUserModule,
  NbCheckboxModule,
  NbPopoverModule,
  NbContextMenuModule,
} from '@nebular/theme';

import {
  FooterComponent,
  HeaderComponent,
  ThemeSwitcherComponent,
  StatusCardComponent
} from './components';
import { CapitalizePipe, PluralPipe, RoundPipe, TimingPipe } from './pipes';
import { MainLayoutComponent } from './layouts';
import { DEFAULT_THEME } from './styles/theme.default';
import { COSMIC_THEME } from './styles/theme.cosmic';

const BASE_MODULES = [CommonModule];

const NB_MODULES = [
  NbCardModule,
  NbLayoutModule,
  NbTabsetModule,
  NbRouteTabsetModule,
  NbMenuModule,
  NbUserModule,
  NbActionsModule,
  NbSearchModule,
  NbSidebarModule,
  NbCheckboxModule,
  NbContextMenuModule,
  NbPopoverModule,
  NgbModule,
  Ng2SmartTableModule
];

const COMPONENTS = [
  ThemeSwitcherComponent,
  HeaderComponent,
  FooterComponent,
  StatusCardComponent,
  MainLayoutComponent
];

const PIPES = [CapitalizePipe, PluralPipe, RoundPipe, TimingPipe];

const NB_THEME_PROVIDERS = [
  ...NbThemeModule.forRoot(
    {
      name: 'default'
    },
    [DEFAULT_THEME, COSMIC_THEME]
  ).providers,
  ...NbSidebarModule.forRoot().providers,
  ...NbMenuModule.forRoot().providers
];

@NgModule({
  imports: [HttpModule,...BASE_MODULES, ...NB_MODULES,NbAuthModule.forRoot({
    providers: { 
      email: {
        service: NbEmailPassAuthProvider,
        config: {
          baseEndpoint: '',
          login: {
            alwaysFail: false,
            rememberMe: true,
            endpoint: '/api/auth/login',
            method: 'post',
            redirect: {
              success: '/',
              failure: null,
            },
            defaultErrors: ['Login/Email combination is not correct, please try again.'],
            defaultMessages: ['You have been successfully logged in.'],
          },
          register: {
            alwaysFail: false,
            rememberMe: true,
            endpoint: '/api/auth/register',
            method: 'post',
            redirect: {
              success: '/',
              failure: null,
            },
            defaultErrors: ['Something went wrong, please try again.'],
            defaultMessages: ['You have been successfully registered.'],
          },
          logout: {
            alwaysFail: false,
            endpoint: '/api/auth/logout',
            method: 'delete',
            redirect: {
              success: '/',
              failure: null,
            },
            defaultErrors: ['Something went wrong, please try again.'],
            defaultMessages: ['You have been successfully logged out.'],
          },
          requestPass: {
            endpoint: '/api/auth/request-pass',
            method: 'post',
            redirect: {
              success: '/',
              failure: null,
            },
            defaultErrors: ['Something went wrong, please try again.'],
            defaultMessages: ['Reset password instructions have been sent to your email.'],
          },
          resetPass: {
            endpoint: '/api/auth/reset-pass',
            method: 'put',
            redirect: {
              success: '/',
              failure: null,
            },
            resetPasswordTokenKey: 'reset_password_token',
            defaultErrors: ['Something went wrong, please try again.'],
            defaultMessages: ['Your password has been successfully changed.'],
          },
          
         
        },
      },
    },
    forms: {

      login: {
        redirectDelay: 0,
        showMessages: {
          success: true,
        },
      },
      register: {
        redirectDelay: 0,
        showMessages: {
          success: true,
        },
      },
      requestPassword: {
        redirectDelay: 0,
        showMessages: {
          success: true,
        },
      },
      resetPassword: {
        redirectDelay: 0,
        showMessages: {
          success: true,
        },
      },
      logout: {
        redirectDelay: 0,
    },
  }}), ],
  exports: [...BASE_MODULES, ...NB_MODULES, ...COMPONENTS, ...PIPES],
  declarations: [...COMPONENTS, ...PIPES]
})
export class ThemeModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: ThemeModule,
      providers: [...NB_THEME_PROVIDERS]
    };
  }
}
