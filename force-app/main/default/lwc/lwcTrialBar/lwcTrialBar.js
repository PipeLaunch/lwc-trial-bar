/**
 * @description       : SLDS Trial Bar
 * @group             : LWC Generic Components
 * @author            : samuel@pipelaunch.com
 * @last modified on  : 22-08-2022
 * @last modified by  : samuel@pipelaunch.com
 * @changelog         : 25-07-2022 - Initial version
 **/
import { LightningElement, api, track } from "lwc";

import * as utils from "./lwcTrialBarUtils";

export default class LwcTrialBar extends LightningElement {
  @api debug = false; // debug mode
  @api buttonAction = null; // function

  @api buttonLink = null;

  @api message = ""; // message after the number of days
  @api buttonLabel = "";

  @api remainingDays = 0; // number

  @track status = {
    hasSlot: false, // primitive types had issues with rerender, use tracked variable
  };

  /**
   * @description Propagate events up with bubble and composed to use when the component
   * is nested
   * @default false
   */
  @api get propagateEvents() {
    return this._propagateEvents;
  }
  _propagateEvents = false;
  set propagateEvents(value) {
    this._propagateEvents = utils.normalizeBoolean(value);
  }

  /**
   * @description execute a function if user clicks on the link
   */
  handleClickButton(evt) {
    if (typeof this.buttonAction === "function") {
      evt.preventDefault(); // don't follow link
      this.buttonAction();
    }

    this._dispatchEvent("successclick");
  }

  /**
   * @description handle slot content change
   * @param {*} evt
   */
  handleSlotChange(evt) {
    this.status.hasSlot = utils.hasSlotContent(evt);
  }
  
  /**
   * @description dispatch an event to the parent
   * @param {String} eventName
   */
  _dispatchEvent(eventName) {
    this.dispatchEvent(
      new CustomEvent(eventName, {
        composed: this.propagateEvents,
        bubbles: this.propagateEvents,
      })
    );
  }
}
