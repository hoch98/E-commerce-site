import Box from "@mui/material/Box";
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Bar from "./(components)/drawer";
import Grid from "@mui/material/Grid";

const products = 8;

const productTitles = [
  "Cordless Vacuum Cleaner, 550W 45KPA 70Mins Vacuum Cleaners for Home, Stick Vacuum with Charging Dock Station, Anti-Tangle Wireless Vacuum, Rechargeable Cordless Vacuum",
  "ECOVACS DEEBOT T30S Pro Robot Vacuum and Mop with 1100 Pa Suction, Auto Empty Station Smart Navigation AI Edge Cleaning Robot,10-in-1 Cleaning Station",
  "Lefant M330 Pro Robot Vacuum Cleaner and Mop, dToF Navigation, Customized Cleaning, 3-Floor Mapping, 150 mins, 5000Pa, Upgraded PSD 190° Obstacle Avoidance Technology, 2.4&5G WiFi, Pet Hair & Carpets",
  "TOZO HT2 Hybrid Active Noise Cancelling Wireless Headphones, 60H Playtime Lossless Audio Over Ear Bluetooth Headphones, Hi-Res Audio Deep Bass Foldable Lightweight Headset for Workout Black",
  "Samsung Galaxy A56 [AU Version] 5G A Series Mobile Phone, Awesome Intelligence, 128GB Storage, 12MP UltraWide Camera, Long Battery Life, Super Fast Charging, Olive",
  "Nautica Voyage Eau de Toilette Spray 100ML",
  "De'Longhi Rivelia Fully Automatic Coffee Machine EXAM440.55.G, Bean Adapt Technology, Interchangeable Bean Hopper, Automatic Milk Frother, 16 Recipes, Colour Touch Display, Pebble Grey",
  "ARZOPA Portable Monitor 15.6'' FHD 1080P Kickstand Portable Laptop Monitor IPS Computer External Screen USB C HDMI Display for PC MAC Phone Xbox PS5 - A1",
]

export default function Home() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Bar/>
      <Box
        component="main"
        sx={{ width: { sm: `calc(100% - 240px)` } }}
      >
        <Toolbar />
        <Grid container p={6} columnSpacing={3} rowSpacing={4} alignItems={"stretch"}>
          {[...Array(products)].map((x, i) =>
            <Grid size={{xs: 12, md: 6, lg: 3}} key={i}>
              <Box boxShadow={3} sx={{
                backgroundColor: "rgb(240, 240, 240)",
                // aspectRatio: "3/4",
              }}>
                <Box sx={{
                  width: "100%",
                  backgroundColor: "white",
                  aspectRatio: "1/1",
                  padding: "5%"
                }}>
                  <Box
                    component="img"
                    src={`/products/${i+1}.jpg`}
                    sx={{
                      width: "90%",
                      height: "90%",
                      objectFit: "contain"
                    }}
                  />
                </Box>
                <Typography p={1.5} pt={0.5} sx={{
                  display: '-webkit-box',
                  WebkitLineClamp: 2, // Limit to 2 lines
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis', // Add ellipsis (...) for overflow
                  // Optional: Set a line-height for more consistent truncation behavior
                  lineHeight: '1.5em',
                  maxHeight: '3em', // line-height * WebkitLineClamp (1.5 * 2 = 3)
                  fontFamily: "sans-serif",
                  fontSize: {sm: "3vw", md: "2vw", lg: "1vw"}
                }}>
                  {productTitles[i]}
                </Typography>
                <Typography pl={2} fontWeight={"bold"} fontSize={{xs: "5vw", sm: "4vw", md: "3vw", lg: "1.5vw"}}>
                  ${Math.round(Math.random()*100)}.99
                </Typography>
              </Box>
            </Grid>
          )}
        </Grid>
      </Box>
    </Box>
  );
}
