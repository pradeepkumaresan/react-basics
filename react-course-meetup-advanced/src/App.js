import { Route, Routes } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import FavouritesPage from "./pages/Favourites";
import NewMeetupPage from "./pages/NewMeetup";
import Layout from "./components/layout/Layout";
import CapabilityGraph from "./components/CapabilityGraph";

function App() {
  return (
    <div>
      <CapabilityGraph />
      {/* <Layout>
        <Routes>
          <Route path="/" element={<AllMeetupsPage />} />
          <Route path="/new-meetup" element={<NewMeetupPage />} />
          <Route path="/favourites" element={<FavouritesPage />} />
        </Routes>
      </Layout> */}
    </div>
  );
}

export default App;
