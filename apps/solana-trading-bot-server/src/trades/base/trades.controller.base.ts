/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { TradesService } from "../trades.service";
import { TradesCreateInput } from "./TradesCreateInput";
import { Trades } from "./Trades";
import { TradesFindManyArgs } from "./TradesFindManyArgs";
import { TradesWhereUniqueInput } from "./TradesWhereUniqueInput";
import { TradesUpdateInput } from "./TradesUpdateInput";

export class TradesControllerBase {
  constructor(protected readonly service: TradesService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Trades })
  async createTrades(@common.Body() data: TradesCreateInput): Promise<Trades> {
    return await this.service.createTrades({
      data: data,
      select: {
        buyAmount: true,
        createdAt: true,
        id: true,
        pairName: true,
        profit: true,
        sellAmount: true,
        status: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Trades] })
  @ApiNestedQuery(TradesFindManyArgs)
  async tradesItems(@common.Req() request: Request): Promise<Trades[]> {
    const args = plainToClass(TradesFindManyArgs, request.query);
    return this.service.tradesItems({
      ...args,
      select: {
        buyAmount: true,
        createdAt: true,
        id: true,
        pairName: true,
        profit: true,
        sellAmount: true,
        status: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Trades })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async trades(
    @common.Param() params: TradesWhereUniqueInput
  ): Promise<Trades | null> {
    const result = await this.service.trades({
      where: params,
      select: {
        buyAmount: true,
        createdAt: true,
        id: true,
        pairName: true,
        profit: true,
        sellAmount: true,
        status: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Trades })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateTrades(
    @common.Param() params: TradesWhereUniqueInput,
    @common.Body() data: TradesUpdateInput
  ): Promise<Trades | null> {
    try {
      return await this.service.updateTrades({
        where: params,
        data: data,
        select: {
          buyAmount: true,
          createdAt: true,
          id: true,
          pairName: true,
          profit: true,
          sellAmount: true,
          status: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Trades })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteTrades(
    @common.Param() params: TradesWhereUniqueInput
  ): Promise<Trades | null> {
    try {
      return await this.service.deleteTrades({
        where: params,
        select: {
          buyAmount: true,
          createdAt: true,
          id: true,
          pairName: true,
          profit: true,
          sellAmount: true,
          status: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
