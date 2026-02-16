import { useEffect, useRef } from "react";
import { Map } from "maplibre-gl";

function MapView() {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    if (!mapContainerRef.current) return;

    const mapDisplay = new Map({
      style: "https://tiles.openfreemap.org/styles/liberty",
      center: [13.388, 52.517],
      zoom: 9.5,
      container: mapContainerRef.current,
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
