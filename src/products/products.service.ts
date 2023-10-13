import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductsService {

  constructor(private prisma: PrismaService) {}

  create(createProductDto: CreateProductDto) {
    return this.prisma.product.create({ 
      data: createProductDto 
    });
  }
  
  featured() {
    return this.prisma.product.findMany({
      where: { featured: true }
    })
  }

  topProducts() {
    return this.prisma.product.findMany({
      where: { top: true }
    })
  }

  findAll() {
    return this.prisma.product.findMany({
      where: {available: true} 
    })
  }

  findOne(id: number) {
    return this.prisma.product.findUnique({
      where: {id}
    })
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
