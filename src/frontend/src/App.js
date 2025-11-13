import React from 'react';
import { Box, CssBaseline, AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemIcon, ListItemText, Avatar, Button, Divider } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import TimelineIcon from '@mui/icons-material/Timeline';
import AssessmentIcon from '@mui/icons-material/Assessment';
import SettingsIcon from '@mui/icons-material/Settings';

const drawerWidth = 220;

const navItems = [
  { text: 'Home', icon: <HomeIcon /> },
  { text: 'Patients', icon: <PersonIcon /> },
  { text: 'Twins', icon: <TimelineIcon /> },
  { text: 'Predictions', icon: <AssessmentIcon /> },
  { text: 'Settings', icon: <SettingsIcon /> },
];

function App() {
  return (
    <Box sx={{ display: 'flex', height: '100vh', bgcolor: '#f6fafc' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, bgcolor: '#1976d2' }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Cloud-based Digital Twin Generator
          </Typography>
          <Avatar sx={{ bgcolor: '#fff', color: '#1976d2', mr: 2 }}>U</Avatar>
          <Typography>User</Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: 'border-box',
            bgcolor: '#2458a6',
            color: '#fff',
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto', pt: 2 }}>
          <List>
            {navItems.map((item) => (
              <ListItem button key={item.text}>
                <ListItemIcon sx={{ color: '#fff' }}>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
          <Divider sx={{ bgcolor: '#fff', my: 2 }} />
          <Box sx={{ px: 2 }}>
            <Button variant="contained" color="secondary" fullWidth>
              Add New Patient
            </Button>
          </Box>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 4, pt: 10 }}>
        <Typography variant="h4" gutterBottom>
          Welcome, User
        </Typography>
        <Typography variant="body1" gutterBottom>
          Select a patient or view predictive results on the digital twin dashboard.
        </Typography>
        <Box sx={{ display: 'flex', gap: 4, mt: 4 }}>
          <Box sx={{ flex: 1, bgcolor: '#fff', p: 3, borderRadius: 2, boxShadow: 1 }}>
            <Typography variant="h6">Digital Twin Status</Typography>
            <Typography>Healthy</Typography>
          </Box>
          <Box sx={{ flex: 1, bgcolor: '#fff', p: 3, borderRadius: 2, boxShadow: 1 }}>
            <Typography variant="h6">Risk Prediction Chart</Typography>
            <Typography>Diabetes: Low Risk</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
