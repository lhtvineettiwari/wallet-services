/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsOptional, ValidateNested } from "class-validator";
import { UsersUpdateManyWithoutSettingsItemsInput } from "./UsersUpdateManyWithoutSettingsItemsInput";
import { Type } from "class-transformer";

@InputType()
class SettingsUpdateInput {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  buyAmount?: number | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  targetProfit?: number | null;

  @ApiProperty({
    required: false,
    type: () => UsersUpdateManyWithoutSettingsItemsInput,
  })
  @ValidateNested()
  @Type(() => UsersUpdateManyWithoutSettingsItemsInput)
  @IsOptional()
  @Field(() => UsersUpdateManyWithoutSettingsItemsInput, {
    nullable: true,
  })
  usersItems?: UsersUpdateManyWithoutSettingsItemsInput;
}

export { SettingsUpdateInput as SettingsUpdateInput };
