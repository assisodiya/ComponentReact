import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StationlistService } from './stationlist.service';
import { CreateStationlistDto } from './dto/create-stationlist.dto';
import { UpdateStationlistDto } from './dto/update-stationlist.dto';

@Controller('stationlist')
export class StationlistController {
  constructor(private readonly stationlistService: StationlistService) {}

  @Post()
  create(@Body() createStationlistDto: CreateStationlistDto) {
    return this.stationlistService.create(createStationlistDto);
  }

  @Get()
  findAll() {
    return this.stationlistService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.stationlistService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStationlistDto: UpdateStationlistDto) {
    return this.stationlistService.update(+id, updateStationlistDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.stationlistService.remove(+id);
  }
}
