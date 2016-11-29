import { Component } from '@angular/core';

export let OauthButtonsComponent = @Component({
  selector: 'oauth-buttons',
  template: require('./settings.<%=templateExt%>'),
  styles: [require('./main.<%=styleExt%>')],
})
class OauthButtonsComponent {
  loginOauth(provider) {
    window.location.href = `/auth/${provider}`;
  };
}
