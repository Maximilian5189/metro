const getRoutes = async () => {
  let fromPlace = "40.779492%2C-73.9555";
  let toPlace = "40.76266%2C-73.9672";
  let date = "9%2F17%2F23";
  let time = "10%3A00%20AM"; // 04:36:20 PM
  const baseUrl =
    "https://otp-mta-prod.camsys-apps.com/otp/routers/default/plan";
  const url = `${baseUrl}?apikey=Z276E3rCeTzOQEoBPPN4JCEc6GfvdnYE&allowUnknownTransfers=false
&mode=TRANSIT%2CWALK&numItineraries=3&showIntermediateStops=true&smartKissAndRide=true&flagStopBufferSize=50&nextDepartureWindow=86400&toPlace=${toPlace}&fromPlace=${fromPlace}&arriveBy=false&wheelchair=false&maxWalkDistance=804&date=${date}&time=${time}&optimize=TRANSFERS&bannedAgencies=&bannedRouteTypes=`;
  const res = await fetch(url);
  console.log(res.status);
  const body = await res.json();
  body.plan.itineraries.forEach((itinerary) => {
    console.log("-----------------------");
    console.log(itinerary.duration); // in seconds
    itinerary.legs.forEach((leg) => {
      // console.log({ leg });
      console.log(
        new Date(leg.startTime).toLocaleString("en-US", {
          timeZone: "America/New_York",
        })
      );
      // console.log(leg.startTimeFmt);
      console.log(
        new Date(leg.endTime).toLocaleString("en-US", {
          timeZone: "America/New_York",
        })
      );
      // console.log(leg.endTimeFmt);
      console.log(leg.mode);
      console.log("route", leg.route);
      console.log("dep delay", leg.departureDelay);
      console.log("arr delay", leg.arrivalDelay);
      console.log("from", leg.from.name);
      console.log("to", leg.to.name);
    });
  });
};
