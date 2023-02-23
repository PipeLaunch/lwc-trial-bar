/**
 * @description       : SLDS Trial Bar
 * @group             : Generic Components
 * @author            : samuel@pipelaunch.com
 * @last modified on  : 2023-02-23
 * @last modified by  : samuel@pipelaunch.com
 * @changelog         : 25-07-2022 - Initial version
 *                      23-02-2023 - add mainClass property
 **/
import { LightningElement, api, track } from "lwc";

import * as utils from "./lwcTrialBarUtils";

export default class LwcTrialBar extends LightningElement {
  /**
   * @property {string} mainClass CSS classes for the main element.
   */
  @api mainClass = "";

  /**
   * @property {boolean} hideRemainingDays hide remaining days indicator
   * @default false
   */
  @api hideRemainingDays = false;

  /**
   * @property {function} buttonAction function to execute when user clicks on the button
   */
  @api buttonAction = null;

  /**
   * @property {string} buttonLink link to follow when user clicks on the button
   * @example mailto:hello@pipelaunch.com
   */
  @api buttonLink = null;

  /**
   * @property {string} message message after the number of days
   * @example "left in your trial"
   */
  @api message = "";

  /**
   * @property {string} buttonLabel label for the button
   * @example "Contact us"
   */
  @api buttonLabel = "";

  /**
   * @property {number} remainingDays number of days left in the trial
   */
  @api remainingDays = 0;

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
