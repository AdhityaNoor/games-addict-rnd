import { Fragment } from 'react';
import { Carousel } from 'react-carousel-minimal';

import Campaigns from './shared/Campaigns';
import DoughnutChart from './shared/Doughnut';
import RowCards from './shared/RowCards';
import StatCards from './shared/StatCards';
import StatCards2 from './shared/StatCards2';
import TopSellingTable from './shared/TopSellingTable';
import UpgradeCard from './shared/UpgradeCard';

import { SimpleCard } from 'app/components';

import { 
  Card, 
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Grid, 
  styled, 
  useTheme, 
  Paper, 
  Box } from '@mui/material';

import map from "lodash/map";
import range from "lodash/range";

const MediaCard = () => {
  return (
  <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 100 }}
        image="https://cms.gameflycdn.com/proxy/gf/boxart/480w/5039170.jpg"
        title="green iguana"
        style={{ height: 270, backgroundPosition: "top" }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Starsand
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Released Date : 
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

const Container = () => {
  return (
    <div style={{ height: "410px", width: "1014px", margin: "7px" }}>
      <Paper elevation={5} style={{ height: "100%", width: "214px" }}>
        <MediaCard/>
      </Paper>
    </div>
  );
};


const data = [
  {
    image: "https://cms2.gameflycdn.com/merchandising/live/Design/default/1920w/5038968.jpg",
    caption: "San Francisco"
  },
  {
    image: "https://cms2.gameflycdn.com/merchandising/live/Design/default/1920w/5038976.jpg",
    caption: "Scotland"
  },
  {
    image: "https://cms2.gameflycdn.com/merchandising/live/Design/default/1920w/5032788.jpg",
    caption: "Darjeeling"
  },
  {
    image: "https://cms2.gameflycdn.com/merchandising/live/Design/default/1920w/5039729.jpg",
    caption: "San Francisco"
  }
];

const captionStyle = {
  fontSize: '2em',
  fontWeight: 'bold',
}
const slideNumberStyle = {
  fontSize: '20px',
  fontWeight: 'bold',
}

const ContentBox = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
}));

const Title = styled('span')(() => ({
  fontSize: '1rem',
  fontWeight: '500',
  marginRight: '.5rem',
  textTransform: 'capitalize',
}));

const SubTitle = styled('span')(({ theme }) => ({
  fontSize: '0.875rem',
  color: theme.palette.text.secondary,
}));

const H4 = styled('h4')(({ theme }) => ({
  fontSize: '1rem',
  fontWeight: '500',
  marginBottom: '16px',
  textTransform: 'capitalize',
  color: theme.palette.text.secondary,
}));

const Analytics = () => {
  const { palette } = useTheme();

  return (
    <Fragment>
        <Carousel
            data={data}
            time={10000}
            width="auto"
            height="500px"
            captionStyle={captionStyle}
            radius="0px"
            slideNumber={false}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={false}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={false}
            style={{
              textAlign: "center",
              maxHeight: "500px",
              margin: "0px auto",
            }}
          />

      <ContentBox className="analytics">
        
      <SimpleCard title="Trending Right Now">
      <div style={{ width: "100%", overflow: "auto", display: "flex" }}>
        {map(range(50), _ => (
          <Container />
        ))}
      </div>
      </SimpleCard>

      <Box py="12px" />

      <SimpleCard title="Newly Added">
      <div style={{ width: "100%", overflow: "auto", display: "flex" }}>
        {map(range(50), _ => (
          <Container />
        ))}
      </div>
      </SimpleCard>

      <Box py="12px" />
        <Grid container spacing={3}>
          <Grid item lg={8} md={8} sm={12} xs={12}>
            <StatCards />
            <TopSellingTable />
            <StatCards2 />

            <H4>Ongoing Projects</H4>
            <RowCards />
          </Grid>

          <Grid item lg={4} md={4} sm={12} xs={12}>
            <Card sx={{ px: 3, py: 2, mb: 3 }}>
              <Title>Traffic Sources</Title>
              <SubTitle>Last 30 days</SubTitle>

              <DoughnutChart
                height="300px"
                color={[palette.primary.dark, palette.primary.main, palette.primary.light]}
              />
            </Card>

            <UpgradeCard />
            <Campaigns />
          </Grid>
        </Grid>
      </ContentBox>
    </Fragment>
  );
};

export default Analytics;
