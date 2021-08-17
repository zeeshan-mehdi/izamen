/** @format */

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
// import { signOut } from "../../redux/actions/authActions";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import FeedbackIcon from "@material-ui/icons/Feedback";
import ReportProblemIcon from "@material-ui/icons/ReportProblem";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Hidden,
  CssBaseline,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Menu,
  MenuItem,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { withStyles } from "@material-ui/core/styles";
import {
  Dashboard,
  SupervisorAccount,
  House,
  HowToReg,
  AccountBox,
  BusinessCenter,
  GroupWork,
  LiveHelp,

  AccountCircle,
  PersonAddDisabled,
  Gavel,
  Language,
  PhotoLibrary,
  RecentActors,
  HomeWork,
  SpeakerNotes,
  Sms,
  ContactSupport
} from "@material-ui/icons";
const drawerWidth = 240;

const styles = (theme) => ({
  root: {
    display: "flex",
  },
  typography: {
    flex: 1,
    // backgroundColor:
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    // backgroundColor:"#397884",
    backgroundImage: 'linear-gradient(to left, #D7B356 , #397884)',
    color: '#fffff'
    // dis
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    // backgroundImage: 'linear-gradient(to left, #D7B356 , #397884)',
  },
  contentArea: {
    flexGrow: 1,
    paddingTop: theme.spacing(2),
  },
});

//For Client
const itemList1 = [
  {
    id: 1,
    text: "Dashboard",
    icon: <Dashboard />,
    url: "/dashboard",
  },
  {
    id: 2,
    text: "Web Admins",
    icon: <SupervisorAccount />,
    url: "/webadmindashboard",
  },
  {
    id: 3,
    text: "Properties",
    icon: <House />,
    url: "/propertydashboard",
  },
  {
    id: 4,
    text: "Members",
    icon: <HowToReg />,
    url: "/membersdashboard",
  },
  {
    id: 5,
    text: "Non Members",
    icon: <PersonAddDisabled />,
    url: "/nonmembersdashboard",
  },
  {
    id: 6,
    text: "Agents",
    icon: <AccountBox />,
    url: "/agentsdashboard",
  },
  {
    id: 7,
    text: "Laws Of The Land",
    icon: <Gavel />,
    url: "/lawofthelandsdashboard",
  },
  {
    id: 8,
    text: "Glossary",
    icon: <Language />,
    url: "/glossaryarea",
  },
  {
    id: 9,
    text: "Image Gallery",
    icon: <PhotoLibrary />,
    url: "/imagegalleryarea",
  },

];

const itemList2 = [
  {
    id: 10,
    text: "Projects",
    icon: <BusinessCenter />,
    url: "/projectdashboard",
  },

  {
    id: 11,
    text: "Partners",
    icon: <GroupWork />,
    url: "/partnerdashboard",
  },
  {
    id: 12,
    text: "FAQS",
    icon: <LiveHelp />,
    url: "/faqsdashboard",
  },

];

//For Members
const itemList3 = [
  {
    id: 13,
    text: "Dashboard",
    icon: <Dashboard />,
    url: "/memdashboard",
  },
  {
    id: 14,
    text: "Profile",
    icon: <RecentActors />,
    url: "/profile",
  },
  {
    id: 15,
    text: "Properties",
    icon: <House />,
    url: "/membersarea",
  },
  {
    id: 16,
    text: "Testimonials",
    icon: <SpeakerNotes />,
    url: "/testimonials",
  },

  {
    id: 17,
    text: "Blogs",
    icon: <Sms />,
    url: "/blogsarea",
  },
  {
    id: 18,
    text: "ContactUs",
    icon: <ContactSupport />,
    url: "/contactusmem",
  },
];

//For Agents
const itemList4 = [
  {
    id: 19,
    text: "Agents Area",
    icon: <Dashboard />,
    url: "/agdashboard",
  },
  {
    id: 20,
    text: "My Properties",
    icon: <House />,
    url: "/agentproperties",
  },
  {
    id: 21,
    text: "Linked Properties",
    icon: <HomeWork />,
    url: "/propertiesagentlinkedwith",
  },
  {
    id: 22,
    text: "Profile",
    icon: <RecentActors />,
    url: "/agentprofile",
  },
 
  {
    id: 23,
    text: "Testimonials",
    icon: <SpeakerNotes />,
    url: "/agenttestimonials",
  },

  {
    id: 24,
    text: "Blogs",
    icon: <Sms />,
    url: "/agentblogsarea",
  },
  {
    id: 25,
    text: "ContactUs",
    icon: <ContactSupport />,
    url: "/agentcontactus",
  },
];

//For Web_Admins
const itemList5 = [
  {
    id: 26,
    text: "Properties",
    icon: <House />,
    url: "/propertydashboard",
  },
  {
    id: 27,
    text: "Members",
    icon: <HowToReg />,
    url: "/membersdashboard",
  },
  {
    id: 28,
    text: "Non Members",
    icon: <PersonAddDisabled />,
    url: "/nonmembersdashboard",
  },
  {
    id: 29,
    text: "Agents",
    icon: <AccountBox />,
    url: "/agentsdashboard",
  },
  {
    id: 30,
    text: "Laws Of The Land",
    icon: <Gavel />,
    url: "/lawofthelandsdashboard",
  },

];


class SideNavbar extends Component {
  state = {
    mobileOpen: false,
    anchorEl: null,
  };

  handleMenu = (event) => {
    this.setState({ anchorEl: event.currentTarget });
    //setAnchorEl(event.currentTarget);
  };

  handleLogout = () => {
    this.setState({ anchorEl: null });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
    //setAnchorEl(null);
  };

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };
  render() {
    const { children, classes, auth } = this.props;
    const { mobileOpen } = this.state;
    const open = Boolean(this.state.anchorEl);
    const drawer = (
      <div>
        <Hidden smDown>
          <div className={classes.toolbar} />
        </Hidden>
        {localStorage.getItem("accountType") === "member" || localStorage.getItem("accountType") === "agent" ? (

          localStorage.getItem("accountType") === "member" ? (
            <List>

              {itemList3.map((item) => {
                const { text, url, icon, id } = item;
                return (
                  <ListItem button component={Link} to={url} key={id}>
                    {icon && <ListItemIcon>{icon}</ListItemIcon>}
                    <ListItemText secondary={text} />
                  </ListItem>
                );
              })
              }
            </List>
          )
            : (
              <List>
                {itemList4.map((item) => {
                  const { text, url, icon, id } = item;
                  return (
                    <ListItem button component={Link} to={url} key={id}>
                      {icon && <ListItemIcon>{icon}</ListItemIcon>}
                      <ListItemText secondary={text} />
                    </ListItem>
                  );
                })
                }
              </List>
            )

        ) : (
          localStorage.getItem("accountType") === "client" || localStorage.getItem("accountType") === "web_admin" ?
            (
              localStorage.getItem("accountType") === "client" ? (
                <>
                  <List>
                    {itemList1.map((item) => {
                      const { text, url, icon, id } = item;
                      return (
                        <ListItem button component={Link} to={url} key={id}>
                          {icon && <ListItemIcon>{icon}</ListItemIcon>}
                          <ListItemText secondary={text} />
                        </ListItem>
                      );
                    })}
                  </List>
                  <Divider />

                  <List>
                    {itemList2.map((item) => {
                      const { text, url, icon, id } = item;
                      return (
                        <ListItem button component={Link} to={url} key={id}>
                          {icon && <ListItemIcon>{icon}</ListItemIcon>}
                          <ListItemText secondary={text} />
                        </ListItem>
                      );
                    })}
                  </List>
                </>
              ) : (
                <>
                  <List>
                    {itemList5.map((item) => {
                      const { text, url, icon, id } = item;
                      return (
                        <ListItem button component={Link} to={url} key={id}>
                          {icon && <ListItemIcon>{icon}</ListItemIcon>}
                          <ListItemText secondary={text} />
                        </ListItem>
                      );
                    })}
                  </List>
                  <Divider />

                  <List>
                    {itemList2.map((item) => {
                      const { text, url, icon, id } = item;
                      return (
                        <ListItem button component={Link} to={url} key={id}>
                          {icon && <ListItemIcon>{icon}</ListItemIcon>}
                          <ListItemText secondary={text} />
                        </ListItem>
                      );
                    })}
                  </List>
                </>
              )
            ) : (
              null
            )
        )}


        <Divider />
      </div>
    );

    return (
      <React.Fragment>
        <div className={classes.root}>
          <CssBaseline />
          <AppBar position="fixed" className={classes.appBar} >
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={this.handleDrawerToggle}
                className={classes.menuButton}
              >
                <MenuIcon />
              </IconButton>
              <Link to="/" className="btn-custom secondary btn-block" style={{ color: 'white' }} className={classes.typography}>Go to Home</Link>
              <Typography variant="h6" noWrap className={classes.typography}>
                Indusland Panel
              </Typography>
              <div>
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={this.state.anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  <MenuItem>
                    <Link to="/" onClick={() => {
                      localStorage.setItem('user_ID', "");
                      localStorage.setItem('accountType', "");
                      localStorage.setItem('username', "");
                      localStorage.setItem('isSignedIn', JSON.stringify(false));
                    }}>Logout</Link>
                  </MenuItem>

                </Menu>
              </div>
            </Toolbar>
          </AppBar>
          <nav className={classes.drawer} aria-label="mailbox folders">
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Hidden smUp implementation="css">
              <Drawer 
                variant="temporary"
                open={mobileOpen}
                onClose={this.handleDrawerToggle}
                classes={{
                  paper: classes.drawerPaper,
                }}
                ModalProps={{
                  keepMounted: true, // Better open performance on mobile.
                }}
              >
                {drawer}
              </Drawer>
            </Hidden>
            <Hidden xsDown implementation="css">
              <Drawer
                classes={{
                  paper: classes.drawerPaper,
                }}
                variant="permanent"
                open
              >
                {drawer}
              </Drawer>
            </Hidden>
          </nav>
          <main className={classes.contentArea}>
            <Toolbar />
            {children}
          </main>
        </div>

      </React.Fragment>
    );
  }
}



export default compose(
  withStyles(styles)
)(SideNavbar);

//export default withStyles(styles)(SideNavbar);
