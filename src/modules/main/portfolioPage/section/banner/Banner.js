import React from "react";
import styled from "styled-components";
import CountUp from "react-countup";
import { useTranslation } from "react-i18next";
//

import bg from "../../../../../assets/image/showcase4.png";
import ShowcaseTitle from "../../../../../components/showcaseTitle";
import BackRouter from "../../../../../components/backRouter/Back";
//
export default function Banner() {
  const { t } = useTranslation();
  return (
    <StyledBanner>
      <div className="container">
        <div className="banner__item">
          <BackRouter>{t("navbar_portfolio")}</BackRouter>

          <ShowcaseTitle portfolioPage>
            <h4>{t("comfortable_houses")}</h4>
            <h1 className="purposi">{t("our_project_btn")}</h1>
            <p className="comment">{t("showcase__description")}</p>
          </ShowcaseTitle>

          <div className="banner__counts">
            <div className="wrap__response">
              <div className="banner__counts__each">
                <div className="d-fl">
                  <span>+</span>
                  <CountUp start={32} end={55} />
                </div>
                <h2>{t("navbar_designer")}</h2>
              </div>
              <div className="banner__counts__each">
                <div className="d-fl">
                  <span>+</span>
                  <CountUp start={2} end={36} />
                </div>
                <h2>{t("navbar_expert")}</h2>
              </div>
            </div>
            <div className="wrap__response">
              <div className="banner__counts__each">
                <div className="d-fl">
                  <span>+</span>
                  <CountUp start={4} end={45} />
                </div>
                <h2>{t("navbar_architecture")}</h2>
              </div>
              <div className="banner__counts__each">
                <div className="d-fl">
                  <span>+</span>
                  <CountUp start={32} end={15} />
                </div>
                <h2>{t("navbar_maket_build")}</h2>
              </div>
              <div className="banner__counts__each">
                <div className="d-fl">
                  <span>+</span>
                  <CountUp start={40} end={22} />
                </div>
                <h2 className="no__wrap">{t("navbar_topology")}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledBanner>
  );
}

const StyledBanner = styled.div`
  padding: 110px 0 94px 0;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  .banner__item {
    color: var(--light);
    .banner__counts {
      display: flex;
      gap: 65px;
      align-items: flex-start;
      .wrap__response {
        display: flex;
        align-items: flex-start;
        gap: 75px;
        .banner__counts__each {
          display: flex;
          align-items: center;
          flex-direction: column;
          .d-fl {
            font-size: 80px;
            font-weight: 400;
            line-height: 109px;
            letter-spacing: -0.02em;
          }
          h2 {
            max-width: 222px;
            text-align: center;
            font-size: 24px;
            font-weight: 600;
            line-height: 33px;
            letter-spacing: -0.02em;
          }
        }
      }
    }
  }
  @media (max-width: 992px) {
    padding: 282px 0 123px 0;
    .banner__item {
      .banner__counts {
        flex-direction: column;
        align-items: center;
        gap: 76px;
        .wrap__response {
          justify-content: space-between;

          .banner__counts__each {
            .no__wrap {
              white-space: nowrap;
            }
          }
        }
      }
    }
  }
  @media (max-width: 760px) {
    .banner__item {
      .banner__counts {
        gap: 50px;
        .wrap__response {
          gap: 50px;
        }
      }
    }
  }

  @media (max-width: 600px) {
    padding: 120px 0 73px 0;
    min-height: 950px;
    .banner__item {
      .banner__counts {
        flex-direction: row-reverse;
        .wrap__response {
          flex-direction: column;
          .banner__counts__each {
            display: flex;
            align-items: center;
            flex-direction: column;
            .no__wrap {
              white-space: initial;
            }
          }
        }
      }
    }
  }
`;
