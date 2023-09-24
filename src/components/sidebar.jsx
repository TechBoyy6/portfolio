import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faLightbulb,
  faTimeline,
  faPhone,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import ConstantsStrings from "../constants/strings";
import RickTriggerPrompts from "../constants/rick_trigger_prompts";
// import Rick from "./rick";
import { useEffect, useContext } from "react";
import RickMessageContext from "../context/rick/rickMessageContext";

export default function Sidebar() {
  const { Navbar, Asset } = ConstantsStrings;
  const { Sidebar } = RickTriggerPrompts;
  const RickMessageProvider = useContext(RickMessageContext);

  useEffect(() => {
    const sidebarNavButton = document.querySelectorAll("#sidebar_list li");
    const promptsKeys = Object.values(Sidebar);
    for (let i = 0; i < sidebarNavButton.length; i++) {
      const element = sidebarNavButton[i];
      element.addEventListener("click", () => {
        RickMessageProvider.getCommentOnUserAction(
          promptsKeys[i],
          i + 1 === sidebarNavButton.length ? Asset.rick_pout : Asset.rick
        );
      });
    }
  }, []);

  return (
    <>
      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 w-20 h-screen transition-transform -translate-x-full sm:translate-x-0"
      >
        <div className="h-full py-12 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul className="space-y-14" id="sidebar_list">
            <li className="group" id="profile_icon">
              <Link to="/">
                <FontAwesomeIcon icon={faUser} size="2x" />
                <span className="absolute w-28 ml-5 scale-0 transition-all rounded bg-slate-200 p-2 text-black text-center text-xs group-hover:scale-100">
                  {Navbar.aboutMeTooltip}
                </span>
              </Link>
            </li>
            <li className="group" id="projects_icon">
              <Link to="/projects">
                <FontAwesomeIcon icon={faLightbulb} size="2x" />
                <span className="absolute w-28 ml-5 scale-0 transition-all rounded bg-slate-200 p-2 text-black text-center text-xs group-hover:scale-100">
                  {Navbar.projectsTooltip}
                </span>
              </Link>
            </li>
            <li className="group" id="timeline_icon">
              <Link to="/timeline">
                <FontAwesomeIcon icon={faTimeline} size="2x" rotation={90} />
                <span className="absolute w-28 ml-5 scale-0 transition-all rounded bg-slate-200 p-2 text-black text-center text-xs group-hover:scale-100">
                  {Navbar.timelineTooltip}
                </span>
              </Link>
            </li>
            <li className="group" id="contact_icon">
              <Link to="/contact">
                <FontAwesomeIcon icon={faPhone} size="2x" />
                <span className="absolute w-28 ml-5 scale-0 transition-all rounded bg-slate-200 p-2 text-black text-center text-xs group-hover:scale-100">
                  {Navbar.contactTooltip}
                </span>
              </Link>
            </li>
            <li className="fixed bottom-0 p-6 group" id="theme_change">
              <FontAwesomeIcon icon={faSun} size="2x" />
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}
