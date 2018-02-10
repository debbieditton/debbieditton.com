import React from 'react';
import './integrations.scss';

export default class Integrations extends React.Component {
  render() {
    return (
      <div>
        <div className="music-teachers-helper" id="mth-remote-login">
          <form id="mth-login" method="post" action="https://www.musicteachershelper.com/ProcessLogin.php">
          <fieldset>
            <h3 className="logo">Music Teachers Helper Login</h3>
            <div className="field"><label htmlFor="Username">Username</label><input type="text" name="Username" id="Username" className="text" /></div>
            <div className="field"><label htmlFor="Password">Password</label><input type="password" name="Password" id="Password" className="text" /></div>
            <div className="field"><input type="submit" value="Login" className="submit" /></div>
            <input type="hidden" id="returnTo" name="returnTo" value=" location.href " />
            <a href="https://www.musicteachershelper.com/reset-password" className="reset-password">Forgot your password?</a>
            <a href="https://www.musicteachershelper.com" className="mth-logo" title="Powered by MusicTeachersHelper.com">MusicTeachersHelper.com</a>
          </fieldset>
          </form>
        </div>
        <div className="mailchimp">
          <div id="mc_embed_signup">
            <form action="https://debbieditton.us17.list-manage.com/subscribe/post?u=2b882d7e8df2fff59fd311d24&amp;id=64acd3b09f" method="post" name="mc-embedded-subscribe-form" className="validate" target="_blank" novalidate>
              <div id="mc_embed_signup_scroll">
              	<label htmlFor="mce-EMAIL">Subscribe to my news letter!</label>
              	<input type="email" name="EMAIL" className="email" id="mce-EMAIL" placeholder="email address" required />
                <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true"><input type="text" name="b_2b882d7e8df2fff59fd311d24_64acd3b09f" tabindex="-1" value="" /></div>
                <div className="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" /></div>
              </div>
            </form>
          </div>
        </div>
        <div style={{ clear: 'both' }} />
      </div>
    )
  }
}
