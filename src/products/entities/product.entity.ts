import { Product } from "@prisma/client";
import { ApiProperty } from '@nestjs/swagger';

export class ProductEntity implements Product {
  @ApiProperty()
  id: number

  @ApiProperty()
  title: string

  @ApiProperty()
  description: string | null;

  @ApiProperty()
  image: string;

  @ApiProperty()
  price: number;

  @ApiProperty()
  available: boolean;

  @ApiProperty()
  featured: boolean;

  @ApiProperty()
  top: boolean;
}