import { Footer } from "../components/Footer/Footer.jsx";
import Header from "../components/Header/Header.jsx";
import { Navigation } from "../components/Navigation/NavBar.jsx";
import { NewsGrid } from "../components/NewSection/NewsGrid.jsx";
import { BreakingNews } from "../components/NewSection/BreakingNews.jsx";

export function HomePages() {
  return (
    <div>
      <Header />
      <BreakingNews />
      <Navigation />
      <NewsGrid />
      <h1>HomePage</h1>
      <p></p>
      <Footer /> 
    </div>
  );
}

