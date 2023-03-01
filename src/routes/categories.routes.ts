import { Router } from 'express';
import { CategoryRepository } from '../modules/cars/repositories/CategoriesRepository';
import { CreateCategoryService } from '../modules/cars/services/CreateCategoryService';

const categoriesRoutes = Router();
const categoryRepository = new CategoryRepository();

categoriesRoutes.post('/', (request, response)=>{
    const { name, description } = request.body;

    const createCategoryService = new CreateCategoryService(categoryRepository);

    createCategoryService.execute({ name, description })

    return response.status(201).send();
});

categoriesRoutes.get('/', (request, response)=>{
    const all = categoryRepository.list();

    return response.status(200).json(all)
});

export {categoriesRoutes};