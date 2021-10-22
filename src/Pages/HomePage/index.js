import { Box, makeStyles } from "@material-ui/core";
import React from "react";
import HeroSection from "../../Components/HomeComponents/heroSection";
import CompanyWrapper from "../../Components/CompaniesDisplayComponents/CompanyWrapper";
import CardSection from "../../Components/CardSection/cardSection";
import Stats from "../../Components/StatsComponent/stats";
import GlassCard from "../../Components/HomeComponents/glassCard";
import InfoBanner from "../../Components/InfoBanner/infoBanner";

function HomePage() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <HeroSection />
      <CompanyWrapper />
      <CardSection />
      <Stats />
      <GlassCard />
      <InfoBanner isBackgroundColor="#ffffff" alignItems="start" />
      <InfoBanner
        isTextRight={true}
        isBackgroundColor="#F7FAFE"
        isPolygon={true}
        // alignItems="end"
      />
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {},
}));

export default HomePage;
