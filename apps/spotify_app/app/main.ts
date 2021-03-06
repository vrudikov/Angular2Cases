import {bootstrap}    from 'angular2/platform/browser';
import {provide}      from 'angular2/core';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';

import { Spotify } from './services/spotify';
import { App } from './components/app';



bootstrap(App, [
	ROUTER_PROVIDERS,
	provide(LocationStrategy,
		{ useClass: HashLocationStrategy })
]);