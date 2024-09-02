function UpdateDateTime(){
    const dateTimeElement = document.getElementById("datetime");
    const now = new Date();
    const options = {
        weekday : "long",
        year : "numeric",
        month : "long",
        day : "numeric",
        hour : "numeric",
        minute : "numeric",
        second : "numeric",
        timeZoneName : "short"
    }

    const formattedDateTime = now.toLocaleDateString("en-US", options);
    dateTimeElement.textContent = formattedDateTime;
}

setInterval(UpdateDateTime, 1000);

UpdateDateTime();