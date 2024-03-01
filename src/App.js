import "./App.css";
import Header from "./components/Header/Header.js";
import comingSoonIos from "../src/assets/images/coming-soon-ios.png"
import comingSoonAndroid from "../src/assets/images/coming-soon-android.png"

function App() {
  return (
    <div>
      <Header />
      <main>
        <h1>Findr - Find Local Communities</h1>
        <section id="about-section" class="about-section">
          <div>
          <p>
            Findr is an app to connect people who enjoy the same topic to others
            in the same geographical area. Imagine finding fellow book lovers,
            gardeners, or DND players, all findable by city, town, or
            neighbourhood.
          </p>
          <p>
            Aside from connecting people, Findr also provides tools to organize
            events, in-person meetups, and a budget tracker so people know how
            much your community typically spends on activities.
          </p>
          <p>
            <i>
              App currently under construction. Findr will be released on the
              App Store and Google Play soon.
            </i>
          </p>
          <img src={comingSoonIos} alt="Coming soon to ios" class="comingSoon-img"/> 
          <img src={comingSoonAndroid} alt="Coming soon to androidd" class="comingSoon-img"/> 
          </div>
        </section>
        <h2 class="contact-section-h2">Contact</h2>
        <section id="contact-section">
          <p>
            Email us at{" "}
            <a href="mailto:admin@findr.community">admin@findr.community</a> for
            any enquiries.
          </p>
        </section>
        <h2 class="privacy-section-h2">Privacy</h2>
        <section id="privacy-section" class="privacy-section">
          <div>
          <p>
            This is a social app, so Findr will need to collect some personal
            and device data to function (when the app is fully released). These
            include your name, email, any images you choose to upload, and
            geolocation data. We will not sell your data to third parties, and
            we will not use your data for any purpose other than to provide the
            services offered by Findr.
          </p>
          <p>
            If you would like us to delete your data, please{" "}
            <a href="mailto:admin@findr.community">contact us</a>.
          </p>
          </div>
        </section>
        <footer>
          <hr />
          <p>
            <small>Made with ❤️ in Canada.</small>
          </p>
          <p>
            <small>Findr - Find Local Communities 2024</small>
          </p>
        </footer>
      </main>
    </div>
  );
}

export default App;
