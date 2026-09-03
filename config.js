/* the windows hill — everything you'd ever edit lives in this file.
   change a value, commit, and the site updates itself. */

const CONTRACT  = null;            // paste the contract address in quotes at launch, e.g. '0x1234…'
                                   // null shows "contract at launch"
const CHART_URL = '';              // dexscreener link — empty hides the link
const X_URL     = 'https://x.com/thewindowshill';
const TG_URL    = '';              // telegram link — empty hides the link

/* matches a default long.xyz launch on robinhood chain —
   set 'pair' to whichever stock token you actually pair with */
const TOKENOMICS = [
  ['supply', '1,000,000,000'],
  ['pair',   'msft'],
  ['tax',    '0 / 0'],
  ['lp',     'locked'],
  ['mint',   'revoked'],
];
