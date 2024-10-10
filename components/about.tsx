/* eslint-disable react/no-unescaped-entities */
import LocalTime from "./local-time";

export default function About() {
  return (
    <div className="lowercase">
      <div className="mb-8 md:mb-10 font-mono font-semibold">
        <p>dhruv bhavsar</p>
        <p>
          mumbai, india <LocalTime />
        </p>
      </div>
      <div className="space-y-4">
        <p>
          I am a man who builds things with code. My hands know the keyboard
          like an old friend. Machine learning is my mistress, always calling me
          back.
        </p>
        <p>
          In the days at{" "}
          <a
            href="https://picostone.com"
            target="_blank"
            className="underline underline-offset-2 hover:bg-black hover:text-white"
          >
            picostone
          </a>{" "}
          , I led the charge. We crafted products from nothing but ideas and
          will. I shaped designs like a sculptor shapes clay. The cloud was my
          domain, vast and ethereal.
        </p>
        <p>
          Before that, I walked the halls of{" "}
          <a
            href="https://kjsit.somaiya.edu.in/en"
            target="_blank"
            className="underline underline-offset-2 hover:bg-black hover:text-white"
          >
            kj somaiya
          </a>
          (sion). They said I studied AI and data science. The diploma says I
          learned, but my mind is blank as a fresh sheet of paper.
        </p>
        <p>
          Now, each day is a battle against boredom. I create. I build. The
          things I make light a fire in my belly. Machine learning is my trail
          through the wilderness. Books are my companions in the quiet hours.
        </p>
      </div>
    </div>
  );
}
