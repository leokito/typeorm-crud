import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BeforeInsert, BeforeUpdate } from 'typeorm'
import bcrypt from 'bcrypt'

@Entity('users')
export class User {

  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @CreateDateColumn()
  createdOn!: Date;

  @UpdateDateColumn()
  updatedOn!: Date;

  @Column()
  name!: string;

  @Column()
  email!: string;

  @Column()
  password!: string;

  @Column()
  isAdmin!: boolean

  @BeforeInsert()
  hashPassword() {
      this.password = bcrypt.hashSync(this.password, 8)
  }

  @BeforeUpdate()
  hashPasswordUpdate() {
    this.password = bcrypt.hashSync(this.password, 8)
}

}