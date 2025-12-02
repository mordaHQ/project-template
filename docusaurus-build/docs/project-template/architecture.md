---
title: Архитектура проекта
sidebar_label: Architecture
---

# Архитектура Project Template

Документ описывает основные принципы архитектуры, используемые слои, связи между компонентами, а также общий подход к организации проекта.

---

## Основные принципы

- **KISS** — проект должен быть простым для понимания и расширения.
- **SOLID** — разбиваем функциональность на независимые модули.
- **DRY** — избегаем дублирования логики.
- **YAGNI** — реализуем только реально используемую функциональность.
- **Чёткое разделение ответственности**.

---

## Архитектурные слои

Структура проекта организована по слоям:

### 1. **Presentation Layer**
- HTTP endpoints  
- контроллеры  
- адаптеры входящих запросов  
- валидация входящих данных  

### 2. **Application Layer**
- Use Cases  
- сервисы оркестрации бизнес-логики  
- обработчики команд  
- работа с DTO  

### 3. **Domain Layer**
- бизнес-модели  
- правила предметной области  
- интерфейсы репозиториев  
- чистая бизнес-логика  

### 4. **Infrastructure Layer**
- реальные реализации репозиториев  
- работа с внешними API  
- интеграции  
- клиенты БД  
- логирование  
- конфигурация окружения  

---

## Диаграмма архитектурных слоёв

```mermaid
flowchart TD

    A[Presentation Layer] --> B[Application Layer]
    B[Application Layer] --> C[Domain Layer]
    C[Domain Layer] --> D[Infrastructure Layer]

    A -.-> C
    B -.-> D
## Поток данных в системе

```mermaid
sequenceDiagram
    participant User as Client/User
    participant API as API Layer
    participant App as Application
    participant Domain as Domain Logic
    participant Infra as Infrastructure

    User->>API: HTTP Request
    API->>App: Вызов Use Case / Handler
    App->>Domain: Проверка правил / моделирование
    Domain->>Infra: Запрос к внешним ресурсам / данным
    Infra-->>Domain: Результат / данные
    Domain-->>App: Валидированный результат
    App-->>API: Формирование ответа
    API-->>User: HTTP Response
