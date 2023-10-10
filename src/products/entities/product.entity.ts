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
}

/*

description String?
  price       Float
  image       String
  available     Boolean  @default(true)
  */

//export class Product {}
