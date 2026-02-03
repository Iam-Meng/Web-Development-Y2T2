const addBtn = document.querySelector(".add-btn")
const modal = document.querySelector(".modal")
const saveBtn = document.querySelector(".save")
const cancelBtn = document.querySelector(".cancel")
const questionsContainer = document.querySelector(".questions")
const inputs = document.querySelectorAll(".modal-box input")
const titleInput = inputs[0]

let editingItem = null

addBtn.onclick = () => {
    openModal()
}

cancelBtn.onclick = () => {
    closeModal()
}

saveBtn.onclick = () => {
    const title = titleInput.value.trim()
    if (title === "") return
    if (editingItem) {
        editingItem.querySelector("p").textContent = title
    } else {
        const div = document.createElement("div")
        div.className = "question-item"
        div.innerHTML = `
            <p>${title}</p>
            <div class="actions">
                <button class="edit">📝</button>
                <button class="delete">🗑️</button>
            </div>
        `
        questionsContainer.appendChild(div)
    }
    closeModal()
}

questionsContainer.onclick = (e) => {
    const item = e.target.closest(".question-item")
    if (!item) return
    if (e.target.classList.contains("edit")) {
        editingItem = item
        titleInput.value = item.querySelector("p").textContent
        openModal()
    }
    if (e.target.classList.contains("delete")) {
        item.remove()
    }
}

function openModal() {
    modal.classList.remove("hidden")
    clearInputs()
}

function closeModal() {
    modal.classList.add("hidden")
    editingItem = null
    clearInputs()
}

function clearInputs() {
    inputs.forEach(i => i.value = "")
}

const correctButtons = document.querySelectorAll(".select-correct")

correctButtons.forEach(btn => {
    btn.onclick = () => {
        correctButtons.forEach(b => b.classList.remove("active"))
        btn.classList.add("active")
    }
})
