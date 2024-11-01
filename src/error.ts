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

export class CredentialAlreadyExistsError extends ConflictError {
    constructor(title: string) {
        super(`Credential with title '${title}' already exists.`);
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

export class CredentialNotFoundError extends NotFoundError {
    constructor(id: number) {
        super(`Credential with ID '${id} not found.`);
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
