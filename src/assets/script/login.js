(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if(d.getElementById(id)) return;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if(d.getElementById(id)) return;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://apis.google.com/js/api:client.js?onload=onLoadGoogleCallback";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'google-jssdk'));

window.fbAsyncInit = function() {
  FB && FB.init({
      appId: '154504280057234',
      cookie: true,
      xfbml: true,
      version: 'v2.8'
  });
}

function storageInfo(data) {
  window.Cookies.set('storage_gaming', JSON.stringify(data), {
      expires: 7
  });

  location.href = "form"
}

function testAPI() {
  FB.api('/me', function (response) {
      FB.api('http://graph.facebook.com/' + response.id + '?fields=first_name,last_name,email', function (data) {
          console.log(data);
          var info = {
              username: data.first_name + ' ' + data.last_name,
              email: data.email,
              channel: 'Facebook'
          };

          storageInfo(info);
      });
  });
}

$('#f_login').click(function() {
  FB && FB.login(function (response) {
      if (response.status === 'connected') {
          testAPI();
      } else {
          console.log("该用户没有登录")
      }
  }, {scope: 'public_profile,email'});
});

var auth2;
var googleUser = {};
window.onLoadGoogleCallback = function() {
  gapi && gapi.load('auth2', function () {
      auth2 = gapi.auth2.init({
          client_id: '955446820867-pu5h47rgbdogfl11ltuljhi6hlt363pm.apps.googleusercontent.com', //客户端ID
          cookiepolicy: 'single_host_origin',
          scope: 'profile email' //可以请求除了默认的'profile' and 'email'之外的数据
      });

      startGoogleApp();
  });
}

function startGoogleApp() {
  var elem =  document.getElementById('g_login');
  auth2.attachClickHandler(elem, {}, function(googleUser) {
      var profile = auth2.currentUser.get().getBasicProfile();
      var info = {
          username: profile.getName(),
          email: profile.getEmail(),
          channel: 'Google'
      };

      storageInfo(info);
  }, function(error) {
      console.log(JSON.stringify(error, undefined, 2));
  });
}
