---
title: Authentication
sidebar_label: Auth
---

# Authentication

API использует JWT-аутентификацию с access и refresh токенами.

---

## 🔐 Общая схема

1. Пользователь логинится
2. Получает `accessToken` + `refreshToken`
3. `accessToken` передаётся в заголовке:
