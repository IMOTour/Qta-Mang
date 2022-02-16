var APP_DATA = {
  "scenes": [
    {
      "id": "0-gate",
      "name": "gate",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.5190049491182425,
        "pitch": -0.03921985804045036,
        "fov": 1.5252856979340437
      },
      "linkHotspots": [
        {
          "yaw": 2.2414242731923455,
          "pitch": -0.021012911584882943,
          "rotation": 0,
          "target": "1-middle-by-road"
        },
        {
          "yaw": 2.94607354589178,
          "pitch": -0.013564668606242947,
          "rotation": 0,
          "target": "2-centre"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-middle-by-road",
      "name": "middle by road",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.905754670766644,
        "pitch": 0.1267980800432298,
        "fov": 1.5252856979340437
      },
      "linkHotspots": [
        {
          "yaw": 2.782865726846053,
          "pitch": 0.026083070037897116,
          "rotation": 0,
          "target": "0-gate"
        },
        {
          "yaw": 1.4587351333435663,
          "pitch": 0.14049221183821992,
          "rotation": 0,
          "target": "2-centre"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-centre",
      "name": "centre",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.4467085127650279,
        "pitch": -0.06552288725050914,
        "fov": 1.5252856979340437
      },
      "linkHotspots": [
        {
          "yaw": -2.2277428113356486,
          "pitch": -0.035953899110300114,
          "rotation": 0,
          "target": "1-middle-by-road"
        },
        {
          "yaw": -3.122287881091733,
          "pitch": -0.007886719932011843,
          "rotation": 0,
          "target": "0-gate"
        },
        {
          "yaw": 0.47229471791360567,
          "pitch": 0.10357381925984299,
          "rotation": 0,
          "target": "3-front-house"
        },
        {
          "yaw": -0.6652504562251558,
          "pitch": -0.13544718832891256,
          "rotation": 0,
          "target": "7-house-corner"
        },
        {
          "yaw": -1.1340313505303907,
          "pitch": -0.05315239579844366,
          "rotation": 0,
          "target": "6-top-road-side"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-front-house",
      "name": "front house",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.5740919032563738,
        "pitch": 0.04991844102329779,
        "fov": 1.5252856979340437
      },
      "linkHotspots": [
        {
          "yaw": -2.069629394068949,
          "pitch": 0.19356756885748538,
          "rotation": 0,
          "target": "2-centre"
        },
        {
          "yaw": -1.8468862557905315,
          "pitch": -0.021542103344907915,
          "rotation": 0,
          "target": "1-middle-by-road"
        },
        {
          "yaw": -2.324177033823954,
          "pitch": -0.0037117654604124084,
          "rotation": 0,
          "target": "0-gate"
        },
        {
          "yaw": 0.7804998162380148,
          "pitch": 0.006654663973145958,
          "rotation": 0,
          "target": "4-far-side"
        },
        {
          "yaw": -0.6019474026817413,
          "pitch": -0.12600203397152399,
          "rotation": 0,
          "target": "8-house-fronte-close"
        },
        {
          "yaw": -1.018552105375841,
          "pitch": -0.13486350039034356,
          "rotation": 0.7853981633974483,
          "target": "7-house-corner"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-far-side",
      "name": "far side",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.0667943153239463,
        "pitch": 0.03038540592881489,
        "fov": 1.5252856979340437
      },
      "linkHotspots": [
        {
          "yaw": 0.1943272597627903,
          "pitch": 0.10824828363106143,
          "rotation": 0,
          "target": "2-centre"
        },
        {
          "yaw": 0.9966752563675794,
          "pitch": 0.07893280287176552,
          "rotation": 0,
          "target": "5-top-front-house"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-top-front-house",
      "name": "top front house",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.9920212571837332,
        "pitch": 0.016639480341090973,
        "fov": 1.5252856979340437
      },
      "linkHotspots": [
        {
          "yaw": -0.7575925478281462,
          "pitch": 0.10982350859656087,
          "rotation": 0,
          "target": "4-far-side"
        },
        {
          "yaw": 1.2247604772431284,
          "pitch": 0.14385269958620306,
          "rotation": 0,
          "target": "2-centre"
        },
        {
          "yaw": 2.231509092443396,
          "pitch": -0.0019871507858457704,
          "rotation": 0,
          "target": "6-top-road-side"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-top-road-side",
      "name": "top road side",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.4836029637122508,
        "pitch": 0.032030055180634065,
        "fov": 1.5252856979340437
      },
      "linkHotspots": [
        {
          "yaw": 2.0985957226571896,
          "pitch": 0.017975880862174165,
          "rotation": 0,
          "target": "5-top-front-house"
        },
        {
          "yaw": 2.9370000433711514,
          "pitch": 0.02929978900633934,
          "rotation": 0,
          "target": "2-centre"
        },
        {
          "yaw": -2.1286724037161093,
          "pitch": 0.06851336052724477,
          "rotation": 0,
          "target": "1-middle-by-road"
        },
        {
          "yaw": 0.9989634082712282,
          "pitch": -0.11428497048202502,
          "rotation": 0,
          "target": "7-house-corner"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-house-corner",
      "name": "house corner",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.674830831148781,
        "pitch": -0.20500826425796603,
        "fov": 1.5252856979340437
      },
      "linkHotspots": [
        {
          "yaw": -2.910583210216977,
          "pitch": 0.20708099793544932,
          "rotation": 0,
          "target": "5-top-front-house"
        },
        {
          "yaw": -1.4163965767152433,
          "pitch": 0.2320778531806269,
          "rotation": 0,
          "target": "6-top-road-side"
        },
        {
          "yaw": -2.5392668212691163,
          "pitch": 0.14337166959309577,
          "rotation": 0,
          "target": "2-centre"
        },
        {
          "yaw": 2.994022905388917,
          "pitch": 0.036333609696745484,
          "rotation": 0,
          "target": "4-far-side"
        },
        {
          "yaw": 2.4577716153628826,
          "pitch": 0.04000554303570425,
          "rotation": 0,
          "target": "8-house-fronte-close"
        },
        {
          "yaw": 0.7887174783811979,
          "pitch": -0.06530795168733405,
          "rotation": 0,
          "target": "11-house-road-side"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-house-fronte-close",
      "name": "house fronte close",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.6367592512947295,
        "pitch": -0.23155703097705782,
        "fov": 1.5252856979340437
      },
      "linkHotspots": [
        {
          "yaw": 1.4467409016288144,
          "pitch": 0.028671403569166642,
          "rotation": 0,
          "target": "7-house-corner"
        },
        {
          "yaw": -0.016259751169563685,
          "pitch": 0.21788997448237168,
          "rotation": 0,
          "target": "3-front-house"
        },
        {
          "yaw": 0.4464961094049773,
          "pitch": 0.03387364094323253,
          "rotation": 0,
          "target": "0-gate"
        },
        {
          "yaw": -1.0580454682998628,
          "pitch": 0.1145297808468193,
          "rotation": 0,
          "target": "4-far-side"
        },
        {
          "yaw": -1.8722562547973833,
          "pitch": 0.029983797090844533,
          "rotation": 0,
          "target": "9-house-far-side"
        },
        {
          "yaw": 2.869712448995309,
          "pitch": -0.06963733508957937,
          "rotation": 0,
          "target": "10-under-house"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-house-far-side",
      "name": "house far side",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.6313466644266006,
        "pitch": 0.005851253123289268,
        "fov": 1.5252856979340437
      },
      "linkHotspots": [
        {
          "yaw": 1.6546871233880118,
          "pitch": 0.04442136416872877,
          "rotation": 0,
          "target": "8-house-fronte-close"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-under-house",
      "name": "under house",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.3970019618366507,
        "pitch": -0.08874389515251835,
        "fov": 1.5252856979340437
      },
      "linkHotspots": [
        {
          "yaw": 2.575660074153393,
          "pitch": -0.019093097452760333,
          "rotation": 0,
          "target": "8-house-fronte-close"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-house-road-side",
      "name": "house road side",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.5360101653440843,
        "pitch": -0.05488123471245032,
        "fov": 1.5252856979340437
      },
      "linkHotspots": [
        {
          "yaw": -0.36316901823110825,
          "pitch": -0.032987011070211736,
          "rotation": 0,
          "target": "12-house-back"
        },
        {
          "yaw": 2.116969457675104,
          "pitch": 0.08974456177214662,
          "rotation": 0,
          "target": "7-house-corner"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-house-back",
      "name": "house back",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.579421601466965,
        "pitch": -0.2558071078309858,
        "fov": 1.5252856979340437
      },
      "linkHotspots": [
        {
          "yaw": 1.9818816982732796,
          "pitch": -0.3425486358306351,
          "rotation": 0,
          "target": "13-inside-ground-floor"
        },
        {
          "yaw": -2.7729103649639253,
          "pitch": 0.04312364102409916,
          "rotation": 4.71238898038469,
          "target": "11-house-road-side"
        },
        {
          "yaw": 0.6327416402722132,
          "pitch": -0.03773994596554431,
          "rotation": 0.7853981633974483,
          "target": "14-house-yard-side"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-inside-ground-floor",
      "name": "inside ground floor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.527206860019918,
        "pitch": 0.055464934470325744,
        "fov": 1.5252856979340437
      },
      "linkHotspots": [
        {
          "yaw": 1.4043240434785353,
          "pitch": 0.2263612347757622,
          "rotation": 0,
          "target": "12-house-back"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-house-yard-side",
      "name": "house yard side",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.354538665713916,
        "pitch": -0.22000302640602953,
        "fov": 1.5252856979340437
      },
      "linkHotspots": [
        {
          "yaw": 1.3747589101850775,
          "pitch": 0.02540691925482541,
          "rotation": 0.7853981633974483,
          "target": "8-house-fronte-close"
        },
        {
          "yaw": -2.86880359375413,
          "pitch": -0.12626213912049167,
          "rotation": 4.71238898038469,
          "target": "12-house-back"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
