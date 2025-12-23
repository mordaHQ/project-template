# @morda-dev/project-template

Production-ready TypeScript SDK template with a strict public API, ESM-first setup,
and best practices baked in.

This package can be used as:
- a base for building your own SDK
- a reference for ESM + TypeScript library architecture
- a starting point for production-ready npm packages

---

## Installation

```bash
npm install @morda-dev/project-template
```

## Usage

```ts
import { getUser, sumAges } from '@morda-dev/project-template';

const user = getUser(1);
console.log(user);

const totalAge = sumAges([
  { id: 1, name: 'Alice', age: 20 },
  { id: 2, name: 'Bob', age: 30 },
]);

console.log(totalAge);
```

## API
### getUser(id: number)

Returns a user wrapped in ApiResult.

### sumAges(users: User[])

Returns the sum of all user ages.
## License

ISC


---
