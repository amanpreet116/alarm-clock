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
    let hour = parseInt(document.getElementById('hour').value);
    let minute = parseInt(document.getElementById('minute').value);
    let second = parseInt(document.getElementById('second').value);
    const ampm = document.getElementById('ampm').value;

    // Ensure hour is within the range of 1-12
    hour = Math.min(Math.max(hour, 1), 12);

    // Ensure minute is within the range of 0-59
    minute = Math.min(Math.max(minute, 0), 59);

    // Ensure second is within the range of 0-59
    second = Math.min(Math.max(second, 0), 59);

    // Convert hour, minute, and second to 2-digit strings
    const hourString = hour.toString().padStart(2, '0');
    const minuteString = minute.toString().padStart(2, '0');
    const secondString = second.toString().padStart(2, '0');

    const alarmTime = `${hourString}:${minuteString}:${secondString} ${ampm}`;
    const alarmsContainer = document.getElementById('alarms');
    
    // Create a wrapper div for each alarm item and its delete button
    const alarmWrapper = document.createElement('div');
    alarmWrapper.style.display = 'flex';
    alarmWrapper.style.alignItems = 'center'; // Center align items vertically
    alarmWrapper.style.marginBottom = '20px'; // Example gap between items
    
    const alarmItem = document.createElement('div');
    alarmItem.textContent = alarmTime;
    alarmItem.style.flex = '1'; 
    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.style.marginLeft = '10px'; 
    deleteButton.style.marginRight='300px'
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

