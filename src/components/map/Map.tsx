import { useEffect } from 'react';

interface IMapProps {
  lat: string;
  lng: string;
}

const Map = ({ lat, lng }: IMapProps) => {
  useEffect(() => {
    const onScriptLoad = () => {
      const map = new window.google.maps.Map(document.getElementById('map') as HTMLElement, {
        zoom: 10,
        center: { lat: Number(lat), lng: Number(lng) },
      });
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const marker = new window.google.maps.Marker({
        position: { lat: Number(lat), lng: Number(lng) },
        map,
      });
    };

    const mapUrl = `https://maps.googleapis.com/maps/api/js?key=${
      process.env.GOOGLE_MAP_KEY || 'nokey'
    }`;

    if (!window.google) {
      const googleMapScript = document.createElement('script');
      googleMapScript.setAttribute('src', mapUrl);
      googleMapScript.setAttribute('defer', '');
      document.body.append(googleMapScript);
      googleMapScript.addEventListener('load', () => onScriptLoad());
    } else {
      onScriptLoad();
    }
    return () => {};
  }, [lat, lng]);

  return <div id="map" style={{ width: '100%', height: '500px' }} />;
};

export default Map;
