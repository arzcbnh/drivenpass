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

export class EmailNotFoundError extends NotFoundError {
    constructor(email: string) {
        super(`Email '${email}' not registered.`);
    }
}

export class UnauthorizedError extends Error {
    constructor(message: string) {
        super(message);
    }
}

export class WrongPasswordError extends UnauthorizedError {
    constructor() {
        super("Invalid password.");
    }
}
