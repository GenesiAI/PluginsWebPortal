import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Typography, Box, Grid, Paper, Container } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import EditorPic from "../img/Editor.png";
import AddSection from "../img/AddSection.png";
import Store from "../img/Store.png";
import Plugin from "../img/Plugin.png";
import "../support.css";
function Support() {
  const [activeSection, setActiveSection] = useState<null | string>(null);
  const isDesktop = useMediaQuery("(min-width:1200px)");

  const handleScrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  return (
    <Container sx={{ position: "left" }}>
      <Grid container spacing={2}>
        {/* Menu */}
        <Grid item xs={12} sm={4} md={3} lg={2}>
          <Paper
            id="menu"
            className="menu"
            sx={{
              marginTop: 1,
              position: "sticky",
              top: "80px",
              marginLeft: isDesktop ? "-220px" : 0,
              marginRight: isDesktop ? "80px" : 0,
              backgroundColor: "#f7f7f7",
            }}
          >
            <Typography variant="h4" justifyContent="left"></Typography>
            <Link to="#intro" onClick={() => handleScrollToSection("intro")}>
              <Button style={{ textTransform: "none" }}>
                <Typography sx={{ fontWeight: "bold" }}>
                  {" "}
                  Introduction{" "}
                </Typography>{" "}
              </Button>
            </Link>
            <div>
              <Link
                to="#creationFlow"
                onClick={() => handleScrollToSection("creationFlow")}
              >
                <Button style={{ textTransform: "none" }}>
                  <Typography sx={{ fontWeight: "bold" }}>
                    {" "}
                    Plugin creation flow{" "}
                  </Typography>
                </Button>
              </Link>
              <ul style={{ marginLeft: "16px" }}>
                <li>
                  <Link
                    to="#createAccount"
                    onClick={() => handleScrollToSection("createAccount")}
                  >
                    <Button style={{ textTransform: "none", color: "black" }}>
                      Create your account
                    </Button>
                  </Link>
                </li>
                <li>
                  <Link
                    to="#provideInfo"
                    onClick={() => handleScrollToSection("provideInfo")}
                  >
                    <Button
                      style={{
                        textTransform: "none",
                        textAlign: "left",
                        color: "black",
                      }}
                    >
                      Provide the required information{" "}
                    </Button>
                  </Link>
                </li>
                <li>
                  <Link
                    to="#enterData"
                    onClick={() => handleScrollToSection("enterData")}
                  >
                    <Button style={{ textTransform: "none", color: "black" }}>
                      Enter your own data{" "}
                    </Button>
                  </Link>
                </li>
                <li>
                  <Link
                    to="#addSections"
                    onClick={() => handleScrollToSection("addSections")}
                  >
                    <Button style={{ textTransform: "none", color: "black" }}>
                      Add sections
                    </Button>
                  </Link>
                </li>
                <li>
                  <Link
                    to="#editPlugin"
                    onClick={() => handleScrollToSection("editPlugin")}
                  >
                    <Button style={{ textTransform: "none", color: "black" }}>
                      Edit your plugin{" "}
                    </Button>
                  </Link>
                </li>
                <li>
                  <Link
                    to="#getLink"
                    onClick={() => handleScrollToSection("getLink")}
                  >
                    <Button style={{ textTransform: "none", color: "black" }}>
                      Get the generated link{" "}
                    </Button>
                  </Link>
                </li>
                {/* Repeat this pattern for the other sub-sections */}
              </ul>
            </div>
            <div>
              <Link
                to="#nextSteps"
                onClick={() => handleScrollToSection("nextSteps")}
              >
                <Button style={{ textTransform: "none" }}>
                  <Typography sx={{ fontWeight: "bold" }}>
                    Next steps (and suggestions)
                  </Typography>
                </Button>
              </Link>
              <ul style={{ marginLeft: "16px" }}>
                <li>
                  <Link
                    to="#runningPlugin"
                    onClick={() => handleScrollToSection("runningPlugin")}
                  >
                    <Button style={{ textTransform: "none", color: "black" }}>
                      Running a plugin
                    </Button>
                  </Link>
                </li>
                <li>
                  <Link
                    to="#writeDescriptions"
                    onClick={() => handleScrollToSection("writeDescriptions")}
                  >
                    <Button style={{ textTransform: "none", color: "black" }}>
                      {" "}
                      Writing descriptions{" "}
                    </Button>
                  </Link>
                </li>
                <li>
                  <Link
                    to="#bestPractices"
                    onClick={() => handleScrollToSection("bestPractices")}
                  >
                    <Button style={{ textTransform: "none", color: "black" }}>
                      {" "}
                      Best Practices{" "}
                    </Button>
                  </Link>
                </li>
                <li>
                  <Link
                    to="#submitPlugin"
                    onClick={() => handleScrollToSection("submitPlugin")}
                  >
                    <Button
                      style={{
                        textTransform: "none",
                        textAlign: "left",
                        color: "black",
                      }}
                    >
                      {" "}
                      Submit a plugin for review{" "}
                    </Button>
                  </Link>
                </li>
                <li>
                  <Link
                    to="#guidelines"
                    onClick={() => handleScrollToSection("guidelines")}
                  >
                    <Button style={{ textTransform: "none", color: "black" }}>
                      {" "}
                      Guidelines{" "}
                    </Button>
                  </Link>
                </li>
                <li>
                  <Link
                    to="#pluginTerms"
                    onClick={() => handleScrollToSection("pluginTerms")}
                  >
                    <Button style={{ textTransform: "none", color: "black" }}>
                      {" "}
                      Plugin Terms{" "}
                    </Button>
                  </Link>
                </li>
                {/* Repeat this pattern for the other sub-sections */}
              </ul>
            </div>

            {/* Repeat this pattern for the other sections */}
          </Paper>
        </Grid>

        {/* Content */}
        <Grid item xs={12} sm={8} md={9} lg={10}>
          <Paper
            id="content"
            className="content"
            sx={{
              marginTop: 0,
              position: "sticky",
              top: "0px",
              marginRight: isDesktop ? "-180px" : 0,
              marginLeft: isDesktop ? "-83px" : 0,
            }}
          >
            <Box
              id="intro"
              className={activeSection === "intro" ? "active" : ""}
              sx={{ margin: "2rem 2rem 2rem 2rem", marginTop: "0rem" }}
            >
              {/* <Typography
                variant="h2"
                sx={{
                  paddingTop: "2rem",
                  textAlign: "center",
                  fontWeight: "bold",
                  fontFamily: "sans-serif",
                }}
              >
                Help/Support{" "}
              </Typography> */}
              <Typography
                variant="h6"
                align="center"
                sx={{
                  paddingTop: "4rem",
                  textAlign: "center",
                  maxWidth: "90%",
                  margin: "auto",
                }}
              >
                If you're here, it must mean that you're about to embark on a
                journey where you'll start creating your new plugin.
                <br /> Let us guide you during this new adventure.
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  marginTop: "2rem",
                  fontWeight: "bold",
                  color: "#6c47ff",
                }}
              >
                Introduction
              </Typography>
              <Typography variant="body1" sx={{ marginTop: "2rem" }}>
                Plugins connect ChatGPT to third-party applications. These
                plugins enable ChatGPT to interact with private data enhancing
                ChatGPT's capabilities and allowing it to perform a wide range
                of actions. <br /> Plugins enable ChatGPT to perform tasks such as:{" "}
                <br /> <br />
                <Typography sx={{ marginLeft: "2rem" }}>
                  <li>
                    Retrieve real-time information; e.g., sports scores, stock
                    prices, the latest news, etc.
                  </li>{" "}
                  <li>
                    {" "}
                    Retrieve knowledge-base information; e.g., company docs,
                    personal notes, etc.{" "}
                  </li>{" "}
                  <li>
                    Assist users with actions; e.g., booking a flight, ordering
                    food, etc.{" "}
                  </li>{" "}
                </Typography>
                <br />
                Over time, we anticipate the system will evolve to accommodate
                more advanced use cases.
              </Typography>
            </Box>
            <Box
              id="creationFlow"
              className={activeSection === "creationFlow" ? "active" : ""}
              sx={{ margin: "2rem 2rem 0rem 2rem" }}
            >
              <Typography
                variant="h4"
                sx={{ fontWeight: "bold", color: "#6c47ff" }}
              >
                Plugin Creation Flow
              </Typography>
              <Typography variant="body1" sx={{ marginTop: "1rem" }}>
                To build a plugin, it is important to understand the end-to-end
                flow. Follow these six simple steps to make sure you build your
                plugin the right way, so you can feel proud to share it with
                others:{" "}
              </Typography>
            </Box>
            {/* Repeat this pattern for the other sections */}
            {/* // create account */}
            <Box
              id="createAccount"
              className={activeSection === "createAccount" ? "active" : ""}
              sx={{ margin: "2rem 2rem 2rem 2rem" }}
            >
              <Typography
                variant="h5"
                sx={{
                  maxWidth: "90%",
                  marginBottom: "0.5rem",
                  fontWeight: "bold",
                }}
              >
                Create Your Account
              </Typography>
              Alright, let's walk through the process step by step. First of
              all, you need to create your GenesiAI account in order to edit and
              save your plugins. At the moment, we provide only access with your
              Google Account. To access, you have just to:
              <Typography
                variant="body1"
                sx={{ marginTop: "1rem", marginLeft: "2rem" }}
              >
                <li>
                  Open the GenesiAI website for creating an account by clicking
                  “Login”
                </li>
                <li>
                  Once you have clicked on “Login”, just choose your Google
                  Account
                </li>
                <li>Insert your password</li>{" "}
                <li>
                  Congratulations! Now you can see the list of yours plugins 🙂
                </li>
              </Typography>
            </Box>
            {/* //Provide info */}
            <Box
              id="provideInfo"
              className={activeSection === "provideInfo" ? "active" : ""}
              sx={{ margin: "2rem 2rem 2rem 2rem" }}
            >
              <Typography
                variant="h5"
                sx={{
                  maxWidth: "90%",
                  marginBottom: "0.5rem",
                  fontWeight: "bold",
                }}
              >
                Provide The Required Information
              </Typography>
              In order to create your custom plugin, ChatGPT requires some
              mandatory information. Here the info that you have to fill (very
              easy, we follow you step by step):
              <Typography
                variant="body1"
                sx={{ marginTop: "1rem", marginLeft: "2rem" }}
              >
                <li style={{ display: "flex", alignItems: "flex-start" }}>
                  <span style={{ paddingRight: "0.5em" }}> ●</span>
                  Name for Human: <br />
                  Pick a name that's clear and tells people what your plugin
                  does. This name will be displayed in the ChatGPT plugin
                  marketplace.
                </li>
                <li style={{ display: "flex", alignItems: "flex-start" }}>
                  <span style={{ paddingRight: "0.5em" }}> ●</span>
                  Description for Human: <br />
                  Write a short and snappy description that people can easily
                  understand. This description will be displayed in the ChatGPT
                  plugin marketplace. Keep it under 120 characters, so it packs
                  a punch!
                </li>
                <span style={{ paddingRight: "0.5em" }}> ●</span>
                Description for ChatGPT
                <br />{" "}
                <Typography variant="body1" sx={{ ml: 2 }}>
                  Craft a description that speaks the language of ChatGPT. Let
                  it know what your plugin brings to the table. Start your
                  description with 'Plugin for...' to give it a clear message.
                  Check out the{" "}
                  <a href="https://example.com" style={{ color: "#6360FF" }}>
                    ChatGPT manual
                  </a>{" "}
                  for cool tips and examples to level up your description game!
                </Typography>
                <li style={{ display: "flex", alignItems: "flex-start" }}>
                  <span style={{ paddingRight: "0.5em" }}> ●</span>
                  Logo URL <br />
                  Paste the link of the image that you want to use as logo
                  (better a square image)
                </li>
                <li style={{ display: "flex", alignItems: "flex-start" }}>
                  <span style={{ paddingRight: "0.5em" }}> ●</span>
                  Contact Email <br />
                  Provide your contact email address in case of need by the users
                </li>
                <img src={EditorPic} alt="" style={{ marginTop: "2rem" }} />
              </Typography>
            </Box>
            {/* //Enter you data */}
            <Box
              id="enterData"
              className={activeSection === "enterData" ? "active" : ""}
              sx={{ margin: "2rem 2rem 2rem 2rem" }}
            >
              <Typography
                variant="h5"
                sx={{
                  maxWidth: "90%",
                  marginBottom: "0.5rem",
                  fontWeight: "bold",
                }}
              >
                Enter Your Own Data{" "}
              </Typography>
              First things first, let's get to the fun part: providing all your
              data to GenesiAI to create your custom plugin. Give us all the
              necessary information to make your plugin working well!
              <br />
              <br />
              Then, follow the instructions step by step and fill in all the
              required fields like a pro. Imagine you're on an adventure, and
              each field you complete brings you closer to your perfect plugin.
              <br />
              <br />
              Remember, accuracy is key in this stage! The more precise you are
              with the information you provide, the more effective your plugin
              will be. So take your time and make sure to input everything
              correctly.
            </Box>
            {/* //add sections */}
            <Box
              id="addSections"
              className={activeSection === "addSections" ? "active" : ""}
              sx={{ margin: "2rem 2rem 2rem 2rem" }}
            >
              <Typography
                variant="h5"
                sx={{
                  maxWidth: "90%",
                  marginBottom: "0.5rem",
                  fontWeight: "bold",
                }}
              >
                Add Sections{" "}
              </Typography>
              In order to provide the right data to GenesiAI, you have to split
              it in different sections providing the Name, the Description and
              the Content.
              <br />
              To simplify things, think of your data as a book with
              different topics as chapters. So you can organize your
              work much better!
              <img src={AddSection} alt="" style={{ marginTop: "2rem" }} />
            </Box>
            <Box
              id="editPlugin"
              className={activeSection === "editPlugin" ? "active" : ""}
              sx={{ margin: "2rem 2rem 2rem 2rem" }}
            >
              <Typography
                variant="h5"
                sx={{
                  maxWidth: "90%",
                  marginBottom: "0.5rem",
                  fontWeight: "bold",
                }}
              >
                Edit Your Plugin (if needed){" "}
              </Typography>
              Alright, let's break it down. After having created your plugin,
              you can customize it if you need (also in a second moment despite
              the release in ChatGPT).
              <br />
              <br />
              Add sections and new information to your plugin whenever the
              inspiration strikes. It's like adding new chapters to your
              plugin's story whenever you want. Saving and updating makes it
              easy! With just one click, you can save your progress and update
              your plugin without any hassle. It's as simple as that!
              <br />
              <br />
              So, get ready to dive in and customize your plugin effortlessly.
              You've got the power to make it shine and stand out from the
              crowd!
            </Box>
            <Box
              id="getLink"
              className={activeSection === "getLink" ? "active" : ""}
              sx={{ margin: "2rem 2rem 2rem 2rem" }}
            >
              <Typography
                variant="h5"
                sx={{
                  maxWidth: "90%",
                  marginBottom: "0.5rem",
                  fontWeight: "bold",
                }}
              >
                Get The Generated Link{" "}
              </Typography>
              There you go! Now you're almost ready to create a custom plugin
              that will rock on ChatGPT.
              <br />
              <br />
              Once your custom plugin is ready, we'll give you the generated
              URL. It's like your plugin's secret passcode.
              <br />
              <br />
              Now, head over to the Plugin Store and paste that URL right in.
              It's like finding the perfect spot for your plugin to shine.
              <br />
              <br />
              All that's left is to hit that magical "Deploy" button. Just
              follow the simple instructions that pop up, and you're good to go.
              It's as easy as pressing play on your favorite song.
              <br />
              <br />
              Time to go live and make some magic happen! Your new plugin is
              ready to rock and roll. Start using it and see the power of your
              creation in action.
              <img src={Store} alt="" style={{ marginTop: "2rem" }} />
            </Box>
            <Box
              id="nextSteps"
              className={activeSection === "nextSteps" ? "active" : ""}
              sx={{ margin: "2rem 2rem 2rem 2rem" }}
            >
              <Typography
                variant="h4"
                sx={{
                  marginTop: "2rem",
                  fontWeight: "bold",
                  color: "#6c47ff",
                }}
              >
                Next steps (and suggestions)
              </Typography>
            </Box>
            <Box
              id="runningPlugin"
              className={activeSection === "runningPlugin" ? "active" : ""}
              sx={{ margin: "2rem 2rem 2rem 2rem" }}
            >
              <Typography
                variant="h5"
                sx={{
                  maxWidth: "90%",
                  marginBottom: "0.5rem",
                  fontWeight: "bold",
                }}
              >
                Running A Plugin{" "}
              </Typography>
              Once you have created your plugin and the URL link has been
              generated, you are now ready to submit it to the plugin store.
              <img
                src={Plugin}
                alt=""
                style={{
                  marginTop: "2rem",
                  marginBottom: "2rem",
                  marginLeft: "2rem",
                }}
              />
              To connect the plugin with ChatGPT, navigate to the plugin store
              and first select “Develop your own plugin” to set it up and then
              “Install an unverified plugin” to install it for yourself.
              <img src={Store} alt="" style={{ marginTop: "2rem" }} />
            </Box>
            <Box
              id="writeDescriptions"
              className={activeSection === "writeDescriptions" ? "active" : ""}
              sx={{ margin: "2rem 2rem 2rem 2rem" }}
            >
              <Typography
                variant="h5"
                sx={{
                  maxWidth: "90%",
                  marginBottom: "0.5rem",
                  fontWeight: "bold",
                }}
              >
                Writing Descriptions{" "}
              </Typography>
              ChatGPT needs to know what your plugin does, so that it can decide
              when and how to use your plugin. <br />
              <br />
              When a user makes a query that might be a potential request that
              goes to a plugin, the model looks through the descriptions of the
              endpoints along with the description_for_ChatGPT in the manifest
              file. Just like with prompting other language models, you will
              want to test out multiple prompts and descriptions to see what
              works best.
              <br />
              <br />
              [Screen sezion§ §e description_for_model]
              <br />
              <br />
              The description_for_ChatGPT attribute gives you the freedom to
              instruct the model on how to use your plugin generally. Overall,
              the language model behind ChatGPT is highly capable of
              understanding natural language and following instructions.
              Therefore, this is a good place to put in general instructions on
              what your plugin does and how the model should use it properly.
              Use natural language, preferably in a concise yet descriptive and
              objective tone. You can look at some of the examples to have an
              idea of what this should look like. We suggest starting the
              description_for_ChatGPT with “Plugin for…” and then enumerating
              all of the functionality that your plugin provides.
              <br />
              <br />
              Tips: the "Description for ChatGPT" section is one of the most
              important parts of your plugin. Take your time to come up with a
              clear description of what your plugin does!
            </Box>
            <Box
              id="bestPractices"
              className={activeSection === "bestPractices" ? "active" : ""}
              sx={{ margin: "2rem 2rem 2rem 2rem" }}
            >
              <Typography
                variant="h5"
                sx={{
                  maxWidth: "90%",
                  marginBottom: "0.5rem",
                  fontWeight: "bold",
                }}
              >
                Best Practices{" "}
              </Typography>
              Here are some best practices to follow when writing your
              description_for_ChatGPT, as well as when designing your plugin
              responses: <br />
              <br />
              <li
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  marginLeft: "2rem",
                  maxWidth: "90%",
                }}
              >
                <span style={{ paddingRight: "0.5em" }}> 1 </span>
                Your descriptions should not attempt to control the mood,
                personality, or exact responses of ChatGPT. ChatGPT is designed
                to write appropriate responses to plugins.
              </li>
              <br />
              Bad example:
              <br />{" "}
              <li
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  marginLeft: "2rem",
                  maxWidth: "90%",
                }}
              >
                When the user asks to see their todo list, always respond with
                "I was able to find your todo list! You have [x] todos: list the
                todos here]. I can add more todos if you'd like!" [Screen
                sezion§ §e description_for_model]{" "}
              </li>
              <br />
              <br />
              <li
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  marginLeft: "2rem",
                  maxWidth: "90%",
                }}
              >
                <span style={{ paddingRight: "0.5em" }}> 2 </span>
                Your descriptions should not encourage ChatGPT to use the plugin
                when the user hasn’t asked for your plugin’s particular category
                of service.
              </li>
              <br />
              Bad example:
              <br />{" "}
              <li
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  marginLeft: "2rem",
                  maxWidth: "90%",
                }}
              >
                Whenever the user mentions any type of task or plan, ask if they
                would like to use the TODOs plugin to add something to their
                todo list.
              </li>
              <br />
              Good example:
              <br />{" "}
              <li
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  marginLeft: "2rem",
                  maxWidth: "90%",
                }}
              >
                The TODO list can add, remove and view the user's TODOs.
              </li>
              <br />
              <li
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  marginLeft: "2rem",
                  maxWidth: "90%",
                }}
              >
                <span style={{ paddingRight: "0.5em" }}> 3 </span>
                Your descriptions should not prescribe specific triggers for
                ChatGPT to use the plugin. ChatGPT is designed to use your
                plugin automatically when appropriate.
              </li>
              <br />
              Bad example:
              <br />{" "}
              <li
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  marginLeft: "2rem",
                  maxWidth: "90%",
                }}
              >
                When the user mentions a task, respond with "Would you like me
                to add this to your TODO list? Say 'yes' to continue."
              </li>
              <br />
              <br />
              <br />
              Tips: the "Description for ChatGPT" section is one of the most
              important parts of your plugin. Take your time to come up with a
              clear description of what your plugin does!
            </Box>
            <Box
              id="submitPlugin"
              className={activeSection === "submitPlugin" ? "active" : ""}
              sx={{ margin: "2rem 2rem 2rem 2rem" }}
            >
              <Typography
                variant="h5"
                sx={{
                  maxWidth: "90%",
                  marginBottom: "0.5rem",
                  fontWeight: "bold",
                }}
              >
                Submit a plugin for review{" "}
              </Typography>
              Congrats on getting your plugin in shape! <br /> <br />
              Now it's time to submit your plugin to ChatGPT and start having
              fun! Simply click on the "Deploy" button, follow the instructions,
              and you are all set! <br /> <br />
              OpenAI is currently reviewing new plugins on a rolling basis. You
              can submit a plugin for review using the{" "}
              <a href="https://example.com" style={{ color: "#6360FF" }}>
                plugin submission bot.
              </a>{" "}
              To see the bot, you need to be signed in.
              <br />
            </Box>
            <Box
              id="guidelines"
              className={activeSection === "guidelines" ? "active" : ""}
              sx={{ margin: "2rem 2rem 2rem 2rem" }}
            >
              <Typography
                variant="h5"
                sx={{
                  maxWidth: "90%",
                  marginBottom: "0.5rem",
                  fontWeight: "bold",
                }}
              >
                Guidelines{" "}
              </Typography>
              Before submitting your plugin, remember to have a look at the
              <a href="https://example.com" style={{ color: "#6360FF" }}>
                {" "}
                guidelines{" "}
              </a>{" "}
              of OpenAI.
              <br />
              <br />
              The most common reason plugins are rejected include:
              <li
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  marginLeft: "2rem",
                  maxWidth: "90%",
                }}
              >
                <span style={{ paddingRight: "0.5em" }}> ● </span>
                using the word "plugin", "GPT", or "ChatGPT" in the plugin name
                or description
              </li>
              <li
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  marginLeft: "2rem",
                  maxWidth: "90%",
                }}
              >
                <span style={{ paddingRight: "0.5em" }}> ● </span>
                using a plugin name that is longer than 20 characters
              </li>
              <li
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  marginLeft: "2rem",
                  maxWidth: "90%",
                }}
              >
                <span style={{ paddingRight: "0.5em" }}> ● </span>
                submitting a plugin that cannot be installed (we use the exact
                link you provide, so please make sure it is correct)
              </li>
              <li
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  marginLeft: "2rem",
                  maxWidth: "90%",
                }}
              >
                <span style={{ paddingRight: "0.5em" }}> ● </span>
                missing legal info URL or contact email
              </li>
              Please double check that none of these apply to your plugin.
              Fixing these ahead of time will significantly reduce the wait time
              to be added to the plugin store.
              <br />
            </Box>
            <Box
              id="pluginTerms"
              className={activeSection === "pluginTerms" ? "active" : ""}
              sx={{ margin: "2rem 2rem 2rem 2rem" }}
            >
              <Typography
                variant="h5"
                sx={{
                  maxWidth: "90%",
                  marginBottom: "0.5rem",
                  fontWeight: "bold",
                }}
              >
                Plugin terms
              </Typography>
              In order to register a plugin, you must agree to the
              <a href="https://example.com" style={{ color: "#6360FF" }}>
                {" "}
                Plugin Terms{" "}
              </a>{" "}
              of OpenAI.
              <br /> <br />
              We can't wait to see what you build!
              <br /> <br />
              <br /> <br />
              <br /> <br />
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Support;
