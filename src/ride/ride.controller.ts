import { Controller, Get } from '@nestjs/common';
import { RideService } from './ride.service';

@Controller('ride')
export class RideController {
  constructor(private readonly rideService: RideService) {}

  @Get()
  getAll() {
    return this.rideService.getAll();
  }
}
