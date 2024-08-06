document.addEventListener("DOMContentLoaded", function() {
    const resultsContainer = document.getElementById("results");

    function createResultItem(data, index) {
        const resultItem = document.createElement("div");
        resultItem.classList.add("result-item");
        resultItem.dataset.index = index;

        resultItem.innerHTML = `
            <h4>Data Pendaftar:</h4>
            <p><strong>Nama:</strong> ${data.name}</p>
            <p><strong>NIM:</strong> ${data.nim}</p>
            <p><strong>Nama Orang Tua:</strong> ${data.parentName}</p>
            <p><strong>No. Telepon:</strong> ${data.phone}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Agama:</strong> ${data.religion}</p>
            <p><strong>Alamat:</strong> ${data.address}</p>
            <button class="delete-button">Hapus</button>
        `;

        resultsContainer.appendChild(resultItem);
    }

    // Load existing data from localStorage
    function loadResults() {
        const storedResults = JSON.parse(localStorage.getItem("formResults")) || [];
        storedResults.forEach((data, index) => {
            createResultItem(data, index);
        });
    }

    resultsContainer.addEventListener("click", function(event) {
        if (event.target.classList.contains("delete-button")) {
            const resultItem = event.target.parentElement;
            const index = resultItem.dataset.index;

            const storedResults = JSON.parse(localStorage.getItem("formResults")) || [];
            storedResults.splice(index, 1);
            localStorage.setItem("formResults", JSON.stringify(storedResults));

            // Remove the item from the DOM
            resultsContainer.removeChild(resultItem);
            
            Array.from(resultsContainer.children).forEach((item, idx) => {
                item.dataset.index = idx;
            });
        }
    });

    loadResults();
});
