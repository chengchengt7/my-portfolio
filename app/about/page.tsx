import "./page.css";
import Footer from "@/components/Footer/Footer";

export default function Page() {
  return (
    <>
      <div className="about-page">
        <img
          src="/profile-pic.jpg"
          alt="Chengcheng Teng"
          width={1179}
          height={1474}
        />
        <section className="about-bio" aria-labelledby="about-heading">
          <p>
            Hi, I'm Chengcheng Teng, a frontend developer & product designer. I
            love turning ideas into working interfaces, bringing design and code
            together to create digital experiences that feel{" "}
            <span className="highlight">clear, intuitive, and human.</span>
          </p>
          <p>
            I hold a master's degree in design from{" "}
            <a href="https://www.newschool.edu/parsons/">
              <i>Parsons School of Design</i>
            </a>{" "}
            and am completing my front-end development degree at{" "}
            <a href="https://gokstadakademiet.no/">
              <i>Gokstad Akademiet</i>
            </a>
            , graduating in 2027.
          </p>
          <p>
            I'm passionate about the entire development process—from{" "}
            <span className="highlight">
              understanding user needs and exploring ideas to building
              solutions, testing them, and continuously improving them through
              feedback.
            </span>
          </p>
          <p>
            I'm driven by curiosity and a desire to understand not just how
            things work, but why they're built that way. I question assumptions,
            challenge conventional approaches, and enjoy finding simpler,
            smarter solutions. I bring both a critical eye for user experience
            and a practical mindset for building software that's intuitive,
            maintainable, and scalable.
          </p>
        </section>
      </div>
      <Footer />
    </>
  );
}
