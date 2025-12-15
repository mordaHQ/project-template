---
title: Pagination & Filtering
sidebar_label: Pagination
---

# Pagination, Filters & Sorting

Этот стандарт используется во **всех API эндпоинтах, возвращающих списки**.

---

## 📄 Pagination (Offset-based)

### Query параметры

| Параметр | Тип | Описание |
|--------|----|---------|
| limit | number | Кол-во элементов (default: 20, max: 100) |
| offset | number | Смещение (default: 0) |

### Пример

