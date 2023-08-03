import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({
  tableName: 'phones',
  createdAt: false,
  updatedAt: false
})
export class Phones extends Model {
  @Column({
    type: DataType.STRING,
    primaryKey: true
  })
    id: string;

  @Column({
    type: DataType.STRING
  })
    category: string;
}
