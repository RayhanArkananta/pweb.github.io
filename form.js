document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("registration-form");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); 

        const formData = new FormData(form);
        const data = {
            name: formData.get("name"),
            nim: formData.get("nim"),
            parentName: formData.get("parent-name"),
            phone: formData.get("phone"),
            email: formData.get("email"),
            religion: formData.get("religion"),
            address: formData.get("address")
        };

        const storedResults = JSON.parse(localStorage.getItem("formResults")) || [];
        storedResults.push(data);
        localStorage.setItem("formResults", JSON.stringify(storedResults));

        window.location.href = "results.html";

        form.reset();
    });
});
