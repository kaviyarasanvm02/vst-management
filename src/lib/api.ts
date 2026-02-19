export type ActionState<T = unknown> = {
    message: string;
    errors?: Record<string, string[] | undefined>;
    fieldValues?: T; // To preserve form data on error
    success?: boolean;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data?: any;
};

export function createError(message: string, errors?: Record<string, string[] | undefined>): ActionState {
    return {
        message,
        errors,
        success: false
    };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function createSuccess(message: string, data?: any): ActionState {
    return {
        message,
        success: true,
        data
    };
}
