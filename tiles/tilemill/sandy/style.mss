#red[FCSTPRD=72]{
  polygon-fill:#f00;
  polygon-opacity:.5;
  line-width:0;
  image-filters: agg-stack-blur(5,5);
  }

#yellow[FCSTPRD=120]{ 
  polygon-fill:#ff0;
  line-color:#f90;
  line-width:1;
  //image-filters: agg-stack-blur(5,5);
  polygon-opacity:.25;
  line-dasharray:4,6;
  comp-op:src-out;
  //polygon-comp-op:color-dodge;
  //comp-op:dst-atop;
  }

#ww {
  line-opacity:.85;
  line-width:5;
  line-smooth:.2;
  line-join:bevel;
  [TCWW='HWR']{line-color:#f02;}
  [TCWW='HWQ']{line-color:#f73;}
  [TCWW='TWR']{line-color:#2d0;}
  [TCWW='TWA']{line-color:#7f0;}
}

#lines {
  line-width:1;
  line-color:#168;
}

#points {
  marker-width:[MAXWIND] * .25;
  marker-fill:#fff;
  marker-line-color:#024;
  marker-line-opacity:.5;
  marker-line-width:3;
  marker-allow-overlap:true;
  text-name:'[DATELBL]';
  text-face-name:'Gill Sans Regular';
  text-halo-fill:#fff;
  text-halo-radius:2;
  //text-wrap-width:30;
  text-horizontal-alignment:right;
  text-allow-overlap:false;
  text-size:15;
  text-dx:20;
}



