'use client';
import { Grid, Typography } from "@mui/material";
import React from "react";

const Footer: React.FC = () => {
    return (
        <div>
            <Grid
                container
                sx={{ bgcolor: '#6D3015', color: "white", py: 3, mt: 10, textAlign: "left" }}
            >
                <Grid item xs={12} sm={6} md={3}>
                    <Typography sx={{ pb: 2 }} variant="h6">Fashion Trends</Typography>
                    <Typography sx={{ pb: 2 }} variant="body1">About Us</Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography sx={{ pb: 2 }} variant="h6">Company</Typography>
                    <Typography sx={{ pb: 2 }} variant="body1">About Us</Typography>
                    <Typography sx={{ pb: 2 }} variant="body1">Privacy Policy</Typography>
                    <Typography sx={{ pb: 2 }} variant="body1">Terms & Conditions</Typography>
                    <Typography sx={{ pb: 2 }} variant="body1">Careers</Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography sx={{ pb: 2 }} variant="h6">For Customers</Typography>
                    <Typography sx={{ pb: 2 }} variant="body1">Reviews</Typography>
                    <Typography sx={{ pb: 2 }} variant="body1">Categories</Typography>
                    <Typography sx={{ pb: 2 }} variant="body1">Blog</Typography>
                    <Typography sx={{ pb: 2 }} variant="body1">Connect with us</Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography sx={{ pb: 2 }} variant="h6">Get in touch</Typography>
                    <Typography sx={{ pb: 2 }} variant="body1">Number</Typography>
                    <Typography sx={{ pb: 2 }} variant="body1">Email</Typography>
                    <Typography sx={{ pb: 2 }} variant="body1">Address</Typography>
                </Grid>
                <Grid item xs={12} sx={{ pt: 3, borderTop: "1px solid white" }}>
                    <Typography variant="body2" align="center">
                        &apos; 2024 Dutta's Cart. All rights reserved.
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
};

export default Footer;

