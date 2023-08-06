import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface description {
  title: string
  text: string[]
}

@Table({
  tableName: 'accessories',
  createdAt: false,
  updatedAt: false
})
export class Accessories extends Model {
  @Column({
    type: DataType.STRING,
    primaryKey: true
  })
    id: string;

  @Column({
    type: DataType.STRING
  })
    namespaceId: string;

  @Column({
    type: DataType.STRING
  })
    name: string;

  @Column({
    type: DataType.STRING
  })
    capacityAvailable: string[];

  @Column({
    type: DataType.STRING
  })
    capacity: string;

  @Column({
    type: DataType.INTEGER
  })
    priceRegular: number;

  @Column({
    type: DataType.INTEGER
  })
    priceDiscount: number;

  @Column({
    type: DataType.STRING
  })
    colorsAvailable: string[];

  @Column({
    type: DataType.STRING
  })
    color: string;

  @Column({
    type: DataType.TEXT
  })
    images: string[];

  @Column({
    type: DataType.TEXT
  })
    description: description[];

  @Column({
    type: DataType.STRING
  })
    screen: string;

  @Column({
    type: DataType.STRING
  })
    resolution: string;

  @Column({
    type: DataType.STRING
  })
    processor: string;

  @Column({
    type: DataType.STRING
  })
    ram: string;

  @Column({
    type: DataType.STRING
  })
    cell: string[];
}
