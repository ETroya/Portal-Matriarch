import "./style.css";
import React, {useContext} from "react";
import {authContext} from "../../utils/GlobalState"
//shoes the customers information
const Pay = () => {
  const {authData} = useContext(authContext);
  const fullName = `${authData.user.first} ${authData.user.last}`;
  const wage = authData.user.wage;
  let hoursWorked = 0;
let overtimeHours = null;

  const getHoursWorked = () => {
    if(authData.user.hours > 40){
      overtimeHours = authData.user.hours - 40;
      hoursWorked = 40;
    }else{
      hoursWorked = authData.user.hours;
    }

  }

  getHoursWorked();

  const birthdayPay = 230;
  const floatingPay = 230;
 
  
  const overtimeRate = wage + (wage / 2);
  const overtimeThisPeriod = overtimeHours * overtimeRate;
  const overtimePay = 3.60 * (wage + (wage / 2)) + overtimeThisPeriod;
  const holidayPay = 8 * (wage * 2);
  const ytdPay = 616 * wage;
  const thisPay = hoursWorked * wage;
  const socialThisPeriodPay = thisPay * .062;
  const socialYTDPay = ytdPay * .062;
  const medicareThisPeriodPay = thisPay * .0145;
  const medicareThisPeriodPayFixed = medicareThisPeriodPay.toFixed(2);
  const medicareYTDPay = ytdPay * .0145;
  const medicareYTDPayFixed = medicareYTDPay.toFixed(2);
  const fedThisPeriodPay = 208 + (thisPay * .008);
  const fedYTDPay = 20 * (ytdPay * .008);
  const caTax = thisPay * .01; 
  const caYTDTax = ytdPay * .01;
  const caDisability = thisPay * .012;
  const caDisabilityYTD = ytdPay * .012;
  const withholdingThisPeriodTotal = socialThisPeriodPay + medicareThisPeriodPay + fedThisPeriodPay + caTax + caDisability;
  const fixedWithholdingThisPeriodTotal = withholdingThisPeriodTotal.toFixed(2);
  const disabilityInsuranceThisPeriod = thisPay * .005;
  const disabilityInsuranceYTD = ytdPay * .005;
  const grossEarnings = ytdPay + birthdayPay + floatingPay + overtimePay + holidayPay;
  const YTDWithholdings = socialYTDPay + medicareYTDPay + fedYTDPay + caYTDTax + caDisabilityYTD;
  const YTDWithholdingsFixed = YTDWithholdings.toFixed(2); 
  const grossThisPeriod = thisPay + overtimeThisPeriod;
  const thisPeriodNet = thisPay - fixedWithholdingThisPeriodTotal - disabilityInsuranceThisPeriod;
  const thisPeriodNetFixed = thisPeriodNet.toFixed(2);
  const ytdNet = grossEarnings - YTDWithholdings - disabilityInsuranceYTD;
  const ytdNetFixed = ytdNet.toFixed(2);


  return (
    <div className="pay-container container">
      <div className="row pay-content">
        <div className="Personal-info col-md-5">
          <div className="personal-header">Personal and Check Information</div>
          <p className="name">{fullName}</p>
          <p className="address">address will go here</p>
          <p className="city">{authData.user.city}</p>
          <p className="id">ID: {authData.user._id}</p>
          <hr />
          <div className="net-pay">
            <p>NET PAY ALLOCATIONS</p>
            <table className="netPay-table">
              <tr>
                <th>DESCRIPTION</th>
                <th>THIS PERIOD</th>
                <th>YTD ($)</th>
              </tr>
              <tr>
                <td>Check Amt.</td>
                <td>{thisPeriodNetFixed}</td>
                <td>{ytdNetFixed}</td>
              </tr>
              <tr>
                <td>
                  <b>NET PAY</b>
                </td>
                <td>{thisPeriodNetFixed}</td>
                <td>{ytdNetFixed}</td>
              </tr>
            </table>
          </div>
          <hr />
          <div className="time-off">
            <p>TIME OFF</p>
            <table>
              <tr>
                <th>DESCRIPTION</th>
                <th>AMT TAKEN</th>
                <th>TOTAL BAL</th>
              </tr>
              <tr>
                <td>Vacation</td>
                <td>{authData.user.pto} hrs.</td>
                <td>2 hrs</td>
              </tr>
              <tr>
                <th>DESCRIPTION</th>
                <th>AMT TAKEN</th>
                <th>TOTAL BAL</th>
              </tr>
              <tr>
                <td>Sick</td>
                <td>16 hrs.</td>
                <td>24 hrs.</td>
              </tr>
              <tr>
                <th>DESCRIPTION</th>
                <th>AMT TAKEN</th>
                <th>TOTAL BAL</th>
              </tr>
              <tr>
                <td>Floating</td>
                <td>0 hrs.</td>
                <td>8 hrs.</td>
              </tr>
              <tr>
                <th>DESCRIPTION</th>
                <th>AMT TAKEN</th>
                <th>TOTAL BAL</th>
              </tr>
              <tr>
                <td>Birthday</td>
                <td>0 hrs.</td>
                <td>8 hrs.</td>
              </tr>
            </table>
          </div>
        </div>
        {/**end of first column */}
        <div className="col-md-7">
          <div className="earnings">
            <p>EARNINGS</p>
            <table>
              <tr>
                <th>DESCRITPION</th>
                <th>HRS/ UNITS</th>
                <th>RATE</th>
                <th>THIS PERIOD ($)</th>
                <th>YTD HOURS</th>
                <th>YTD ($)</th>
              </tr>
              <tr>
                <td>Regular</td>
                <td>{hoursWorked}</td>
                <td>{wage}</td>
                <td>{thisPay}</td>
                <td>616</td>
                <td>{ytdPay}</td>
              </tr>
              <tr>
                <td>Birthday</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>{birthdayPay}</td>
              </tr>
              <tr>
                <td>Floating</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>{floatingPay}</td>
              </tr>
              <tr>
                <td>Overtime</td>
                <td>{overtimeHours}</td>
                <td>{overtimeRate }</td>
                <td>{overtimeThisPeriod}</td>
                <td>3.60</td>
                <td>{overtimePay}</td>
              </tr>
              <tr>
                <td>Holiday</td>
                <td></td>
                <td></td>
                <td></td>
                <td>8.00</td>
                <td>{holidayPay}</td>
              </tr>
              <tr>
                <td>
                  <b>Total Hours</b>
                </td>
                <td>{authData.user.hours}</td>
                <td></td>
                <td></td>
                <td>43.50</td>
                <td></td>
              </tr>
              <tr>
                <td>
                  <b>Gross Earnings</b>
                </td>
                <td></td>
                <td></td>
                <td>{grossThisPeriod}</td>
                <td></td>
                <td>{grossEarnings}</td>
              </tr>
              <tr>
                <td>
                  <b>Total Hrs Worked</b>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </table>
          </div>
          <hr/>
          <div className="withholdings">
            <p>WITHHOLDINGS</p>
            <table>
              <tr>
                <th>DESCRITPION</th>
                <th>FILING STATUS</th>
                <th></th>
                <th>THIS PERIOD ($)</th>
                <th></th>
                <th>YTD ($)</th>
              </tr>
              <tr>
                <td>Social Security</td>
                <td></td>
                <td></td>
                <td>{socialThisPeriodPay}</td>
                <td></td>
                <td>{socialYTDPay}</td>
              </tr>
              <tr>
                <td>Medicare</td>
                <td></td>
                <td></td>
                <td>{medicareThisPeriodPayFixed}</td>
                <td></td>
                <td>{medicareYTDPayFixed}</td>
              </tr>
              <tr>
                <td>FED Income Tax</td>
                <td>j +$208</td>
                <td></td>
                <td>{fedThisPeriodPay}</td>
                <td></td>
                <td>{fedYTDPay}</td>
              </tr>
              <tr>
                <td>CA Income Tax</td>
                <td>MI1 7 0</td>
                <td></td>
                <td>{caTax}</td>
                <td></td>
                <td>{caYTDTax}</td>
              </tr>
              <tr>
                <td>CA Disability</td>
                <td></td>
                <td></td>
                <td>{caDisability}</td>
                <td></td>
                <td>{caDisabilityYTD}</td>
              </tr>
              <tr>
                <td>
                  <b>TOTAL</b>
                </td>
                <td></td>
                <td></td>
                <td>{fixedWithholdingThisPeriodTotal}</td>
                <td></td>
                <td>{YTDWithholdingsFixed}</td>
              </tr>
            </table>
          </div>
          <hr/>
          <div className="deductions">
            <p>DEDUCTIONS</p>
            <table>
              <tr>
              <th>DESCRITPION</th>
                <th></th>
                <th></th>
                <th>THIS PERIOD ($)</th>
                <th></th>
                <th>YTD ($)</th>
              </tr>
              <tr>
                <td>Disability Insu</td>
                <td></td>
                <td></td>
                <td>{disabilityInsuranceThisPeriod}</td>
                <td></td>
                <td>{disabilityInsuranceYTD}</td>
              </tr>
              <tr>
                <td><b>TOTAL</b></td>
                <td></td>
                <td></td>
                <td>{disabilityInsuranceThisPeriod}</td>
                <td></td>
                <td>{disabilityInsuranceYTD}</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Pay;
