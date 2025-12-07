const fs = require("fs");
const path = require("path");

const dbPath = path.join(__dirname, "storage.json");

if (!fs.existsSync(dbPath)) {
  fs.writeFileSync(dbPath, "[]");
}

let tarefas = JSON.parse(fs.readFileSync(dbPath));

// Inputs e botão
const btnAdd = document.getElementById("adicionar");
const tituloInput = document.getElementById("titulo");
const categoriaInput = document.getElementById("categoria");

function salvar() {
  fs.writeFileSync(dbPath, JSON.stringify(tarefas, null, 2));
}

function render() {
  document.querySelectorAll(".lista").forEach(lista => lista.innerHTML = "");

  tarefas.forEach(t => {
    const item = document.createElement("div");
    item.classList.add("tarefa");
    item.setAttribute("draggable", "true");
    item.dataset.id = t.id;
    item.textContent = t.titulo;

    item.addEventListener("dragstart", e => {
      e.dataTransfer.setData("id", t.id);
    });

    const destino = document.querySelector(`#${t.categoria} .lista`);
    destino.appendChild(item);
  });
}

// Adicionar tarefa
btnAdd.addEventListener("click", () => {
  const titulo = tituloInput.value.trim();
  const categoria = categoriaInput.value;

  if (!titulo) return alert("Título obrigatório");

  const tarefa = {
    id: Date.now(),
    titulo,
    categoria
  };

  tarefas.push(tarefa);
  salvar();
  render();

  tituloInput.value = "";
});

// Drag & drop
document.querySelectorAll(".quadrante").forEach(q => {
  q.addEventListener("dragover", e => e.preventDefault());

  q.addEventListener("drop", e => {
    const id = e.dataTransfer.getData("id");
    const tarefa = tarefas.find(t => t.id == id);

    tarefa.categoria = q.id;
    salvar();
    render();
  });
});

// Inicializa
render();
