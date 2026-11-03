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
            Hi, I'm Chengcheng, a front-end developer with a designer's eye. I
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
            , graduating in 2027. Through projects built with TypeScript, React,
            Next.js, and Payload CMS, I'm extending my design experience into
            technical solutions, turning ideas into application logic,
            connecting data and services, and building functional web
            experiences.
          </p>
          <p>
            I've had a variety of work experience. From restaurants to
            architecture studio, from fitness instructor to design role for the
            fitness brand. I've also built an online business with a million
            subscribers. Across these different fields and experiences, I've
            gained a broad perspective on what makes a great product:{" "}
            <span className="highlight">
              understand a real need, create something useful, help it reach
              people, and refine it through feedback.{" "}
            </span>
          </p>
          <p>
            I'm passionate about finding technical solutions that make a product
            easier to use. For me, the most rewarding part is seeing thoughtful code
            become an experience that feels simple, intuitive, and natural.
          </p>
        </section>
      </div>
      <Footer />
    </>
  );
}
