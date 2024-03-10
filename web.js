// Parse the CSV data into an array of arrays containing latitude and longitude pairs
const csvData = `52.926777,-1.215878

52.926777,-1.215878

52.926777,-1.215878

52.926777,-1.215878

52.926777,-1.215878

51.1488168,0.8735929

51.1488168,0.8735929

51.1488168,0.8735929

52.9200018,-1.4757001

52.9200018,-1.4757001

52.9200018,-1.4757001

52.9200018,-1.4757001

52.9200018,-1.4757001

52.9200018,-1.4757001

53.2274933,-4.1245217

53.2274933,-4.1245217

53.2274933,-4.1245217

50.8551456,0.5774327

50.8551456,0.5774327

52.057747,1.153668

52.057747,1.153668

52.057747,1.153668

52.057747,1.153668

53.7479677,-2.274108

53.871201,-2.3921189

53.7479677,-2.274108

53.788437,-2.242847

52.5151791,-3.3153052

52.5151791,-3.3153052

52.493716,-2.997675

52.493716,-2.997675

51.784378,-1.485744

51.784378,-1.485744

51.784378,-1.485744

52.0364827,-0.7692904

52.0364827,-0.7692904

52.2911109,-0.5979446

52.0364827,-0.7692904

52.0364827,-0.7692904

52.2911109,-0.5979446

51.2074451,-1.479379

51.2074451,-1.479379

51.5209721,-0.1569726

51.5176469,-0.1091153

51.5156529,-0.1400404

51.5296392,-0.1239574

51.5394101,-0.1426694

51.585707,-0.020073

51.5394101,-0.1426694

51.5156529,-0.1400404

51.585707,-0.020073

51.5176469,-0.1091153

51.5652772,-0.1029191

51.5394101,-0.1426694

51.5176469,-0.1091153

51.5156529,-0.1400404

51.5156529,-0.1400404

51.5156529,-0.1400404

51.585707,-0.020073

51.5209721,-0.1569726

51.5296392,-0.1239574

51.5652772,-0.1029191

51.5209721,-0.1569726

51.5156529,-0.1400404

51.5176469,-0.1091153

51.518865,-0.169429

51.5296392,-0.1239574

51.5394101,-0.1426694

51.5394101,-0.1426694

51.518865,-0.169429

51.518845,-0.132651

51.518845,-0.132651

51.518845,-0.132651

51.518845,-0.132651

51.518845,-0.132651

52.3348734,-2.061462

52.3348734,-2.061462

52.3348734,-2.061462

52.192966,-2.222098

52.192966,-2.222098

52.192966,-2.222098

52.192966,-2.222098

52.192966,-2.222098

52.192966,-2.222098

52.192966,-2.222098

53.7258937,-1.3534426

53.7258937,-1.3534426

51.3788255,-2.3594184

51.3788255,-2.3594184

51.3788255,-2.3594184

51.3788255,-2.3594184

50.1187587,-5.5379466

50.1187587,-5.5379466

50.1187587,-5.5379466

52.5108139,-2.0822921

52.5207791,-1.9985452

52.4557098,-2.145013

52.5108139,-2.0822921

52.5108139,-2.0822921

52.5207791,-1.9985452

52.4557098,-2.145013

52.5207791,-1.9985452

52.4557098,-2.145013

52.510815,-2.082292

52.520767,-1.998601

52.455829,-2.144999

51.878796,0.551795

51.2774576,1.0814141

51.2774576,1.0814141

51.2774576,1.0814141

51.2774576,1.0814141

52.669477,-0.7284171

53.2558494,-4.3119149

53.2558494,-4.3119149

50.9412459,-2.629747

50.9412459,-2.629747

50.9412459,-2.629747

52.9785926,-0.0240303

52.9785926,-0.0240303

51.0623446,-0.3295708

51.0623446,-0.3295708

51.0623446,-0.3295708

50.5302106,-3.6099301

50.5302106,-3.6099301

51.3209041,-2.2072714

51.3209041,-2.2072714

53.7572924,-2.7045404

53.7572924,-2.7045404

53.7572924,-2.7045404

53.7572924,-2.7045404

53.7572924,-2.7045404

51.856697,-4.310111

51.856697,-4.310111

51.856697,-4.310111

51.856697,-4.310111

51.6537361,-3.0205201

51.6537361,-3.0205201

51.653725,-3.020346

55.86417,-4.25322

55.8583042,-4.2545912

55.8583042,-4.2545912

55.8583042,-4.2545912

55.8583042,-4.2545912

51.629608,-0.751073

51.522663,-0.719579

51.629608,-0.751073

51.522663,-0.719579

51.629608,-0.751073

51.522663,-0.719579

51.629608,-0.751073

49.4318649,-2.5967752

51.269855,0.192935

51.269855,0.192935

51.269855,0.192935

52.3887532,-2.2493887

52.3887532,-2.2493887

53.229131,-0.540624

53.229131,-0.540624

53.229131,-0.540624

53.229131,-0.540624

53.229131,-0.540624

53.229131,-0.540624

51.5089987,-0.5936607

51.5089987,-0.5936607

51.3713565,-0.4622269

51.5089987,-0.5936607

51.5089987,-0.5936607

51.416222,-0.747822

51.416222,-0.747822

51.416222,-0.747822

51.416222,-0.747822

52.2401347,-3.3794134

54.535809,-1.052634

54.535809,-1.052634

54.535809,-1.052634

51.57896,0.180433

51.57896,0.180433

51.57896,0.180433

51.57896,0.180433

51.507187,-3.579476

51.507187,-3.579476

51.507187,-3.579476

50.723274,-1.904889

50.7173057,-1.9822062

50.7173057,-1.9822062

50.7173057,-1.9822062

50.7173057,-1.9822062

50.721073,-1.876987

50.723274,-1.904889

50.723274,-1.904889

50.721073,-1.876987

50.723274,-1.904889

50.6990784,-1.2953538

50.6990784,-1.2953538

50.6990784,-1.2953538

51.062847,-1.316553

53.3893122,-3.0255546

53.3893122,-3.0255546

53.3893122,-3.0255546

50.8363383,-0.7754454

50.8363383,-0.7754454

50.8363383,-0.7754454

50.8805448,-1.0303645

51.2579503,-0.0028125

53.1672916,-3.142338

53.1672916,-3.142338

53.167297,-3.142449

54.5764757,-1.2346033

54.5764757,-1.2346033

54.5764757,-1.2346033

54.5764757,-1.2346033

53.3412973,-1.3540221

53.3412973,-1.3540221

53.3412973,-1.3540221

50.79958,-1.090663

50.79958,-1.090663

50.79958,-1.090663

52.5347735,-2.4196168

53.039907,-1.3865185

51.7521074,-1.2580421

51.7521074,-1.2580421

51.7521074,-1.2580421

51.7521074,-1.2580421

51.7521074,-1.2580421

53.3664391,-0.0051688

53.3664391,-0.0051688

50.7684449,0.2833432

50.7684449,0.2833432

50.7684449,0.2833432

50.768444,0.283343

52.7075117,-2.7535848

52.7075117,-2.7535848

52.7075117,-2.7535848

52.584702,-1.981345

52.6839802,-1.827708

52.584655,-1.9814187

52.5617285,-1.8231309

52.6839802,-1.827708

52.6839802,-1.827708

52.5617285,-1.8231309

52.584655,-1.9814187

52.5617285,-1.8231309

52.5617285,-1.8231309

52.584702,-1.981345

52.9542488,-1.1474354

52.9542488,-1.1474354

52.9542488,-1.1474354

52.9542488,-1.1474354

52.9542488,-1.1474354

52.9542488,-1.1474354

52.9542488,-1.1474354

50.6099913,-2.4537921

50.6099913,-2.4537921

50.6099913,-2.4537921

53.8430599,-0.4329609

53.8430599,-0.4329609

54.004969,-0.43951

54.004969,-0.43951

51.545752,-0.479164

51.545752,-0.479164

51.5745123,-0.4246412

51.5070236,-0.4190535

51.5070236,-0.4190535

51.545752,-0.479164

51.574509,-0.424646

51.545752,-0.479164

51.545752,-0.479164

51.481876,-3.175651

51.49395,-3.165331

51.481876,-3.175651

51.49395,-3.165331

51.481876,-3.175651

51.49395,-3.165331

51.481876,-3.175651

51.481876,-3.175651

51.481876,-3.175651

53.411667,-2.157756

53.4826134,-2.245895

53.5409935,-2.109263

53.4826134,-2.245895

53.4826134,-2.245895

53.4826134,-2.245895

53.5409935,-2.109263

53.4826134,-2.245895

53.411667,-2.157756

53.411667,-2.157756

54.5652758,-1.3134083

54.5652758,-1.3134083

53.8666188,-1.9094231

53.8666188,-1.9094231

50.7254795,-3.5280497

50.7254795,-3.5280497

50.7254795,-3.5280497

50.7254795,-3.5280497

50.7254795,-3.5280497

53.6485718,-3.0057185

53.6485472,-3.005719

54.905788,-1.384668

54.905788,-1.384668

54.905788,-1.384668

54.905788,-1.384668

54.905788,-1.384668

54.905788,-1.384668

52.0621615,-1.3350797

52.0621615,-1.3350797

51.3521893,-1.9950827

51.3521893,-1.9950827

51.3521893,-1.9950827

53.783585,-1.068807

53.783585,-1.068807

54.6638801,-2.7523685

54.6638801,-2.7523685

55.1673729,-1.6908523

55.1673729,-1.6908523

53.11473,-3.3105447

53.114544,-3.310255

52.2045506,0.1227386

52.2045506,0.1227386

52.2045506,0.1227386

52.2045506,0.1227386

51.76951,0.0942478

51.76951,0.0942478

51.133894,0.263477

51.133894,0.263477

51.133894,0.263477

51.133894,0.263477

51.1287044,-3.0025063

52.7425412,-3.8852995

51.9007316,-2.0750213

51.9007316,-2.0750213

51.9007316,-2.0750213

51.9007316,-2.0750213

51.8894,0.898717

51.8894,0.898717

51.8894,0.898717

51.8894,0.898717

52.7869005,-0.1511905

52.7869005,-0.1511905

52.2446926,0.7132019

52.2446926,0.7132019

49.1800451,-2.1173867

53.3215786,-0.9421241

53.3215786,-0.9421241

52.2384243,-0.8932803

52.2384243,-0.8932803

52.2384243,-0.8932803

52.2384243,-0.8932803

52.237844,-0.89449

52.111782,-2.329679

52.111782,-2.329679

53.397209,-2.5378999

53.397209,-2.5378999

53.397209,-2.5378999

52.6900578,-2.0302187

52.8069228,-2.1171861

52.6900578,-2.0302187

`;

// Parse the CSV data into an array of arrays containing latitude and longitude pairs
const parsedData = csvData.split('\n').map(line => line.split(',').map(parseFloat));

// Display the parsed data
console.log(parsedData);






// Define the radians function
function radians(degrees) {
    return degrees * (Math.PI / 180);
}

function coordinateToDistance(slat, elat, slon, elon) {
    // Convert coordinates to radians
    const lat1 = radians(slat);
    const lon1 = radians(slon);
    const lat2 = radians(elat);
    const lon2 = radians(elon);

    // Calculate distance using Haversine formula
    const dlon = lon2 - lon1;
    const dlat = lat2 - lat1;
    const a = Math.sin(dlat / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dlon / 2) ** 2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = 6371 * c; // Radius of the Earth in km
    return distance;
}

function minimumSpanningTree(points) {
    const N = points.length;

    // Initialize adjacency list
    const adj = Array.from({ length: N }, () => []);

    // Populate adjacency list with distances between points
    for (let i = 0; i < N; i++) {
        const [x1, y1] = points[i];
        for (let j = i + 1; j < N; j++) {
            const [x2, y2] = points[j];
            const dist = coordinateToDistance(x1, x2, y1, y2);
            adj[i].push([dist, j]);
            adj[j].push([dist, i]);
        }
    }

    let res = 0;
    const visit = new Set();
    const minH = [[0, 0]];

    // Perform Prim's algorithm
    while (visit.size < N) {
        const [cost, i] = minH.shift();
        if (visit.has(i)) continue;
        res += cost;
        visit.add(i);
        for (const [neiCost, nei] of adj[i]) {
            if (!visit.has(nei)) {
                minH.push([neiCost, nei]);
                minH.sort((a, b) => a[0] - b[0]);
            }
        }
    }
    return res;
}

// Define global variables for map and marker
// Define global variables for map, markers, and directionsService
let map;
let markers = [];
let directionsService;

// Function to initialize the map
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 52.5, lng: -1.9 }, // Set your preferred center coordinates
        zoom: 8 // Set the initial zoom level
    });

    // Initialize the DirectionsService
    directionsService = new google.maps.DirectionsService();

    // Add markers to the map based on the parsed CSV data
    parsedData.forEach(coord => {
        const marker = new google.maps.Marker({
            position: { lat: coord[0], lng: coord[1] },
            map: map
        });
        markers.push(marker); // Store markers in the array
    });

    // Add event listener to the "Add Marker" button
    const addButton = document.getElementById('addMarkerButton');
    addButton.addEventListener('click', addMarker);

    // Add event listener to the "Toggle Markers" button
    const toggleButton = document.getElementById('toggleMarkers');
    toggleButton.addEventListener('click', toggleMarkers);
}

// Function to toggle the visibility of markers
function toggleMarkers() {
    markers.forEach(marker => {
        if (marker.getMap() === null) {
            marker.setMap(map); // Show marker if it's hidden
        } else {
            marker.setMap(null); // Hide marker if it's visible
        }
    });
}

// Function to add a marker to the map
function addMarker() {
    // Get latitude and longitude values from input fields
    const startLat = parseFloat(document.getElementById('startLat').value);
    const startLng = parseFloat(document.getElementById('startLng').value);

    // Check if latitude and longitude values are valid
    if (isNaN(startLat) || isNaN(startLng)) {
        alert('Please enter valid latitude and longitude values.');
        return;
    }

    // Create a new marker
    const marker = new google.maps.Marker({
        position: { lat: startLat, lng: startLng },
        map: map
    });

    // Add the marker to the map
    markers.push(marker);

    // Update parsedData with the new coordinates
    parsedData.push([startLat, startLng]);
}

// Function to add a waypoint to the map
function addPoint() {
    // Get latitude and longitude values from input fields
    const startLatInput = document.getElementById('startLat');
    const startLngInput = document.getElementById('startLng');

    // Check if input fields exist and have valid values
    if (startLatInput && startLngInput && startLatInput.value && startLngInput.value) {
        const startLat = parseFloat(startLatInput.value);
        const startLng = parseFloat(startLngInput.value);

        // Check if latitude and longitude values are valid
        if (!isNaN(startLat) && !isNaN(startLng)) {
            // Create a new marker
            const marker = new google.maps.Marker({
                position: { lat: startLat, lng: startLng },
                map: map,
                isCustomWaypoint: true // Set the correct property for custom waypoints
            });

            // Add the marker to the map
            markers.push(marker);
            return; // Exit the function after adding the marker
        }
    }

    // Display an alert if latitude or longitude values are invalid or input fields are missing
    alert('Please enter valid latitude and longitude values.');
}




function calculateShortestRoute() {
    // Filter out only the custom waypoints
    const customWaypoints = markers.filter(marker => marker.isCustomWaypoint && marker.getPosition());

    // Check if there are enough custom waypoints for the calculation
    if (customWaypoints.length < 2) {
        console.error('Please add at least two custom waypoints.');
        return;
    }

    // Create an array to hold the coordinates of the custom waypoints
    const waypoints = customWaypoints.map(marker => ({
        location: marker.getPosition(),
        stopover: true
    }));

    // Create the request object for the DirectionsService
    const request = {
        origin: customWaypoints[0].getPosition(), // Starting point
        destination: customWaypoints[customWaypoints.length - 1].getPosition(), // Ending point
        waypoints: waypoints.slice(1, -1), // Exclude the starting and ending points from waypoints
        optimizeWaypoints: false, // Optimize the order of waypoints
        travelMode: google.maps.TravelMode.DRIVING // Set the travel mode
    };

    // Call the DirectionsService route method
    directionsService.route(request, function (response, status) {
        if (status === google.maps.DirectionsStatus.OK) {
            // Display the route on the map
            const directionsRenderer = new google.maps.DirectionsRenderer();
            directionsRenderer.setMap(map);
            directionsRenderer.setDirections(response);
        } else {
            console.error('Directions request failed due to ' + status);
        }
    });
}
