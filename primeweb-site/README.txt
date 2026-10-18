PRIMEWEB TECHNOLOGIES — NEW WEBSITE (Uganda main base + UAE branch)
===================================================================

FILES
-----
index.html      Home (services, testimonials, pricing in UGX, locations + maps,
                UAE branch, contact form)
services.html   Services page (6 services, how we work, FAQ)
about.html      About page (CEO, why choose us, journey)
styles.css      Shared styles (brand colour #0ea5e9 unchanged)
script.js       Mobile menu, contact form sending, map switcher
robots.txt      Lets Google crawl the site
sitemap.xml     Page list for Google Search Console
images/         PUT YOUR OWN IMAGES HERE
videos/         PUT YOUR hero.mp4 HERE


CONTACT DETAILS USED
--------------------
Main base (Uganda):  Nabweru Lugoba, near Oasis, Kampala
                     WhatsApp +256 706 003 669  (wa.me/256706003669)
UAE branch:          Al Hayl Industrial Street, Fujairah
                     WhatsApp +971 52 682 2508  (wa.me/971526822508)
Email:               primeweb243@gmail.com
Hours:               24/7


1) ADD YOUR OWN IMAGES AND LOGO
-------------------------------
No images are included. Every image points to a file in images/. Either save
your photos with these names, or edit the src="..." in the HTML to your own
file or full web link (https://...).

  images/logo.png                   YOUR LOGO (header on every page).
                                    If the file is missing, the text
                                    "Primeweb Technologies" shows instead.
  images/graphic-design.jpg         Graphic design service
  images/website-development.jpg    Website service
  images/networking.jpg             Networking service
  images/digital-marketing.jpg      Marketing service
  images/video-editing.jpg          Video editing service
  images/motion-graphics-3d.jpg     Motion graphics & 3D service
  images/client-1.jpg ... client-3.jpg   Testimonial photos (optional)
  images/ceo.jpg                    CEO photo (About page)
  videos/hero.mp4                   Home page background video

To change the logo size, open styles.css and edit ".logo { height: 46px; }".


2) HERO VIDEO OVERLAY
---------------------
The pale white wash is gone. The video now sits under a dark, semi-transparent
overlay so it stays visible and the white text is easy to read.
To adjust it, open styles.css, find ".hero::after" and change the three
rgba(2, 6, 23, 0.78 / 0.55 / 0.35) numbers: lower = brighter video,
higher = darker.


3) GOOGLE MAPS (BOTH LOCATIONS)
-------------------------------
The "Our Locations" section on the home page has two cards: Kampala (main)
and Fujairah (UAE branch). Clicking a card shows that place on the map, and
"Open in Google Maps" opens it in the Google Maps app/site.

The maps search by address text, so the pin may land near rather than exactly
on your door, especially for Nabweru Lugoba. For an exact pin:
  a. On Google Maps, find your exact place and click Share.
  b. Choose "Embed a map" and copy the src="..." link.
  c. In index.html, find the matching button (class="loc-card") and paste
     that link into data-embed="...".
  d. Paste the normal Share link into data-link="..." and, for the first
     (Uganda) card, also into the src of <iframe id="map-frame"> and the
     href of <a id="map-open">.


4) THINGS TO EDIT
-----------------
Search for these words in the HTML files:
  "UGX XXX,XXX"                -> your real starting prices (index.html)
  "Replace this with a real"   -> real client testimonials (index.html)
  "Write a short introduction" -> CEO story (about.html)
  "YOUR_TIDIO_PUBLIC_KEY"      -> your Tidio key (all 3 pages, see step 5)
  "YOUR_CODE"                  -> Google Search Console tag (index.html, step 6)


5) TURN ON THE AI ASSISTANT (TIDIO)
-----------------------------------
a. Create a free account at tidio.com and add your website.
b. In Tidio, find your Public Key (Settings -> Developer).
c. Replace YOUR_TIDIO_PUBLIC_KEY in index.html, services.html and about.html.
d. In Tidio, connect WhatsApp and set up the AI assistant with your services,
   both addresses and prices.


6) GOOGLE SEARCH CONSOLE
------------------------
a. Go to search.google.com/search-console and add a "URL prefix" property:
   https://primewebtechnologies.netlify.app
b. Choose the "HTML tag" method and copy the meta tag Google gives you.
c. Paste it in the <head> of index.html (look for the comment), redeploy,
   then click Verify.
d. Submit https://primewebtechnologies.netlify.app/sitemap.xml
   (If you later change the site address, update robots.txt, sitemap.xml and
   the canonical links in the three HTML files.)


7) DEPLOY ON NETLIFY
--------------------
Log in to Netlify -> your site -> Deploys -> drag and drop this whole folder
onto the deploy box.


8) MAKE THE CONTACT FORM EMAIL YOU
----------------------------------
The form uses Netlify Forms and starts working after you deploy.
To get each message by email:
  Netlify -> your site -> Forms -> Form notifications -> Add notification ->
  Email notification -> choose "contact" -> enter primeweb243@gmail.com.
Send a test message after deploying to confirm it arrives.
Note: the form does not work when you open the file from your computer;
it only works on the live Netlify site.
