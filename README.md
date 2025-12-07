# Ensenhower Matrix App (Electron.js)

Uma aplicação desktop simples desenvolvida com **Electron.js** que implementa a **Matriz de Eisenhower** (também chamada de Matriz Urgente-Importante). A ferramenta permite criar tarefas, organizá-las por prioridade e armazená-las localmente em um arquivo JSON.

---

## 📌 Funcionalidades

- **Formulário para criação de tarefas** com título, descrição, urgência e importância.
- **Exibição automática da tarefa em um dos quatro quadrantes** da matriz:
  - Importante e Urgente
  - Importante e Não Urgente
  - Não Importante e Urgente
  - Não Importante e Não Urgente
- **Persistência local em JSON**, garantindo que as tarefas permaneçam salvas mesmo após fechar o aplicativo.
- **(Opcional)** Suporte a **drag & drop** entre quadrantes.
- **(Opcional)** Build final em `.exe` usando **Electron Builder**.

---

## 🧭 Sobre a Matriz de Eisenhower
A Matriz de Eisenhower é uma ferramenta clássica de produtividade. Ela ajuda a priorizar atividades com base em dois eixos:

- **Urgência**: exige resolução imediata.
- **Importância**: gera impacto relevante nos objetivos.

A combinação desses fatores determina o quadrante da tarefa, contribuindo para uma gestão de tempo eficiente.

---

## 📂 Estrutura do Projeto

```
/matrizDeEisenhower 
│─ index.html
|─ renderer.js
│─ style.css
├─ storage.json
├─ main.js
├─ package.json
└─ README.md
```

---

## ⚙️ Instalação e Execução

### 1. Pré-requisitos
- Node.js instalado (versão recomendada: 18+)

### 2. Instalar dependências
```
npm install
```

### 3. Executar a aplicação
```
npm start
```

---

## 🛠️ Build para .exe (opcional)
Para gerar a versão final instalável:

1. Instale o electron-builder:
```
npm install electron-builder --save-dev
```

2. Adicione ao package.json:
```
"build": {
  "appId": "com.eisenhower.matrix",
  "win": {
    "target": "nsis"
  }
}
```

3. Execute o build:
```
npm run build
```

O instalador será gerado na pasta **/dist**.

---

## 🧪 JSON de Persistência
As tarefas são salvas em:
```
tasks.json (ou storage.json)
```

Formato do arquivo:
```
[
  {
    "id": "uuid",
    "title": "Tarefa Exemplo",
    "description": "Detalhes...",
    "urgent": true,
    "important": false,
    "quadrant": 2
  }
]
```

---

## 📝 Scripts Disponíveis

| Comando          | Ação                                 |
|------------------|--------------------------------------|
| `npm start`       | Inicia o Electron                    |
| `npm run build`   | Gera executável Windows              |
| `npm i`           | Instala dependências                 |

---

## 🧩 Tecnologias Utilizadas
- Electron.js
- HTML + CSS + JavaScript puro
- Node.js (fs para manipulação de arquivos)

---

## 📄 Licença
Este projeto está licenciado sob a **MIT License**. Você é livre para usar, modificar e distribuir.

```
MIT License

Copyright (c) 2025

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

(…texto padrão completo…)
```

---

## 👨‍💻 Autor
Projeto desenvolvido por *Gabriel Messias da Silva* como demonstração técnica para aplicação profissional.
