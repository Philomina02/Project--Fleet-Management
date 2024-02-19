import { Box, Card, CardContent } from "@mui/material";
import Header from "../../components/header";
import Map from "mapmyindia-react";

const GlobalMap = () => {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Global Map" subtitle="Welcome to your dashboard" />
      </Box>

      <Card style={{ width: "100%", height: "80vh" }}>
        <CardContent style={{ width: "100%", height: "100%" }}>
          <iframe
            title="Map"
            srcDoc={`
            <html>
            <head>
              <title>Single Marker</title>
              <meta name="viewport" content="initial-scale=1.0" />
              <meta charset="utf-8" />
              <style>
                html,
                body,
                #map {
                  margin: 0;
                  padding: 0;
                  width: 100%;
                  height: 100vh;
                }
                .card-container {
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  position: absolute;
                  bottom: 10px;
                  left: 0;
                  right: 0;
                  z-index: 1;
                }
                .card {
                  background-color: white;
                  width: 90%;
                  height: 25vh;
                  padding: 20px;
                  border-radius: 5px;
                  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                }
              </style>
              <script
                src="https://apis.mappls.com/advancedmaps/api/48dc5cefe45fd250f0e15054b1acdb0a/map_sdk?layer=vector&v=3.0&callback=initMap1"
                defer
                async
              ></script>
            </head>
            <body>
              <!-- Card above the map -->
              <div class="card-container">
                <div class="card">
                  <h2>Card Above the Map</h2>
                  <p>This is the content of the card.</p>
                </div>
              </div>
          
              <!-- Map -->
              <div id="map"></div>
          
              <script>
                var map, Marker1;
          
                function initMap1() {
                  map = new mappls.Map("map", {
                    center: [28.61, 77.23],
                    zoomControl: true,
                    location: true,
                  });
                  Marker1 = new mappls.Marker({
                    map: map,
                    position: {
                      lat: 28.519467,
                      lng: 77.22315,
                    },
                    fitbounds: true,
                    icon_url: "https://apis.mapmyindia.com/map_v3/1.png",
                  });
                }
              </script>
            </body>
          </html>
          
      `}
            style={{ border: "none", width: "100%", height: "100%" }}
          ></iframe>
        </CardContent>
      </Card>
    </Box>
  );
};

export default GlobalMap;
