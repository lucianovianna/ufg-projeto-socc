# UFG: Projeto SOCC

### Materia de Desenvolvimento Fullstack - UFG 2025.1

#### Grupo 6: Luciano Costa Vianna Neto, João Victor Ribas

<br />
<hr />
<br />

Este projeto é uma aplicação fullstack composta por:

- **Backend**: Java Spring Boot
- **Frontend**: React + Vite + Tailwind
- **Banco de Dados**: PostgreSQL
- **Orquestração**: Docker Compose

---

## 🧱 Estrutura do Projeto

```
projeto/
├── docker-compose.yml
├── socc/                  # Backend Spring Boot
│   ├── Dockerfile
│   └── ...código Java...
├── frontend_react/        # Frontend React (Vite)
│   ├── Dockerfile
│   └── ...código React...
```

---

## 🚀 Como rodar a aplicação

### 1. Pré-requisitos

- Docker instalado
- Docker Compose instalado

---

### 2. Subir a aplicação

Na raiz do projeto (onde está o `docker-compose.yml`), execute:

```bash
docker-compose up --build
```

Isso irá:

- Construir o backend Spring e rodar na porta **8080**
- Construir o frontend React e rodar na porta **5173**
- Criar um container PostgreSQL e popular com dados iniciais (seeds)

---

### 3. Acessar o sistema

- **Frontend React**: http://localhost:5173
- **Backend Spring**: http://localhost:8080

---

## 🧹 Encerrar e limpar tudo

Parar e remover os containers e volumes:

```bash
docker-compose down -v
```
