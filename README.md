# 📝 Task Manager RESTful API

A simple RESTful API built using **Node.js** and **Express.js** that allows users to manage a collection of to-do tasks. This API supports basic CRUD operations and stores all data in memory (no database).

---

## 🚀 Features

- Create new tasks with title and description
- View all tasks or a specific task by ID
- Update task title and description
- Delete tasks
- Error handling and validation
- In-memory storage (no database)
- Clean and readable structure using Express.js

---

## 📦 Technologies Used

- Node.js
- Express.js

---

## 📁 Project Structure

```
task-manager-api/
│
├── index.js           # Main server file
├── package.json       # Project metadata and dependencies
└── README.md          # API documentation (you are here)
```

---

## 📌 API Endpoints

### 📥 POST `/tasks`

Create a new task.

**Request Body:**

```json
{
  "title": "Complete Assignment",
  "description": "Build Node.js API"
}
```

**Response:**

```json
{
  "id": 1,
  "title": "Complete Assignment",
  "description": "Build Node.js API"
}
```

**Status Codes:**
- `201 Created` – Task created successfully.
- `400 Bad Request` – Missing title or description.

---

### 📄 GET `/tasks`

Get a list of all tasks.

**Response:**

```json
[
  {
    "id": 1,
    "title": "Complete Assignment",
    "description": "Build Node.js API"
  }
]
```

**Status Code:**
- `200 OK`

---

### 🔍 GET `/tasks/:id`

Get a specific task by ID.

**Response:**

```json
{
  "id": 1,
  "title": "Complete Assignment",
  "description": "Build Node.js API"
}
```

**Status Codes:**
- `200 OK` – Task found.
- `404 Not Found` – Task not found.

---

### ✏️ PUT `/tasks/:id`

Update a task by ID.

**Request Body:**

```json
{
  "title": "Update Assignment",
  "description": "Improve the API"
}
```

**Response:**

```json
{
  "id": 1,
  "title": "Update Assignment",
  "description": "Improve the API"
}
```

**Status Codes:**
- `200 OK` – Task updated.
- `400 Bad Request` – Missing title or description.
- `404 Not Found` – Task not found.

---

### 🗑 DELETE `/tasks/:id`

Delete a task by ID.

**Response:**

```json
{
  "message": "task deleted successfully"
}
```

**Status Codes:**
- `200 OK` – Task deleted.
- `404 Not Found` – Task not found.

---

## ❌ Error Handling Summary

| Scenario                       | Status Code | Message                                  |
|--------------------------------|-------------|------------------------------------------|
| Missing title/description      | 400         | `please provide title and description`   |
| Task not found (GET/PUT/DELETE)| 404         | `Tasks not found` / `task not fond`      |

---

## 🧪 How to Run and Test the API

### 🔧 Installation

1. Clone this repository:

```bash
git clone https://github.com/your-username/task-manager-api.git
cd task-manager-api
```

2. Install dependencies:

```bash
npm install
```

3. Start the server:

```bash
node index.js
```

Server will run on:  
```
http://localhost:3000
```

### 🧪 Testing with curl

```bash
curl -X POST http://localhost:3000/tasks -H "Content-Type: application/json" -d '{"title": "Learn Node", "description": "Practice Express API"}'
```

Or use Postman for visual testing.

---

## 🏢 Company Info

**Osumare Marketing Solutions Pvt. Ltd.**  
📍 Osumare Building, Survey No. 43, Pathare Thube Nagar,  
Near Kharadi Bypass, Kharadi, Pune 14  
🌐 [www.osumare.com](http://www.osumare.com)

---

## 👤 Contact

**Pratik Dhere**  
_Web Team Lead_  
📧 pratik.dhere@osumare.in  
📞 9130316771

---

## 📅 Deadline

**Submission Deadline:** 2 Days from assignment received.

Upload your project to GitHub and share the link at:  
📧 **pratik.dhere@osumare.in**

---

## ⚠️ Note

🚫 **AI-generated code will not be accepted.**

---

## ⭐ Bonus Features (Optional)

- [ ] Pagination on `GET /tasks`
- [ ] Sorting and filtering
- [ ] Authentication/Authorization

---