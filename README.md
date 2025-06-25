# UFG: Projeto SOCC

### Materia de Desenvolvimento Fullstack - UFG 2025.1

#### Grupo 6: Luciano Costa Vianna Neto, João Victor Ribas

#### Escopo: Manter Núcleos de Conhecimento

#### Casos de Uso: 
- Listar Núcleos de Conhecimento
- Responder manifestação de intenção aceito
- Responder manifestação de intenção recusado

#### Entidades: 
- Área
- Disciplina
- Docente
- Manifestação de Intenção
- Núcleo de Conhecimento


<br />
<hr />
<br />

Este projeto é uma aplicação fullstack composta por:

- **Backend**: Java Spring Boot
- **Frontend**: React + Vite + Tailwind + Axios
- **Banco de Dados**: PostgreSQL
- **Orquestração**: Docker Compose

---

## 🧱 Estrutura do Projeto

```
projeto/
├── docker-compose.yml
├── backend/                  # Backend Spring Boot
│   ├── Dockerfile
│   └── config
│   └── controller
│   └── enums
│   └── model
│   └── repository
│   └── service
├── frontend/        # Frontend React (Vite)
│   ├── Dockerfile
│   └── src
│       └── components
│       └── services
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

- Construir o backend Spring e rodar na porta **8070**
- Construir o frontend React e rodar na porta **5173**
- Criar um container PostgreSQL e popular com dados iniciais (seeds)

---

### 3. Acessar o sistema

- **Frontend React**: http://localhost:5173
- **Backend Spring**: http://localhost:8070

---

## 🧹 Encerrar e limpar tudo

Parar e remover os containers e volumes:

```bash
docker-compose down -v
```
