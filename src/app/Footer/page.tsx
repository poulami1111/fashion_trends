import { Grid, Typography } from "@mui/material";
import React from "react";

const Footer: React.FC = () => {
    return (
        <div>
            <Grid
                container
                sx={{ bgcolor: '#6D3015', color: "white", py: 3 }}
                className="bg-[#ffc234] text-white mt-10 text-left"
            >
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className="pb-5" variant="h6">Dutta's Cart</Typography>
                    <div>
                        <button className="pb-5">About Us</button>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className="pb-5" variant="h6">Company</Typography>
                    <div>
                        <button className="pb-5">About Us</button>
                    </div>
                    <div>
                        <button className="pb-5">Privacy Policy</button>
                    </div>
                    <div>
                        <button className="pb-5">Terms & Conditions</button>
                    </div>
                    <div>
                        <button className="pb-5">Careers</button>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className="pb-5" variant="h6">For Customers</Typography>
                    <div>
                        <button className="pb-5">Reviews</button>
                    </div>
                    <div>
                        <button className="pb-5">Categories</button>
                    </div>
                    <div>
                        <button className="pb-5">Blog</button>
                    </div>
                    <div>
                        <button className="pb-5">Connect with us</button>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className="pb-5" variant="h6">Get in touch</Typography>
                    <div>
                        <button className="pb-5">Number</button>
                    </div>
                    <div>
                        <button className="pb-5">Email</button>
                    </div>
                    <div>
                        <button className="pb-5">Address</button>
                    </div>
                </Grid>
                <Grid className="pt-10 border-t" item xs={12}>
                    <Typography variant="body2" component="p" align="center">
                        &copy; 2024 Dutta's Cart. All rights reserved.
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
};

export default Footer;
