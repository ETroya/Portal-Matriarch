import "./style.css";

//shoes the customers information
const Pay = () => {
  return (
    <div className="pay-container container">
      <div className="row pay-content">
        <div className="Personal-info col-md-5">
          <div className="personal-header">Personal and Check Information</div>
          <p className="name">Name goes Here</p>
          <p className="address">address goes Here</p>
          <p className="city">City goes Here</p>
          <p className="id">ID goes Here</p>
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
                <td>0.00</td>
                <td>0.00</td>
              </tr>
              <tr>
                <td>Chkg 917</td>
                <td>10035.20</td>
                <td>166111.39</td>
              </tr>
              <tr>
                <td>
                  <b>NET PAY</b>
                </td>
                <td>10035.20</td>
                <td>166111.39</td>
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
                <td>80 hrs</td>
                <td>2 hrs</td>
              </tr>
              <tr>
                <th>DESCRIPTION</th>
                <th>AMT TAKEN</th>
                <th>TOTAL BAL</th>
              </tr>
              <tr>
                <td>Sick</td>
                <td>16 hrs</td>
                <td>24 hrs</td>
              </tr>
              <tr>
                <th>DESCRIPTION</th>
                <th>AMT TAKEN</th>
                <th>TOTAL BAL</th>
              </tr>
              <tr>
                <td>Floating</td>
                <td>0 hrs</td>
                <td>-1 hrs</td>
              </tr>
              <tr>
                <th>DESCRIPTION</th>
                <th>AMT TAKEN</th>
                <th>TOTAL BAL</th>
              </tr>
              <tr>
                <td>Birthday</td>
                <td>0 hrs</td>
                <td>-3 hrs</td>
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
                <td></td>
                <td></td>
                <td>10300.00</td>
                <td>31.90</td>
                <td>109777.50</td>
              </tr>
              <tr>
                <td>Birthday</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>230</td>
              </tr>
              <tr>
                <td>Floating</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>230</td>
              </tr>
              <tr>
                <td>Overtime</td>
                <td></td>
                <td></td>
                <td></td>
                <td>3.60</td>
                <td>1035</td>
              </tr>
              <tr>
                <td>Holiday</td>
                <td></td>
                <td></td>
                <td></td>
                <td>8.00</td>
                <td>2000</td>
              </tr>
              <tr>
                <td>
                  <b>Total Hours</b>
                </td>
                <td></td>
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
                <td>10300.00</td>
                <td></td>
                <td>200632.50</td>
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
                <td>80.6</td>
                <td></td>
                <td>1279.22</td>
              </tr>
              <tr>
                <td>Medicare</td>
                <td></td>
                <td></td>
                <td>18.85</td>
                <td></td>
                <td>299.17</td>
              </tr>
              <tr>
                <td>FED Income Tax</td>
                <td>j +$208</td>
                <td></td>
                <td>345.50</td>
                <td></td>
                <td>2498.50</td>
              </tr>
              <tr>
                <td>CA Income Tax</td>
                <td>MI1 7 0</td>
                <td></td>
                <td>202.50</td>
                <td></td>
                <td>483.23</td>
              </tr>
              <tr>
                <td>CA Disability</td>
                <td></td>
                <td></td>
                <td>45.60</td>
                <td></td>
                <td>367.21</td>
              </tr>
              <tr>
                <td>
                  <b>TOTAL</b>
                </td>
                <td></td>
                <td></td>
                <td>340.24</td>
                <td></td>
                <td>6281.15</td>
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
                <td>6.75</td>
                <td></td>
                <td>83.49</td>
              </tr>
              <tr>
                <td><b>TOTAL</b></td>
                <td></td>
                <td></td>
                <td>6.75</td>
                <td></td>
                <td>83.96</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Pay;
