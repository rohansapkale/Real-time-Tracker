const socket = io();

if (navigator.geolocation) {
    navigator.geolocation.watchPosition(
        (position) => {
            const { latitude, longitude } = position.coords;
            console.log("Current Position:", position);  // Log position for debugging
            socket.emit("send-location", { latitude, longitude });
        },
        (err) => {
            console.log("Geolocation error:", err);  // Log errors
        },
        {
            enableHighAccuracy: true,  // Fixed typo here
            timeout: 5000,
            maximumAge: 0,
        }
    );
}

const map = L.map("map").setView([0, 0], 19);  // Start with a wide view

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "RohanSapkaleMap"
}).addTo(map);

const markers = {};

socket.on("receive-location", (data) => {
    const { id, longitude, latitude } = data;
    map.setView([latitude, longitude], 16);
    if (markers[id]) {
        markers[id].setLatLng([latitude, longitude]);
    } else {
        markers[id] = L.marker([latitude, longitude]).addTo(map);
    }
});

socket.on("user-disconnect", (id) => {
    if (markers[id]) {
        map.removeLayer(markers[id]);
        delete markers[id];
    }
});
