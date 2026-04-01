import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'

const Consultation = (props) => {
  return (
    <>
      <div className="consultation-container1">
        <Head>
          <title>Consultation - rnvtravels</title>
          <meta property="og:title" content="Consultation - rnvtravels" />
          <link
            rel="canonical"
            href="https://voyanta.teleporthq.site/consultation"
          />
          <meta
            property="og:url"
            content="https://voyanta.teleporthq.site/consultation"
          />
        </Head>
        <Navigation rootClassName="navigationroot-class-name1"></Navigation>
        <div className="consultation-thq-plan-a-consultation-elm">
          <div>
            <div className="consultation-container3">
              <Script
                html={`<!-- Cal inline embed code begins -->
<div style="width:100%;height:100%;overflow:scroll" id="my-cal-inline-initial"></div>
<script type="text/javascript">
  (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
Cal("init", "initial", {origin:"https://app.cal.com"});

  Cal.ns.initial("inline", {
    elementOrSelector:"#my-cal-inline-initial",
    config: {"layout":"month_view","useSlotsViewOnSmallScreen":"true"},
    calLink: "r-btravels/initial",
  });

  Cal.ns.initial("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
</script>
<!-- Cal inline embed code ends -->`}
              ></Script>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .consultation-container1 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .consultation-thq-plan-a-consultation-elm {
            flex: 0 0 auto;
            width: 100%;
            height: 80vh;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .consultation-container3 {
            display: contents;
          }
          @media (max-width: 767px) {
            .consultation-thq-plan-a-consultation-elm {
              width: 100%;
              height: 80vh;
              align-self: center;
              margin-top: var(--dl-layout-space-twounits);
              align-items: center;
              justify-content: center;
            }
          }
          @media (max-width: 479px) {
            .consultation-thq-plan-a-consultation-elm {
              width: 100%;
              height: 65vh;
              margin-top: var(--dl-layout-space-threeunits);
            }
          }
        `}
      </style>
    </>
  )
}

export default Consultation
