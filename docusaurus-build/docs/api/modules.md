

⚠ Важно:  

\- Код — \*\*между тройными бэктиками\*\*  

\- Никаких `\\\\\\`, никаких случайных букв  

\- Это полностью валидный MDX



---



\# ✅ ШАГ 4 — Правильный `modules.md`



```md

---

sidebar\_position: 3

title: Modules

---



\# 🧩 Modules



Описание модулей API.



\## user.ts



```ts

import type { User } from "../../src/types/user";



export function getUser(id: string): User {

&nbsp; return { id, name: "John", age: 30 };

}



export function sumAges(users: User\[]): number {

&nbsp; return users.reduce((acc, u) => acc + u.age, 0);

}



