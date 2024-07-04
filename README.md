Real Time Tracker Application
Real Time Tracker is a web application that allows users to track their location in real-time using a map interface. It utilizes Node.js, Express.js, Socket.io for real-time communication, and Leaflet for map visualization.

Table of Contents
1.Introduction
2.Features
3.Technologies Used
4.Installation
5.Usage
6.API Endpoints
7.Socket.io Usage
1.Introduction
Real Time Tracker allows users to share their current location with others in real-time through a map interface. Users can see each other's locations on the map and receive updates as locations change.

2.Features
Real-time tracking of user locations on a map.
Socket.io integration for instant location updates.
User-friendly interface with interactive map controls.

3.Technologies Used
Node.js: Server-side JavaScript runtime environment.
Express.js: Web application framework for Node.js.
Socket.io: Library for real-time, bidirectional event-based communication.
Leaflet: Open-source JavaScript library for mobile-friendly interactive maps.
HTML/CSS: Frontend structure and styling.

4.Installation
Follow these steps to set up and run the application locally:

Clone the repository:

bash:
git clone <repository-url>
cd real-time-tracker
Install dependencies:
npm install
Start the server:
npm start

The server should now be running on http://localhost:3000.

5.Open the application:

Open your web browser and go to http://localhost:3000 to use the Real Time Tracker application.

6.Usage
Upon opening the application, users will be able to see their own location on the map.
Users can share their location by clicking on the map, which will update their position in real-time for other users.
As other users update their locations, their markers will be displayed on the map.
API Endpoints
This application does not expose any external API endpoints.

7.Socket.io Usage
Socket.io is used for real-time communication between clients (users) and the server. It enables instant location updates and user interaction on the map.

send-location: Emits the user's current location to the server.
receive-location: Receives updated locations from other users and updates the map accordingly.
user-disconnect: Handles user disconnection events and removes their marker from the map.
