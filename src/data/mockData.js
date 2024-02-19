import { tokens } from "../theme";

import "firebase/compat/database";
import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect } from "react";
import firebase from "@firebase/app-compat";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJOGTsr5nuHml3q-4VQhIBCFJaeV6j1BA",
  authDomain: "logi-dashboard-2b0cf.firebaseapp.com",
  databaseURL:
    "https://logi-dashboard-2b0cf-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "logi-dashboard-2b0cf",
  storageBucket: "logi-dashboard-2b0cf.appspot.com",
  messagingSenderId: "937746357104",
  appId: "1:937746357104:web:39c6ec464585a4c2138db5",
  measurementId: "G-LLVYYE9XN9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

export const mockDataTeam = [
  {
    id: 1,
    driver: null,
    rc: null,
    route: null,
    distance: null,
    status: null,
    latitude: null,
    longitude: null,
  },
  {
    id: 2,
    driver: null,
    rc: null,
    route: null,
    distance: null,
    status: null,
    latitude: null,
    longitude: null,
  },
  {
    id: 3,
    driver: null,
    rc: null,
    route: null,
    distance: null,
    status: null,
    latitude: null,
    longitude: null,
  },
  {
    id: 4,
    driver: "Ritesh",
    rc: "MH14FD1277",
    route: "Hyderabad - Pune",
    distance: "560",
    status: "Active",
  },
  {
    id: 5,
    driver: "Uday",
    rc: "MH04hu4567",
    route: "Hyderabad - Chennai",
    distance: "630",
    status: "Inactive",
  },
  {
    id: 6,
    driver: "Vijay",
    rc: "MH04YW8376",
    route: "Delhi - Chennai",
    distance: "2210",
    status: "Inactive",
  },
  {
    id: 7,
    driver: "Ajay",
    rc: "MH12RY7890",
    route: "Chandigarh - Chennai",
    distance: "2459",
    status: "Active",
  },
  {
    id: 8,
    driver: "Sameer",
    rc: "MH47RY1234",
    route: "Chandigarh - Pune",
    distance: "1659",
    status: "Inactive",
  },
  {
    id: 9,
    driver: "Dheeraj",
    rc: "MH43RY4434",
    route: "Kolkata - Pune",
    distance: "1873",
    status: "Active",
  },
];

const truck1Ref = ref(db, "Trucks/Truck_1");
onValue(truck1Ref, (snapshot) => {
  try {
    if (snapshot.exists()) {
      const data = snapshot.val();
      console.log("Fetched data:", data); // Log fetched data
      const driver1 = data.driver;
      const rc1 = data.rc;
      const route1 = data.route;
      const distance1 = data.distance;
      const status1 = data.status;
      const latitude1 = data.latitude;
      const longitude1 = data.longitude;

      // Update the mock data team
      mockdataTeam.forEach((item) => {
        if (item.id === 1) {
          item.driver = driver1;
          item.rc = rc1;
          item.route = route1;
          item.distance = distance1;
          item.status = status1;
          item.latitude = latitude1;
          item.longitude = longitude1;
        }
      });

      console.log("Updated mockdataTeam:", mockdataTeam); // Log updated mockdataTeam
    } else {
      console.log("Snapshot does not exist");
    }
  } catch (error) {
    console.error("Error updating mockdataTeam:", error);
  }
});

const truck2Ref = ref(db, "Trucks/Truck_2");
onValue(truck2Ref, (snapshot) => {
  try {
    if (snapshot.exists()) {
      const data = snapshot.val();
      console.log("Fetched data:", data); // Log fetched data
      const driver1 = data.driver;
      const rc1 = data.rc;
      const route1 = data.route;
      const distance1 = data.distance;
      const status1 = data.status;
      const latitude1 = data.latitude;
      const longitude1 = data.longitude;

      // Update the mock data team
      mockdataTeam.forEach((item) => {
        if (item.id === 2) {
          item.driver = driver1;
          item.rc = rc1;
          item.route = route1;
          item.distance = distance1;
          item.status = status1;
          item.latitude = latitude1;
          item.longitude = longitude1;
        }
      });

      console.log("Updated mockdataTeam:", mockdataTeam); // Log updated mockDataTeam
    } else {
      console.log("Snapshot does not exist");
    }
  } catch (error) {
    console.error("Error updating mockdataTeam:", error);
  }
});

const truck3Ref = ref(db, "Trucks/Truck_3");
onValue(truck3Ref, (snapshot) => {
  try {
    if (snapshot.exists()) {
      const data = snapshot.val();
      console.log("Fetched data:", data); // Log fetched data
      const driver1 = data.driver;
      const rc1 = data.rc;
      const route1 = data.route;
      const distance1 = data.distance;
      const status1 = data.status;
      const latitude1 = data.latitude;
      const longitude1 = data.longitude;

      // Update the mock data team
      mockdataTeam.forEach((item) => {
        if (item.id === 3) {
          item.driver = driver1;
          item.rc = rc1;
          item.route = route1;
          item.distance = distance1;
          item.status = status1;
          item.latitude = latitude1;
          item.longitude = longitude1;
        }
      });

      console.log("Updated mockdataTeam:", mockdataTeam); // Log updated mockDataTeam
    } else {
      console.log("Snapshot does not exist");
    }
  } catch (error) {
    console.error("Error updating mockdataTeam:", error);
  }
});
