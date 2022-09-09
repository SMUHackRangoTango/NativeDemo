import { StyleSheet, Text, View } from "react-native";
import { Router, Route, Link } from "./react-router";
import { AppBar, Button, Box } from "@react-native-material/core";

const Home = () => {
  return (
    <>
      <AppBar
        title="Sleep Detector"></AppBar>
       <Box style={{padding: 40, justifyContent: "center", alignItems: "center"}}>
      <Button style={{width: "80%"}} title="Get Started"></Button>
      </Box>
    </>
  )
}

const About = () => <Text>About</Text>;

const App = () => (
  <Router>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
  </Router>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10,
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export default App;
