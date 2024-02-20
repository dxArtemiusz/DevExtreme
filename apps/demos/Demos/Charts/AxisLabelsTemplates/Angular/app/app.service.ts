import { Injectable } from '@angular/core';

export class Data {
  country: string;

  gold: number;

  silver: number;

  bronze: number;
}

const data: Data[] = [{
  country: 'Russia',
  gold: 27,
  silver: 10,
  bronze: 10,
}, {
  country: 'Canada',
  gold: 26,
  silver: 15,
  bronze: 9,
}, {
  country: 'Czech Republic',
  gold: 12,
  silver: 13,
  bronze: 21,
}, {
  country: 'Sweden',
  gold: 11,
  silver: 19,
  bronze: 17,
}, {
  country: 'Finland',
  gold: 3,
  silver: 8,
  bronze: 3,
}];

@Injectable()
export class Service {
  getData(): Data[] {
    return data;
  }
}
