/**
 * @description       : Wrapper to the lwcTrialBar to compute and show license info and
 *                      the button to upgrade or renew.
 * @group             : LWC Trial Bar
 * @author            : samuel@pipelaunch.com
 * @last modified on  : 22-08-2022
 * @last modified by  : samuel@pipelaunch.com
 **/
import { LightningElement, api, track } from "lwc";

import * as utils from "./lwcTrialBarLicenseInfoUtils";

export default class LwcTrialBarLicenseInfo extends LightningElement {
  @api propagateEvents = false;
  @api buttonLink = null;
  @api buttonAction = null;


  @api get packageLicenseInfo() {
    return this._packageLicenseInfo;
  }
  _packageLicenseInfo = {
    Status: "Free",
    RemainingDays: 0,
  };
  set packageLicenseInfo(value) {
    this._packageLicenseInfo = value;
  }

  @api get minimumDaysTrial() {
    return this._minimumDaysTrial;
  }
  _minimumDaysTrial = 3;
  set minimumDaysTrial(value) {
    this._minimumDaysTrial = utils.validateNumber(value);
  }

  @api get minimumDaysLicensed() {
    return this._minimumDaysLicensed;
  }
  _minimumDaysLicensed = 30;
  set minimumDaysLicensed(value) {
    this._minimumDaysLicensed = utils.validateNumber(value);
  }

  @track status = {
    show: false,
  };

  /**
   * @type {Boolean} - check if is trial
   */
  get isTrial() {
    return this._packageLicenseInfo.Status === "Trial";
  }

  /**
   * @type {String} - message after the number of days
   */
  get computeMessage() {
    return this.isTrial ? "days left in trial." : "days left on your plan.";
  }

  /**
   * @type {String}
   */
  get computeButtonLink() {
    return "";
  }

  /**
   * @type {String}
   */
  get computeButtonLabel() {
    return this.isTrial ? "Upgrade Now" : "Renew Now";
  }

  /**
   * @type {Boolean} true to show the bar
   */
  get computeShowBar() {
    return utils.computeShowBar(
      this._packageLicenseInfo,
      this._minimumDaysTrial,
      this._minimumDaysLicensed
    );
  }
}
