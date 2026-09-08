import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

function MainLayout() {
  return (
    <div>
      <Navbar />

      <main>
        <h1>Main Content</h1>
        <p>Main application content placeholder.</p>
      </main>

      <Footer />
    </div>
  );
}

export default MainLayout;