import React, { useState } from "react";
import { usePlacesWidget } from "react-google-autocomplete";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }: any) => <div>{text}</div>;

function MapModel({ setMap }: { setMap: (newState: boolean) => void }) {
  const [address, setAddress] = useState("");
  const ApiKey = "AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg";
  const { ref }: any = usePlacesWidget({
    apiKey: ApiKey,
    onPlaceSelected: (place) => console.log(place),
  });

  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  return (
    <>
      <div className="fixed w-full h-[500px]  max-w-2xl shadow-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
        <div className="relative bg-white rounded-lg flex-1 shadow h-full flex flex-col">
          <div className="flex items-start justify-between p-4 border-b rounded-t ">
            <h3 className="text-xl font-semibold text-gray-900 ">
              Choose the address
            </h3>
            <button
              onClick={() => setMap(false)}
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center "
              data-modal-hide="defaultModal"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="p-2 space-y-6 flex-1 flex flex-col">
            <input
              type="text"
              placeholder={"Choose an address"}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="input-primary"
              ref={ref}
            />
            <div className="bg-green-400 flex-1 w-full ">
              <GoogleMapReact
                bootstrapURLKeys={{ key: ApiKey }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
              >
                <div>Marker</div>
              </GoogleMapReact>
            </div>
          </div>
          <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b ">
            <button
              data-modal-hide="defaultModal"
              type="button"
              onClick={() => setMap(false)}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
            >
              Okay
            </button>
            <button
              data-modal-hide="defaultModal"
              onClick={() => setMap(false)}
              type="button"
              className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 "
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default MapModel;
