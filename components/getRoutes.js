// https://otp-mta-prod.camsys-apps.com/otp/routers/default/plan?
// apikey=Z276E3rCeTzOQEoBPPN4JCEc6GfvdnYE&allowUnknownTransfers=false&
// mode=TRANSIT%2CWALK&numItineraries=3&showIntermediateStops=true&smartKissAndRide=true&
// flagStopBufferSize=50&nextDepartureWindow=86400&
// toPlace=40.779492%2C-73.955589&
// fromPlace=40.762526%2C-73.967967
// &arriveBy=false&wheelchair=false&maxWalkDistance=804&
// date=9%2F17%2F23&time=06%3A21%20PM&optimize=TRANSFERS&bannedAgencies=&bannedRouteTypes=

// 40.762526%2C-73.967967 40.779492%2C-73.955589

export const getRoutes = async (from, to, date, time, optimize) => {
  let fromPlace = `${from.stop_lat}%2C${from.stop_lon}`;
  let toPlace = `${to.stop_lat}%2C${to.stop_lon}`;

  const baseUrl =
    "https://otp-mta-prod.camsys-apps.com/otp/routers/default/plan";
  const url = `${baseUrl}?apikey=Z276E3rCeTzOQEoBPPN4JCEc6GfvdnYE&allowUnknownTransfers=false
&mode=TRANSIT%2CWALK&numItineraries=3&showIntermediateStops=true&smartKissAndRide=true&flagStopBufferSize=50&nextDepartureWindow=86400&toPlace=${toPlace}&fromPlace=${fromPlace}&arriveBy=false&wheelchair=false&maxWalkDistance=804&date=${date}&time=${time}&optimize=${optimize}&bannedAgencies=&bannedRouteTypes=`;
  const res = await fetch(url);
  console.log(res.status);
  const body = await res.json();
  body.plan.itineraries.forEach((itinerary) => {
    console.log("-----------------------");
    console.log(itinerary.duration); // in seconds
    itinerary.legs.forEach((leg) => {
      // console.log({ leg });
      // console.log(
      //   new Date(leg.startTime).toLocaleString("en-US", {
      //     timeZone: "America/New_York",
      //   })
      // );
      // // console.log(leg.startTimeFmt);
      // console.log(
      //   new Date(leg.endTime).toLocaleString("en-US", {
      //     timeZone: "America/New_York",
      //   })
      // );
      // // console.log(leg.endTimeFmt);
      // console.log(leg.mode);
      // console.log("route", leg.route);
      // console.log("dep delay", leg.departureDelay);
      // console.log("arr delay", leg.arrivalDelay);
      // console.log("from", leg.from.name);
      // console.log("to", leg.to.name);
    });
  });
  return body.plan.itineraries;
};
