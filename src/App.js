import './App.css';
import CTA from './components/CTA';
import ListInfo from './components/ListInfo';
import StickyFooter from './components/Timer';
import Introduce from './components/Introduce';
import PastEvents from './components/PastEvents';
import Details from './components/Details';
import PricingSection from './components/Pricing';
import Schedule from './components/Schedule';
import Mentor from './components/Mentor';
import CaseStudies from './components/CaseStudies';
import FAQ from './components/FAQ';
import VenueComponent from './components/Venue';
import BookSeat from './components/BookMySeat';
import Footer from './components/Footer';
import BeforeAndAfter from './components/BeforeAndAfter';
import BonusesComponent from './components/Bonus';
import MediaPartners from './components/MediaPartner';
import Privacy_Policy from "./page/Privacy_Policy";

import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/Privacy_Policy"
          element={
            <>
              <Privacy_Policy />
            </>
          }
        />
        <Route
          path="/"
          element={
            <>

              <CTA />
              <ListInfo />
              <Introduce />
              <PastEvents />
              <Details />
              <PricingSection />
              <BonusesComponent />
              <Schedule />
              <Mentor />
              <CaseStudies />
              <VenueComponent />
              <BeforeAndAfter />
              {/* <FAQ /> */}
              <BookSeat />
              <MediaPartners />
              <Footer />
              <div style={{ marginBottom: '3.5em' }}></div>
              <StickyFooter />

            </>
          }
        />
      </Routes>

    </div>
  );
}

export default App;
