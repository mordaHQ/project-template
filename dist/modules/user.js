export function getUser(id) {
    return {
        ok: true,
        data: { id, name: "John", age: 30 },
    };
}
export function sumAges(users) {
    return users.reduce((sum, u) => sum + u.age, 0);
}
