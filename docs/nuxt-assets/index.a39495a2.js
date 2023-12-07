import{V as w,B as C,d as v,e as p,a as P,c as M,f as z,g as B,O as A,u as D,j as R,k as f,l as E}from"./camera.79f4e44e.js";import{o as U,Q as O,F as S,R as k,S as F,j as T,k as I,l as V}from"./entry.af5b1f20.js";import{u as L}from"./tweakpane.8044cfb2.js";import{l as j}from"./assets.a3223b2e.js";import"./tweakpane.4e5e1789.js";const N={count:512*512,pointSize:1,opacity:1};function H(h={}){const t={...N,...h},s=t.count;let n,i,l;m();const o=new w;return{config:t,mesh:l,origin:o,update:d};function d(r){}function m(){const r={value:null};j("/textures/sphere_normal.jpg").then(a=>{a.flipY=!1,r.value=a}),n=new C;const c=new Float32Array(s*3),e=new Float32Array(s*3),u=new Float32Array(s).fill(0).map(()=>v.randFloat(.1,1));for(let a=0;a<s*3;a+=3)q().toArray(c,a);for(let a=0;a<s*3;a+=3)e[a]=Math.random(),e[a+1]=Math.random(),e[a+2]=Math.random();n.setAttribute("position",new p(c,3)),n.setAttribute("color",new p(e,3)),n.setAttribute("scale",new p(u,1));const g=B.lights_fragment_begin.replaceAll("RE_Direct( directLight, geometry, material, reflectedLight );","\n        RE_Direct( directLight, geometry, material, reflectedLight );\n        #if defined( SUBSURFACE )\n          RE_Direct_Scattering(directLight, vUv, geometry, reflectedLight);\n        #endif\n      ");i=new P({transparent:!0,vertexColors:!0,lights:!0,uniforms:{uPointSize:{value:t.pointSize},uOpacity:{value:t.opacity},uNormalMap:r,ambientLightColor:{value:null},lightProbe:{value:null},directionalLights:{value:null},directionalLightShadows:{value:null},spotLights:{value:null},spotLightShadows:{value:null},rectAreaLights:{value:null},ltc_1:{value:null},ltc_2:{value:null},pointLights:{value:null},pointLightShadows:{value:null},hemisphereLights:{value:null},directionalShadowMap:{value:null},directionalShadowMatrix:{value:null},spotShadowMap:{value:null},spotLightMatrix:{value:null},spotLightMap:{value:null},pointShadowMap:{value:null},pointShadowMatrix:{value:null},thicknessColor:{value:new M(16777215)},thicknessDistortion:{value:.5},thicknessAmbient:{value:0},thicknessAttenuation:{value:.1},thicknessPower:{value:2},thicknessScale:{value:10}},vertexShader:"\n        uniform float uPointSize;\n        attribute float scale;\n        varying vec3 vCol;\n        varying vec3 vViewPosition;\n\n        void main() {\n          vCol = color;\n          vec4 mvPosition = modelViewMatrix * vec4(position.xyz, 1.0);\n          vViewPosition = - mvPosition.xyz;\n          gl_Position = projectionMatrix * mvPosition;\n          gl_PointSize = scale * uPointSize * ( 10.0 / -mvPosition.z );\n        }\n      ",fragmentShader:"\n        #define SUBSURFACE\n\n        uniform float uOpacity;\n        uniform sampler2D uNormalMap;\n        uniform mat3 normalMatrix;\n\n        uniform float thicknessPower;\n        uniform float thicknessScale;\n        uniform float thicknessDistortion;\n        uniform float thicknessAmbient;\n        uniform float thicknessAttenuation;\n        uniform vec3 thicknessColor;\n\n        varying vec3 vCol;\n\n        #include <common>\n        #include <bsdfs>\n        #include <lights_pars_begin>\n        #include <lights_phong_pars_fragment>\n\n        void RE_Direct_Scattering(const in IncidentLight directLight, const in vec2 uv, const in GeometricContext geometry, inout ReflectedLight reflectedLight) {\n          #ifdef USE_COLOR\n            vec3 thickness = vCol.rgb * thicknessColor;\n          #else\n            vec3 thickness = thicknessColor;\n          #endif\n          vec3 scatteringHalf = normalize(directLight.direction + (geometry.normal * thicknessDistortion));\n          float scatteringDot = pow(saturate(dot(geometry.viewDir, -scatteringHalf)), thicknessPower) * thicknessScale;\n          vec3 scatteringIllu = (scatteringDot + thicknessAmbient) * thickness;\n          reflectedLight.directDiffuse += scatteringIllu * thicknessAttenuation * directLight.color;\n        }\n\n        void main() {\n          float dist = length(gl_PointCoord - 0.5);\n          if (dist > 0.49) discard;\n\n          ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n          vec3 totalEmissiveRadiance = vec3(0, 0, 0) ; // vCol.rgb;\n\n          vec2 vUv = gl_PointCoord;\n          vec3 normal = texture2D(uNormalMap, gl_PointCoord).xyz * 2.0 - 1.0;\n          normal = normalize( normal );\n\n          BlinnPhongMaterial material;\n          material.diffuseColor = vCol.rgb;\n          material.specularColor = vec3(0.0, 0.0, 0.0);\n          material.specularShininess = 30.0;\n          material.specularStrength = 1.0;\n\n          ".concat(g,"\n          // #include <lights_fragment_begin>\n          #include <lights_fragment_end>\n          vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n          gl_FragColor = vec4(outgoingLight, uOpacity);\n        }\n      ")}),l=new z(n,i)}}function q(){const h=Math.random(),t=Math.random(),s=h*2*Math.PI,n=Math.acos(2*t-1),i=Math.cbrt(Math.random()),l=Math.sin(s),o=Math.cos(s),d=Math.sin(n),m=Math.cos(n),r=i*d*o,c=i*d*l,e=i*m;return new w(r,c,e)}const G={class:"test"},Q=V("canvas",{id:"webgl-test"},null,-1),Y=[Q],Z={__name:"index",setup(h){let t,s;const n=new A;let i,l,o;U(()=>{O(async()=>{t=D({id:"webgl-test",size:"window",alpha:!0,postprocessing:{effects:[{EffectClass:E,args:[{mipmapBlur:!0,luminanceThreshold:0,luminanceSmoothing:.05,intensity:2,radius:.25}]}]}}),t.cameraMaxAspect=1.7,t.camera.position.set(0,0,2),t.camera.lookAt(0,0,0),s=R(t.camera,t.canvas);const e=.4,u=.5,g=new f(6328575,e);g.position.set(-1,0,0).multiplyScalar(u),n.add(g);const a=new f(16748640,e);a.position.set(1,0,0).multiplyScalar(u),n.add(a);const _=new f(6356880,e);_.position.set(0,-1,0).multiplyScalar(u),n.add(_);const x=new f(16736511,e);x.position.set(0,1,0).multiplyScalar(u),n.add(x),t.scene.add(n);const y=v.clamp(S().query.count||262144,256,4194304),b=v.clamp(S().query.pointSize||1.75,.1,10);i=H({count:y,pointSize:b}),t.scene.add(i.mesh),d(),t.on("update",r)}),k().on("device.pointermove",m),k().on("device.resize",c)});function d(){l=L({title:"Postprocessing"}),l.addBinding(t.postprocessing,"bloomIntensity",{min:0,max:10,step:.01}),l.addBinding(t.postprocessing,"bloomRadius",{min:0,max:1,step:.001}),l.addBinding(t.postprocessing,"bloomLuminanceThreshold",{min:0,max:1,step:.001}),l.addBinding(t.postprocessing,"bloomLuminanceSmoothing",{min:0,max:1,step:.001}),o=L({title:"Misc",expanded:!1}),o.addBinding(n.scale,"x",{label:"lights scale",step:.1,min:0,max:2}).on("change",({value:e})=>{n.scale.y=e,n.scale.z=e}),o.addBinding(i.mesh.scale,"x",{label:"scale",step:.1,min:0,max:2}).on("change",({value:e})=>{i.mesh.scale.y=e,i.mesh.scale.z=e}),o.addBinding(i.mesh.material.uniforms.uPointSize,"value",{label:"size",step:1e-4,min:.1,max:10}),o.addBinding(i.mesh.material.uniforms.thicknessDistortion,"value",{label:"thicknessDistortion",step:1e-4,min:0,max:1}),o.addBinding(i.mesh.material.uniforms.thicknessAmbient,"value",{label:"thicknessAmbient",step:1e-4,min:0,max:1}),o.addBinding(i.mesh.material.uniforms.thicknessAttenuation,"value",{label:"thicknessAttenuation",step:1e-4,min:0,max:1}),o.addBinding(i.mesh.material.uniforms.thicknessPower,"value",{label:"thicknessPower",step:1e-4,min:0,max:50}),o.addBinding(i.mesh.material.uniforms.thicknessScale,"value",{label:"thicknessScale",step:1e-4,min:0,max:50}),o.addBinding({thicknessColor:i.mesh.material.uniforms.thicknessColor.value.getHex()},"thicknessColor",{view:"color"}).on("change",({value:e})=>{i.mesh.material.uniforms.thicknessColor.value.set(e)})}function m(e){}function r(e){s.update(),i.mesh.rotation.x+=e.delta*.01,i.mesh.rotation.y+=e.delta*.016,i.mesh.rotation.z+=e.delta*.007,n.rotation.x+=e.delta*.4,n.rotation.y+=e.delta*.25,n.rotation.z+=e.delta*.65}function c(){t&&t.resize()}return F(()=>{l==null||l.dispose(),o==null||o.dispose(),s&&s.dispose(),t&&(t.off("update",r),t.off("resize",c),t.dispose())}),(e,u)=>(T(),I("div",G,Y))}};export{Z as default};
