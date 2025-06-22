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

- Docker instalado: https://www.docker.com/products/docker-desktop
- Docker Compose instalado (opcional, pois já vem junto com o Docker Desktop)

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

## 🛠️ Configurações importantes

### Banco de dados PostgreSQL

- **Host (dentro do Docker)**: `db`
- **Porta (local)**: `5432`
- **Usuário**: `soccuser`
- **Senha**: `soccpwd`
- **Banco**: `socc`

Essas configurações já estão no `docker-compose.yml` e no `application.properties`.

---

### Seeds de exemplo

Na inicialização, a aplicação popula automaticamente as tabelas com dados de exemplo como:

- Área: Ciência da Computação
- Núcleo: Núcleo de Lógica
- Facilitador: Maria Facilitadora
- Docente: João Docente
- Disciplina: Algoritmos
- Manifestação: Status `PENDENTE`

O código disso está em `DatabaseSeeder.java`.

---

## 🧹 Encerrar e limpar tudo

Para parar e remover os containers:

```bash
docker-compose down
```
