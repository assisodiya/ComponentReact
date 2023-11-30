// crud-operation.controller.ts
import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { CrudOperationService } from './crud-operation.service';
import { CreateCrudOperationDto } from './dto/create-crud-operation.dto';

@Controller('crud-operation')
export class CrudOperationController {
  constructor(private readonly crudOperationService: CrudOperationService) {}

  @Post('itemssave')
  create(@Body() createCrudOperationDto: CreateCrudOperationDto) {
    return this.crudOperationService.create(createCrudOperationDto);
  }

  @Get('allitems')
  findAll() {
    return this.crudOperationService.findAll();
  }

  @Put(':number')
  updateByNumber(@Param('number') number: string, @Body() updateData: any) {
    return this.crudOperationService.findAndUpdateByNumber(number, updateData);
  }

  @Delete(':items')
  removeByItems(@Param('items') items: string) {
    return this.crudOperationService.removeByItems(items);
  }
}
