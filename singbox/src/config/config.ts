import { Log } from './log';
import { Ntp } from './ntp';
import { Experimental } from './exp';
import { Inbound } from './in';
import { Outbound } from './out';
import { Dns } from './dns';
import { Route } from './route';

export interface Config {
	log?: Log,
	ntp?: Ntp,
	experimental?: Experimental,
	inbounds: Inbound[],
	outbounds: Outbound[],
	dns: Dns,
	route: Route
}
