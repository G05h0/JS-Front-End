//function attachEventsListeners() {
//    const convertButtonElements = document.querySelectorAll('input[value=Convert][type=button]');
//    const inputElements = document.querySelectorAll('input[type=text]');
//   
//    const toSeconds = (value, unit) => {
//        switch (unit) {
//            case 'days':
//                return value * 24 * 60 * 60;
//            case 'hours':
//                return value * 60 * 60;
//            case 'minutes':
//                return value * 60;
//            case 'seconds':
//                return value * 60;
//        }
//    }
//    const converters = {
//        days(seconds) {
//            return seconds / 60 / 60 / 24;
//        },
//        hours(seconds) {
//            return seconds / 60 / 60;
//        },
//        minutes(seconds) {
//            return seconds / 60;
//        },
//        seconds(seconds) {
//            return seconds;
//        }
//    };   
//
//    for (const buttonElement of convertButtonElements) {
//        buttonElement.addEventListener('click', (e) => {
//            const currentInputElement = e.currentTarget.previousElementSibling;
//
//            for (const inputElement of inputElements) {
//                const seconds = toSeconds(Number(currentInputElement.value), currentInputElement.id);
//                inputElement.value = converters[inputElement.id](seconds);
//            }
//
//            console.log();
//        })
//    }
//}

function attachEventsListeners() {
    document.getElementById("daysBtn").addEventListener("click", function() {
        convertTime("days");
    });
 
    document.getElementById("hoursBtn").addEventListener("click", function() {
        convertTime("hours");
    });
 
    document.getElementById("minutesBtn").addEventListener("click", function() {
        convertTime("minutes");
    });
 
    document.getElementById("secondsBtn").addEventListener("click", function() {
        convertTime("seconds");
    });
 
    function convertTime(unit) {
        let inputValue = parseFloat(document.getElementById(unit).value);
 
        if (!isNaN(inputValue)) {
            switch (unit) {
                case "days":
                    const hoursFromDays = inputValue * 24;
                    const minutesFromDays = hoursFromDays * 60;
                    const secondsFromDays = minutesFromDays * 60;
                    document.getElementById("hours").value = hoursFromDays;
                    document.getElementById("minutes").value = minutesFromDays;
                    document.getElementById("seconds").value = secondsFromDays;
                    break;
                case "hours":
                    const daysFromHours = inputValue / 24;
                    const minutesFromHours = inputValue * 60;
                    const secondsFromHours = minutesFromHours * 60;
                    document.getElementById("days").value = daysFromHours;
                    document.getElementById("minutes").value = minutesFromHours;
                    document.getElementById("seconds").value = secondsFromHours;
                    break;
                case "minutes":
                    const daysFromMinutes = inputValue / (24 * 60);
                    const hoursFromMinutes = inputValue / 60;
                    const secondsFromMinutes = inputValue * 60;
                    document.getElementById("days").value = daysFromMinutes;
                    document.getElementById("hours").value = hoursFromMinutes;
                    document.getElementById("seconds").value = secondsFromMinutes;
                    break;
                case "seconds":
                    const daysFromSeconds = inputValue / (24 * 60 * 60);
                    const hoursFromSeconds = inputValue / (60 * 60);
                    const minutesFromSeconds = inputValue / 60;
                    document.getElementById("days").value = daysFromSeconds;
                    document.getElementById("hours").value = hoursFromSeconds;
                    document.getElementById("minutes").value = minutesFromSeconds;
                    break;
            }
        }
    }
}