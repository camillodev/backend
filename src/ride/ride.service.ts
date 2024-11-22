import { Injectable } from '@nestjs/common';

@Injectable()
export class RideService {
  getAll() {
    return [{ name: 'rafa' }];
  }
}
