import Links from "@/components/links";
import LocalTime from "@/components/local-time";

/* eslint-disable react/no-unescaped-entities */
export default function Home() {
  return (
    <div className="text-blue-800 selection:bg-black selection:text-white font-medium px-4 py-4 md:px-16 md:py-10 max-w-[65ch] text-sm md:text-base">
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
          <a href="https://picostone.com" target="_blank" className="underline underline-offset-2">
            picostone
          </a>{" "}
          as a software developer.
        </p>
        <p>
          before that, i was a student at{" "}
          <a
            href="https://kjsit.somaiya.edu.in/en"
            target="_blank"
            className="underline underline-offset-2"
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
        <Links />
      </div>
    </div>
  );
}
