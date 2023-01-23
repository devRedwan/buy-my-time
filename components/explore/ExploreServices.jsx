import { ArrowDownIcon } from "@heroicons/react/24/solid";
import Collapsible from "react-collapsible";

const ExploreServices = () => {
  return (
    <div className="shadow-lg shadow-blue-100">
      <Collapsible
        trigger={
          <div className="flex justify-between">
            <h1 className="text-2xl font-semibold text-center">Service</h1>
            <ArrowDownIcon className="h-6 w-6" />
          </div>
        }
        className="collapsibleTag bg-blue-100 p-4 rounded-md ">
        <p className="p-4 text-gray-700 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor,
          magna vel bibendum malesuada, augue risus egestas odio, euismod
          malesuada orci nibh et augue. Sed et neque id massa blandit
          pellentesque.
        </p>
      </Collapsible>
      <Collapsible trigger="Seller" className="bg-white p-4 rounded-md">
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor,
          magna vel bibendum malesuada, augue risus egestas odio, euismod
          malesuada orci nibh et augue. Sed et neque id massa blandit
          pellentesque.
        </p>
      </Collapsible>
    </div>
  );
};

export default ExploreServices;
