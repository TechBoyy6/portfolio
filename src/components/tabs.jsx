import {
  faUser,
  faLightbulb,
  faTimeline,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <ul className="flex flex-wrap text-sm justify-center font-medium text-center text-gray-500 border-b border-gray-200 mb-10 md:mb-0">
      <li className="mr-2">
        <Link
          to="/"
          className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50"
        >
          <FontAwesomeIcon icon={faUser} size="2x" />
        </Link>
      </li>
      <li className="mr-2">
        <Link
          to="/projects"
          className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 "
        >
          <FontAwesomeIcon icon={faLightbulb} size="2x" />
        </Link>
      </li>
      <li className="mr-2">
        <Link
          to="/timeline"
          className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 "
        >
          <FontAwesomeIcon icon={faTimeline} size="2x" rotation={90} />
        </Link>
      </li>
      <li className="mr-2">
        <Link
          to="/contact"
          className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 "
        >
          <FontAwesomeIcon icon={faPhone} size="2x" />
        </Link>
      </li>
    </ul>
  );
}
