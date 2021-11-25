import { SearchIcon } from "@heroicons/react/outline";
import { DotsHorizontalIcon, VideoCameraIcon } from "@heroicons/react/solid";
import Contact from "./Contact";

const contacts = [
  {
    name: "Harold Geumtcheng",
    src: "https://avatars.githubusercontent.com/u/65024481?v=4",
  },
  {
    name: "Elon Musk",
    src: "https://links.papareact.com/4zn",
  },
  {
    name: "Mark Zuckerberg",
    src: "https://links.papareact.com/xql",
  },
  {
    name: "Jeff Bezos",
    src: "https://links.papareact.com/k2j",
  },
  {
    name: "Bill Gates",
    src: "https://links.papareact.com/4u4",
  },
];
function Widgets() {
  return (
    <div className="hidden lg:flex flex-col w-60 p-2 mt-5">
      <div className="flex justify-between items-center text-gray-500 mb-5">
        <h2 className="text-xl">Contacts</h2>
        <div className="flex space-x-2">
          <VideoCameraIcon className="h-6" />
          <SearchIcon className="h-6" />
          <DotsHorizontalIcon className="h-6" />
        </div>
      </div>
      {contacts.map((contact) => {
        <Contact key={contact.src} src={contact.src} name={contact.name} />;
      })}
    </div>
  );
}

export default Widgets;
