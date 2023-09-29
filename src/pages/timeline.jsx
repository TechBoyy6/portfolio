import { Link } from "react-router-dom";
import ConstantsStrings from "../constants/strings";

export default function Timeline() {
  const { Timeline } = ConstantsStrings;
  const { TimelineDefaultImage } = ConstantsStrings;
  return (
    <>
      <div className="container w-full h-full">
        <div className="relative wrap overflow-hidden md:p-10 h-full">
          <div className="md:ml-4 absolute border-opacity-20 border-white h-full border-2 m-4" />
          {Timeline.map((element) => {
            return (
              <article
                className="flex transition my-10 max-w-3xl border-personality_color border-2 lg:hover:scale-110"
                key={element}
              >
                <div className="rotate-180 p-2 [writing-mode:_vertical-lr] bg-personality_color">
                  <time className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900">
                    <span>{element.Year}</span>
                    <span className="w-px flex-1 bg-gray-900"></span>
                    <span>{element.Date}</span>
                  </time>
                </div>
                <div className="hidden sm:flex sm:basis-56 aspect-square bg-white align-middle items-center">
                  <a
                    href={"/" + element.Image}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      alt={element.Type}
                      src={
                        element.Image === ""
                          ? TimelineDefaultImage[element.Type]
                          : element.Image
                      }
                      className="aspect-square h-full w-full object-cover hover:object-contain cursor-zoom-in"
                    />
                  </a>
                </div>

                <div className="flex flex-1 flex-col justify-between text-left">
                  <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                    <h3 className="font-bold uppercase text-white text-lg">
                      {element.Title}
                    </h3>

                    <p className="mt-2 line-clamp-3 text-sm/relaxed text-white">
                      {element.Description}
                    </p>
                  </div>

                  <div className="sm:flex sm:items-end sm:justify-end">
                    <Link
                      to={element.Link}
                      target="_blank"
                      className="block bg-personality_color px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-personality_color"
                    >
                      {element.Link_Text} →
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </>
  );
}
