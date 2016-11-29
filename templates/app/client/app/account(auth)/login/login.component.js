import { Component } from '@angular/core';
<%_ if(filters.uirouter) { -%>
import { StateService } from 'ui-router-ng2';<% } %>
<%_ if(filters.ngroute) { -%><% } %>
import { AuthService } from '../../../components/auth/auth.service';

// @flow
<%_ if(filters.flow) { -%>
type User = {
  name: string;
  email: string;
  password: string;
};
<%_ } -%>
<%_ if(filters.ts) { -%>
interface User {
  name: string;
  email: string;
  password: string;
}
<%_ } -%>

export let LoginComponent = @Component({
  selector: 'login',
  template: require('./login.<%=templateExt%>'),
})
class LoginComponent {
  user: User = {
    name: '',
    email: '',
    password: '',
  };
  errors = {login: undefined};
  submitted = false;
  AuthService;
  <%_ if(filters.ngroute) { -%><% } %>
  <%_ if(filters.uirouter) { -%>
  StateService;<% } %>

  static parameters = [AuthService, <% if(filters.ngroute) { %><% } else { %>StateService<% } %>];
  constructor(_AuthService_: AuthService, <% if(filters.ngroute) { %><% } else { %>_StateService_: StateService<% } %>) {
    this.AuthService = _AuthService_;
    <%_ if(filters.ngroute) { -%><% } %>
    <%_ if(filters.uirouter) { -%>
    this.$state = $state;<% } %>
  }

  login(form) {
    this.submitted = true;

    if(form.$valid) {
      this.Auth.login({
        email: this.user.email,
        password: this.user.password
      })
      .then(() => {
        // Logged in, redirect to home
        <% if(filters.ngroute) { %>this.$location.path('/');<% } %><% if(filters.uirouter) { %>this.$state.go('main');<% } %>
      })
      .catch(err => {
        this.errors.login = err.message;
      });
    }
  }
}
