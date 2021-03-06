import { GlobeIcon } from "@heroicons/react/solid";
import React from "react";

export const Footer = () => {
  return (
    <footer className="w-full grid divide-y-[1px] divide-gray-300 bg-gray-100 text-sm text-gray-500">
      <p className="px-8 py-3">Panamá</p>

      <div className="grid grid-cols-1 py-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row-dense">
        <div className="flex justify-center py-1 md:col-span-2 lg:col-span-1 lg:col-start-2">
          <GlobeIcon className="h-5 mr-1 text-green-700" />
          <p>Carbon Neutral since 2007</p>
        </div>
        <div className="flex justify-center py-1 space-x-8 whitespace-nowrap">
          <p className="link">Advertising</p>
          <p className="link">Business</p>
          <p className="link">How Search works</p>
        </div>
        <div className="flex justify-center py-1 space-x-8 whitespace-nowrap">
          <p className="link">Privacy</p>
          <p className="link">Terms</p>
          <p className="link">Settings</p>
        </div>
      </div>
    </footer>
  );
};
