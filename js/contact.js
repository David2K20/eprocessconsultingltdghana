const serviceBody = document.getElementById('service_body');
const locationBody = document.getElementById('location_body');

const serviceButton = document.getElementById('service_btn');
const locationButton = document.getElementById('location_btn');

serviceButton.addEventListener('click', showServiceBody);
locationButton.addEventListener('click', showLocationBody);


// Function to show the service body 
function showServiceBody() {
    serviceBody.style.display = 'block';
    locationBody.style.display = 'none';
    setActiveButton(serviceButton);
}

// Function to show the location body
function showLocationBody() {
    serviceBody.style.display = 'none';
    locationBody.style.display = 'block';
    setActiveButton(locationButton);
}

function setActiveButton(activeButton) {
    serviceButton.style.backgroundColor = '';
    locationButton.style.backgroundColor = '';

    activeButton.style.backgroundColor = '#0E1116';
}

showServiceBody();