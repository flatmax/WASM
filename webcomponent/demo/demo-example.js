import { LitElement, html } from 'lit';
import '../libWASM';

/** Example demo element for testing element loading
*/
class DemoExample extends LitElement {
  render(){
    return html`
      <libwasm->
        libwasm- loading ...
      </libwasm->
    `;
  }
}
customElements.define('demo-example', DemoExample);
