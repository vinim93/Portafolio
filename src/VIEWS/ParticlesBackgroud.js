import React, { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";


const ParticlesComponent = (props) => {
  const [particleCount, setParticleCount] = useState(150); 
  const [init, setInit] = useState(false);

  
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  
  useEffect(() => {
    const handlePageClick = () => {
      setParticleCount((prev) => prev + 0); 
    };

    window.addEventListener("click", handlePageClick);

    
    return () => {
      window.removeEventListener("click", handlePageClick);
    };
  }, []);

   const options2 = useMemo(
    () => ({
        autoPlay: true,
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: false,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "connect",
              parallax: {
          enable: false,
          force: 1,
          smooth: 1
        }
          },
          
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance:50,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#681818",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 6,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    [],
  );
  const options = useMemo(
    () => ({
        autoPlay:true,
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 120,
      interactivity: {
    detectsOn: "window",
    events: {
      onClick: {
        enable: false,
        mode: "attract"
      },
      onDiv: {
        selectors: [],
        enable: true,
        mode: [],
        type: "circle"
      },
      onHover: {
        enable: true,
        mode: "connect",
        parallax: {
          enable: true,
          force: 24,
          smooth: 1
        }
      },
      resize: {
        delay: 1,
        enable: true
      }
    },
    modes: {
     
      trail: {
        delay: 1,
        pauseOnStop: false,
        quantity: 1
      },
      attract: {
        distance: 200,
        duration: 0.4,
        easing: "ease-out-quad",
        factor: 1,
        maxSpeed: 50,
        speed: 1
      },
      bounce: {
        distance: 400
      },
      bubble: {
        distance: 200,
        duration: 0.4,
        mix: false,
        divs: {
          distance: 200,
          duration: 0.4,
          mix: false,
          selectors: []
        }
      },
      connect: {
        distance: 500,
        links: {
          opacity: 1
        },
        radius: 150
      },
      grab: {
        distance: 100,
        links: {
          blink: false,
          consent: false,
          opacity: 1
        }
      },
      push: {
        default: true,
        groups: [],
        quantity: 4,
        particles: {}
      },
      remove: {
        quantity: 2
      },
      repulse: {
        distance: 200,
        duration: 0.4,
        factor: 100,
        speed: 1,
        maxSpeed: 50,
        easing: "ease-out-quad",
        divs: {
          distance: 200,
          duration: 0.4,
          factor: 100,
          speed: 1,
          maxSpeed: 50,
          easing: "ease-out-quad",
          selectors: []
        }
      },
      slow: {
        factor: 3,
        radius: 200
      },
      particle: {
        replaceCursor: false,
        pauseOnStop: false,
        stopDelay: 0
      },
      light: {
        area: {
          gradient: {
            start: {
              value: "#d81111"
            },
            stop: {
              value: "#000000"
            }
          },
          radius: 1000
        },
        shadow: {
          color: {
            value: "#000000"
          },
          length: 2000
        }
      }
    }
  },
      particles: {
       color: {
      value: "#5026b3",
      animation: {
        h: {
          count: 0,
          enable: false,
          speed: 1,
          decay: 0,
          delay: 0,
          sync: true,
          offset: 0
        },
        s: {
          count: 0,
          enable: false,
          speed: 1,
          decay: 0,
          delay: 0,
          sync: true,
          offset: 0
        },
        l: {
          count: 0,
          enable: false,
          speed: 1,
          decay: 0,
          delay: 0,
          sync: true,
          offset: 0
        }
      }
    },
     effect: {
      close: true,
      fill: true,
      options: {},
      type: []
    },
        links: {
          color: "#4f0b0b",
          distance: 200,
          enable: false,
          opacity: 1,
          width: 1,
        },
      move: {
      angle: {
        offset: 0,
        value: 90
      },
      attract: {
        distance: 200,
        enable: false,
        rotate: {
          x: 3000,
          y: 3000
        }
      },
      center: {
        x: 50,
        y: 50,
        mode: "percent",
        radius: 0
      },
      decay: 0,
      distance: {},
      direction: "none",
      drift: 0,
      enable: true,
      gravity: {
        acceleration: 9.81,
        enable: false,
        inverse: false,
        maxSpeed: 50
      },
      path: {
        clamp: true,
        delay: {
          value: 0
        },
        enable: false,
        options: {}
      },
      outModes: {
        default: "bounce",
        
      },
      random: false,
      size: true,
      speed: 5,
      spin: {
        acceleration: 0,
        enable: false
      },
      straight: false,
      trail: {
        enable: true,
        length: 3,
        fill: {
          color: {
            value: "transparent"
          }
        }
      },
      vibrate: false,
      warp: false
    },
        number: {
          density: {
            enable: false,
          },
          value: particleCount, 
        },
        opacity: {
      value: {
        min: 0.3,
        max: 0.8
      },
      animation: {
        count: 0,
        enable: false,
        speed: 2,
        decay: 0,
        delay: 0,
        sync: false,
        mode: "auto",
        startValue: "random",
        destroy: "none"
      }
    },
    reduceDuplicates: false,
     shadow: {
      blur: 0,
      color: {
        value: "#000"
      },
      enable: false,
      offset: {
        x: 0,
        y: 0
      }
    },
        shape: {
      close: true,
      fill: true,
      options: {},
      type: "circle"
    },
         size: {
      value: {
        min: 1,
        max: 10
      },
      animation: {
        count: 0,
        enable: false,
        speed: 5,
        decay: 0,
        delay: 0,
        sync: false,
        mode: "auto",
        startValue: "random",
        destroy: "none"
      }
    },
     destroy: {
      bounds: {},
      mode: "none",
      split: {
        count: 1,
        factor: {
          value: 3
        },
        rate: {
          value: {
            min: 4,
            max: 9
          }
        },
        sizeOffset: true,
        particles: {}
      }
    },
      wobble: {
      distance: 5,
      enable: false,
      speed: {
        angle: 50,
        move: 10
      }
    },
      life: {
      count: 0,
      delay: {
        value: 0,
        sync: false
      },
      duration: {
        value: 0,
        sync: false
      }
    },
    links: {
      blink: false,
      color: {
        value: "#270a5c"
      },
      consent: false,
      distance: 100,
      enable: false,
      frequency: 1,
      opacity: 1,
      shadow: {
        blur: 5,
        color: {
          value: "#000"
        },
        enable: false
      },
      triangles: {
        enable: false,
        frequency: 1
      },
      width: 1,
      warp: false
    },
    pauseOnBlur: true,
  pauseOnOutsideViewport: true,
  responsive: [],
  smooth: false,
  style: {},
  themes: [],
  zLayers: 100,
      },
      emitters: {
    autoPlay: true,
    fill: true,
    life: {
      wait: false
    },
    rate: {
      quantity: 10,
      delay: 0.25
    },
    shape: {
      options: {},
      replace: {
        color: false,
        opacity: false
      },
      type: "square"
    },
    startCount: 0,
    size: {
      mode: "percent",
      height: 0,
      width: 0
    },
    direction: "none",
    particles: {},
    position: {
      x: 50,
      y: 50
    },
    spawnColor: {
      value: "#ff0000",
      animation: {
        h: {
          count: 0,
          enable: true,
          speed: 5,
          decay: 0,
          delay: 0,
          sync: true,
          offset: 0
        },
        s: {
          count: 0,
          enable: false,
          speed: 1,
          decay: 0,
          delay: 0,
          sync: true,
          offset: 0
        },
        l: {
          count: 0,
          enable: true,
          speed: 0,
          decay: 0,
          delay: 0,
          sync: true,
          offset: {
            min: 20,
            max: 80
          }
        }
      }
    }
  },
   motion: {
    disable: true,
    reduce: {
      factor: 4,
      value: true
    }
  },
  
      detectRetina: true,
    }),
    [particleCount] 
  );

  return <Particles id={props.id} init={particlesLoaded} options={options} />;
};

export default ParticlesComponent;