import { Injectable } from '@angular/core';
import SimpleCrypto from "simple-crypto-js";

@Injectable({
  providedIn: 'root'
})
export class EncryptService {

  simpleCrypto:any;
  constructor() {
    this.simpleCrypto = new SimpleCrypto("1234");
   }

  
  encrypt(name:string)
  {
    var chiperText = this.simpleCrypto.encrypt(name);
    return chiperText;
  }
  decrypt(name:string)
  {
    var chiperText = this.simpleCrypto.decrypt(name);
    return chiperText;
  }
}
