import React, { useEffect } from "react";

const YOUR_PIXEL_ID = '907909561101767';

const Facebook = () => {
  useEffect(() => {
    const delay = 3000; // delay in milliseconds (3000ms = 3 seconds)

    const timer = setTimeout(() => {
      !(function (f, b, e, v, n, t, s) {
        if (f.fbq) return;
        n = f.fbq = function () {
          n.callMethod
            ? n.callMethod.apply(n, arguments)
            : n.queue.push(arguments);
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = !0;
        n.version = "2.0";
        n.queue = [];
        t = b.createElement(e);
        t.async = !0;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s);
      })(
        window,
        document,
        "script",
        "https://connect.facebook.net/en_US/fbevents.js"
      );
      fbq("init", YOUR_PIXEL_ID); // Use the constant here
      fbq("track", "PageView");
    }, delay);

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  return null;
};

export default Facebook;
