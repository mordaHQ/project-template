---
sidebar_position: 10
title: CI/CD
---

# 🚀 CI/CD

В проекте реализована современная и надёжная CI/CD-инфраструктура, которая автоматически проверяет качество кода, запускает тесты и публикует документацию.

---

## 🔧 CI: Проверка качества кода

Каждый коммит проходит:

- ESLint — проверка стиля и ошибок в TypeScript-коде  
- Prettier — автоформатирование  
- Vitest — тесты  
- Coverage — отчёт покрытия кода  

### Как запустить вручную:

\
npm run lint
npm run test
npm run test:coverage
\
---

## 📘 CD: Деплой документации

Документация публикуется автоматически через GitHub Pages.

Это делает workflow:

.github/workflows/docs.yml

Он:

1. Собирает Docusaurus  
2. Упаковывает build  
3. Деплоит в ветку gh-pages  
4. Обновляет сайт:  
   https://mordahq.github.io/project-template/

---

## 🔄 Авто-релизы

Проект использует standard-version.

Автоматически генерируются:

- CHANGELOG
- семантические версии
- git-теги

### Команда релиза:

\
npm run release
\
---

## ⚙️ Полный CI/CD pipeline

1. Push → CI:
   - lint
   - test
   - coverage
   - build

2. Merge в main → CD:
   - build Docusaurus
   - deploy GitHub Pages
   - обновление gh-pages

---

## 📦 Структура процессов

.github/ └── workflows/ ├── ci.yml        — проверки качества └── docs.yml      — деплой документации

---

## 🛡 Зачем всё это?

- защита проекта от регрессий  
- стабильный код  
- автоматический релизный цикл  
- гарантированный деплой без ручных ошибок  

CI/CD — основа устойчивого и масштабируемого проекта.
