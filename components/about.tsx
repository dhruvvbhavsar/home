/* eslint-disable react/no-unescaped-entities */
import LocalTime from "./local-time";

export default function About() {
  return (
    <>
      <div className="mb-8 md:mb-10 font-mono font-semibold">
        <p>dhruv bhavsar</p>
        <p>
          mumbai, india <LocalTime />
        </p>
      </div>
      <div className="space-y-4">
        <p>i am developer, tinkerer and an ml enthusiast.</p>
        <p>
          previously, i led the development of products, helped with design and
          managed cloud resources at{" "}
          <a href="https://picostone.com" target="_blank" className="underline underline-offset-2 hover:bg-black hover:text-white">
            picostone
          </a>{" "}
          as a software developer.
        </p>
        <p>
          before that, i was a student at{" "}
          <a
            href="https://kjsit.somaiya.edu.in/en"
            target="_blank"
            className="underline underline-offset-2 hover:bg-black hover:text-white"
          >
            kj somaiya
          </a>{" "}
          (sion) and studied bachelor's in ai and data science.
        </p>
        <p>i don't remember learning anything :)</p>
        <p>
          i spend my days making things that excite me, learning about ml and
          reading books.
        </p>
      </div>
    </>
  );
}