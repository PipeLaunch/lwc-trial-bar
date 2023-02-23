/**
 * @description       : Wrapper to the lwcTrialBar to compute and show license info and
 *                      the button to upgrade or renew.
 * @group             : LWC Trial Bar
 * @author            : samuel@pipelaunch.com
 * @last modified on  : 2023-02-23
 * @last modified by  : samuel@pipelaunch.com
 * @changelog         : 23-02-2023 - add mainClass property
 **/
import { LightningElement, api, track } from "lwc";

import CUSTOM_LABELS from "./lwcTrialBarLicenseInfoLabels";
import * as utils from "./lwcTrialBarLicenseInfoUtils";

export default class LwcTrialBarLicenseInfo extends LightningElement {
  /**
   * @property {string} mainClass CSS classes for the main element.
   */
  @api mainClass = "";

  /**
   * @property {boolean} propagateEvents Propagate events up with bubble and composed to use when the component
   * @default false
   */
  @api propagateEvents = false;

  /**
   * @property {string} buttonLink link to follow when user clicks on the button
   * @example mailto:hello@pipelaunch.com
   */
  @api buttonLink = null;

  /**
   * @property {function} buttonAction function to execute when user clicks on the button
   */
  @api buttonAction = null;

  /**
   * @property {object} packageLicenseInfo package license info
   * @example `{Status: "Trial", RemainingDays: 3}`
   */
  @api get packageLicenseInfo() {
    return this._packageLicenseInfo;
  }
  @track _packageLicenseInfo = {
    Status: "Free",
    RemainingDays: 0,
  };
  set packageLicenseInfo(value) {
    if (utils.validatePackageLicenseInfo(value)) {
      this._packageLicenseInfo = value;
    } else {
      console.error("Invalid packageLicenseInfo", value);
    }
  }

  /**
   * @property {number} minimumDaysTrial minimum number of days to show the bar in trial mode
   */
  @api get minimumDaysTrial() {
    return this._minimumDaysTrial;
  }
  _minimumDaysTrial = 3;
  set minimumDaysTrial(value) {
    this._minimumDaysTrial = utils.validateNumber(value);
  }

  /**
   * @property {number} minimumDaysLicensed minimum number of days to show the bar in licensed mode
   * @default 30
   */
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
    return this.isTrial
      ? CUSTOM_LABELS.DAYS_LEFT_TRIAL
      : CUSTOM_LABELS.DAYS_LEFT_PLAN;
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
    return this.isTrial ? CUSTOM_LABELS.UPGRADE_NOW : CUSTOM_LABELS.RENEW_NOW;
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
