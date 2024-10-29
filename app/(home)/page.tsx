'use client'

import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import AppAppBar from './components/appAppBar';
import Features from './components/features';
import Hero from './components/hero';
import FAQ from './components/faq';
import Footer from './components/footer';
import AppTheme from '../shared-theme/appTheme';
import LogoCollection from './components/logoCollection';
import Testimonials from './components/testimonials';
import Highlights from './components/highlights';
import Plans from './components/plans';
import VerticalLinearStepper from './components/verticalLinearStepper';

export default function Home(props: { disableCustomTheme?: boolean }) {
    return (
        <AppTheme {...props}>
            <CssBaseline enableColorScheme />

            <AppAppBar />
            <Hero />
            <div>
                <LogoCollection />
                <Features />
                <Divider />
                <Testimonials />
                <Divider />
                <Highlights />
                <VerticalLinearStepper />
                <Divider />
                <Plans />
                <Divider />
                <FAQ />
                <Divider />
                <Footer />
            </div>
        </AppTheme>
    );
}