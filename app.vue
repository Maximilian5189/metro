<template>
  <div>
    <!-- <NuxtWelcome /> -->
    <DateTime/>
    <Stations componentName="from" />
    <Stations componentName="to" />
  </div>
  <div>
    <FetchRoutes/>
  </div>
  <div>
    <DisplayRoutes/>
  </div>
</template>
