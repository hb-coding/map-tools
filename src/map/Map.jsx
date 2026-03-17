import { useEffect, useRef } from "react";
import { Map } from "maplibre-gl";
import customLayer, { modelOrigin } from "./customLayer";

function MapView() {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    if (!mapContainerRef.current) return;

    const mapDisplay = new Map({
      style: "https://tiles.openfreemap.org/styles/liberty",
      center: modelOrigin,
      zoom: 15,
      pitch: 60,
      container: mapContainerRef.current,
      canvasContextAttributes: { antialias: true },
    });

    mapDisplay.on("style.load", () => {
      mapDisplay.addLayer(customLayer);
    });

    return () => mapDisplay.remove();
  }, []);

  return (
    <>
      <div
        ref={mapContainerRef}
        style={{ width: "100%", height: "500px" }}
      ></div>
    </>
  );
}

export default MapView;
