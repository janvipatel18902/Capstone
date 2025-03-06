import { useState } from "react";
import "./guidance.scss";

function HomeBuyerGuidance() {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <div className="title">🏡 Home Buyer Guidance in Canada</div>

          <div className="content">
            <Section title="1. Introduction">
              <p>Overview of the home buying process in Canada</p>
              <p>Why proper financial planning is essential</p>
              <p>Key government benefits for homeownership</p>
            </Section>

            <Section title="2. First-Time Home Buyers 👩‍💼🏠">
              <SubSection title="🔹 Steps to Buy Your First Home">
                <ul>
                  <li>1️⃣ Assess Your Finances (Credit score, savings, income stability)</li>
                  <li>2️⃣ Mortgage Pre-Approval (Know how much you can borrow)</li>
                  <li>3️⃣ Find the Right Home (House types, location, real estate agents)</li>
                  <li>4️⃣ Make an Offer & Home Inspection</li>
                  <li>5️⃣ Finalize Your Mortgage & Close the Deal</li>
                </ul>
              </SubSection>
              <SubSection title="🔹 Down Payment Requirements">
                <ul>
                  <li>5% for homes up to $500,000</li>
                  <li>10% for portion between $500,000 – $999,999</li>
                  <li>20% for homes $1M+ (to avoid mortgage insurance)</li>
                </ul>
              </SubSection>
              <SubSection title="🔹 Government Benefits for First-Time Buyers">
                <ul>
                  <li>✅ First-Time Home Buyer Incentive (5%-10% shared equity loan)</li>
                  <li>✅ Home Buyers’ Plan (Withdraw up to $60,000 tax-free from RRSP)</li>
                  <li>✅ First-Time Home Buyers Tax Credit (Up to $1,500 tax rebate)</li>
                  <li>✅ GST/HST New Housing Rebate (Partial refund for new homes)</li>
                  <li>✅ Land Transfer Tax Rebates (Ontario, BC, PEI, Toronto)</li>
                </ul>
              </SubSection>
            </Section>

            <Section title="3. Refinancing a Mortgage 🔄🏡">
              <SubSection title="🔹 Why Refinance?">
                <ul>
                  <li>✅ Lower your interest rate & monthly payments</li>
                  <li>✅ Consolidate high-interest debt (credit cards, loans)</li>
                  <li>✅ Access home equity for renovations or investments</li>
                </ul>
              </SubSection>
            </Section>

            <Section title="📢 Conclusion">
              <p>🏠 Whether you are a first-time homebuyer, refinancing, buying an additional home, or switching lenders, having the right information is key. Plan your finances, take advantage of government programs, and make informed decisions to achieve homeownership in Canada! 🚀</p>
            </Section>
          </div>
        </div>
      </div>
      <div className="imgContainer"></div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div>
      <h2>{title}</h2>
      {children}
    </div>
  );
}

function SubSection({ title, children }) {
  return (
    <div>
      <h3>{title}</h3>
      {children}
    </div>
  );
}

export default HomeBuyerGuidance;
