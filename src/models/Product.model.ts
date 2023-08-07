import { AllowNull, Model, Column, Table } from 'sequelize-typescript';
import { DataTypes } from 'sequelize';

@Table({
  tableName: 'products',
  createdAt: false,
  updatedAt: false
})
export class Product extends Model {
  @AllowNull(false)
  @Column({
    type: DataTypes.STRING
  })
    category: string;

  @AllowNull(false)
  @Column({
    type: DataTypes.STRING
  })
    itemId: string;

  @AllowNull(false)
  @Column({
    type: DataTypes.STRING
  })
    name: string;

  @AllowNull(false)
  @Column({
    type: DataTypes.INTEGER
  })
    fullPrice: number;

  @AllowNull(false)
  @Column({
    type: DataTypes.INTEGER
  })
    price: number;

  @AllowNull(false)
  @Column({
    type: DataTypes.STRING
  })
    screen: string;

  @AllowNull(false)
  @Column({
    type: DataTypes.STRING
  })
    capacity: string;

  @AllowNull(false)
  @Column({
    type: DataTypes.STRING
  })
    color: string;

  @AllowNull(false)
  @Column({
    type: DataTypes.STRING
  })
    ram: string;

  @AllowNull(false)
  @Column({
    type: DataTypes.INTEGER
  })
    year: number;

  @AllowNull(false)
  @Column({
    type: DataTypes.STRING
  })
    image: string;
}
