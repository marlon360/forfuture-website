import React, { useState, useRef } from 'react';
import { Link } from "react-router-dom";
import { SlideLeft, SlideOverFromBottom } from '../transitions/transitions';
import { useLocalStorage } from '../utils/localStorage';
import Arrow from '../icons/arrow.svg';
import HAW from '../images/haw.svg';
import Profile from '../images/profile.png';
import SelectorComponent from '../components/selector.component';
import { SignupService } from '../services/signup.service';
import { useSpring } from 'react-spring';
import WorkshopInfo from '../components/workshop-info.component';
import TypeAnimationComponent from '../components/type-animation.component';

function AnimationPage() {

  let style = {
    'max-width': '1080px'
  }

  return (
    <div style={style}>
        <TypeAnimationComponent/>
    </div>
  );
}

export default AnimationPage;