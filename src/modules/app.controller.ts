import { Controller, Get, UseGuards } from '@nestjs/common';
import * as rp from 'request-promise-native';
import { AuthGuard } from './auth/auth.guard';

export interface ReportInfo {
  clani: string[];
  opis_projekta: string;
  mikrostoritve: string[];
  github: string[];
  travis: string[];
  dockerhub: string[];
}

const seminarReportInfo: ReportInfo = {
  'clani'        : [ 'tt5157' ],
  'opis_projekta': 'Projekt implementira aplikacijo sestavljeno iz več mikrostoritev za zbiranje/sestavljanje podatkov iz določenega spletnega vira (web spider).',
  'mikrostoritve': [
    'http://35.198.123.57:3000/job',
    'http://35.198.182.182:3000',
    'http://35.198.100.92:3000/twitter',
    'http://35.198.149.151:3000/web',
    'http://35.198.160.123:8081/v1/orders'
  ],
  'github'       : [
    'https://github.com/NestJsPlayground/JobMicroService',
    'https://github.com/TilenTomakic/nestjs-seed',
    'https://github.com/NestJsPlayground/TwitterMicroService',
    'https://github.com/NestJsPlayground/WebMicroService',
    'https://github.com/NestJsPlayground/JobOrderMicroService'
  ],
  'travis'       : [
    'https://travis-ci.org/NestJsPlayground/JobMicroService',
    'https://travis-ci.org/TilenTomakic/nestjs-seed',
    'https://travis-ci.org/NestJsPlayground/TwitterMicroService',
    'https://travis-ci.org/NestJsPlayground/WebMicroService',
    'https://travis-ci.org/NestJsPlayground/JobOrderMicroService'
  ],
  'dockerhub'    : [
    'https://hub.docker.com/r/tilen/demo-svc-job/',
    'https://hub.docker.com/r/tilen/nestjs-seed/',
    'https://hub.docker.com/r/tilen/demo-svc-twitter/',
    'https://hub.docker.com/r/tilen/demo-svc-web/',
    'https://hub.docker.com/r/tilen/job-orders/'
  ]
};

@Controller()
// @UseGuards(AuthGuard)
export class AppController {

	@Get()
	async root() {
	  return { doc: '/api' };
  }

  @Get('v1/demo/info')
  info() {
    return seminarReportInfo;
  }
}
