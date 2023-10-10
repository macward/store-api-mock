import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma/prisma.service';


@Injectable()
export class ProductsService {

  constructor(private prisma: PrismaService) {}

  create(createProductDto: CreateProductDto) {
    return 'This action adds a new product';
  }
  
  findAll() {
    return this.prisma.product.findMany( {where: {available: true} })
  }

  findOne(id: number) {
    return this.prisma.product.findUnique({where: {id}})
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
