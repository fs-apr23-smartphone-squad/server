import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({
  tableName: 'Products'
})

export class Product extends Model {
  @Column({
    type: DataType.STRING
  })

    id: string;

  @Column({
    type: DataType.STRING
  })

    category: string;

  @Column({
    type: DataType.STRING
  })

    phoneId: string;

  @Column({
    type: DataType.STRING
  })

    itemId: string;

  @Column({
    type: DataType.STRING
  })

    name: string;

  @Column({
    type: DataType.INTEGER
  })

    fullPrice: number;

  @Column({
    type: DataType.INTEGER
  })

    price: number;

  @Column({
    type: DataType.STRING
  })

    screen: string;

  @Column({
    type: DataType.STRING
  })

    capacity: string;

  @Column({
    type: DataType.STRING
  })

    color: string;

  @Column({
    type: DataType.STRING
  })

    ram: string;

  @Column({
    type: DataType.INTEGER
  })

    year: number;

  @Column({
    type: DataType.STRING
  })

    image: string;
}
