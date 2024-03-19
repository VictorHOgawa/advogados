import gsap from "gsap";
import { MotionPathPlugin } from "gsap/dist/MotionPathPlugin";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

export { MotionPathPlugin, ScrollTrigger, gsap };
