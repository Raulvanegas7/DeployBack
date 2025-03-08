import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryService {

  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>
  ) {}

  async createCategory(createCategoryDto: CreateCategoryDto) {
    const newCategoty = this.categoryRepository.create(createCategoryDto);
    return await this.categoryRepository.save(newCategoty);
  }

  async findAll() {
    return await this.categoryRepository.find();
  }

  async findOneById(id: string) {
    return await this.categoryRepository.findOneBy({ id });
  }

  async update(
    id: string,
    updateCategoryDto: UpdateCategoryDto
  ) {
    await this.categoryRepository.update(id, updateCategoryDto)
    return this.categoryRepository.findOneBy({ id });
  }

  async remove(id: string) {
    await this.categoryRepository.delete(id);
    return { id };
  }
}
