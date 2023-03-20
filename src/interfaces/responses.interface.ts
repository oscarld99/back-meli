import { Response } from "express";

export interface SuccessResponse<T> {
    data?: T;
    message?: string;
    res: Response;
}

export interface BadResponse {
    message?: string;
    res: Response;
}