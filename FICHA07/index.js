const form = document.getElementById("idForm");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("txtActivity").value.trim();
    const description = document.getElementById("txtDescription").value.trim();
    const date = document.getElementById("txtData").value;
    const status = document.getElementById("idStatus").value;

    if (!name || !description || !date || status === "Select an option") {
        alert("Todos os campos são obrigatórios.");
        return;
    }

    const now = new Date().toISOString().slice(0, 16);
    if (date < now) {
        alert("A data deve ser atual ou futura.");
        return;
    }

    const exists = tasks.some(task =>
        task.name === name && task.date === date && task.status === status
    );

    if (exists) {
        alert("Tarefa duplicada (nome + data + status).");
        return;
    }

    const task = { name, description, date, status };
    tasks.push(task);
    renderTasks();
    form.reset();
});

function renderTasks() {
    const grid = document.getElementById("grid");
    const filter = document.getElementById("statusFilter")?.value || "";
    grid.innerHTML = "";

    const sorted = [...tasks].sort((a, b) => new Date(a.date) - new Date(b.date));
    const now = new Date();

    sorted.forEach((task, index) => {
        if (filter && task.status !== filter) return;

        const card = document.createElement("div");
        card.classList.add("card", getStatusClass(task.status));

        if (new Date(task.date) < now && task.status !== "Done") {
            card.classList.add("expired");
        }

        card.innerHTML = `
            <button onclick="deleteTask(${index})">X</button>
            <h3>${task.name}</h3>
            <p>${task.description}</p>
            <p>${task.date}</p>
            <p>${task.status}</p>
        `;

        grid.appendChild(card);
    });
}

function getStatusClass(status) {
    switch (status) {
        case "ToDo List": return "work";
        case "In Progress": return "personal";
        case "In Review": return "social";
        case "Done": return "health";
        default: return "others";
    }
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

window.onload = () => {
    renderTasks();
    const filterContainer = document.createElement("div");
    filterContainer.classList.add("form-group", "col-md-6", "mx-auto");

    filterContainer.innerHTML = `
        <select id="statusFilter" class="form-control">
            <option value="">Mostrar todas</option>
            <option value="ToDo List">ToDoList</option>
            <option value="In Progress">InProgress</option>
            <option value="In Review">InReview</option>
            <option value="Done">Done</option>
        </select>
    `;

    const container = document.querySelector("body");
    container.insertBefore(filterContainer, document.getElementById("grid"));

    document.getElementById("statusFilter").addEventListener("change", renderTasks);
};
