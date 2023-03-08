import { LitElement, html } from 'lit';
import modProm from './libwasm.js';

/**
 * libwasm WASM loader
 *
 * @customElement
 */
export class LibWASM extends LitElement {
  static get properties() {
    return {
      libWASM: { type: Object }
    }
  }

  constructor() {
    super();
    modProm().then((mod)=>{
      this.libWASM = mod;
      this.WASMReady();
    })
  }

  /// overload this to execute something when the WASM has finished compiling
  WASMReady(){
    console.log('WASM module compiled and ready to go.')
    let test = new this.libWASM.Test;
    test.sayHello();
  }

  render(){
    return html`
        check your console for WASM output!
    `;
  }
}

window.customElements.define('libwasm-', LibWASM);
