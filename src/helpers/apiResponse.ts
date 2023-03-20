import { Response } from "express";
import { BadResponse, SuccessResponse } from "../interfaces/responses.interface";
import { ResponseStatus } from "./codeStatus";

export const SuccessOkResponse = (dataResponse: SuccessResponse<any>): Response => {
    const {
        data,
        res,
        message = 'OK'
    } = dataResponse
    const body = { message, statusCode: ResponseStatus.OK }
    if (data) Object.assign(body, { data })
    return res.status(ResponseStatus.OK).json(body)
}

export const BadRequestResponse = (dataResponse: BadResponse): Response => {
    const {
        res,
        message = 'Bad Request'
    } = dataResponse
    return res.status(ResponseStatus.BAD_REQUEST).json({ message })
}

export const NotFoundError = (dataResponse: Response): Response =>
    dataResponse.status(ResponseStatus.NOT_FOUND).json({ message: 'Not Found' })
