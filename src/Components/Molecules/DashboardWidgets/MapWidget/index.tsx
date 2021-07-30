import MapFilterButton from "../../../Atoms/MapFilterButton";

const MapWidget = (): JSX.Element => {
  return (
    <>
      <div className="h-full flex flex-col bg-white rounded-lg overflow-hidden relative">
        <iframe
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.6705936157623!2d-0.17955468474452566!3d51.500912118999324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876055b21867ad1%3A0x5efe9cee35da2fd9!2sRoyal%20Albert%20Hall!5e0!3m2!1sen!2suk!4v1627552975374!5m2!1sen!2suk"
          loading="lazy"
          title="map"
        ></iframe>
        <div className="grid grid-rows-3 gap-2 absolute bottom-6 left-4 md:grid-cols-3 md:grid-rows-1">
          <MapFilterButton content="Complete" />
          <MapFilterButton content="Pending" />
          <MapFilterButton content="All Time" />
        </div>
      </div>
    </>
  );
};

export default MapWidget;
