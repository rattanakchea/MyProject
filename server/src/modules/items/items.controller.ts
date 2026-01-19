import { Controller, Get, Post, Body, Param } from "@nestjs/common";
import { ItemsService } from "./items.service";

@Controller("items")
export class ItemsController {
  constructor(private itemsService: ItemsService) {}

  @Post()
  create(
    @Body()
    data: {
      title: string;
      description: string;
      userId: number;
    },
  ) {
    return this.itemsService.create(data);
  }

  @Get()
  findAll() {
    return this.itemsService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.itemsService.findOne(parseInt(id, 10));
  }
}
