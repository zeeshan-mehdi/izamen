import React, { Suspense, useState, useEffect } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import SideNavbar from "./components/SideNavbar";
import { Container, Row, Col, Tab, Tabs, Modal, Card, Button } from "react-bootstrap";
import globalvariables from "./globalvariables";
import axios from "axios";
import { connect } from 'react-redux';
import { userProfile } from './redux/actions/userActions';
import { Link } from 'react-router-dom';
import Chatbot from 'react-chatbot-kit'



// Preloader
const Preloader = React.lazy(() => import("./components/layouts/Preloader"));

// Home Pages
const Home = React.lazy(() => import("./components/pages/Home"));
const Hometwo = React.lazy(() => import("./components/pages/Hometwo"));
const Homethree = React.lazy(() => import("./components/pages/Homethree"));
const Homefour = React.lazy(() => import("./components/pages/Homefour"));
const Homefive = React.lazy(() => import("./components/pages/Homefive"));
// Blog
const Bloggrid = React.lazy(() => import("./components/pages/Bloggrid"));
const Bloglist = React.lazy(() => import("./components/pages/Bloglist"));
const Blogsingle = React.lazy(() => import("./components/pages/Blogsingle"));
// Pages
const About = React.lazy(() => import("./components/pages/About"));
const Services = React.lazy(() => import("./components/pages/Services"));
const Faq = React.lazy(() => import("./components/pages/Faq"));
const Pricing = React.lazy(() => import("./components/pages/Pricing"));
const Contact = React.lazy(() => import("./components/pages/Contact"));
const Comingsoon = React.lazy(() => import("./components/pages/Comingsoon"));
const Error = React.lazy(() => import("./components/pages/Error"));
const Login = React.lazy(() => import("./components/pages/Login"));
const Register = React.lazy(() => import("./components/pages/Register"));
const Legal = React.lazy(() => import("./components/pages/Legal"));
// Listings
const Listinggrid = React.lazy(() => import("./components/pages/Listinggrid"));
const Listinglist = React.lazy(() => import("./components/pages/Listinglist"));
const Listingmap = React.lazy(() => import("./components/pages/Listingmap"));
const Listingdetailsone = React.lazy(() => import("./components/pages/Listingdetailsone"));
const Listingdetailstwo = React.lazy(() => import("./components/pages/Listingdetailstwo"));
const Listingdetailsthree = React.lazy(() => import("./components/pages/Listingdetailsthree"));
const Submitlisting = React.lazy(() => import("./components/pages/Submitlisting"));
const Comparelistings = React.lazy(() => import("./components/pages/Comparelistings"));
// Agents
const Agentarchive = React.lazy(() => import("./components/pages/Agentarchive"));
const Agentdetails = React.lazy(() => import("./components/pages/Agentdetails"));
// const Profile = React.lazy(() => import("./components/pages/Profile"));
const Profilelistings = React.lazy(() => import("./components/pages/Profilelistings"));
const Profilesavedlistings = React.lazy(() => import("./components/pages/Profilesavedlistings"));
// Agency
const Agencyarchive = React.lazy(() => import("./components/pages/Agencyarchive"));
const Agencydetails = React.lazy(() => import("./components/pages/Agencydetails"));

//Image gallery
const Imagegallery = React.lazy(() => import("./components/pages/Imagegallery"));


const Portfolio = React.lazy(() => import("./components/pages/Portfoilio"));

const Calculator = React.lazy(() => import("./components/pages/Calculator"));

// Dashboard
const Dashboard = React.lazy(() => import("./components/Dashboard/Dashboard"));
const PropertyDashboard = React.lazy(() => import("./components/Dashboard/PropertyDashboard/PropertyDashboard"));
const WebAdminDashboard = React.lazy(() => import("./components/Dashboard/WebAdmins/WebAdminsDashboard"));
const ProjectDashboard = React.lazy(() => import("./components/Dashboard/ProjectDashboard/ProjectDashboard"));
const PartnerDashboard = React.lazy(() => import("./components/Dashboard/PartnerDashboard/PartnerDashboard"));
const AgentDashboard = React.lazy(() => import("./components/Dashboard/AgentDashboard/AgentDashboard"));
const FAQDashboard = React.lazy(() => import("./components/Dashboard/FAQDashboard/FAQDashboard"));
const MemberDashboard = React.lazy(() => import("./components/Dashboard/MemberDashboard/MemberDashboard"));
const NonMemberDashboard = React.lazy(() => import("./components/Dashboard/NonMemberDashboard/NonMemberDashboard"));
const MembersArea = React.lazy(() => import("./components/Dashboard/MembersArea/MembersArea"));
const Testimonials = React.lazy(() => import("./components/Dashboard/MembersArea/Testimonials"));
const Profile1 = React.lazy(() => import("./components/Dashboard/MembersArea/Profile"));
const LawsOfTheLand = React.lazy(() => import("./components/Dashboard/LawsOfTheLand/LawsOfTheLand"));
const Memdashboard = React.lazy(() => import("./components/Dashboard/MembersArea/Dashboard"));
const PropertiesAgentLinkedWith = React.lazy(() => import("./components/Dashboard/AgentArea/PropertiesLinkedwith"));
const AgDashboard = React.lazy(() => import("./components/Dashboard/AgentArea/Dashboard"));
const AgProperties = React.lazy(() => import("./components/Dashboard/AgentArea/AgentsProperties"));
const AgProfile = React.lazy(() => import("./components/Dashboard/AgentArea/Profile"));
const AgTestimonials = React.lazy(() => import("./components/Dashboard/AgentArea/Testimonials"));
const AgBlogsarea = React.lazy(() => import("./components/Dashboard/AgentArea/BlogsArea"));
const AgContactus = React.lazy(() => import("./components/Dashboard/AgentArea/ContactUs"));

const Glossary = React.lazy(() => import("./components/pages/Glossary"));

const BlogsArea = React.lazy(() => import("./components/Dashboard/MembersArea/BlogsArea"));

const ContactUs = React.lazy(() => import("./components/Dashboard/MembersArea/ContactUs"));

const GlossaryArea = React.lazy(() => import("./components/Dashboard/GlossaryArea/GlossaryArea"));
const ImagegalleryArea = React.lazy(() => import("./components/Dashboard/ImageGalleryArea/ImageGalleryArea"));

function App(props) {


  const { classes } = props;
  useEffect(async () => {
    try {
      if (localStorage.length == 0) {
        localStorage.setItem("user_ID", "")
        localStorage.setItem('isSignedIn', JSON.stringify(false))
        localStorage.setItem("accountType", "")
        localStorage.setItem("guestemail", "")
      }
      else {
        let data = {
          user_ID: localStorage.getItem("user_ID")
        }
        if (localStorage.getItem("accountType") == "member") {

          try {

            axios.post(globalvariables.data.Basicapi + "getMemberOnUserID", data
              ,
              {
                headers: {
                  'Content-Type': 'application/json',
                },
              })
              .then(async (response) => {
                console.log("Login successfully", response.data);

                props.senduserprofile(response.data);



              })
              .catch(error => {

                console.log("in catch of axios while Fetchin User", error.toString());



              });
          } catch (error) {


            console.log("in try catch while fetching User", error.toString());

          }
        }

        if (localStorage.getItem("accountType") == "agent") {

          try {

            axios.post(globalvariables.data.Basicapi + "getAgentOnUserID", data
              ,
              {
                headers: {
                  'Content-Type': 'application/json',
                },
              })
              .then(async (response) => {
                console.log("Login successfully", response.data);

                props.senduserprofile(response.data);



              })
              .catch(error => {

                console.log("in catch of axios while submitting User", error.toString());



              });
          } catch (error) {


            console.log("in try catch while submitting property", error.toString());

          }
        }

        if (localStorage.getItem("accountType") == "web_admin") {

          try {

            axios.post(globalvariables.data.Basicapi + "getWebAdminOnUserID", data
              ,
              {
                headers: {
                  'Content-Type': 'application/json',
                },
              })
              .then(async (response) => {
                console.log("Login successfully", response.data);

                props.senduserprofile(response.data);



              })
              .catch(error => {

                console.log("in catch of axios while submitting User", error.toString());



              });
          } catch (error) {


            console.log("in try catch while submitting property", error.toString());

          }
        }

        if (localStorage.getItem("accountType") == "client") {

          try {

            axios.post(globalvariables.data.Basicapi + "getClientOnUserID", data
              ,
              {
                headers: {
                  'Content-Type': 'application/json',
                },
              })
              .then(async (response) => {
                console.log("Login successfully", response.data);

                props.senduserprofile(response.data);



              })
              .catch(error => {

                console.log("in catch of axios while submitting User", error.toString());



              });
          } catch (error) {


            console.log("in try catch while submitting property", error.toString());

          }
        }

      }
    } catch (error) {
      alert("From try catch of App Use Effect", error.toString());

      // console.log(error);
    }
  }, []);



  const [show, setshow] = useState(true);
  const [email, setemail] = useState(false);
  const [password, setpassword] = useState(false);

  function submitinglogin() {
    try {
      console.log("username and pass", email, password)
      axios.post(globalvariables.data.Basicapi + "Login",
        {
          'email': email,
          'password': password,

        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then(async (response) => {
          console.log("Login successfully", response.data);
          if (response.data === "Password is incorrect.") {

            localStorage.removeItem("user_ID");
            localStorage.setItem('isSignedIn', JSON.stringify(false));
            localStorage.removeItem("accountType");
            localStorage.removeItem("route");


          }
          else if (response.data === "User not found.") {

            localStorage.removeItem("user_ID");
            localStorage.setItem('isSignedIn', JSON.stringify(false));
            localStorage.removeItem("accountType");
            localStorage.removeItem("route");

          }
          else {
            localStorage.setItem("user_ID", response.data.user_ID);
            localStorage.setItem('isSignedIn', JSON.stringify(true));
            localStorage.setItem("accountType", response.data.accountType);
            localStorage.setItem("route", "addproperty");
            setshow(false);
            props.senduserprofile(response.data);

          }
        })
        .catch(error => {

          console.log("in catch of axios while submitting User", error.toString());
          localStorage.removeItem("user_ID");
          localStorage.setItem('isSignedIn', JSON.stringify(false));
          localStorage.removeItem("accountType");
          localStorage.removeItem("route");



        });
    } catch (error) {
      localStorage.removeItem("user_ID");
      localStorage.setItem('isSignedIn', JSON.stringify(false));
      localStorage.removeItem("route");
      localStorage.removeItem("accountType");

      console.log("in try catch while submitting property", error.toString());

    }
  }

  return (
    <>
      {/* <div>
              <Chatbot />

    </div> */}
    
      <Router>
        <Suspense fallback={<div></div>}>
          <Preloader />
          <Switch>
            {/* Homepages */}
            <Route exact path="/" component={Home} />
            {/* <Route path="/home-v2" component={Hometwo} />
          <Route path="/home-v3" component={Homethree} />
          <Route path="/home-v4" component={Homefour} />
          <Route path="/home-v5" component={Homefive} /> */}
            {/* Blog */}
            <Route path="/blog-grid" component={Bloggrid} />
            <Route path="/blog-list" component={Bloglist} />
            <Route path="/blog-single" component={Blogsingle} />

            <Route path="/portfolio" component={Portfolio} />


            {/* Pages */}
            <Route path="/about" component={About} />
            <Route path="/services" component={Services} />
            <Route path="/faq" component={Faq} />
            <Route path="/pricing" component={Pricing} />
            <Route path="/contact" component={Contact} />
            <Route path="/coming-soon" component={Comingsoon} />
            <Route path="/error-404" component={Error} />
            <Route path="/register" component={Register} />
            <Route path="/legal" component={Legal} />
            {/* Listings */}
            <Route path="/listing-grid" component={Listinggrid} />
            <Route path="/listing-list" component={Listinglist} />
            <Route path="/listing-map" component={Listingmap} />
            <Route path="/listing-details-v1" component={Listingdetailsone} />
            <Route path="/listing-details-v2" component={Listingdetailstwo} />
            <Route path="/listing-details-v3" component={Listingdetailsthree} />

            <Route path="/submit-listing" component={Submitlisting} />

            <Route path="/glossary" component={Glossary} />



            <Route path="/compare-listings" component={Comparelistings} />
            {/* Agents */}
            <Route path="/our-partners" component={Agentarchive} />
            <Route path="/agent-details" component={Agentdetails} />
            {/* <Route path="/profile" component={Profile} /> */}
            <Route path="/profile-listings" component={Profilelistings} />
            <Route path="/profile-saved-listings" component={Profilesavedlistings} />
            {/* Agency */}
            <Route path="/agency-archive" component={Agencyarchive} />
            <Route path="/agency-details" component={Agencydetails} />

            <Route path="/image-gallery" component={Imagegallery} />
            <Route path="/laws-of-the-land" component={Agencydetails} />
            <Route path="/login" component={Login} />

            <Route path="/calculator" component={Calculator} />


            <SideNavbar>
              <Route exact path="/membersarea" component={MembersArea} />

              <Route exact path="/testimonials" component={Testimonials} />
              <Route exact path="/profile" component={Profile1} />
              <Route exact path="/memdashboard" component={Memdashboard} />

              <Route exact path="/agdashboard" component={AgDashboard} />

              <Route exact path="/propertiesagentlinkedwith" component={PropertiesAgentLinkedWith} />

              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/propertydashboard" component={PropertyDashboard} />
              <Route exact path="/webadmindashboard" component={WebAdminDashboard} />
              <Route exact path="/projectdashboard" component={ProjectDashboard} />
              <Route exact path="/partnerdashboard" component={PartnerDashboard} />
              <Route exact path="/nonmembersdashboard" component={NonMemberDashboard} />

              <Route exact path="/agentsdashboard" component={AgentDashboard} />
              <Route exact path="/faqsdashboard" component={FAQDashboard} />
              <Route exact path="/membersdashboard" component={MemberDashboard} />
              <Route exact path="/lawofthelandsdashboard" component={LawsOfTheLand} />

              <Route exact path="/blogsarea" component={BlogsArea} />

              <Route exact path="/contactusmem" component={ContactUs} />



              <Route exact path="/agentproperties" component={AgProperties} />
              <Route exact path="/agentprofile" component={AgProfile} />

              <Route exact path="/agenttestimonials" component={AgTestimonials} />

              <Route exact path="/agentblogsarea" component={AgBlogsarea} />
              <Route exact path="/agentcontactus" component={AgContactus} />

              <Route exact path="/glossaryarea" component={GlossaryArea} />

              <Route exact path="/imagegalleryarea" component={ImagegalleryArea} />

            </SideNavbar>


          </Switch>
        </Suspense>

      </Router>
    </>
  );
}
function mapStateToProps(state) {
  return {
    userprofile: state.userprofile,


  };

}
const mapDispatchToProps = (dispatch) => {
  return {
    senduserprofile: (userprofile) => {
      dispatch(userProfile(userprofile));
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
