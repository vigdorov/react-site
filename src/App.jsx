import React from 'react';
import Block from "./components/block";

import * as M from './const/menu';
import { menu } from "./assets/data/menu";
import { itemsScope } from "./assets/data/items-for-blocks";
import { advantage } from "./assets/data/advantage";
import { gallery } from "./assets/data/gallery";
import { company } from "./assets/data/company";
import { slider } from "./assets/data/slider";

import { ReactComponent as SignatureImg } from './assets/svg/signature.svg';

import TopMenu from "./components/top-menu";
import PercentStrip from "./components/percent-strip";
import Gallery from "./components/gallery";
import IconsWithText from "./components/icons-with-text";
import Slider from "./components/slider";
import SendMessage from "./components/send-message";

const App = () => {
  return (
    <div className="page">
      <TopMenu items={menu}/>

      <Block header="We Design and Develop"
             id={M.HOME}
             text="We are a new design studio based in USA. We have over
20 years of combined experience, and know a thing or two
about designing websites and mobile apps."
             background="secondary"
             contentAlign="right"
             component={() => <button type="button" className="btn btn-primary">Contact us</button>} />

      <Block header="About Us" text="Divide have don't man wherein air fourth. Own itself make have night won't make.
A you under Seed appear which good give. Own give air without fowl moveth dry first
heaven fruit, dominion she'd won't very all." id={M.ABOUT}
      >
        <SignatureImg/>
      </Block>

      <Block header="Professional Skills" background="light-secondary" contentAlign="left" id={M.WORK}>
        <PercentStrip text="UI/UX Design" percent={19}/>
        <PercentStrip text="Web development" percent={95}/>
        <PercentStrip text="Marketing" percent={85}/>
      </Block>

      <Block background="active" id={M.PROCESS}>
        <IconsWithText items={advantage} iconPosition="left" />
      </Block>

      <Gallery images={gallery}/>

      <Block header="Our Work Process" text="Was years it seasons was there form he in in them together over that,
third sixth gathered female creeping bearing behold years." id={M.SERVICES}>
        {/*<iframe width="560"
                height="315"
                src="https://www.youtube.com/embed/kYe7mImUa4Q"
                frameBorder={0}
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen/>*/}
      </Block>

      <Block background="light-secondary">
        <IconsWithText items={itemsScope}/>
      </Block>

      <Block background="active" id={M.TESTIMONIALS}>
        <Slider items={slider}/>
      </Block>

      <Block>
        <IconsWithText items={company} />
      </Block>

      <Block header="Need a Project?" text="Let us know what you're looking for in an agency. We'll take a look and see
if this could be the start of something beautiful." background="light-secondary" id={M.CONTACT}>
        <SendMessage />
      </Block>

      <Block background="dark">
        Футер с информацией
      </Block>
    </div>
  );
};

export default App;
