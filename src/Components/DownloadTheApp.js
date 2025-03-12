import { X } from "lucide-react";
import googlplay from "../images/Googleplay.webp";
import Appstore from "../images/Appstore.png";
import barcoad from "../images/barcoad.png";

export default function DownloadTheApp({ showPopup, setShowPopup }) {
  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
        {/* Close Button */}
        <div className="flex justify-end p-3">
          <button
            onClick={() => setShowPopup(false)}
            className="text-gray-600 hover:text-gray-900"
          >
            <X size={24} />
          </button>
        </div>

        {/* Popup Content */}
        <div className="p-6 text-center bg-blue-300">
          <h2 className="text-2xl font-bold mb-2">Download the Behance App</h2>
          <p className="text-gray-600 mb-4">
            The best way to stay up to date with the creative world
          </p>

          <div className="flex justify-center gap-4">
            <img src={barcoad} alt="QR Code" className="w-24 h-24 mt-1" />
            <div className="flex flex-col gap-2">
              <a href="#">
                <img
                  src={googlplay}
                  alt="Get it on Google Play"
                  className="w-40"
                />
              </a>
              <a href="#">
                <img
                  src={Appstore}
                  alt="Download on the App Store"
                  className="w-40"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
