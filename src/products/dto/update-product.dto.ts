import { ApiProperty } from '@nestjs/swagger';
import { PartialType } from '@nestjs/swagger';
import { CreateProductDto } from './create-product.dto';

export class UpdateProductDto extends PartialType(CreateProductDto) {
  @ApiProperty()
  title: string

  @ApiProperty({ required: false })
  description?: string

  @ApiProperty()
  price: number

  @ApiProperty()
  image: string

  @ApiProperty({ required: true, default: true })
  available: boolean = true

  @ApiProperty({ required: true, default: true })
  featured: boolean

  @ApiProperty({ default: true })
  top: boolean
}
