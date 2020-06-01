import { FormData } from 'form-data';
import fetch from 'node-fetch';

export class ThingiverseAPI {
  hostname: string;
  apiHostname: string;
  port: number;
  token: string;
  appId: any;
  appSecret: any;

  constructor(options) {
    // set up network params, you shouldn't need to do anything here
    this.hostname = 'thingiverse.com';
    this.apiHostname = 'api.thingiverse.com';
    this.port = 443;
    if (options.hostname) {
      this.hostname = options.hostname;
      if (this.hostname.match(/staging/)) {
        this.apiHostname = 'api-' + this.hostname;
      } else {
        this.apiHostname = 'api.' + this.hostname;
      }
    }
    if (options.port) {
      this.port = options.port;
    }
    // pass in a thingiverse_token
    // see thingiverse.com/developers to learn how to get one
    if (typeof options == 'string') {
      this.token = options;
      return;
    }
    if (options.token) {
      this.token = options.token;
      return;
    }
    // only ever set these when using this on the server side only!
    this.appId = options.app_id;
    this.appSecret = options.app_secret;
    if (!this.appId || !this.appSecret) {
      throw new Error('Thingiverse: attempt to initialize without app id');
    }
  }
  get(path, callback) {
    this.payloadRequest('GET', path, {}, callback);
  }
  remove(path, callback) {
    this.payloadRequest('DELETE', path, {}, callback);
  }
  post(path, object, callback) {
    this.payloadRequest('POST', path, object, callback);
  }
  patch(path, object, callback) {
    this.payloadRequest('PATCH', path, object, callback);
  }
  payloadRequest(method, path, object, callback) {
    if (path.substring(0, 7) == '://' || path.substring(0, 8) == 's://') {
      path = path.split('/').slice(3).join('/');
    }
    if (path[0] !== '/') {
      path = '/' + path;
    }
    const options = {
      host: this.apiHostname,
      port: this.port,
      path,
      method,
      headers: {
        Authorization: 'Bearer ' + this.token,
      },
    };
    const payloadReq = fetch(this.apiHostname, options, (res) => {
      if (res.statusCode != 200) {
        callback(method + ' to ' + path + ' returned ' + res.statusCode);
      }
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        data = JSON.parse(data);
        if (typeof callback == 'function') {
          callback(undefined, data);
        }
      });
      res.on('error', (err) => {
        callback(err);
      });
    });
    payloadReq.on('error', (e) => {
      console.log('problem with request: ' + e.message);
    });
    const body = JSON.stringify(object);
    payloadReq.write(body);
    payloadReq.end();
  }
  // // exchange a username, password, app_id, and app_secret for a token
  // // don't call this, it won't always work!
  // // your user may not have authorized this app to access his/her api account
  // authenticate(callback) {
  //   if (this.token) {
  //     callback();
  //   } else {
  //     console.log('Error: tried to use thingiverse api without oauth token');
  //     this.login((cookie) => {
  //       this.requestAccessCode((code) => {
  //         this.requestAccessToken(callback);
  //       });
  //     });
  //   }
  // }
  // set your redirect_url to urn:ietf:wg:oauth:2.0:oob and bring them to this url
  // in order to let them sign in and get a thingiverse_token
  getRedirectUrl() {
    return (
      '://' +
      this.hostname +
      ':' +
      this.port +
      '/login/oauth/authorize?client_id=' +
      this.appId
    );
  }
  redirectForAccessCode(Response, args) {
    let getArgs = '';
    if (typeof args == 'object') {
      for (const attribute in args) {
        if (args.hasOwnProperty(attribute)) {
          getArgs += '&' + attribute + '=' + args.attribute;
        }
      }
    }
    Response.writeHead(302, {
      Location: this.getRedirectUrl() + getArgs,
    });
    Response.end();
  }
}