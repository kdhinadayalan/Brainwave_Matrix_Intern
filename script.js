document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("formselect");
    const eventInput = document.getElementById("event");
    const eventSelect = document.getElementById("eventC");
    const eventList = document.createElement("ul");  

    document.body.appendChild(eventList); 

    form.addEventListener("submit", function(event) {
        event.preventDefault(); 

        const eventName = eventInput.value.trim();
        const eventType = eventSelect.value;

        if (eventName === "") {
            alert("Please enter an event name.");
            return;
        }
        const listItem = document.createElement("li");
        const eventText = document.createElement("span");
        eventText.textContent = `Event: ${eventName} | Type: ${eventType}`;
        const finishButton = document.createElement("button");
        finishButton.textContent = "Finish";
        finishButton.classList.add("finish-btn");
        finishButton.addEventListener("click", function() {
            listItem.classList.toggle("finished");
        });
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete-btn");
        deleteButton.addEventListener("click", function() {
            eventList.removeChild(listItem);
        });
        listItem.appendChild(eventText);
        listItem.appendChild(finishButton);
        listItem.appendChild(deleteButton);
        eventList.appendChild(listItem);
        eventInput.value = "";
        eventSelect.selectedIndex = 0; 
    });
});
