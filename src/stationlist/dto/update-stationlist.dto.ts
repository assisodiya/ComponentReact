import { PartialType } from '@nestjs/mapped-types';
import { CreateStationlistDto } from './create-stationlist.dto';

export class UpdateStationlistDto extends PartialType(CreateStationlistDto) {}
