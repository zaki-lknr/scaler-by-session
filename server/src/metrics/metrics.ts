import prom from 'prom-client';
import { Request, Response } from 'express';

const collectDefaultMetrics = prom.collectDefaultMetrics;
collectDefaultMetrics();  // 
const connectionGauge = new prom.Gauge({ name: 'sample_session_count', help: 'sessoin count for download ' })

export const metrics = (_: Request, res: Response) => {
  res
    .set('Content-Type', prom.register.contentType)
    .end(prom.register.metrics());
}

export const increaseConnection = () => connectionGauge.inc();
export const decreaseConnection = () => connectionGauge.dec();