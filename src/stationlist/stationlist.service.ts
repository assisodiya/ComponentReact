// stationlist.service.ts
import { Injectable } from '@nestjs/common';
import { CreateStationlistDto } from './dto/create-stationlist.dto';
import { UpdateStationlistDto } from './dto/update-stationlist.dto';
import axios from 'axios';
import { StationList, StationListDocument } from './station.model';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class StationlistService {
  constructor(
    @InjectModel('StationList') private readonly stationListModel: Model<StationListDocument>,
  ) {}

  async create(createStationlistDto: CreateStationlistDto) {
    const stationModel = new this.stationListModel(createStationlistDto);
    const savedStation = await stationModel.save();
    console.log('Station created:', savedStation);
  }
  async findAll(): Promise<any> {
    try {
      const apiUrl = 'https://www.irctc.co.in/eticketing/StationListServlet.js';
      const response = await axios.get(apiUrl);

      if (response.status !== 200) {
        throw new Error(`Failed to fetch data from API. Status: ${response.status}`);
      }

      let stationNames = response.data;
      stationNames = stationNames.replace(/^var stationName=\[/, '');
      if (!Array.isArray(stationNames)) {
        stationNames = stationNames.split(',').map(item => item.trim());
      }
      if (!Array.isArray(stationNames)) {
        throw new Error('Invalid data format. Expected an array.');
      }

      const stations = stationNames.map((station) => {
        const cleanedStation = station.replace(/\\/g, '').replace(/"/g, '').trim();
        const [stationName, stationCode] = cleanedStation.split(' - ');
        return { stationName: stationName.trim(), stationCode: stationCode.trim() };
      });

      const createdStations = stations.map(async (station) => {
        const createDto: CreateStationlistDto = {
          stationName: station.stationName,
          stationCode: station.stationCode,
        };
        const createdStation = await this.create(createDto);
        return createdStation;
      });

      // Wait for all stations to be created
      const stationsfinallist = await Promise.all(createdStations);

      // Log the created stations (optional)
      console.log('Created Stations:', stationsfinallist);
      return stations;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} stationlist`;
  }

  update(id: number, updateStationlistDto: UpdateStationlistDto) {
    return `This action updates a #${id} stationlist`;
  }

  remove(id: number) {
    return `This action removes a #${id} stationlist`;
  }
}
