export class ConflictError extends Error {
    constructor(message: string) {
        super(message);
    }
}

export class UserAlreadyExistsError extends ConflictError {
    constructor(email: string) {
        super(`Email '${email}' already registered.`);
    }
}

export class NotFoundError extends Error {
    constructor(message: string) {
        super(message);
    }
}
