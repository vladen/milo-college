const data = {
  settings: {
    plansOrder: ['ABM', 'M2M', 'PUF'],
    recommendationPlanTypes: [
      'ABM',
    ],
    stocks: {
      abm: 'An5oaimikvfougEJNQBSz_f3VEgmd6acfeTQGGaPCoE',
      puf: 'UvwrHnX9p1fBz2LoI0UvEdQ8JnZ-KGQKDamDKfwtygk',
      m2m: 'BJWO8GmMhLAjgxfL55oSz-7c7KSyLQdY9jotgROXSqM',
    },
  },
  literals: {
    continueText: 'Continue',
    stockTextTemplate: 'Add a 7-day free trial of Adobe Stock and get up to 10 standard assets. Cancel risk-free before your trial ends, and you won’t be charged. Pay [[stockprice]]  after your trial ends.',
    subtitleText: "You won't be charged until after your free trial ends.",
    titleText: 'Pick a subscription:',
    transactionText: 'Secure transaction',
    transactionTooltip: 'At Adobe, we’re serious about protecting your personal information. To ensure your account details are safe, we use Secure Sockets Layer (SSL), an industry standard for encrypting private data over the internet.',
    ABM: {
      commitmentText: 'Annual, paid monthly',
      conditionText: 'Fee applies if you cancel after 14 days.',
      conditionTooltip: 'If you cancel after 14 days, your service will continue until the end of that month’s billing period, and you will be charged an early termination fee.',
    },
    M2M: {
      commitmentText: 'Monthly',
      conditionText: 'Cancel anytime, no fee.',
      conditionTooltip: 'If you cancel after 14 days, your payment is non-refundable, and your service will continue until the end of that month’s billing period.',
    },
    PUF: {
      commitmentText: 'Annual, prepaid',
      conditionText: 'No refund if you cancel after 14 days.',
      conditionTooltip: 'If you cancel after 14 days, your payment is non-refundable, and your service will continue until the end of your contracted term.',
    },
  },
  plans: {
    ABM: {
      stock: {
        context: {
          type: 'price',
          offerSelectorId: 'An5oaimikvfougEJNQBSz_f3VEgmd6acfeTQGGaPCoE',
        },
        value: {
          offerSelectorIds: [
            'An5oaimikvfougEJNQBSz_f3VEgmd6acfeTQGGaPCoE',
          ],
          offerId: '7164A328080BC96CC60FEBF33F64342D',
          startDate: '2018-12-03T07:59:59.000Z',
          endDate: '2029-10-05T07:59:59.000Z',
          price: 'US$29.99/mo',
          analytics: {
            offerId: '7164A328080BC96CC60FEBF33F64342D',
            label: 'stks_direct_individual',
            price: '29.99',
            amountWithoutTax: '0.0',
            commitmentType: 'YEAR',
            billingFrequency: 'MONTHLY',
            currencyCode: 'USD',
          },
          productArrangementCode: 'stks_direct_individual',
          buyingProgram: 'RETAIL',
          commitment: 'YEAR',
          term: 'MONTHLY',
          customerSegment: 'INDIVIDUAL',
          marketSegments: [
            'COM',
          ],
          salesChannel: 'DIRECT',
          offerType: 'TRIAL',
          pricePoint: 'TRIAL_STOCK_7_DAY_TRIAL',
          language: 'MULT',
          merchant: 'ADOBE',
          planType: 'ABM',
          checkoutUrl: 'https://commerce-stg.adobe.com/store/email?items%5B0%5D%5Bid%5D=9133D2BDA8B49E313019BB7FA57E12AC&items%5B1%5D%5Bid%5D=7164A328080BC96CC60FEBF33F64342D&co=US&lang=en&cli=mini_plans',
        },
      },
      regular: {
        context: {
          type: 'price',
          offerSelectorId: 'oQLpJG3rLZFBCV7rLqCJs9sXdhVC-fIx4GcUCPDHBnI',
        },
        value: {
          offerSelectorIds: [
            'oQLpJG3rLZFBCV7rLqCJs9sXdhVC-fIx4GcUCPDHBnI',
          ],
          offerId: '9133D2BDA8B49E313019BB7FA57E12AC',
          startDate: '2021-12-08T08:01:00.000Z',
          endDate: '2050-01-31T19:59:00.000Z',
          price: 'US$20.99/mo',
          analytics: {
            offerId: '9133D2BDA8B49E313019BB7FA57E12AC',
            label: 'aeft_direct_individual',
            price: '20.99',
            amountWithoutTax: '0.0',
            commitmentType: 'YEAR',
            billingFrequency: 'MONTHLY',
            currencyCode: 'USD',
          },
          productArrangementCode: 'aeft_direct_individual',
          buyingProgram: 'RETAIL',
          commitment: 'YEAR',
          term: 'MONTHLY',
          customerSegment: 'INDIVIDUAL',
          marketSegments: [
            'COM',
          ],
          salesChannel: 'DIRECT',
          offerType: 'TRIAL',
          pricePoint: 'TRIAL_BASE_OFFER_TWP_CCI_ALL_APPS_AND_SINGLE_APP_NON_CCX',
          language: 'MULT',
          merchant: 'ADOBE',
          planType: 'ABM',
          checkoutUrl: 'https://commerce-stg.adobe.com/store/recommendation?items%5B0%5D%5Bid%5D=9133D2BDA8B49E313019BB7FA57E12AC&co=US&lang=en&cli=mini_plans',
        },
      },
      promoHtml: '',
    },
    PUF: {
      stock: {
        context: {
          type: 'price',
          offerSelectorId: 'UvwrHnX9p1fBz2LoI0UvEdQ8JnZ-KGQKDamDKfwtygk',
        },
        value: {
          offerId: 'E3171ADBB9D7A5359EC8128650B7710D',
          startDate: '2018-12-03T07:59:59.000Z',
          endDate: '2029-10-05T07:59:59.000Z',
          price: 'US$359.88/yr',
          analytics: {
            offerId: 'E3171ADBB9D7A5359EC8128650B7710D',
            label: 'stks_direct_individual',
            price: '359.88',
            amountWithoutTax: '0.0',
            commitmentType: 'YEAR',
            billingFrequency: 'ANNUAL',
            currencyCode: 'USD',
          },
          productArrangementCode: 'stks_direct_individual',
          buyingProgram: 'RETAIL',
          commitment: 'YEAR',
          term: 'ANNUAL',
          customerSegment: 'INDIVIDUAL',
          marketSegments: [
            'COM',
          ],
          salesChannel: 'DIRECT',
          offerType: 'TRIAL',
          pricePoint: 'TRIAL_STOCK_7_DAY_TRIAL',
          language: 'MULT',
          merchant: 'ADOBE',
          planType: 'PUF',
          checkoutUrl: 'https://commerce-stg.adobe.com/store/email?items%5B0%5D%5Bid%5D=0D50FF809C4C20E6D8AB2730134CFDEF&items%5B1%5D%5Bid%5D=E3171ADBB9D7A5359EC8128650B7710D&co=US&lang=en&cli=mini_plans',
        },
      },
      regular: {
        context: {
          type: 'price',
          offerSelectorId: 's2rL9qO_BgdSMxlwz8YL9Dg_dvaaPLONS-ultpN1TOw',
        },
        value: {
          offerSelectorIds: [
            's2rL9qO_BgdSMxlwz8YL9Dg_dvaaPLONS-ultpN1TOw',
          ],
          offerId: '0D50FF809C4C20E6D8AB2730134CFDEF',
          startDate: '2021-12-08T08:01:00.000Z',
          endDate: '2050-01-31T19:59:00.000Z',
          price: 'US$239.88/yr',
          analytics: {
            offerId: '0D50FF809C4C20E6D8AB2730134CFDEF',
            label: 'aeft_direct_individual',
            price: '239.88',
            amountWithoutTax: '0.0',
            commitmentType: 'YEAR',
            billingFrequency: 'ANNUAL',
            currencyCode: 'USD',
          },
          productArrangementCode: 'aeft_direct_individual',
          buyingProgram: 'RETAIL',
          commitment: 'YEAR',
          term: 'ANNUAL',
          customerSegment: 'INDIVIDUAL',
          marketSegments: [
            'COM',
          ],
          salesChannel: 'DIRECT',
          offerType: 'TRIAL',
          pricePoint: 'TRIAL_BASE_OFFER_TWP_CCI_ALL_APPS_AND_SINGLE_APP_NON_CCX',
          language: 'MULT',
          merchant: 'ADOBE',
          planType: 'PUF',
          checkoutUrl: 'https://commerce-stg.adobe.com/store/email?items%5B0%5D%5Bid%5D=0D50FF809C4C20E6D8AB2730134CFDEF&co=US&lang=en&cli=mini_plans',
        },
      },
      promoHtml: '',
    },
    M2M: {
      stock: {
        context: {
          type: 'price',
          offerSelectorId: 'BJWO8GmMhLAjgxfL55oSz-7c7KSyLQdY9jotgROXSqM',
        },
        value: {
          offerSelectorIds: [
            'BJWO8GmMhLAjgxfL55oSz-7c7KSyLQdY9jotgROXSqM',
          ],
          offerId: '3002E1908F4574F62C0A9ABA58196755',
          startDate: '2018-12-03T07:59:59.000Z',
          endDate: '2029-10-05T07:59:59.000Z',
          price: 'US$49.99/mo',
          analytics: {
            offerId: '3002E1908F4574F62C0A9ABA58196755',
            label: 'stks_direct_individual',
            price: '49.99',
            amountWithoutTax: '0.0',
            commitmentType: 'MONTH',
            billingFrequency: 'MONTHLY',
            currencyCode: 'USD',
          },
          productArrangementCode: 'stks_direct_individual',
          buyingProgram: 'RETAIL',
          commitment: 'MONTH',
          term: 'MONTHLY',
          customerSegment: 'INDIVIDUAL',
          marketSegments: [
            'COM',
          ],
          salesChannel: 'DIRECT',
          offerType: 'TRIAL',
          pricePoint: 'TRIAL_STOCK_7_DAY_TRIAL',
          language: 'MULT',
          merchant: 'ADOBE',
          planType: 'M2M',
          checkoutUrl: 'https://commerce-stg.adobe.com/store/email?items%5B0%5D%5Bid%5D=1091E94EFA809D9AC1C4609D06A070C0&items%5B1%5D%5Bid%5D=3002E1908F4574F62C0A9ABA58196755&co=US&lang=en&cli=mini_plans',
        },
      },
      regular: {
        context: {
          type: 'price',
          offerSelectorId: 'C7RD6bZ4DEMN7wfrOOXkh7YizxEay8TIWJThwpA5iHU',
        },
        value: {
          offerSelectorIds: [
            'C7RD6bZ4DEMN7wfrOOXkh7YizxEay8TIWJThwpA5iHU',
          ],
          offerId: '1091E94EFA809D9AC1C4609D06A070C0',
          startDate: '2021-12-08T08:01:00.000Z',
          endDate: '2050-01-31T19:59:00.000Z',
          price: 'US$31.49/mo',
          analytics: {
            offerId: '1091E94EFA809D9AC1C4609D06A070C0',
            label: 'aeft_direct_individual',
            price: '31.49',
            amountWithoutTax: '0.0',
            commitmentType: 'MONTH',
            billingFrequency: 'MONTHLY',
            currencyCode: 'USD',
          },
          productArrangementCode: 'aeft_direct_individual',
          buyingProgram: 'RETAIL',
          commitment: 'MONTH',
          term: 'MONTHLY',
          customerSegment: 'INDIVIDUAL',
          marketSegments: [
            'COM',
          ],
          salesChannel: 'DIRECT',
          offerType: 'TRIAL',
          pricePoint: 'TRIAL_BASE_OFFER_TWP_CCI_ALL_APPS_AND_SINGLE_APP_NON_CCX',
          language: 'MULT',
          merchant: 'ADOBE',
          planType: 'M2M',
          checkoutUrl: 'https://commerce-stg.adobe.com/store/email?items%5B0%5D%5Bid%5D=1091E94EFA809D9AC1C4609D06A070C0&co=US&lang=en&cli=mini_plans',
        },
      },
      promoHtml: '',
    },
  },
};

/**
 * @param {HTMLElement} el
 */
export default async function init(el) {
  el.classList.add('spectrum', 'spectrum--medium', 'spectrum--light');
  // eslint-disable-next-line import/no-unresolved
  const {
    createContext, html, render, useContext, useEffect, useMemo, useState,
  } = await import('https://esm.sh/htm@3.1.1/preact/standalone');

  const idPrefix = `twp-${Date.now()}-`;
  const stockPricePattern = /\[\[stockprice\]\]/g;
  let tooltipTimer;

  const Callbacks = createContext();

  function Condition(props) {
    return html`
    <div class="twp-condition">
      ${props.literals[props.plan.key].conditionText}
      <span class="tooltip-icon">
        <svg viewBox="0 0 36 36" focusable="false" aria-hidden="true" role="img" class="spectrum-Icon spectrum-Icon--sizeS">
          <circle cx="18" cy="12" r="2.15"></circle>
          <path d="M20.333 24H20v-7.6a.4.4 0 0 0-.4-.4h-3.933s-1.167.032-1.167 1 1.167 1 1.167 1H16v6h-.333s-1.167.032-1.167 1 1.167 1 1.167 1h4.667s1.167-.033 1.167-1-1.168-1-1.168-1z"></path>
          <path d="M18 2.1A15.9 15.9 0 1 0 33.9 18 15.9 15.9 0 0 0 18 2.1zm0 29.812A13.912 13.912 0 1 1 31.913 18 13.912 13.912 0 0 1 18 31.913z"></path>
        </svg>
      </span>
    </div>
    `;
  }

  function Continue(props) {
    return html`
    <div class="twp-continue">
      <a class="spectrum-Button spectrum-Button--fill spectrum-Button--accent spectrum-Button--sizeM" href="${props.continueHref}">
        <span class="spectrum-Button-label">${props.literals.continueText}</span>
      </a>
    </div>
    `;
  }

  function Plan(props) {
    const callbacks = useContext(Callbacks);
    const id = idPrefix + props.plan.key;
    const { commitmentText } = props.literals[props.plan.key];
    const onChange = (event) => {
      callbacks.onPlanSelect({
        action: 'Plan select',
        event,
        selectedPlan: props.plan,
      });
    };

    return html`
    <div class="twp-plan">
      <input
        autocomplete="off"
        checked=${props.plan === props.selectedPlan}
        class="twp-input"
        id=${id}
        name=${props.plan.key}
        onChange=${onChange}
        type="radio"
        value=${props.plan.key} />
      <label class="twp-label" htmlFor=${id}>
        <div class="twp-commitment">${commitmentText}</div>
        <div class="twp-price">${props.plan.regular.value.price}</div>
        <${Condition} ...${props} />
      </label>
    </div>
    `;
  }

  function Stock(props) {
    const callbacks = useContext(Callbacks);
    const onChange = (event) => {
      callbacks.onStockToggle({
        action: 'Stock toggle',
        event,
        selectedStock: event.target.checked
          ? props.selectedPlan.stock
          : undefined,
      });
    };

    const text = props.literals.stockTextTemplate.replace(
      stockPricePattern,
      props.selectedPlan.stock.value.price,
    );
    return html`
    <div class="twp-stock">
      <label class="spectrum-Checkbox spectrum-Checkbox--sizeM">
        <input
          autocomplete="off"
          class="spectrum-Checkbox-input"
          onChange=${onChange}
          type="checkbox"
          checked=${!!props.selectedStock} />
        <span class="spectrum-Checkbox-box">
          <svg class="spectrum-Icon spectrum-UIIcon-Checkmark100 spectrum-Icon--medium spectrum-Checkbox-checkmark" focusable="false" aria-hidden="true" role="img" width="10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10">
            <path d="M3.5 9.5a.999.999 0 01-.774-.368l-2.45-3a1 1 0 111.548-1.264l1.657 2.028 4.68-6.01A1 1 0 019.74 2.114l-5.45 7a1 1 0 01-.777.386z"></path>
          </svg>
        </span>
        <span class="spectrum-Checkbox-label">${text}</span>
      </label>
    </div>
    `;
  }

  function Transaction(props) {
    const [tooltipOpen, setTooltipOpen] = useState(false);
    function closeTooltip() {
      clearTimeout(tooltipTimer);
      setTooltipOpen(true);
      tooltipTimer = setTimeout(() => setTooltipOpen(false), 300);
    }
    function openTooltip() {
      clearTimeout(tooltipTimer);
      setTooltipOpen(true);
    }

    return html`
    <div class="twp-transaction" onMouseover=${openTooltip} onMouseout=${closeTooltip}>
      <span class="spectrum-Tooltip spectrum-Tooltip-top ${tooltipOpen ? 'is-open' : ''}" onMouseover=${openTooltip} onMouseout=${closeTooltip}>
        <span class="spectrum-Tooltip-label">${props.literals.transactionTooltip}</span>
        <span class="spectrum-Tooltip-tip"></span>
      </span>
      <svg viewBox="0 0 36 36" focusable="false" aria-hidden="true" role="img" class="spectrum-Icon spectrum-Icon--sizeS">
        <path d="M29 16h-1v-2a10 10 0 0 0-20 0v2H7a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V17a1 1 0 0 0-1-1zm-17-2a6 6 0 0 1 12 0v2H12zm8 12.222V29a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2.778a3 3 0 1 1 4 0z"></path>
      </svg>
      <span>${props.literals.transactionText}</span>
    </div>
    `;
  }

  function Panel(props) {
    const plans = useMemo(
      () => props.settings.plansOrder
        .filter((key) => props.plans[key])
        .map((key) => ({ ...props.plans[key], key })),
      [props.plans, props.settings],
    );

    const [continueHref, setContinueHref] = useState('#');
    const [selectedPlan, setSelectedPlan] = useState(plans[0]);
    const [selectedStock, setSelectedStock] = useState();

    useEffect(() => {
      setContinueHref(
        (selectedStock?.value ?? selectedPlan.regular.value).checkoutUrl,
      );
      /*
      states.set(id, {
          plan: selectedPlan.planType,
          stock: !!selectedStock,
      });
      */
    }, [selectedPlan, selectedStock]);

    const callbacks = useMemo(() => ({
      onPlanSelect(detail) {
        setSelectedPlan(detail.selectedPlan);
        // setPendingCallback([onPlanSelect, detail]);
      },
      onStockToggle(detail) {
        setSelectedStock(detail.selectedStock);
        // setPendingCallback([onStockToggle, detail]);
      },
    }), [setSelectedPlan]);

    const current = { ...props, selectedPlan, selectedStock };
    return html`
    <${Callbacks.Provider} value="${callbacks}">
      <div class="twp-panel">
        <div class="twp-header">
          <div class="twp-title">${current.literals.titleText}</div>
          <div class="twp-subtitle">${current.literals.subtitleText}</div>
        </div>
        <div class="twp-plans">${plans.map((plan) => html`<${Plan} ...${{ ...current, plan }} />`)}</div>
        <div class="twp-footer">
          <${Stock} ...${current} />
          <${Transaction} ...${current} />
          <${Continue} ...${{ ...current, continueHref }} />
        </div>
      </panel>
    <//>
    `;
  }

  render(html`<${Panel} ...${data} />`, el);
}
