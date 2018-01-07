import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default class Privacy extends React.Component {
  componentWillMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="top-container">
        <div className="top-nav-bar">
          <Navbar />
        </div>
        <div className="policy-container">
          <h1>Privacy Policy</h1>
          <p>
            This privacy notice discloses the privacy practices for Maia Baby
            Formula and our website (https://maia-baby-formula.herokuapp.com/).
            Maia Baby Formula have prepared this privacy policy to describe to
            you our practices regarding the information collected by this
            website (e.g., how we use and secure that information). We treat
            your information exactly how we would want someone to treat ours—we
            do not sell it to third parties, we do our very best to keep it
            secure, and we will only contact you with information we really
            think you want but if we are wrong you always have the right to tell
            us to stop.
          </p>
          <h2>Information Collection, Use, and Sharing </h2>
          <p>
            We are the sole owners of the information collected on this site. We
            only have access to/collect information that you voluntarily give us
            via email or other direct contact from you. We will not sell or rent
            this information to anyone. We will use your information to respond
            to you, regarding the reason you contacted us (e.g., notify you
            about the product launch). We will not share your information with
            any third party outside of our organization, other than as necessary
            to fulfill your request, e.g., to ship an order. Unless you ask us
            not to, we may contact you via email in the future to tell you about
            specials, new products or services, or changes to this privacy
            policy.
          </p>
          <h2>Product Launch</h2>
          <p>
            In order to receive information about the product launch, a user
            must enter their email address. This information is used to contact
            you about the product once it’s ready for launch / order.{" "}
          </p>
          <h2>Security</h2>
          <p>
            We take precautions to protect your information. When you submit
            sensitive information via the website, your information is protected
            both online and offline. We employ industry-standard data
            collection, storage and processing practices and security measures
            to strive to protect against any unauthorized access to or
            disclosure of your Personal Information. While we use encryption to
            protect sensitive information transmitted online, we also protect
            your information offline. Only employees who need the information to
            perform a specific job are granted access to personally identifiable
            information. The computers/servers on which we store personally
            identifiable information are kept in a secure environment.
            Unfortunately, no method of security or combination of methods is
            foolproof, but we will always strive to do our best. That is our
            promise to you.
          </p>
          <h2>Your Access to and Control Over Information</h2>
          <p>
            While we will work hard to only send you information that we truly
            think you will be interested in, should you wish to opt-out of
            receiving any or all communications from us you may do so in the
            following ways: Email: maiababyformula@gmail.com
          </p>
          <h2>Notification of Changes</h2>
          <p>
            Whenever material changes are made to the privacy notice, we will
            post a notice on our website or by sending you a notice through
            email. Your continued use of our website after such a posting or
            sending of notice means you have accepted those changes and use of
            Personal Information is governed by the policy in effect at the time
            the information is collected.
          </p>
          <h2>Questions</h2>
          <p>
            We hope we have told you everything you need to know, but if you
            have any questions or need any further information, please contact
            us at: maiababyformula@gmail.com
          </p>
          <h2>Privacy Policy effective as of January 1, 2018.</h2>
        </div>
        <Footer />
      </div>
    );
  }
}
