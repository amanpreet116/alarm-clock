// Function to update the clock face with the current time
function currentTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    document.querySelector('.clock-face').textContent = timeString;
}

// Call the updateClock function initially to set the clock to the current time
currentTime();

// Set up a setInterval to update the clock every second
setInterval(currentTime, 1000);

// Function to set alarm
let alarms = []; // Initialize the alarms array

function addAlarm() {
    const hour = document.getElementById('hour').value;
    const minute = document.getElementById('minute').value;
    const ampm = document.getElementById('ampm').value;
    
    const alarmTime = `${hour}:${minute} ${ampm}`; // Combine hour, minute, and AM/PM
    
    const alarmsContainer = document.getElementById('alarms');
    
    // Create a wrapper div for each alarm item and its delete button
    const alarmWrapper = document.createElement('div');
    alarmWrapper.style.display = 'flex';
    alarmWrapper.style.alignItems = 'center'; // Center align items vertically
    alarmWrapper.style.marginBottom = '20px'; // Example gap between items
    
    const alarmItem = document.createElement('div');
    alarmItem.textContent = alarmTime;
    alarmItem.style.flex = '1'; // Let the alarm item grow to occupy available space
    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.style.marginLeft = '10px'; 
    deleteButton.style.backgroundColor = 'red'; 
    deleteButton.style.color = 'white'; 
    deleteButton.style.border = 'black'; 
    deleteButton.style.borderRadius = '15px';
    deleteButton.style.textAlign='center';
    deleteButton.style.padding='15px';
    deleteButton.style.fontSize='1rem';

    
    // Add alarm item and delete button to the wrapper div
    alarmWrapper.appendChild(alarmItem);
    alarmWrapper.appendChild(deleteButton);
    
    // Add the wrapper div to the alarms container
    alarmsContainer.appendChild(alarmWrapper);

    // Add the alarm to the alarms array
    alarms.push({ time: alarmTime, wrapper: alarmWrapper });

    deleteButton.addEventListener('click', () => {
        // Remove the alarm from the alarms array
        const index = alarms.findIndex(alarm => alarm.time === alarmTime);
        if (index !== -1) {
            alarms[index].wrapper.remove(); // Remove the wrapper div containing both alarm item and delete button
            alarms.splice(index, 1);
        }
    });
}

// Add event listener to set alarm button
document.getElementById('alarm-button').addEventListener('click', addAlarm);
