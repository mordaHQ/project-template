---
title: Projects API
sidebar_label: Projects
---

# Projects API

Этот раздел описывает операции над проектами: создание, получение, обновление и удаление.

Все маршруты требуют авторизации:


---

## 📌 POST /projects — создать проект

### Пример запроса

```http
POST /api/v1/projects
Authorization: Bearer <access-token>
Content-Type: application/json

{
  "name": "My Project",
  "description": "Это описание проекта"
}
{
  "success": true,
  "data": {
    "id": 51,
    "name": "My Project",
    "description": "Это описание проекта",
    "createdAt": "2023-10-05T12:00:00.000Z"
  }
}
{
  "success": false,
  "error": {
    "code": "PROJECT_ALREADY_EXISTS",
    "message": "Проект с таким именем уже существует"
  }
}
GET /api/v1/projects
Authorization: Bearer <access-token>
{
  "success": true,
  "data": [
    {
      "id": 51,
      "name": "My Project",
      "description": "Описание",
      "createdAt": "2023-10-05T12:00:00.000Z"
    },
    {
      "id": 52,
      "name": "Another Project",
      "description": "Тестовый проект",
      "createdAt": "2023-10-02T09:00:00.000Z"
    }
  ]
}
GET /api/v1/projects/51
Authorization: Bearer <access-token>
{
  "success": true,
  "data": {
    "id": 51,
    "name": "My Project",
    "description": "Это описание проекта",
    "createdAt": "2023-10-05T12:00:00.000Z"
  }
}
{
  "success": false,
  "error": {
    "code": "PROJECT_NOT_FOUND",
    "message": "Проект не найден"
  }
}
PATCH /api/v1/projects/51
Authorization: Bearer <access-token>
Content-Type: application/json

{
  "name": "Updated Name"
}
{
  "success": true,
  "data": {
    "id": 51,
    "name": "Updated Name",
    "description": "Это описание проекта",
    "updatedAt": "2023-10-05T13:00:00.000Z"
  }
}
DELETE /api/v1/projects/51
Authorization: Bearer <access-token>
{
  "success": true,
  "message": "Проект удалён"
}
