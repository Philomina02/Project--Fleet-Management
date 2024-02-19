import { Box, Card, CardContent, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";
import React, { useState } from "react";

const Truck = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "Truck ID" },
    {
      field: "driver",
      headerName: "Driver",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "rc",
      headerName: "RC Number",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "route",
      headerName: "Route",
      flex: 1,
    },
    {
      field: "distance",
      headerName: "Distance",
      flex: 1,
    },
    {
      field: "status",
      headerName: "Trip Status",
      flex: 1,
      renderCell: ({ row: { status } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              status === "Active"
                ? colors.greenAccent[600]
                : status === "Inactive"
                  ? colors.redAccent[700]
                  : colors.greenAccent[700]
            }
            borderRadius="4px"
          >
            {/*{status === "admin" && <AdminPanelSettingsOutlinedIcon />}
            {status === "manager" && <SecurityOutlinedIcon />}
          {status === "user" && <LockOpenOutlinedIcon />}*/}
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {status}
            </Typography>
          </Box>
        );
      },
    },
  ];

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleCard = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Box m="20px">
      <Header title="Trucks" subtitle="Managing the trucks" />
      <Box onClick={toggleCard}>
        <Card
          style={{
            width: "100%",
            height: isExpanded ? "75vh" : "5vh",
            backgroundColor: isExpanded
              ? colors.grey[1000]
              : colors.blueAccent[700],
          }}
        >
          {isExpanded ? (
            <CardContent
              style={{
                width: "100%",
                height: "100%",

                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography>Map View</Typography>
              <iframe
                title="Map"
                srcDoc={`
                <!DOCTYPE html>
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
                      .card-container-bottom {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        position: absolute;
                        bottom: 10px;
                        left: 0;
                        right: 0;
                        z-index: 1;
                      }
                      .card-container-top-left {
                        display: flex;
                        justify-content: left;
                        align-items: center;
                        position: absolute;
                        top: 10px;
                        left: 10px;
                        right: 0;
                        z-index: 1;
                      }
                      .card-bottom {
                        background-color: white;
                        width: 90%;
                        padding: 20px;
                        border-radius: 5px;
                        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                        display: flex; /* Set to flex to create columns */
                      }
                      .card-top-left {
                        background-color: white;
                        width: 25%;
                        padding: 20px;
                        border-radius: 5px;
                        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                        display: flex;
                        flex-direction: column;
                        position: absolute;
                        top: 10px;
                        left: 10px;
                        z-index: 2; /* Ensure it's above the map */
                      }
                
                      .column {
                        flex: 1;
                      }
                      .column:not(:last-child) {
                        margin-right: 10px; /* Add some space between columns */
                      }
                      img {
                        max-width: 100%; /* Ensure image does not exceed column width */
                        height: auto; /* Maintain aspect ratio */
                      }
                      input[type="text"] {
                        width: 100%;
                        padding: 8px;
                        margin: 4px 0;
                        box-sizing: border-box;
                        border: 1px solid #ccc;
                        border-radius: 4px;
                        outline: none;
                      }
                      button {
                        background-color: #4caf50;
                        color: white;
                        padding: 10px 20px;
                        margin-top: 10px;
                        border: none;
                        border-radius: 4px;
                        cursor: pointer;
                      }
                      button:hover {
                        background-color: #45a049;
                      }
                    </style>
                    <script
                      src="https://apis.mappls.com/advancedmaps/api/48dc5cefe45fd250f0e15054b1acdb0a/map_sdk?layer=vector&v=3.0&callback=initMap1"
                      defer
                      async
                    ></script>
                  </head>
                  <body>
                    <!-- Card 1 above the map top left-->
                    <div class="card-container-top-left">
                      <div class="card-top-left" , style="height: auto; font-size: 14px">
                        <div class="column">
                          <!-- Latitude Input -->
                          <input type="text" id="latitudeInput" placeholder="Latitude" />
                        </div>
                        <div class="column">
                          <!-- Longitude Input -->
                          <input type="text" id="longitudeInput" placeholder="Longitude" />
                        </div>
                        <div class="column">
                          <!-- Update Button -->
                          <button id="updateButton">Update</button>
                        </div>
                      </div>
                    </div>
                
                    <!-- Card 2 above the map bottom-->
                    <div class="card-container-bottom">
                      <div class="card-bottom" , style="height: 25vh; font-size: 14px">
                        <div class="column">
                          <!-- Image in the first column -->
                          <img
                            src="src/images/truck.avif"
                            alt="Truck Image"
                            style="width: 20vw; height: 25vh"
                          />
                        </div>
                        <div class="column" , style="line-height: 0.25">
                          <!-- Content for the second column -->
                          <!-- Latitude Display -->
                          <p id="latitude">Latitude:</p>
                          <p>ID: ${mockDataTeam[0].id}</p>
                          <p>Driver: ${mockDataTeam[0].driver}</p>
                          <p>RC: ${mockDataTeam[0].rc}</p>
                          <p>Route: ${mockDataTeam[0].route}</p>
                          <p>Distance: ${mockDataTeam[0].distance}</p>
                          <p>Status: ${mockDataTeam[0].status}</p>
                        </div>
                        <div class="column" , style="line-height: 0.25">
                          <!-- Content for the second column -->
                          <!-- Longitude Display -->
                          <p id="longitude">Longitude:</p>
                          <p>Fuel: 50%</p>
                          <p>Speed: 60 kmph</p>
                          <p>Temperature: 195 °C</p>
                          <p>Load: 10000 KGs</p>
                          <p>Air Brake Pressure: 100</p>
                          <p>Battery: OK</p>
                        </div>
                      </div>
                    </div>
                
                    <!-- Map -->
                    <div id="map"></div>
                
                    <script>
                      var map, Marker1;
                
                      function initMap1() {
                        map = new mappls.Map("map", {
                          center: { lat: 28.519467, lng: 77.22315 }, // Set center to Marker1 coordinates
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
                        // Function to update latitude and longitude
                        function updateLatLng() {
                          var latitude = document.getElementById("latitudeInput").value;
                          var longitude = document.getElementById("longitudeInput").value;
                
                          Marker1.setPosition({ lat: latitude, lng: longitude });
                
                          document.getElementById("latitude").innerText =
                            "Latitude: " + latitude;
                          document.getElementById("longitude").innerText =
                            "Longitude: " + longitude;

                            map.setCenter({ lat: latitude, lng: longitude });

          // Decrease the level of zoom
          map.setZoom(18); // Adjust the zoom level as needed
                        }
                
                        // Add event listener to update latitude and longitude when input changes
                        document
                          .getElementById("updateButton")
                          .addEventListener("click", updateLatLng);
                      }
                    </script>
                  </body>
                </html>
                

              
              `}
                style={{ border: "none", width: "100%", height: "100%" }}
              ></iframe>
            </CardContent>
          ) : (
            <CardContent
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography sx={{ fontFamily: "Arial", fontSize: "14px" }}>
                {isExpanded ? "Expanded" : "Map View"}
              </Typography>
            </CardContent>
          )}
        </Card>
      </Box>
      <Box
        m="20px 0 0 0"
        height="75vh"
        sx={{
          display: isExpanded ? "none" : "block",
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid checkboxSelection rows={mockDataTeam} columns={columns} />
      </Box>
    </Box>
  );
};

export default Truck;
