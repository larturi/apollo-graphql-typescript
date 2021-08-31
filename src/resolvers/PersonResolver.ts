import {
  Resolver,
  Mutation,
  Arg,
  Int,
  Query,
  InputType,
  Field
} from "type-graphql";
import { Person } from "../entity/Person";

@InputType()
class PersonInput {
  @Field()
  firstname!: string;
  @Field()
  lastname!: string;
  @Field()
  email!: string;
}

@InputType()
class PersonUpdateInput {
  @Field(() => String, {nullable: true})
  firstname?: string;
  @Field(() => String, {nullable: true})
  lastname?: string;
  @Field(() => String, {nullable: true})
  email?: string;
}

@Resolver()
export class PersonResolver {
  @Mutation(() => Person)
  async createPerson(
    @Arg("variables", () => PersonInput) variables: PersonInput
  ) {
    const newPerson = Person.create(variables);
    return await newPerson.save();
  }

  @Mutation(() => Boolean)
  async deletePerson(@Arg("id", () => Int) id: number) {
    await Person.delete(id);
    return true;
  }

  @Mutation(() => Boolean)
  async updatePerson(
    @Arg("id", () => Int) id: number,
    @Arg("fields", () => PersonUpdateInput) fields: PersonUpdateInput
  ) {
    await Person.update({ id }, fields);
    return true;
  }

  @Query(() => [Person])
  persons() {
    return Person.find();
  }

  @Query(() => Person || null)
  async person(
    @Arg("id", () => Int) id: number,
  ) {
    const person = await Person.findOne(id);
    if (person) return person;
    return null;
  }
}
