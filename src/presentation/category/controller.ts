import { Request, Response } from "express";
import { CustomError, LoginUserDto, RegisterUserDto } from "../../domain";
import { AuthService } from "../services/auth.service";



export class CategoryContoller {

    constructor (
    ) {}

    private handleError = (error: unknown, res: Response) => {
        if (error instanceof CustomError) {
            return res.status(error.statusCode).json({error: error.message});
        }

        console.log(`${error}`);
        return res.status(500).json({error: 'Internal server error'});
    }


    createcategory = async(req: Request, res: Response) => {

        res.json('create category')


    }

    getCategories = async(req: Request, res: Response) => {

        res.json('get categories')


    }

}