import { Router } from 'express';
import { CategoryRepository } from '../repositories/CategoriesRepository';

const categoriesRoutes = Router();
const categoryRepository = new CategoryRepository();

categoriesRoutes.post('/', (request, response)=>{
    const { name, description } = request.body;

    const categoryAlreadyExist = categoryRepository.findByName(name);

    if(categoryAlreadyExist){
        return response.status(400).json({error: 'Category already exist!'})
    }
    
    categoryRepository.create({ name, description });

    return response.status(201).send();
});

categoriesRoutes.get('/', (request, response)=>{
    const all = categoryRepository.list();

    return response.status(200).json(all)
});

export {categoriesRoutes};