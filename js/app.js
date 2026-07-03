document
    .getElementById("appointmentForm")
    .addEventListener("submit", function (e) {
        e.preventDefault();

        const appointment = {
            name: document.getElementById("name").value,
            stylist: document.getElementById("stylist").value,
            date: document.getElementById("date").value,
            time: document.getElementById("time").value,
        };

        fetch("http://localhost:3000/appointments", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(appointment),
        })
            .then((response) => response.json())
            .then((data) => {
                alert("Appointment Booked!");
                console.log(data);
            });
    });

function fetchAppointments() {
    fetch("http://localhost:3000/appointments")
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
        });
}
function updateAppointment() {
    fetch("http://localhost:3000/appointments/1", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            id: 1,
            name: "Emma Anderson",
            service: "Botanical Color Treatment",
            stylist: "Sofia Martinez",
            date: "2024-09-04",
            time: "14:00",
        }),
    });
}
function deleteAppointment() {
    fetch("http://localhost:3000/appointments/1", {
        method: "DELETE",
    });
}
