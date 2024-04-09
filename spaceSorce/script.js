 let tl=gsap.timeline()
tl.from("#nav img,#nav h3,#nav button,#nav h4",{
    x:-222,
    y:-222, 
    duration:2,
    opacity:0,
    stagger:0.4
    
})
tl.from("#main h1",{
    x:-200,
    y:200,
    opacity:0,
    duration:2,
    stagger:0.8,
    // rotate:360
})
tl.from("#main img",{
    // x:200,
    // y:200,
    scale:0,
    opacity:0,
    // stagger:0.9,
    duration:2,
    rotate:360
})
tl.from("h5",{
    scale:0,
    stagger:0.7,
    opacity:0
})
tl.to("h5",{
    y:40,
    repeat:-1,
    duration:0.7,
    yoyo:true
})