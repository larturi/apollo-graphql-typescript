import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BaseEntity,
    CreateDateColumn
  } from "typeorm";
  import { Field, Int, ObjectType } from "type-graphql";
  
  @ObjectType()
  @Entity()
  export class Person extends BaseEntity {
    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id!: number;
  
    @Field()
    @Column()
    firstname!: string;
  
    @Field()
    @Column()
    lastname!: string;

    @Field()
    @Column()
    email!: string;
  
    @Field(() => String)
    @CreateDateColumn({ type: "timestamp" })
    createdAt!: string;
  }
  