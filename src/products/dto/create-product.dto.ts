import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {

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