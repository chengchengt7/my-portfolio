import "./page.css";
import Footer from "@/components/Footer/Footer";

export default function Page() {
  return (
    <>
      <div className="about-page">
        <img src="./profile-pic.jpg" alt="Profile picture" />
        <div>
          <h2>Things I believe:</h2>
          <ul>
            <li>
              Good technology should reduce cognitive load, not add features.
            </li>
            <li>
              A product should explain itself through behavior. If users need
              instructions for the main interaction, I first question the
              interaction.
            </li>
            <li>Coding is art.</li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}
