SocialShareKit.init({
  selector: '.ssk-group .ssk',
  url: window.location.href,
  text: 'Share text default',
  twitter: {
    url: 'http://url-for-twitter',
    text: 'Share text for twitter',
    via: 'twitter-screen-name',
    countCallback: function (shareUrl, onCountReady) {
      // Get count somewhere manually and call onCountReady() whenever you got the count.
      var count = 5;
      return onCountReady(count);
    }
  }
});




window.fbAsyncInit = function () {
  FB.init({
    xfbml: true,
    version: 'v3.2'
  });
};
(function (d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) { return; }
  js = d.createElement(s);
  js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
