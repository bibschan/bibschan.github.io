import {
  BookmarkIcon,
  CameraIcon,
  HeartIcon,
  HomeIcon,
  PlusIcon,
  ReplyIcon,
  SearchIcon,
  SendIcon,
} from "@/utils/utils";
import Logo from "./logo";
import Carousel from "./carousel";

export function InstagramComponent() {
  return (
    <div key="1">
      <header className="h-16 flex items-center justify-between px-4 border-b-2 border-gray-300">
        <button className="focus:outline-none">
          <CameraIcon className="h-6 w-6 text-gray-500 hover:text-gray-600 cursor-pointer fill-transparent hover:fill-gray-200 transition-colors duration-150" />
        </button>
        <Logo />
        <button className="focus:outline-none">
          <SendIcon className="h-6 w-6 text-gray-500 hover:text-gray-600 cursor-pointer fill-transparent hover:fill-gray-200 transition-colors duration-150" />
        </button>
      </header>
      <main className="flex-grow overflow-y-auto">
        <div className="flex flex-col gap-4 p-4">
          <Carousel />
          <div className="flex items-center gap-2">
            <button className="focus:outline-none">
              <HeartIcon className="h-6 w-6 text-gray-500 hover:text-gray-600 cursor-pointer fill-transparent hover:fill-pink-400 transition-colors duration-150" />
            </button>
            <button className="focus:outline-none">
              <ReplyIcon className="h-6 w-6 text-gray-500 hover:text-gray-600 cursor-pointer fill-transparent" />
            </button>
            <button className="focus:outline-none">
              <SendIcon className="h-6 w-6 text-gray-500 hover:text-gray-600 cursor-pointer fill-transparent hover:fill-gray-200 transition-colors duration-150" />
            </button>
            <button className="focus:outline-none ml-auto">
              <BookmarkIcon className="h-6 w-6 text-gray-500 hover:text-gray-600 cursor-pointer fill-transparent hover:fill-blue-300 transition-colors duration-150" />
            </button>
          </div>
          <p className="text-sm text-gray-500">
            Liked by
            <strong className="font-medium text-gray-600"> you</strong> and{" "}
            <strong className="font-medium text-gray-600">others</strong>
          </p>
          <div className="flex items-center gap-2">
            <strong className="font-medium text-gray-600">user</strong>
            <p className="text-sm text-gray-500">Great post!</p>
          </div>
          <p className="text-xs text-gray-400">2 HOURS AGO</p>
        </div>
      </main>
      <footer className="h-16 flex items-center justify-around px-4 border-t-2 border-gray-300">
        <button className="focus:outline-none">
          <HomeIcon className="h-6 w-6 text-gray-500 hover:text-gray-600 cursor-pointer fill-transparent" />
        </button>
        <button className="focus:outline-none">
          <SearchIcon className="h-6 w-6 text-gray-500 hover:text-gray-600 cursor-pointer fill-transparent" />
        </button>
        <button className="focus:outline-none">
          <PlusIcon className="h-6 w-6 text-gray-500 hover:text-gray-600 cursor-pointer fill-transparent transition-colors duration-150" />
        </button>
        <button className="focus:outline-none">
          <HeartIcon className="h-6 w-6 text-gray-500 hover:text-gray-600 cursor-pointer fill-transparent hover:fill-pink-400 transition-colors duration-150" />
        </button>
        <div className="relative">
          <div className="h-6 w-6 rounded-full overflow-hidden bg-gray-200" />
          <span className="absolute bottom-0 right-0 w-2 h-2 bg-red-500 rounded-full" />
        </div>
      </footer>
    </div>
  );
}
